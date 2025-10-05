"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Users, BookOpen, Trophy, Banknote, Check } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import GuaranteeSection from "../components/GuaranteeSection"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-background">
    {/* Scroll target */}
    <div id="top"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background container mx-auto px-4 py-6 flex items-center justify-between">

        <div
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => {
    const element = document.getElementById("top");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }}
>
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12"
  >
    <rect x="8" y="12" width="32" height="28" rx="2" fill="#FDB022" />
    <path d="M12 16 L20 24 L12 32" stroke="#E63946" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 16 L28 24 L20 32" stroke="#06D6A0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="36" cy="12" r="4" fill="#118AB2" />
  </svg>
  <span className="text-2xl font-bold text-[#1e3a8a]">Edusure</span>
</div>

        

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-6">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign In with Google
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col space-y-6">

            {/* Top Section - Heading and CTA */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight">
                Clear JEE/NEET,
                <br />
                Get Your Fees Back
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                India's first Performance-based scholarship fund. If you clear JEE or NEET, we repay 100% of your
                coaching fees. Study with confidence, succeed without worry.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <Button
  size="lg"
  className="bg-blue-900 hover:bg-blue-950 text-white px-8"
  onClick={() => window.location.href = "/join"}
>
  Join Your Risk-Free Journey
</Button>

                <Button
                  variant="outline"
                  className="px-8 py-6 text-base font-semibold border-2 bg-transparent whitespace-nowrap"
                  onClick={() => {
                    const element = document.getElementById("how-it-works")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Bottom Section - Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              {/* 100% Secure */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">100% Secure</span>
              </div>

              {/* 5000+ Students */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-600 dark:text-green-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">5000+ Students</span>
              </div>

              {/* 30 Days Money Transfer Guarantee */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Banknote className="w-4 h-4 text-green-600 dark:text-green-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">30 days Money transfer guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
<div className="flex flex-col items-center">
  {/* Illustration */}
  <Image
    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20142539-gGOSYnGbdQVxAW37pyUduRR2TUdjDm.png"
    alt="Student giving thumbs up with book"
    width={450}
    height={450}
    className="object-contain"
    priority
  />

  {/* Guarantee Text below illustration */}
  <GuaranteeSection />
</div>

        </div>
      </main>

      {/* How It Works Section */}
      <section
  id="how-it-works"
  className="bg-gray-50 dark:bg-gray-900/30 py-16 lg:py-32" // increase lg:py-24 → lg:py-32
>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Four simple steps to secure your coaching investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Register</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Sign up with your academic details and choose your payment plan
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Study</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Prepare for JEE/NEET with peace of mind knowing your fees are secured
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Clear Exam</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Successfully clear your JEE or NEET exam with qualifying ranks
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Get Repaid</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Receive 100% repayment of your coaching fees within 30 days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white dark:bg-gray-950 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Flexible payment options designed for every student
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Installment Plan Card */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-[#1e3a8a] shadow-lg">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                  Most Popular
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-2">Installment Plan</h3>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">₹1,299</span>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">/per month</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">24 months</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">100% coaching fee repayment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Coverage for JEE & NEET</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Flexible payment schedule</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">24/7 customer support</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Instant claim processing</span>
                </div>
              </div>

              <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white py-6 text-base font-semibold">
                Select Installment Plan
              </Button>
            </div>

            {/* One-Time Payment Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-2">One-Time Payment</h3>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">₹23,999</span>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">/one time</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Full coverage</p>
                <p className="text-green-600 dark:text-green-500 font-semibold mt-1">Save ₹7200</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">100% coaching fee repayment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Coverage for JEE & NEET</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Priority customer support</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Express claim processing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Free policy transfer</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full py-6 text-base font-semibold border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
              >
                Select One-Time Payment
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
<footer className="w-full mt-16 py-8 bg-gray-900 text-white text-center">
  <p className="text-lg font-medium mb-2">
    For any queries, suggestions, or information,
  </p>
  <a
    href="mailto:edusure.in.org@gmail.com"
    className="text-blue-400 hover:underline"
  >
    edusure.in.org@gmail.com
  </a>

  <p className="text-sm text-gray-400 mt-4">
    Made with <span className="text-red-500">❤️</span> by Hardik Agrawal
  </p>
</footer>


    </div>
  )
}
