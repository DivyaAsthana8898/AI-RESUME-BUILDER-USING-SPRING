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
  FaEdit,
  FaBolt,
  FaUserTie,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================= */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute top-[20%] -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen flex items-center">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ================= LEFT ================= */}

            <div>

              {/* Badge */}

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl text-cyan-300 text-sm mb-8">

                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                </span>

                AI Resume Intelligence

              </div>

              {/* Heading */}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight">

                Your Career.

                <span className="block mt-2">
                  Your Story.
                </span>

                <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                  Powered by AI.
                </span>

              </h1>

              {/* Description */}

              <p className="mt-7 text-gray-400 text-lg md:text-xl leading-8 max-w-xl">

                Turn your skills, experience and achievements into a
                professional, job-ready resume in minutes.

              </p>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-9">

                {/* KEEP THIS ROUTE */}
                <Link
                  to="/generate-resume"
                  className="group relative inline-flex items-center gap-3 px-7 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 font-semibold shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:shadow-[0_0_55px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300"
                >

                  <FaMagic />

                  Generate Resume

                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />

                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 h-14 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-gray-200 hover:bg-white/[0.08] hover:border-cyan-400/20 transition-all"
                >

                  Explore Platform

                  <FaArrowRight className="text-sm" />

                </Link>

              </div>

              {/* Trust */}

              <div className="flex flex-wrap gap-6 mt-9 text-sm text-gray-500">

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  AI Generated
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  Editable
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  PDF Ready
                </div>

              </div>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="relative flex justify-center">

              {/* Glow */}

              <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-[120px]" />

              {/* Main Card */}

              <div className="relative w-full max-w-xl">

                <div className="relative rounded-[30px] border border-white/10 bg-white/[0.045] backdrop-blur-2xl p-5 shadow-2xl">

                  {/* Top Bar */}

                  <div className="flex items-center justify-between px-3 pb-5">

                    <div className="flex gap-2">

                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />

                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500">

                      <FaBrain className="text-cyan-400" />

                      AI Resume Engine

                    </div>

                  </div>

                  {/* Resume */}

                  <div className="rounded-2xl bg-[#080f20] border border-white/10 p-7">

                    {/* Profile */}

                    <div className="flex items-center gap-5">

                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">

                        <FaUserTie className="text-2xl" />

                      </div>

                      <div className="flex-1">

                        <div className="h-3.5 w-44 bg-white/80 rounded-full mb-3" />

                        <div className="h-2.5 w-28 bg-white/20 rounded-full" />

                      </div>

                    </div>

                    {/* Divider */}

                    <div className="h-px bg-white/10 my-7" />

                    {/* Summary */}

                    <div className="mb-7">

                      <div className="flex items-center gap-3 mb-4">

                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                        <div className="h-2.5 w-28 bg-white/50 rounded-full" />

                      </div>

                      <div className="space-y-2">

                        <div className="h-2 bg-white/10 rounded-full w-full" />
                        <div className="h-2 bg-white/10 rounded-full w-11/12" />
                        <div className="h-2 bg-white/10 rounded-full w-4/5" />

                      </div>

                    </div>

                    {/* Skills */}

                    <div className="mb-7">

                      <div className="flex items-center gap-3 mb-4">

                        <div className="w-2 h-2 rounded-full bg-blue-400" />

                        <div className="h-2.5 w-20 bg-white/50 rounded-full" />

                      </div>

                      <div className="flex flex-wrap gap-2">

                        <div className="px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/10 text-xs text-cyan-300">
                          React
                        </div>

                        <div className="px-4 py-2 rounded-lg bg-blue-400/10 border border-blue-400/10 text-xs text-blue-300">
                          Java
                        </div>

                        <div className="px-4 py-2 rounded-lg bg-violet-400/10 border border-violet-400/10 text-xs text-violet-300">
                          Spring Boot
                        </div>

                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                          AI
                        </div>

                      </div>

                    </div>

                    {/* Experience */}

                    <div>

                      <div className="flex items-center gap-3 mb-4">

                        <div className="w-2 h-2 rounded-full bg-violet-400" />

                        <div className="h-2.5 w-28 bg-white/50 rounded-full" />

                      </div>

                      <div className="space-y-2">

                        <div className="h-2 bg-white/10 rounded-full w-full" />
                        <div className="h-2 bg-white/10 rounded-full w-10/12" />

                      </div>

                    </div>

                  </div>

                  {/* AI Processing */}

                  <div className="mt-5 flex items-center justify-between rounded-xl bg-cyan-400/5 border border-cyan-400/10 p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center">

                        <FaBrain className="text-cyan-400" />

                      </div>

                      <div>

                        <p className="text-xs text-gray-500">
                          AI Analysis
                        </p>

                        <p className="text-sm font-semibold">
                          Resume Optimized
                        </p>

                      </div>

                    </div>

                    <FaCheckCircle className="text-green-400" />

                  </div>

                </div>

                {/* Score */}

                <div className="absolute -left-7 bottom-14 hidden md:block">

                  <div className="rounded-2xl border border-violet-400/20 bg-[#0b1329]/95 backdrop-blur-xl px-5 py-4 shadow-2xl">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-violet-400/10 flex items-center justify-center">

                        <FaStar className="text-yellow-400" />

                      </div>

                      <div>

                        <p className="text-xs text-gray-500">
                          Resume Score
                        </p>

                        <p className="font-bold text-green-400">
                          92 / 100
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Floating Bolt */}

                <div className="absolute -right-5 top-16 hidden md:block">

                  <div className="w-12 h-12 rounded-2xl bg-[#0b1329] border border-cyan-400/20 flex items-center justify-center shadow-xl">

                    <FaBolt className="text-cyan-400" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="relative border-y border-white/10 bg-white/[0.025]">

        <div className="max-w-6xl mx-auto px-6 py-12">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="text-center">

              <FaBrain className="mx-auto text-2xl text-cyan-400 mb-3" />

              <h3 className="text-3xl font-black">
                AI
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Powered
              </p>

            </div>

            <div className="text-center">

              <FaEdit className="mx-auto text-2xl text-blue-400 mb-3" />

              <h3 className="text-3xl font-black">
                100%
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Editable
              </p>

            </div>

            <div className="text-center">

              <FaRocket className="mx-auto text-2xl text-violet-400 mb-3" />

              <h3 className="text-3xl font-black">
                Fast
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Generation
              </p>

            </div>

            <div className="text-center">

              <FaDownload className="mx-auto text-2xl text-cyan-400 mb-3" />

              <h3 className="text-3xl font-black">
                PDF
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Ready
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="relative py-28">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.3em]">
              Powerful Features
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Everything For Your
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text">
                Career Journey
              </span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Everything you need to create a modern and professional resume.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* CARD */}

            <div className="group relative p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-cyan-400/[0.04] hover:border-cyan-400/30 transition-all duration-300">

              <div className="absolute inset-0 rounded-3xl bg-cyan-400/0 group-hover:bg-cyan-400/[0.02] transition" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6">

                  <FaBrain className="text-2xl text-cyan-400" />

                </div>

                <h3 className="text-xl font-bold mb-3">
                  AI Resume Generation
                </h3>

                <p className="text-gray-500 leading-7">
                  Describe yourself naturally and let AI transform your
                  information into structured resume content.
                </p>

              </div>

            </div>

            <div className="group p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-blue-400/[0.04] hover:border-blue-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center mb-6">

                <FaFileAlt className="text-2xl text-blue-400" />

              </div>

              <h3 className="text-xl font-bold mb-3">
                Professional Structure
              </h3>

              <p className="text-gray-500 leading-7">
                Present your education, skills, projects and experience in a
                clean professional format.
              </p>

            </div>

            <div className="group p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-violet-400/[0.04] hover:border-violet-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-violet-400/10 border border-violet-400/20 flex items-center justify-center mb-6">

                <FaCode className="text-2xl text-violet-400" />

              </div>

              <h3 className="text-xl font-bold mb-3">
                Developer Ready
              </h3>

              <p className="text-gray-500 leading-7">
                Showcase your programming skills, GitHub projects and
                technical experience.
              </p>

            </div>

            <div className="group p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-green-400/[0.04] hover:border-green-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center mb-6">

                <FaEdit className="text-2xl text-green-400" />

              </div>

              <h3 className="text-xl font-bold mb-3">
                Fully Editable
              </h3>

              <p className="text-gray-500 leading-7">
                Edit generated information before submitting your final
                professional resume.
              </p>

            </div>

            <div className="group p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-orange-400/[0.04] hover:border-orange-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center mb-6">

                <FaDownload className="text-2xl text-orange-400" />

              </div>

              <h3 className="text-xl font-bold mb-3">
                PDF Download
              </h3>

              <p className="text-gray-500 leading-7">
                Get your final resume ready to use for applications and
                professional opportunities.
              </p>

            </div>

            <div className="group p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-pink-400/[0.04] hover:border-pink-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-pink-400/10 border border-pink-400/20 flex items-center justify-center mb-6">

                <FaRocket className="text-2xl text-pink-400" />

              </div>

              <h3 className="text-xl font-bold mb-3">
                Career Ready
              </h3>

              <p className="text-gray-500 leading-7">
                Build a strong first impression with a polished and
                professional resume.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="py-28 border-y border-white/10 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-violet-400 uppercase tracking-[0.3em] text-sm font-bold">
              How It Works
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              From Idea To Resume
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* STEP 1 */}

            <div className="relative text-center">

              <div className="mx-auto w-20 h-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

                <span className="text-2xl font-black text-cyan-400">
                  01
                </span>

              </div>

              <h3 className="text-xl font-bold mt-6">
                Describe Yourself
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Enter your skills, education, projects, experience and
                achievements.
              </p>

            </div>

            {/* STEP 2 */}

            <div className="relative text-center">

              <div className="mx-auto w-20 h-20 rounded-3xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">

                <FaBrain className="text-2xl text-blue-400" />

              </div>

              <h3 className="text-xl font-bold mt-6">
                AI Builds It
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                AI organizes your information into a professional resume
                structure.
              </p>

            </div>

            {/* STEP 3 */}

            <div className="relative text-center">

              <div className="mx-auto w-20 h-20 rounded-3xl bg-violet-400/10 border border-violet-400/20 flex items-center justify-center">

                <FaDownload className="text-2xl text-violet-400" />

              </div>

              <h3 className="text-xl font-bold mt-6">
                Edit & Download
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Review your resume, make changes and download the final
                version.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative py-28 px-6">

        <div className="absolute inset-0 flex justify-center pointer-events-none">

          <div className="w-[500px] h-[300px] bg-blue-600/10 blur-[120px]" />

        </div>

        <div className="relative max-w-5xl mx-auto rounded-[35px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.06] via-blue-500/[0.05] to-violet-500/[0.08] p-10 md:p-16 text-center overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-7">

            <FaRocket className="text-2xl text-cyan-400" />

          </div>

          <h2 className="text-4xl md:text-5xl font-black">

            Ready To Build Your

            <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text">
              Career Story?
            </span>

          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-lg leading-7">

            Let AI transform your experience and skills into a resume that
            represents your professional potential.

          </p>

          {/* KEEP THIS ROUTE */}

          <Link
            to="/generate-resume"
            className="inline-flex items-center gap-3 mt-9 px-8 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 font-bold shadow-xl shadow-blue-500/20 hover:-translate-y-1 hover:shadow-blue-500/40 transition-all"
          >

            <FaBrain />

            Create My Resume

            <FaArrowRight />

          </Link>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/10 bg-[#01030b]">

        <div className="max-w-6xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-3 gap-12">

            {/* BRAND */}

            <div>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">

                  <FaBrain />

                </div>

                <span className="text-xl font-black">
                  AI Resume Maker
                </span>

              </div>

              <p className="text-gray-500 leading-7 max-w-sm">

                Build professional, modern resumes faster with the power of
                Artificial Intelligence.

              </p>

            </div>

            {/* LINKS */}

            <div>

              <h3 className="font-bold mb-5">
                Explore
              </h3>

              <div className="flex flex-col gap-4 text-gray-500">

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

            {/* CREATE */}

            <div>

              <h3 className="font-bold mb-5">
                Start Building
              </h3>

              <Link
                to="/generate-resume"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
              >

                Generate Resume

                <FaArrowRight className="text-xs" />

              </Link>

            </div>

          </div>

          <div className="border-t border-white/10 mt-12 pt-7 text-center text-gray-600 text-sm">

            © 2026 AI Resume Maker. Built with AI.

          </div>

        </div>

      </footer>

    </div>
  );
};

export default LandingPage;
