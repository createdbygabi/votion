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

      {/* Hero Section */}
      <section className="min-h-screen bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="flex lg:flex-row flex-col gap-20 items-center">
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
                  Interact with Notion with your voice while you run, drive, or
                  meet. Add, edit, and delete tasks, notes, and more with your
                  voice.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://t.me/votion_assistant_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    Start for free
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
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

            {/* Right Side - Telegram Mockup */}
            <div className="relative">
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500 min-w-md flex justify-center items-center">
                {/* Main Device Frame */}
                <div className="bg-[white] rounded-3xl shadow-2xl border border-gray-100 w-fit">
                  {/* Telegram Header */}
                  <div className="flex items-center space-x-3  border-gray-100 bg-[#F8F8F8] p-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-lg">←</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Image
                          src="/images/logo.png"
                          alt="votion.me logo"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span className="font-bold text-gray-900 text-lg">
                          Votion.me
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Telegram Chat Interface */}
                  <div className="space-y-3 bg-[#F5EEE6] p-4">
                    {/* User Voice Message */}
                    <div className="flex items-end space-x-2 justify-end">
                      <div className="bg-[#E5FFD7] rounded-2xl px-3 py-2 max-w-xs border border-gray-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">▶</span>
                          </div>
                          <div className="flex space-x-0.5">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-0.5 h-3 bg-gray-400 rounded-full"
                              ></div>
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            0:15
                          </span>
                          <span className="text-sm text-gray-400">→</span>
                        </div>
                        <span className="text-sm text-gray-500 block">
                          9:41
                        </span>
                      </div>
                    </div>

                    {/* Bot Success Message */}
                    <div className="flex items-start space-x-2">
                      <div className="bg-white rounded-2xl px-3 py-2 max-w-xs">
                        <p className="text-sm text-gray-700 mb-2">
                          ✅ Saved to Notion! I&apos;ve created a new note in
                          your &ldquo;Meeting Notes&rdquo; database with the
                          title &ldquo;Q4 Strategy Discussion&rdquo;
                        </p>
                        <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                          <p className="text-sm text-blue-800 font-medium">
                            📝 New Note Created
                          </p>
                          <p className="text-sm text-blue-700">
                            Meeting Notes &gt; Q4 Strategy Discussion
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 block mt-1">
                          9:41
                        </span>
                      </div>
                    </div>

                    {/* User Text Message */}
                    <div className="flex items-end space-x-2 justify-end">
                      <div className="bg-[#E5FFD7] rounded-2xl px-3 py-2 max-w-xs border border-gray-200">
                        <p className="text-sm mb-1 text-gray-700">
                          Can you also add this to my tasks?
                        </p>
                        <span className="text-sm text-gray-500 block">
                          9:41
                        </span>
                      </div>
                    </div>

                    {/* Bot Task Creation */}
                    <div className="flex items-start space-x-2">
                      <div className="bg-white rounded-2xl px-3 py-2 max-w-xs">
                        <p className="text-sm text-gray-700 mb-2">
                          ✅ Task created! &ldquo;Follow up on Q4 strategy
                          implementation&rdquo; added to your &ldquo;Work
                          Tasks&rdquo; database with priority &ldquo;High&rdquo;
                        </p>
                        <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                          <p className="text-sm text-green-800 font-medium">
                            ✅ New Task Created
                          </p>
                          <p className="text-sm text-green-700">
                            Work Tasks &gt; Follow up on Q4 strategy
                            implementation
                          </p>
                          <p className="text-sm text-green-600">
                            Priority: High | Due: Tomorrow
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 block mt-1">
                          9:42
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Message Input Area */}
                  {/* <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 text-gray-400">📎</div>
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <span className="text-sm text-gray-500">Message</span>
                      </div>
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🎤</span>
                      </div>
                    </div>
                  </div> */}
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
              The only AI assistant
              <span className="block bg-black text-white px-8 py-3 rounded-3xl transform -rotate-1 inline-block mt-2">
                you&apos;ll ever hire
              </span>
            </h2>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 rounded-full p-1 flex items-center">
              <button className="px-6 py-3 text-gray-600 font-medium rounded-full transition-all duration-300">
                Monthly
              </button>
              <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-full transition-all duration-300 relative">
                Annually
                <span className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Save 20%
                </span>
              </button>
            </div>
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
              <button className="w-full bg-white text-black font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mb-8">
                Start for free
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
              <button className="w-full bg-white text-black font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mb-8">
                Start for free
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
              <button className="w-full bg-white text-black font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mb-8">
                Start for free
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

          {/* FREE Plan Note */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              🚀 <strong>FREE Plan</strong> available with 15 voice messages per
              month
            </p>
            <a
              href="https://t.me/votion_assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Try FREE Plan
            </a>
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
