import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#features"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
                  Manage Notion with your
                  <span className="bg-black text-white px-6 py-3 rounded-2xl transform rotate-1 mx-2">
                    voice
                  </span>
                  {/* with Notion */}
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Speak while you run, drive, or meet. Confirm and we save it to
                  Notion.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    Start for free
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                  {/* <button className="group border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:bg-gray-50">
                    Watch demo
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                      ▶
                    </span>
                  </button> */}
                </div>

                {/* Social Proof */}
                {/* <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold text-gray-900">2,000+</span>{" "}
                    professionals trust votion.me
                  </p>
                </div> */}
              </div>
            </div>

            {/* Right Side - WhatsApp Mockup */}
            <div className="relative">
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Main Device Frame */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                  {/* WhatsApp Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-lg">←</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-lg">📷</span>
                    </div>
                    <span className="font-bold text-gray-900 text-lg">
                      Notis
                    </span>
                  </div>

                  {/* WhatsApp Chat Interface */}
                  <div className="space-y-4">
                    {/* Outgoing Voice Message */}
                    <div className="flex items-end space-x-2 justify-end">
                      <div className="bg-green-500 text-white rounded-2xl px-4 py-3 max-w-xs">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                            <span className="text-green-500 text-sm">▶</span>
                          </div>
                          <div className="flex space-x-1">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-4 bg-white rounded-full"
                              ></div>
                            ))}
                          </div>
                          <span className="text-sm font-medium">2:22</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-green-100">
                          <span>✓✓</span>
                          <span>12:41</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        👥
                      </div>
                    </div>

                    {/* Outgoing Text Message */}
                    <div className="flex items-end space-x-2 justify-end">
                      <div className="bg-green-500 text-white rounded-2xl px-4 py-3 max-w-xs">
                        <p className="text-sm mb-2">
                          Can you organize this into a coherent summary?
                        </p>
                        <div className="flex items-center justify-between text-xs text-green-100">
                          <span>✓✓</span>
                          <span>12:41</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        👥
                      </div>
                    </div>

                    {/* Incoming Voice Message */}
                    <div className="flex items-end space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        AI
                      </div>
                      <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">▶</span>
                          </div>
                          <div className="flex-1 bg-gray-300 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            1:00
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-red-500 text-lg">♫</span>
                          <span className="text-xs text-gray-500">12:42</span>
                        </div>
                      </div>
                    </div>

                    {/* Incoming Text Message with Link */}
                    <div className="flex items-end space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        AI
                      </div>
                      <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
                        <p className="text-sm text-gray-700 mb-2">
                          Sure, I&rsquo;ve compiled your notes on the future of
                          AI in education and saved it with your notes database.
                          Here&rsquo;s the link:
                          https://www.notion.so/The-Future-Of-AI-In-Education
                        </p>
                        <span className="text-xs text-gray-500 block">
                          12:42
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Voice Input UI */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🎤</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
                      <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification UI */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-3 border border-gray-100">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">📮</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-1 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Pain Point Solving Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Before vs. After
              <span className="block bg-black text-white px-8 py-3 rounded-3xl transform -rotate-1 inline-block mt-2">
                votion.me
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how votion.me transforms your chaotic workflow into organized
              productivity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Before */}
            <div className="group transform hover:scale-105 transition-all duration-500">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative">
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">❌</span>
                    </div>
                    <h3 className="text-3xl font-black text-red-800 mb-3">
                      Before votion.me
                    </h3>
                  </div>
                  <ul className="space-y-4 text-red-700 text-lg">
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-red-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-red-800 transition-colors duration-200">
                        Notes scattered across 5+ apps
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-red-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-red-800 transition-colors duration-200">
                        Important tasks buried in emails
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-red-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-red-800 transition-colors duration-200">
                        Team collaboration is chaotic
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-red-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-red-800 transition-colors duration-200">
                        Projects never seem to finish
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-red-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-red-800 transition-colors duration-200">
                        Hours wasted searching for information
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="group transform hover:scale-105 transition-all duration-500">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative">
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">✅</span>
                    </div>
                    <h3 className="text-3xl font-black text-green-800 mb-3">
                      After votion.me
                    </h3>
                  </div>
                  <ul className="space-y-4 text-green-700 text-lg">
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-green-800 transition-colors duration-200">
                        Everything organized in one place
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-green-800 transition-colors duration-200">
                        Tasks automatically prioritized
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-green-800 transition-colors duration-200">
                        Seamless team collaboration
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-green-800 transition-colors duration-200">
                        Projects completed on time
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-200">
                        •
                      </span>
                      <span className="group-hover/item:text-green-800 transition-colors duration-200">
                        Instant access to all information
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Powerful Features That
              <span className="block bg-black text-white px-8 py-3 rounded-3xl transform rotate-1 inline-block mt-2">
                Work Together
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to stay organized, focused, and productive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Smart Note Taking
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Capture ideas instantly with intelligent formatting, tags, and
                automatic organization that makes finding information
                effortless.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Task Management
              </h3>
              <p className="text-gray-600">
                Turn notes into actionable tasks with smart prioritization,
                deadlines, and progress tracking that keeps you moving forward.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Share workspaces, assign tasks, and collaborate seamlessly with
                real-time updates and powerful permission controls.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Progress Analytics
              </h3>
              <p className="text-gray-600">
                Track your productivity with detailed insights, time analysis,
                and performance metrics that help you optimize your workflow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Bank-level security with end-to-end encryption, SSO integration,
                and compliance features that keep your data safe.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smart Automation
              </h3>
              <p className="text-gray-600">
                Automate repetitive tasks, set up workflows, and let AI handle
                the busywork so you can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Simple, Transparent
              <span className="block bg-black text-white px-8 py-3 rounded-3xl transform -rotate-1 inline-block mt-2">
                Pricing
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. All plans include our core
              features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="group bg-white border-2 border-gray-200 p-10 rounded-3xl text-center hover:border-blue-300 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              <h3 className="text-3xl font-black text-gray-900 mb-3">Free</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Perfect for getting started
              </p>
              <div className="mb-10">
                <span className="text-5xl font-black text-gray-900">$0</span>
                <span className="text-gray-600 text-lg">/month</span>
              </div>
              <ul className="text-left space-y-4 mb-10 text-lg">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Up to 100 notes</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Basic task management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>1 workspace</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105">
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-blue-50 border-2 border-blue-500 p-8 rounded-2xl text-center relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">For professionals and teams</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">$12</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Unlimited notes</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Advanced task management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Up to 10 workspaces</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl text-center hover:border-purple-300 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Enterprise
              </h3>
              <p className="text-gray-600 mb-6">For large organizations</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Unlimited workspaces</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>SSO & advanced security</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dedicated support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who have already revolutionized
            their workflow with votion.me
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">votion.me</h3>
              <p className="text-gray-400">
                Transform your productivity with intelligent note-taking and
                task management.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 votion.me. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
