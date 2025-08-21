"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";

function PricingPageContent() {
  const searchParams = useSearchParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user_id = searchParams.get("user_id");
    const plan = searchParams.get("plan");

    if (user_id) {
      // In production, validate user_id with your backend
      setUserData({ user_id, plan });
    }
    setLoading(false);
  }, [searchParams]);

  const handleSubscribe = (planName) => {
    if (!userData?.user_id) {
      alert("Please access this page from Telegram to subscribe");
      return;
    }

    // Direct Stripe URLs - replace with your actual Stripe checkout URLs
    const stripeUrls = {
      pro: "https://buy.stripe.com/test_3cIeVf5Gw4ywfS9cQLfjG00",
      pro_plus: "https://buy.stripe.com/test_YOUR_PRO_PLUS_URL",
      ultra: "https://buy.stripe.com/test_YOUR_ULTRA_URL",
    };

    // Add user_id as metadata to the URL
    const stripeUrl = stripeUrls[planName];
    if (stripeUrl) {
      // Encode user_id in the URL so we can retrieve it later
      const encodedUserId = encodeURIComponent(userData.user_id);
      const finalUrl = `${stripeUrl}?client_reference_id=${encodedUserId}&prefilled_email=&prefilled_telegram_id=${encodedUserId}`;

      // Redirect to Stripe
      window.location.href = finalUrl;
    } else {
      alert("Plan not available yet");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="votion.me logo"
                width={32}
                height={32}
                className="mr-3"
              />
              <h1 className="text-2xl font-bold text-gray-900">votion.me</h1>
            </div>
            <a
              href="https://t.me/votion_assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-xl text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Back to Bot
            </a>
          </div>
        </div>
      </nav>

      {/* Pricing Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Choose Your
              <span className="block bg-black text-white px-8 py-3 rounded-3xl transform -rotate-1 inline-block mt-2">
                Votion.me Plan
              </span>
            </h2>
            {userData?.plan && (
              <p className="text-lg text-gray-600">
                You&apos;re upgrading from:{" "}
                <span className="font-semibold capitalize">
                  {userData.plan}
                </span>
              </p>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* PRO Plan */}
            <div className="bg-black rounded-2xl p-8 text-center text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-4">💰 PRO</h3>
              <div className="text-4xl font-black mb-4">$15/month</div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-4 inline-block">
                100 voice messages
              </div>
              <button
                onClick={() => handleSubscribe("pro")}
                className="w-full bg-white text-black font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mb-8 hover:bg-gray-100"
              >
                Subscribe to PRO
              </button>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Everything in FREE</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Advanced Notion features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Usage analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Best for: Regular users, small teams</span>
                </li>
              </ul>
            </div>

            {/* PRO+ Plan */}
            <div className="bg-black rounded-2xl p-8 text-center text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-4">🚀 PRO+</h3>
              <div className="text-4xl font-black mb-4">$50/month</div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-4 inline-block">
                300 voice messages
              </div>
              <button
                onClick={() => handleSubscribe("pro_plus")}
                className="w-full bg-white text-black font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mb-8 hover:bg-gray-100"
              >
                Subscribe to PRO+
              </button>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Everything in PRO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Team collaboration features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Best for: Power users, growing teams</span>
                </li>
              </ul>
            </div>

            {/* ULTRA Plan */}
            <div className="bg-black rounded-2xl p-8 text-center text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-4">♾️ ULTRA</h3>
              <div className="text-4xl font-black mb-4">$150/month</div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-4 inline-block">
                3000 voice messages
              </div>
              <button
                onClick={() => handleSubscribe("ultra")}
                className="w-full bg-white text-black font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mb-8 hover:bg-gray-100"
              >
                Subscribe to ULTRA
              </button>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Everything in PRO+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Enterprise features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Custom solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-lg">✓</span>
                  <span>Best for: Enterprise users, large teams</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Security Note */}
          <div className="text-center mt-16">
            <p className="text-sm text-gray-500">
              🔒 Secure payment processing by Stripe. Your Telegram ID is
              securely linked to your subscription.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <PricingPageContent />
    </Suspense>
  );
}
