import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.redirect(
        new URL("/error?message=No session ID", request.url)
      );
    }

    // Verify the payment with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.redirect(
        new URL("/error?message=Payment not completed", request.url)
      );
    }

    // Extract user info from session - try multiple sources
    let telegramUserId = null;
    let plan = "unknown";

    // Try to get user_id from different sources
    if (session.client_reference_id) {
      telegramUserId = session.client_reference_id;
    } else if (session.metadata?.telegram_user_id) {
      telegramUserId = session.metadata.telegram_user_id;
    } else if (session.metadata?.user_id) {
      telegramUserId = session.metadata.user_id;
    }

    // Try to get plan from metadata
    if (session.metadata?.plan) {
      plan = session.metadata.plan;
    }

    // If we still don't have a user_id, we can't proceed
    if (!telegramUserId) {
      console.error("No user_id found in session:", session);
      return NextResponse.redirect(
        new URL("/error?message=User ID not found", request.url)
      );
    }

    // Map plan names to database plan_type values
    const planTypeMap = {
      pro: "pro",
      pro_plus: "pro_plus",
      ultra: "ultra",
    };

    // Map plans to voice message limits
    const voiceLimitMap = {
      pro: 100,
      pro_plus: 300,
      ultra: 3000,
    };

    const planType = planTypeMap[plan] || "free";
    const voiceLimit = voiceLimitMap[plan] || 15;
    const today = new Date();
    const nextBilling = new Date(today);
    nextBilling.setMonth(nextBilling.getMonth() + 1);

    // Update user plan in Supabase using the correct table name and schema
    const { error } = await supabase.from("notion_connections").upsert(
      {
        id: telegramUserId, // Assuming this is the primary key
        plan_type: planType,
        voice_messages_used: 0, // Reset usage for new plan
        voice_messages_limit: voiceLimit,
        plan_start_date: today.toISOString().split("T")[0], // Format as YYYY-MM-DD
        next_billing_date: nextBilling.toISOString().split("T")[0], // Format as YYYY-MM-DD
      },
      {
        onConflict: "id", // Assuming id is the conflict resolution column
      }
    );

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.redirect(
        new URL("/error?message=Failed to update user plan", request.url)
      );
    }

    // Redirect to success page with user info
    const successUrl = new URL("/success", request.url);
    successUrl.searchParams.set("user_id", telegramUserId);
    successUrl.searchParams.set("plan", plan);
    successUrl.searchParams.set("verified", "true");

    return NextResponse.redirect(successUrl);
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.redirect(
      new URL("/error?message=Verification failed", request.url)
    );
  }
}
