import Link from "next/link";
import Image from "next/image";

export default function Privacy() {
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
            Privacy Policy
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
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-6">
            We collect information you provide directly to us, such as when you
            create an account, use our services, or contact us for support. This
            may include your name, email address, and any other information you
            choose to provide.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to develop new features
            and services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy or as required by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. Your Rights
          </h2>
          <p className="text-gray-600 mb-6">
            You have the right to access, update, or delete your personal
            information. You can also opt out of certain communications from us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@votion.me
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
