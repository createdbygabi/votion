import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { notifyTelegramBot } from "@/lib/telegram";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state"); // This contains the Telegram user_id

  if (!code) {
    return NextResponse.redirect(new URL("/auth/error", request.url));
  }

  try {
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
      throw new Error("Token exchange failed");
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
        telegram_user_id: state, // From the OAuth state parameter
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

    console.log(`✅ Saved Notion connection for Telegram user ${state}`);

    // Notify Telegram bot
    const notificationSent = await notifyTelegramBot(state, workspace_name);
    if (notificationSent) {
      console.log(`✅ Telegram notification sent to user ${state}`);
    } else {
      console.warn(`⚠️ Failed to send Telegram notification to user ${state}`);
    }

    // Redirect to success page
    return NextResponse.redirect(new URL("/auth/success", request.url));
  } catch (error) {
    console.error("OAuth error:", error);
    return NextResponse.redirect(new URL("/auth/error", request.url));
  }
}
