"use client";

import Link from "next/link";
import Image from "next/image";
import { SiNotion, SiTelegram } from "react-icons/si";
import { useState } from "react";
import { FiAlertTriangle, FiCheckCircle, FiX, FiCheck } from "react-icons/fi";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState("monthly");

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
                  href="#how-it-works"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  How it works
                </Link>
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
                  Never lose any idea while you run, drive, or meet again.{" "}
                  <br /> Interact with Notion and add, edit, and delete tasks,
                  notes, and more with your voice.
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

                {/* Work with Section */}
                <div className="flex flex-col items-center sm:items-start space-y-3">
                  <p className="text-sm text-gray-500 font-medium">
                    Works with
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
                        <SiNotion className="w-5 h-5 text-gray-900" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        Notion
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg shadow-sm flex items-center justify-center">
                        <SiTelegram className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        Telegram
                      </span>
                    </div>
                  </div>
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
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-6">
              Never lose your{" "}
              <span className="bg-black text-white px-6 py-3 rounded-2xl transform -rotate-1 mx-2">
                brilliant ideas
              </span>{" "}
              again
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stop the frustration of forgotten thoughts and missed
              opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Before */}
            <div className="group">
              <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-200/60 hover:border-rose-300/80 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-transparent to-orange-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">
                      What happens
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Idea pops up while driving
                      </span>
                      <span className="text-rose-600 font-semibold group-hover/item:text-rose-700 transition-colors duration-200">
                        → forgotten
                      </span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Random voice notes everywhere
                      </span>
                      <span className="text-rose-600 font-semibold group-hover/item:text-rose-700 transition-colors duration-200">
                        → never organized
                      </span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Stop what you&apos;re doing
                      </span>
                      <span className="text-rose-600 font-semibold group-hover/item:text-rose-700 transition-colors duration-200">
                        → open laptop/phone
                      </span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Half-remembered details
                      </span>
                      <span className="text-rose-600 font-semibold group-hover/item:text-rose-700 transition-colors duration-200">
                        → missing context
                      </span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Reconstructing later
                      </span>
                      <span className="text-rose-600 font-semibold group-hover/item:text-rose-700 transition-colors duration-200">
                        → wasted time
                      </span>
                    </div>
                    <div className="pt-4 border-t border-rose-200/60 mt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-800 font-bold text-lg">
                          = Hours of frustration
                        </span>
                        <span className="text-rose-500 text-2xl">😤</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="group">
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-200/60 hover:border-emerald-300/80 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 via-transparent to-teal-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">
                      With Votion:
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Speak an idea
                      </span>
                      <span className="text-emerald-600 font-semibold group-hover/item:text-emerald-700 transition-colors duration-200">
                        → saved instantly
                      </span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Voice inputs
                      </span>
                      <span className="text-emerald-600 font-semibold group-hover/item:text-emerald-700 transition-colors duration-200">
                        → structured entries
                      </span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Add/update items
                      </span>
                      <span className="text-emerald-600 font-semibold group-hover/item:text-emerald-700 transition-colors duration-200">
                        → hands-free
                      </span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Every entry
                      </span>
                      <span className="text-emerald-600 font-semibold group-hover/item:text-emerald-700 transition-colors duration-200">
                        → full context
                      </span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-200">
                        Less admin work
                      </span>
                      <span className="text-emerald-600 font-semibold group-hover/item:text-emerald-700 transition-colors duration-200">
                        → more execution
                      </span>
                    </div>
                    <div className="pt-4 border-t border-emerald-200/60 mt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-800 font-bold text-lg">
                          = Seamless productivity
                        </span>
                        <span className="text-emerald-500 text-2xl">✨</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-20">
            <a
              href="https://t.me/votion_assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start for free
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-6">
              How it{" "}
              <span className="bg-black text-white px-6 py-3 rounded-2xl transform rotate-1 mx-2">
                works
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get started in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="group relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50 hover:border-blue-200/80 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    <span className="text-2xl text-white font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Connect Notion
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Link your Notion workspace with our secure integration.
                    One-time setup takes less than 2 minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-white to-purple-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100/50 hover:border-purple-200/80 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-pink-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                    <span className="text-2xl text-white font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Start Chatting
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Open our Telegram bot and start speaking naturally. No
                    commands to memorize - just talk like you would to a human.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-white to-green-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100/50 hover:border-green-200/80 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                    <span className="text-2xl text-white font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    Watch Magic Happen
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Your voice commands instantly create, edit, and organize
                    content in Notion. See real-time updates and confirmations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gray-900">
                Built for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  real people
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                No technical knowledge required. Our AI understands natural
                language, context, and your specific Notion setup. Just speak
                your mind and let us handle the rest.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Works with any Notion workspace
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Secure and private</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Available 24/7</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">🎤</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded-full w-32"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-24 mt-2"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">✨</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded-full w-40"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-28 mt-2"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">📝</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded-full w-36"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-20 mt-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <a
              href="https://t.me/votion_assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start for free
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-6">
              Everything you can do with your{" "}
              <span className="bg-black text-white px-6 py-3 rounded-2xl transform rotate-1 mx-2">
                voice
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Full CRUD operations and powerful features for any Notion document
              type
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100/50 hover:border-gray-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <span className="text-2xl text-white">✨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Create Anything
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Create new pages, databases, tasks, notes, and more in
                  seconds. Just say &ldquo;Create a new task for tomorrow&rdquo;
                  and it&apos;s done.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100/50 hover:border-gray-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                  <span className="text-2xl text-white">📖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Read & Search
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Find information instantly without navigating through Notion.
                  Ask &ldquo;Show me all tasks due this week&rdquo; and get
                  results in seconds.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100/50 hover:border-gray-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                  <span className="text-2xl text-white">✏️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Edit & Update
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Update any field with voice commands - faster than finding and
                  clicking through Notion&apos;s interface. &ldquo;Change the
                  due date to Friday.&rdquo;
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100/50 hover:border-gray-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-rose-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/25">
                  <span className="text-2xl text-white">🗑️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  Delete & Archive
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Safely remove or archive items with voice confirmation - no
                  need to hunt through Notion&apos;s right-click menus.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100/50 hover:border-gray-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/25">
                  <span className="text-2xl text-white">🏷️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  Smart Organization
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Automatically tag, categorize, and organize content in one
                  voice command. &ldquo;Add this to my work projects with high
                  priority.&rdquo;
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100/50 hover:border-gray-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                  <span className="text-2xl text-white">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  Cross-Linking
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Create connections between pages and databases instantly.
                  &ldquo;Link this task to the project roadmap&rdquo; - no more
                  searching through Notion.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100/50 hover:border-gray-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-rose-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
                  <span className="text-2xl text-white">📅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  Date & Time Magic
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Natural date parsing that&apos;s faster than Notion&apos;s
                  date picker. &ldquo;Set reminder for 3 days from now&rdquo; -
                  understands natural language.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100/50 hover:border-gray-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/25">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  Database Operations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Filter, sort, and query databases with voice - bypass
                  Notion&apos;s complex filter interface. &ldquo;Show me all
                  high-priority tasks assigned to me.&rdquo;
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100/50 hover:border-gray-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <span className="text-2xl text-white">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  Bulk Operations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Handle multiple items at once without Notion&apos;s
                  multi-select interface. &ldquo;Mark all completed tasks as
                  done&rdquo; - one command, instant results.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <a
              href="https://t.me/votion_assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start for free
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
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
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-black text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annually")}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 relative ${
                  billingCycle === "annually"
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Annually
                {billingCycle === "annually" && (
                  <span className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    Save 20%
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* PRO Plan */}
            <div className="bg-black rounded-4xl px-8 py-12 text-start text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <h3 className="text-3xl font-black mb-4">Pro</h3>
              <div className="text-4xl font-black mb-4">
                ${billingCycle === "monthly" ? "15" : "12"}/month
              </div>
              {billingCycle === "annually" && (
                <div className="text-lg text-gray-300 mb-2 line-through">
                  $15/month
                </div>
              )}
              <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-6 inline-block">
                100 voice messages
              </div>
              <a
                href="https://t.me/votion_assistant_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-white text-black font-bold py-4 px-6 rounded-4xl text-lg transition-all duration-300 transform hover:scale-105 mb-8 block"
              >
                Start for free
              </a>
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
            <div className="bg-black rounded-4xl px-8 py-12 text-start text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <h3 className="text-3xl font-black mb-4">Pro+</h3>
              <div className="text-4xl font-black mb-4">
                ${billingCycle === "monthly" ? "50" : "40"}/month
              </div>
              {billingCycle === "annually" && (
                <div className="text-lg text-gray-300 mb-2 line-through">
                  $50/month
                </div>
              )}
              <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-6 inline-block">
                300 voice messages
              </div>
              <a
                href="https://t.me/votion_assistant_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center w-full bg-white text-black font-bold py-4 px-6 rounded-4xl text-lg transition-all duration-300 transform hover:scale-105 mb-8 block"
              >
                Start for free
              </a>
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
            <div className="bg-black rounded-4xl px-8 py-12 text-start text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <h3 className="text-3xl font-black mb-4">Ultra</h3>
              <div className="text-4xl font-black mb-4">
                ${billingCycle === "monthly" ? "150" : "120"}/month
              </div>
              {billingCycle === "annually" && (
                <div className="text-lg text-gray-300 mb-2 line-through">
                  $150/month
                </div>
              )}
              <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-6 inline-block">
                3000 voice messages
              </div>
              <a
                href="https://t.me/votion_assistant_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-white text-black font-bold py-4 px-6 rounded-4xl text-lg transition-all duration-300 transform hover:scale-105 mb-8 block"
              >
                Start for free
              </a>
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
            {/* <p className="text-lg text-gray-600 mb-6">
              🚀 <strong>FREE Plan</strong> available with 15 voice messages per
              month
            </p> */}
            {/* <a
              href="https://t.me/votion_assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Try FREE Plan
            </a> */}
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="founder-story" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Story Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span className="text-sm font-medium text-gray-700">
                    My Story
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  I built this because{" "}
                  <span className="bg-black text-white px-4 py-2 rounded-xl">
                    I was losing ideas too
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Last year, I had a breakthrough idea while stuck in traffic.
                  By the time I got home, it was completely gone. I was furious.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;I&apos;m not losing another brilliant idea because I
                    can&apos;t type fast enough.&rdquo;
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  So I built votion.me. Now I can just speak my thoughts and
                  they go straight to Notion. No more lost ideas. No more
                  frustration.
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/founder.jpg"
                      alt="Gabriel - Founder of votion.me"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Gabriel</p>
                    <p className="text-sm text-gray-600">
                      The guy who was tired of losing ideas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Story */}
            <div className="relative">
              <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-50 rounded-3xl shadow-2xl border border-gray-200 p-8">
                  <div className="space-y-6">
                    {/* Timeline Story Elements */}
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FiX className="text-white text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Lost an idea in traffic
                        </h4>
                        <p className="text-sm text-gray-600">
                          Was furious about it
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FiCheck className="text-white text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Built the solution
                        </h4>
                        <p className="text-sm text-gray-600">
                          Voice + Notion integration
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FiCheckCircle className="text-white text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Never lost an idea again
                        </h4>
                        <p className="text-sm text-gray-600">
                          Now helping others too
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <a
              href="https://t.me/votion_assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start for free
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who have already revolutionized
            their workflow with votion.me
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/votion_assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start for free
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="votion.me logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900">votion.me</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transform your productivity with intelligent voice-powered
                note-taking and task management.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                Product
              </h4>
              <div className="space-y-3">
                <Link
                  href="#how-it-works"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  How it works
                </Link>
                <Link
                  href="#features"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  Pricing
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                Company
              </h4>
              <div className="space-y-3">
                <Link
                  href="#founder-story"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  Founder story
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  Terms of use
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-500">
                © 2025 votion.me. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span>Made in France 🇫🇷 with ❤️</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
