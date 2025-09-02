import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { notifyTelegramBot } from "@/lib/telegram";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const encodedState = searchParams.get("state"); // This contains the base64 encoded Telegram user_id

  if (!code) {
    return NextResponse.redirect(new URL("/auth/error", request.url));
  }

  if (!encodedState) {
    console.error("Missing state parameter");
    return NextResponse.redirect(new URL("/auth/error", request.url));
  }

  try {
    // Decode the base64 encoded state to get the actual Telegram user ID
    const telegramUserId = parseInt(
      Buffer.from(encodedState, "base64").toString()
    );

    if (!telegramUserId || isNaN(telegramUserId)) {
      console.error(
        "Invalid state parameter - could not decode Telegram user ID"
      );
      return NextResponse.redirect(new URL("/auth/error", request.url));
    }

    console.log(
      `🔍 Decoded Telegram user ID: ${telegramUserId} from state: ${encodedState}`
    );

    // Exchange code for token
    const response = await fetch("https://api.notion.com/v1/oauth/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.NOTION_REDIRECT_URI,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Token exchange failed:", {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
        code: code,
        redirect_uri: process.env.NOTION_REDIRECT_URI,
        telegramUserId: telegramUserId,
      });
      throw new Error(
        `Token exchange failed: ${response.status} - ${errorText}`
      );
    }

    const data = await response.json();

    // Extract the data we need
    const {
      access_token,
      refresh_token,
      bot_id,
      workspace_id,
      workspace_name,
      workspace_icon,
      workspace_owner,
      owner,
    } = data;

    // Save to Supabase database
    const { error: dbError } = await supabase.from("notion_connections").upsert(
      {
        telegram_user_id: telegramUserId, // Decoded Telegram user ID
        notion_access_token: access_token,
        notion_refresh_token: refresh_token,
        notion_bot_id: bot_id,
        notion_workspace_id: workspace_id,
        notion_workspace_name: workspace_name,
        notion_workspace_icon: workspace_icon,
        notion_workspace_owner: workspace_owner,
        notion_owner: owner,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "telegram_user_id",
      }
    );

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save connection data");
    }

    console.log(
      `✅ Saved Notion connection for Telegram user ${telegramUserId}`
    );

    // Notify Telegram bot
    const notificationSent = await notifyTelegramBot(
      telegramUserId,
      workspace_name
    );
    if (notificationSent) {
      console.log(`✅ Telegram notification sent to user ${telegramUserId}`);
    } else {
      console.warn(
        `⚠️ Failed to send Telegram notification to user ${telegramUserId}`
      );
    }

    // Redirect to success page
    return NextResponse.redirect(new URL("/auth/success", request.url));
  } catch (error) {
    console.error("OAuth error:", {
      message: error.message,
      stack: error.stack,
      telegramUserId: telegramUserId,
      code: code,
      encodedState: encodedState,
    });

    // Return a JSON response with error details instead of redirecting
    return NextResponse.json(
      {
        error: "OAuth failed",
        details: error.message,
        telegramUserId: telegramUserId,
      },
      { status: 500 }
    );
  }
}
