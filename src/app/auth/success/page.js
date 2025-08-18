import Link from "next/link";

export default function AuthSuccess() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✅</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Successfully Connected!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your Notion account is now connected to votion.me. You can start using
          voice commands to update your Notion workspace.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
