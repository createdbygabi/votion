"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

function ErrorPageContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message") || "An error occurred";

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
          </div>
        </div>
      </nav>

      {/* Error Content */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">❌</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Payment Error
          </h1>

          <p className="text-xl text-gray-600 mb-8">{message}</p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What happened?
            </h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-lg">•</span>
                <span>Payment verification failed</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-lg">•</span>
                <span>Your plan was not upgraded</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-lg">•</span>
                <span>No charges were made to your account</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <a
              href="https://t.me/votion_assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Back to Telegram Bot
            </a>

            <p className="text-sm text-gray-500">
              Need help? Contact us at{" "}
              <a
                href="mailto:support@votion.me"
                className="text-blue-600 hover:underline"
              >
                support@votion.me
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ErrorPage() {
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
      <ErrorPageContent />
    </Suspense>
  );
}
