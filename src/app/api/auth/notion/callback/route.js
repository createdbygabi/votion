import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

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

    // Redirect to success page
    return NextResponse.redirect(new URL("/auth/success", request.url));
  } catch (error) {
    console.error("OAuth error:", error);
    return NextResponse.redirect(new URL("/auth/error", request.url));
  }
}
