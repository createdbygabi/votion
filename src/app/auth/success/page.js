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
          <a
            href="/"
            className="block w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Go to Homepage
          </a>

          <a
            href="/dashboard"
            className="block w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
