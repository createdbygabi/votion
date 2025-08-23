import Link from "next/link";
import Image from "next/image";

export default function Terms() {
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
              <Link href="/" className="text-2xl font-bold text-gray-900">
                votion.me
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/#features"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </Link>
                <Link
                  href="/#pricing"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
                <a
                  href="https://t.me/votion_assistant_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-xl text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Start for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 mb-6">
            By accessing and using votion.me, you accept and agree to be bound
            by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. Description of Service
          </h2>
          <p className="text-gray-600 mb-6">
            votion.me provides voice-powered interaction with Notion databases,
            allowing users to create, read, edit, and delete content using voice
            commands.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. User Accounts
          </h2>
          <p className="text-gray-600 mb-6">
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. Acceptable Use
          </h2>
          <p className="text-gray-600 mb-6">
            You agree not to use the service for any unlawful purpose or in any
            way that could damage, disable, overburden, or impair the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. Privacy and Data
          </h2>
          <p className="text-gray-600 mb-6">
            Your privacy is important to us. Please review our Privacy Policy,
            which also governs your use of the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. Termination
          </h2>
          <p className="text-gray-600 mb-6">
            We may terminate or suspend your account and access to the service
            at any time, with or without cause or notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            7. Contact Information
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, please
            contact us at terms@votion.me
          </p>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
