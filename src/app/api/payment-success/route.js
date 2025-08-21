import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { notifyPaymentSuccess } from "../../../lib/telegram";

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

    console.log(
      `🔍 Debug: Complete Stripe session object:`,
      JSON.stringify(session, null, 2)
    );

    if (session.payment_status !== "paid") {
      return NextResponse.redirect(
        new URL("/error?message=Payment not completed", request.url)
      );
    }

    // Try to get more details about what was purchased
    let subscriptionDetails = null;
    if (session.subscription) {
      try {
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription
        );
        console.log(
          `🔍 Debug: Subscription details:`,
          JSON.stringify(subscription, null, 2)
        );

        // Get the price ID from the subscription
        if (subscription.items && subscription.items.data.length > 0) {
          const priceId = subscription.items.data[0].price.id;
          console.log(`🔍 Debug: Price ID from subscription:`, priceId);
          subscriptionDetails = { subscription, priceId };
        }
      } catch (subError) {
        console.log(
          `🔍 Debug: Could not retrieve subscription:`,
          subError.message
        );
      }
    }

    // Also check line items if available
    if (session.line_items) {
      console.log(
        `🔍 Debug: Line items:`,
        JSON.stringify(session.line_items, null, 2)
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

    // Try to get plan from metadata first
    if (session.metadata?.plan) {
      plan = session.metadata.plan;
      console.log(`🔍 Debug: Got plan from metadata: ${plan}`);
    }
    // If no plan in metadata, try to get it from product ID
    else if (
      subscriptionDetails?.subscription?.items?.data?.[0]?.price?.product
    ) {
      const productId =
        subscriptionDetails.subscription.items.data[0].price.product;

      // Map product IDs to plan names
      const productIdToPlanMap = {
        prod_Su42TVRfbST406: "pro", // Your PRO plan product ID
        // Add your other product IDs here:
        // "prod_XXXXX": "pro_plus",
        // "prod_YYYYY": "ultra",
      };

      plan = productIdToPlanMap[productId] || "unknown";
      console.log(
        `🔍 Debug: Mapped plan from product ID ${productId} to: ${plan}`
      );
    }
    // If no product ID, try to get it from price ID
    else if (subscriptionDetails?.priceId) {
      // Map price IDs to plan names - YOU NEED TO PROVIDE THESE
      const priceIdToPlanMap = {
        // Replace these with your actual Stripe price IDs
        price_1234567890: "pro", // Replace with your PRO plan price ID
        price_0987654321: "pro_plus", // Replace with your PRO+ plan price ID
        price_1122334455: "ultra", // Replace with your ULTRA plan price ID
      };

      plan = priceIdToPlanMap[subscriptionDetails.priceId] || "unknown";
      console.log(
        `🔍 Debug: Mapped plan from price ID ${subscriptionDetails.priceId} to: ${plan}`
      );
    }

    // Debug: Let's see what we actually have
    console.log(`🔍 Debug: subscriptionDetails:`, subscriptionDetails);
    if (subscriptionDetails?.subscription?.items?.data?.[0]?.price?.product) {
      console.log(
        `🔍 Debug: Found product ID:`,
        subscriptionDetails.subscription.items.data[0].price.product
      );
    } else {
      console.log(`🔍 Debug: Product ID path check failed:`, {
        hasSubscription: !!subscriptionDetails?.subscription,
        hasItems: !!subscriptionDetails?.subscription?.items,
        hasData: !!subscriptionDetails?.subscription?.items?.data,
        dataLength: subscriptionDetails?.subscription?.items?.data?.length,
        hasPrice: !!subscriptionDetails?.subscription?.items?.data?.[0]?.price,
        hasProduct:
          !!subscriptionDetails?.subscription?.items?.data?.[0]?.price?.product,
        actualPath:
          subscriptionDetails?.subscription?.items?.data?.[0]?.price?.product,
      });
    }

    console.log(`🔍 Debug: Stripe session:`, {
      client_reference_id: session.client_reference_id,
      metadata: session.metadata,
      payment_status: session.payment_status,
      subscription: session.subscription,
      price_id: subscriptionDetails?.priceId,
    });
    console.log(`🔍 Debug: Extracted telegramUserId:`, telegramUserId);
    console.log(`🔍 Debug: Extracted plan:`, plan);

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

    console.log(`🔍 Debug: Mapped values:`, {
      originalPlan: plan,
      planType: planType,
      voiceLimit: voiceLimit,
      today: today.toISOString().split("T")[0],
      nextBilling: nextBilling.toISOString().split("T")[0],
    });

    // First, find the existing row by telegram_user_id
    const { data: existingUser, error: fetchError } = await supabase
      .from("notion_connections")
      .select("id")
      .eq("telegram_user_id", telegramUserId)
      .single();

    console.log(`🔍 Debug: Existing user data:`, existingUser);
    console.log(`🔍 Debug: Fetch error:`, fetchError);

    if (fetchError) {
      console.error("Error fetching existing user:", fetchError);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log(`🔍 Debug: Found user with ID: ${existingUser.id}`);
    console.log(`🔍 Debug: Updating plan to: ${planType}`);
    console.log(`🔍 Debug: Voice limit: ${voiceLimit}`);

    // Update user plan using the existing row's id
    const { data: updateData, error } = await supabase
      .from("notion_connections")
      .update({
        plan_type: planType,
        voice_messages_used: 0,
        voice_messages_limit: voiceLimit,
        plan_start_date: today.toISOString().split("T")[0],
        next_billing_date: nextBilling.toISOString().split("T")[0],
      })
      .eq("id", existingUser.id)
      .select(); // Add this to return the updated data

    console.log(`🔍 Debug: Update data:`, updateData);
    console.log(`🔍 Debug: Update error:`, error);

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.redirect(
        new URL("/error?message=Failed to update user plan", request.url)
      );
    }

    console.log(`✅ Successfully updated user plan in database`);

    // ✅ Send Telegram notification for payment success!
    const notificationSent = await notifyPaymentSuccess(
      telegramUserId,
      planType,
      voiceLimit
    );

    if (notificationSent) {
      console.log(
        `✅ Payment success notification sent to user ${telegramUserId}`
      );
    } else {
      console.warn(
        `⚠️ Failed to send payment success notification to user ${telegramUserId}`
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
