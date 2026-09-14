import React from "react";
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaRocket,
  FaFileAlt,
  FaMagic,
  FaCode,
  FaDownload,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaBolt,
  FaUserTie,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[92vh] flex items-center">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute top-20 -right-40 w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 w-[450px] h-[250px] rounded-full bg-cyan-500/10 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl text-sm text-cyan-300 mb-7">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                </span>

                AI-Powered Career Platform
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight">

                Your Resume.

                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                    Reimagined.
                  </span>
                </span>

              </h1>

              <p className="mt-7 text-lg md:text-xl text-slate-400 max-w-xl leading-8">
                Turn your skills, experience and achievements into a
                powerful, professional resume with AI — in minutes, not hours.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-9">

                <Link
                  to="/generate-resume"
                  className="group relative inline-flex items-center gap-3 h-14 px-7 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 font-semibold shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaMagic />

                  Generate Resume

                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 h-14 px-7 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-slate-200 hover:bg-white/[0.09] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Platform
                </Link>

              </div>

              {/* TRUST */}
              <div className="flex flex-wrap gap-x-7 gap-y-3 mt-9 text-sm text-slate-500">

                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  AI Generated
                </span>

                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  Fully Editable
                </span>

                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  PDF Ready
                </span>

              </div>

            </div>


            {/* RIGHT VISUAL */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />

              {/* Main Dashboard */}
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] backdrop-blur-2xl p-4 shadow-2xl">

                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">

                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>

                  <div className="text-xs text-slate-500">
                    AI Resume Studio
                  </div>

                </div>

                {/* Dashboard */}
                <div className="grid md:grid-cols-[1fr_150px] gap-4 p-4">

                  {/* Resume */}
                  <div className="rounded-2xl bg-[#0b1222] border border-white/10 p-6">

                    <div className="flex items-center justify-between mb-7">

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                          <FaUserTie className="text-xl" />
                        </div>

                        <div>
                          <div className="h-3 w-32 bg-white/80 rounded-full" />
                          <div className="h-2 w-24 bg-white/20 rounded-full mt-2" />
                        </div>

                      </div>

                      <FaBolt className="text-yellow-400" />

                    </div>

                    {/* Summary */}
                    <div className="mb-7">

                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <div className="h-2 w-20 bg-white/40 rounded-full" />
                      </div>

                      <div className="space-y-2">
                        <div className="h-2 bg-white/10 rounded-full w-full" />
                        <div className="h-2 bg-white/10 rounded-full w-[92%]" />
                        <div className="h-2 bg-white/10 rounded-full w-[75%]" />
                      </div>

                    </div>

                    {/* Skills */}
                    <div className="mb-7">

                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <div className="h-2 w-16 bg-white/40 rounded-full" />
                      </div>

                      <div className="flex flex-wrap gap-2">

                        <span className="px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-400/20 text-[10px] text-blue-300">
                          React
                        </span>

                        <span className="px-3 py-2 rounded-lg bg-violet-500/10 border border-violet-400/20 text-[10px] text-violet-300">
                          Java
                        </span>

                        <span className="px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[10px] text-cyan-300">
                          Spring Boot
                        </span>

                        <span className="px-3 py-2 rounded-lg bg-pink-500/10 border border-pink-400/20 text-[10px] text-pink-300">
                          MongoDB
                        </span>

                      </div>

                    </div>

                    {/* Experience */}
                    <div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-violet-400" />
                        <div className="h-2 w-24 bg-white/40 rounded-full" />
                      </div>

                      <div className="space-y-2">
                        <div className="h-2 bg-white/10 rounded-full w-full" />
                        <div className="h-2 bg-white/10 rounded-full w-[85%]" />
                        <div className="h-2 bg-white/10 rounded-full w-[65%]" />
                      </div>

                    </div>

                  </div>


                  {/* SIDE PANEL */}
                  <div className="space-y-4">

                    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Resume Score
                        </span>

                        <FaStar className="text-yellow-400" />
                      </div>

                      <div className="text-4xl font-black mt-3">
                        92
                        <span className="text-lg text-slate-600">
                          /100
                        </span>
                      </div>

                      <div className="w-full h-2 rounded-full bg-white/10 mt-4 overflow-hidden">
                        <div className="h-full w-[92%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                      </div>

                      <p className="text-xs text-green-400 mt-3">
                        Excellent profile
                      </p>

                    </div>


                    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center">
                          <FaBrain className="text-violet-400" />
                        </div>

                        <div>
                          <p className="text-xs text-slate-500">
                            AI Analysis
                          </p>

                          <p className="text-sm font-semibold">
                            Optimized
                          </p>
                        </div>

                      </div>

                    </div>


                    <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-400/10 p-5">

                      <FaDownload className="text-blue-400 mb-3" />

                      <p className="text-sm font-semibold">
                        PDF Ready
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        Download anytime
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* Floating badge */}
              <div className="absolute -left-6 top-24 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0b1222]/90 border border-cyan-400/20 backdrop-blur-xl shadow-xl">

                <div className="w-9 h-9 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                  <FaCheckCircle className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-[10px] text-slate-500">
                    AI Status
                  </p>

                  <p className="text-xs font-semibold">
                    Resume Optimized
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="border-y border-white/10 bg-white/[0.025]">

        <div className="max-w-6xl mx-auto px-6 py-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="text-center">
              <FaBrain className="mx-auto text-cyan-400 text-xl mb-2" />
              <h3 className="text-2xl font-bold">AI</h3>
              <p className="text-xs text-slate-500 mt-1">
                Powered
              </p>
            </div>

            <div className="text-center">
              <FaBolt className="mx-auto text-yellow-400 text-xl mb-2" />
              <h3 className="text-2xl font-bold">Fast</h3>
              <p className="text-xs text-slate-500 mt-1">
                Generation
              </p>
            </div>

            <div className="text-center">
              <FaFileAlt className="mx-auto text-blue-400 text-xl mb-2" />
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-xs text-slate-500 mt-1">
                Editable
              </p>
            </div>

            <div className="text-center">
              <FaDownload className="mx-auto text-violet-400 text-xl mb-2" />
              <h3 className="text-2xl font-bold">PDF</h3>
              <p className="text-xs text-slate-500 mt-1">
                Ready
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="py-28 relative">

        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-2xl mx-auto text-center mb-16">

            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Built for Your
              <span className="text-blue-400"> Career.</span>
            </h2>

            <p className="text-slate-500 mt-5 text-lg">
              Everything you need to create a resume that actually
              represents your professional journey.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-300">

              <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center mb-6">
                  <FaBrain className="text-2xl text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  AI Powered
                </h3>

                <p className="text-slate-500 leading-7">
                  Describe yourself naturally and let AI transform your
                  information into polished professional content.
                </p>

              </div>

            </div>


            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:-translate-y-2 hover:border-blue-400/30 transition-all duration-300">

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-blue-400/10 border border-blue-400/10 flex items-center justify-center mb-6">
                  <FaFileAlt className="text-2xl text-blue-400" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  Professional Layout
                </h3>

                <p className="text-slate-500 leading-7">
                  Keep your skills, education, experience and projects
                  organized in a clean resume structure.
                </p>

              </div>

            </div>


            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:-translate-y-2 hover:border-violet-400/30 transition-all duration-300">

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-violet-400/10 border border-violet-400/10 flex items-center justify-center mb-6">
                  <FaCode className="text-2xl text-violet-400" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  Developer Ready
                </h3>

                <p className="text-slate-500 leading-7">
                  Showcase your GitHub projects, technologies and
                  development experience professionally.
                </p>

              </div>

            </div>


            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:-translate-y-2 hover:border-green-400/30 transition-all duration-300">

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/10 flex items-center justify-center mb-6">
                  <FaChartLine className="text-2xl text-green-400" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  Career Focused
                </h3>

                <p className="text-slate-500 leading-7">
                  Present your strongest skills and achievements in a
                  format designed for professional opportunities.
                </p>

              </div>

            </div>


            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:-translate-y-2 hover:border-orange-400/30 transition-all duration-300">

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-orange-400/10 border border-orange-400/10 flex items-center justify-center mb-6">
                  <FaDownload className="text-2xl text-orange-400" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  Easy Download
                </h3>

                <p className="text-slate-500 leading-7">
                  Finish your resume, review it and download the final
                  version for your job applications.
                </p>

              </div>

            </div>


            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:-translate-y-2 hover:border-pink-400/30 transition-all duration-300">

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-pink-400/10 border border-pink-400/10 flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-2xl text-pink-400" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  Full Control
                </h3>

                <p className="text-slate-500 leading-7">
                  AI creates the first version, while you stay in control
                  with complete editing before downloading.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="py-28 bg-white/[0.025] border-y border-white/10">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.3em]">
              Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Three Steps.
              <span className="text-cyan-400"> One Resume.</span>
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <div className="relative text-center p-8 rounded-3xl border border-white/10 bg-white/[0.025]">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-xl font-black text-cyan-400">
                01
              </div>

              <h3 className="text-xl font-bold mt-6">
                Describe Yourself
              </h3>

              <p className="text-slate-500 mt-4 leading-7">
                Tell the AI about your education, skills, projects,
                experience and achievements.
              </p>

            </div>


            <div className="relative text-center p-8 rounded-3xl border border-white/10 bg-white/[0.025]">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-xl font-black text-blue-400">
                02
              </div>

              <h3 className="text-xl font-bold mt-6">
                AI Builds It
              </h3>

              <p className="text-slate-500 mt-4 leading-7">
                Our AI structures your information into a professional
                resume automatically.
              </p>

            </div>


            <div className="relative text-center p-8 rounded-3xl border border-white/10 bg-white/[0.025]">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-violet-400/10 border border-violet-400/20 flex items-center justify-center text-xl font-black text-violet-400">
                03
              </div>

              <h3 className="text-xl font-bold mt-6">
                Edit & Download
              </h3>

              <p className="text-slate-500 mt-4 leading-7">
                Review your resume, make changes and download the final
                version.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="py-28 px-6">

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-cyan-500/10 p-10 md:p-16 text-center">

          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">

            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mb-7">
              <FaRocket className="text-2xl text-cyan-400" />
            </div>

            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">
              Your Career Starts Here
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-4 leading-tight">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Dream Resume?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-slate-500 text-lg mt-6">
              Stop struggling with formatting. Describe yourself and let
              AI create the first version for you.
            </p>

            {/* IMPORTANT: SAME ROUTE */}
            <Link
              to="/generate-resume"
              className="group inline-flex items-center gap-3 mt-9 h-14 px-8 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 font-bold shadow-2xl shadow-blue-600/30 hover:-translate-y-1 hover:shadow-blue-500/50 transition-all duration-300"
            >
              <FaBrain />

              Generate My Resume

              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-white/10 bg-[#02040b]">

        <div className="max-w-6xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-3 gap-12">

            {/* Brand */}
            <div>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <FaBrain />
                </div>

                <span className="font-black text-xl">
                  AI Resume Maker
                </span>

              </div>

              <p className="text-slate-600 max-w-sm leading-7">
                Build a professional resume faster with the power of
                Artificial Intelligence.
              </p>

            </div>


            {/* Links */}
            <div>

              <h3 className="font-bold mb-5">
                Explore
              </h3>

              <div className="flex flex-col gap-4 text-slate-600">

                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </Link>

                <Link
                  to="/services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </Link>

                <Link
                  to="/contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>

              </div>

            </div>


            {/* Create */}
            <div>

              <h3 className="font-bold mb-5">
                Create
              </h3>

              <Link
                to="/generate-resume"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
              >
                Generate Resume
                <FaArrowRight className="text-xs" />
              </Link>

            </div>

          </div>


          <div className="border-t border-white/10 mt-12 pt-7 flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-700">

            <span>
              © 2026 AI Resume Maker
            </span>

            <span>
              Built with AI • Designed for Careers
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default LandingPage;
