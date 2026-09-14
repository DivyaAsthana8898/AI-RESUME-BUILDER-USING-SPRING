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
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">

        {/* Background Glow */}
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-[100px] right-[-150px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-200px] left-[35%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm mb-7 backdrop-blur-md">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                AI-Powered Resume Builder
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Build Your
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  Future Resume.
                </span>
              </h1>

              <p className="mt-7 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                Transform your skills, experience and achievements into a
                professional resume using the power of Artificial Intelligence.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                {/* IMPORTANT: This link stays exactly /generate-resume */}
                <Link
                  to="/generate-resume"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 h-14 rounded-xl text-base font-semibold shadow-lg shadow-blue-600/20 hover:scale-105 transition-all"
                >
                  <FaMagic />
                  Generate Resume
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center h-14 px-7 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                >
                  Explore More
                </Link>

              </div>

              <div className="flex flex-wrap gap-6 mt-9 text-sm text-gray-400">

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  AI Generated
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  Professional Format
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  Easy to Edit
                </div>

              </div>

            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center">

              <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]" />

              <div className="relative w-full max-w-lg">

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-2xl p-5">

                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-2 pb-5">

                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />

                    <div className="ml-auto text-xs text-gray-500">
                      AI Resume Builder
                    </div>

                  </div>

                  {/* Resume Preview */}
                  <div className="bg-[#0c1224] rounded-2xl p-6 border border-white/10">

                    <div className="flex items-center gap-4 mb-7">

                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <FaBrain className="text-2xl" />
                      </div>

                      <div>
                        <div className="h-3 w-36 bg-white/70 rounded mb-2" />
                        <div className="h-2 w-24 bg-white/20 rounded" />
                      </div>

                    </div>

                    <div className="space-y-6">

                      <div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400" />
                          <div className="h-2 w-24 bg-white/40 rounded" />
                        </div>

                        <div className="space-y-2">
                          <div className="h-2 bg-white/10 rounded w-full" />
                          <div className="h-2 bg-white/10 rounded w-11/12" />
                          <div className="h-2 bg-white/10 rounded w-4/5" />
                        </div>

                      </div>

                      <div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-purple-400" />
                          <div className="h-2 w-28 bg-white/40 rounded" />
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-8 rounded-lg bg-blue-500/10 border border-blue-400/10" />
                          <div className="h-8 rounded-lg bg-purple-500/10 border border-purple-400/10" />
                          <div className="h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/10" />
                        </div>

                      </div>

                      <div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-400" />
                          <div className="h-2 w-20 bg-white/40 rounded" />
                        </div>

                        <div className="space-y-2">
                          <div className="h-2 bg-white/10 rounded w-full" />
                          <div className="h-2 bg-white/10 rounded w-3/4" />
                        </div>

                      </div>

                    </div>

                  </div>
                </div>

                {/* AI Badge */}
                <div className="absolute -right-5 top-20 px-4 py-3 rounded-xl bg-[#111a32]/90 border border-blue-400/20 backdrop-blur-xl shadow-xl">

                  <div className="flex items-center gap-3">
                    <FaBrain className="text-blue-400" />

                    <div>
                      <p className="text-xs text-gray-400">
                        AI Analysis
                      </p>

                      <p className="text-sm font-semibold">
                        Resume Optimized
                      </p>
                    </div>
                  </div>

                </div>

                {/* Score Badge */}
                <div className="absolute -left-5 bottom-16 px-4 py-3 rounded-xl bg-[#111a32]/90 border border-purple-400/20 backdrop-blur-xl shadow-xl">

                  <div className="flex items-center gap-3">
                    <FaStar className="text-yellow-400" />

                    <div>
                      <p className="text-xs text-gray-400">
                        Resume Score
                      </p>

                      <p className="text-sm font-bold text-green-400">
                        92 / 100
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-6 py-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-3xl font-bold text-blue-400">AI</h3>
              <p className="text-gray-500 mt-1 text-sm">
                Powered Technology
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-gray-500 mt-1 text-sm">
                Editable Resume
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Fast</h3>
              <p className="text-gray-500 mt-1 text-sm">
                Resume Generation
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                PDF
              </h3>
              <p className="text-gray-500 mt-1 text-sm">
                Ready to Download
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 relative">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-semibold">
              Powerful Features
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Everything You Need
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Build a professional resume without spending hours on
              formatting and writing.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Feature 1 */}
            <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-400/10 flex items-center justify-center mb-6">
                <FaBrain className="text-2xl text-blue-400" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                AI Powered
              </h3>

              <p className="text-gray-500 leading-7">
                Let AI transform your simple description into professional
                resume content.
              </p>

            </div>

            {/* Feature 2 */}
            <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-purple-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-400/10 flex items-center justify-center mb-6">
                <FaFileAlt className="text-2xl text-purple-400" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Professional Format
              </h3>

              <p className="text-gray-500 leading-7">
                Organize your education, skills, projects and experience in
                a clean professional layout.
              </p>

            </div>

            {/* Feature 3 */}
            <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-cyan-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/10 flex items-center justify-center mb-6">
                <FaCode className="text-2xl text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Developer Friendly
              </h3>

              <p className="text-gray-500 leading-7">
                Showcase your technical skills, GitHub projects and
                development experience.
              </p>

            </div>

            {/* Feature 4 */}
            <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-green-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-400/10 flex items-center justify-center mb-6">
                <FaEdit className="text-2xl text-green-400" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Easy to Edit
              </h3>

              <p className="text-gray-500 leading-7">
                Review your generated information and make changes before
                finalizing your resume.
              </p>

            </div>

            {/* Feature 5 */}
            <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-orange-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-400/10 flex items-center justify-center mb-6">
                <FaDownload className="text-2xl text-orange-400" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Download Resume
              </h3>

              <p className="text-gray-500 leading-7">
                Download your final resume and use it for your job
                applications.
              </p>

            </div>

            {/* Feature 6 */}
            <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-pink-400/30 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-pink-500/10 border border-pink-400/10 flex items-center justify-center mb-6">
                <FaRocket className="text-2xl text-pink-400" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Career Ready
              </h3>

              <p className="text-gray-500 leading-7">
                Present your skills and achievements in a resume designed
                to make a strong first impression.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-purple-400 uppercase tracking-[0.2em] text-sm font-semibold">
              Simple Process
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Create Your Resume
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-2xl font-bold text-blue-400">
                01
              </div>

              <h3 className="text-xl font-bold mt-5">
                Describe Yourself
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Enter your skills, education, experience, projects and
                achievements.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-2xl font-bold text-purple-400">
                02
              </div>

              <h3 className="text-xl font-bold mt-5">
                AI Generates
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Our AI organizes your information into a professional
                resume structure.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-2xl font-bold text-cyan-400">
                03
              </div>

              <h3 className="text-xl font-bold mt-5">
                Edit & Download
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Review your resume, edit anything you want and download it.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-500/10 p-10 md:p-16 text-center">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-blue-500/20 blur-[100px]" />

          <div className="relative">

            <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-6">
              <FaRocket className="text-2xl text-blue-400" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Your Next Opportunity
              <span className="block text-blue-400 mt-2">
                Starts Here.
              </span>
            </h2>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-5">
              Create a professional resume with AI and take the next step
              toward your dream career.
            </p>

            <Link
              to="/generate-resume"
              className="inline-flex items-center gap-3 mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 h-14 rounded-xl font-semibold shadow-lg shadow-blue-600/20 hover:scale-105 transition-all"
            >
              <FaBrain />
              Build My Resume
              <FaArrowRight />
            </Link>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-[#03050f]">

        <div className="max-w-6xl mx-auto px-6 py-12">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <FaBrain />
                </div>

                <span className="font-bold text-xl">
                  AI Resume Maker
                </span>

              </div>

              <p className="text-gray-500 max-w-sm leading-6">
                Build professional resumes faster with the power of
                Artificial Intelligence.
              </p>

            </div>

            <div>

              <h3 className="font-bold mb-4">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 text-gray-500">

                <Link
                  to="/about"
                  className="hover:text-blue-400 transition"
                >
                  About
                </Link>

                <Link
                  to="/services"
                  className="hover:text-blue-400 transition"
                >
                  Services
                </Link>

                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </Link>

              </div>

            </div>

            <div>

              <h3 className="font-bold mb-4">
                Create
              </h3>

              <Link
                to="/generate-resume"
                className="text-gray-500 hover:text-blue-400 transition"
              >
                Generate Resume →
              </Link>

            </div>

          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-600 text-sm">
            © 2026 AI Resume Maker. Built with AI.
          </div>

        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
