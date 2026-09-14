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
  FaUserTie,
  FaBolt,
  FaShieldAlt,
  FaChartLine,
  FaPen,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-screen flex items-center">

        {/* Ambient lights */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-20 right-[-250px] w-[650px] h-[650px] bg-violet-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-250px] left-[35%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">

          {/* Top label */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
              </span>

              <span className="text-sm text-gray-300">
                AI-Powered Resume Intelligence
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <FaBrain className="text-xl" />
                </div>

                <span className="text-sm tracking-[0.25em] uppercase text-gray-500">
                  Resume Intelligence
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight">
                Your Career.
                <br />

                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Reimagined.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg md:text-xl leading-8 text-gray-400">
                Turn your skills, projects and experience into a powerful
                professional resume with AI. Describe yourself once —
                let AI structure the rest.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">

                {/* IMPORTANT:
                    This Link remains connected to the existing route.
                */}
                <Link
                  to="/generate-resume"
                  className="group relative inline-flex items-center justify-center gap-3 h-14 px-7 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 font-semibold shadow-xl shadow-blue-600/20 hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaMagic />

                  <span>Generate My Resume</span>

                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-3 h-14 px-7 rounded-2xl bg-white/[0.04] border border-white/10 text-gray-200 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaUserTie />
                  Explore Platform
                </Link>

              </div>

              {/* Trust */}
              <div className="flex flex-wrap gap-x-7 gap-y-3 mt-9 text-sm text-gray-500">

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  AI Generated
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400" />
                  Fully Editable
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-violet-400" />
                  PDF Ready
                </div>

              </div>

            </div>

            {/* RIGHT — FUTURISTIC RESUME */}
            <div className="relative">

              {/* glow */}
              <div className="absolute inset-10 bg-blue-600/20 blur-[100px] rounded-full" />

              {/* floating score */}
              <div className="absolute -top-8 right-0 sm:right-[-20px] z-20 bg-[#0b1224]/90 backdrop-blur-xl border border-cyan-400/20 rounded-2xl px-5 py-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <FaChartLine className="text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-500">
                      Resume Score
                    </p>
                    <p className="text-lg font-bold text-cyan-300">
                      94 / 100
                    </p>
                  </div>
                </div>
              </div>

              {/* Main card */}
              <div className="relative rounded-[30px] p-[1px] bg-gradient-to-br from-cyan-400/30 via-blue-500/10 to-violet-500/30 shadow-2xl">

                <div className="rounded-[29px] bg-[#080e1c]/95 backdrop-blur-2xl p-6 sm:p-8">

                  {/* card header */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                        <FaUserTie className="text-xl" />
                      </div>

                      <div>
                        <div className="h-3.5 w-36 bg-white/80 rounded-full mb-3" />
                        <div className="h-2.5 w-24 bg-white/20 rounded-full" />
                      </div>

                    </div>

                    <div className="px-3 py-1.5 rounded-lg bg-green-400/10 border border-green-400/20 text-green-400 text-xs">
                      AI Ready
                    </div>

                  </div>

                  {/* summary */}
                  <div className="py-6 border-b border-white/10">

                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-5 rounded-full bg-cyan-400" />
                      <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Professional Summary
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="h-2 bg-white/10 rounded-full w-full" />
                      <div className="h-2 bg-white/10 rounded-full w-[94%]" />
                      <div className="h-2 bg-white/10 rounded-full w-[78%]" />
                    </div>

                  </div>

                  {/* skills */}
                  <div className="py-6 border-b border-white/10">

                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-5 rounded-full bg-blue-400" />
                      <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Technical Skills
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">

                      {[
                        "React",
                        "Java",
                        "Spring Boot",
                        "MongoDB",
                        "Node.js",
                        "Git",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* experience */}
                  <div className="pt-6">

                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-5 rounded-full bg-violet-400" />
                      <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Experience
                      </span>
                    </div>

                    <div className="flex gap-4">

                      <div className="w-2 h-2 mt-1.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />

                      <div className="flex-1">
                        <div className="h-2.5 w-40 bg-white/50 rounded-full mb-3" />

                        <div className="space-y-2">
                          <div className="h-2 bg-white/10 rounded-full w-full" />
                          <div className="h-2 bg-white/10 rounded-full w-[88%]" />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

              {/* AI badge */}
              <div className="absolute -bottom-8 left-0 sm:left-[-25px] z-20 bg-[#0b1224]/95 backdrop-blur-xl border border-violet-400/20 rounded-2xl px-5 py-4 shadow-2xl">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-violet-400/10 flex items-center justify-center">
                    <FaBrain className="text-violet-400" />
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-500">
                      AI Analysis
                    </p>

                    <p className="text-sm font-semibold">
                      Profile Optimized
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="border-y border-white/[0.07] bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-6 py-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="text-center">
              <FaBrain className="mx-auto text-cyan-400 text-xl mb-3" />
              <h3 className="text-2xl font-bold">AI</h3>
              <p className="text-xs text-gray-500 mt-1">
                Intelligent Generation
              </p>
            </div>

            <div className="text-center">
              <FaBolt className="mx-auto text-blue-400 text-xl mb-3" />
              <h3 className="text-2xl font-bold">Fast</h3>
              <p className="text-xs text-gray-500 mt-1">
                Resume Creation
              </p>
            </div>

            <div className="text-center">
              <FaPen className="mx-auto text-violet-400 text-xl mb-3" />
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-xs text-gray-500 mt-1">
                Editable Content
              </p>
            </div>

            <div className="text-center">
              <FaDownload className="mx-auto text-green-400 text-xl mb-3" />
              <h3 className="text-2xl font-bold">PDF</h3>
              <p className="text-xs text-gray-500 mt-1">
                Ready to Download
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

          <div className="max-w-2xl mb-16">

            <p className="text-cyan-400 text-sm uppercase tracking-[0.25em] font-semibold">
              Why AI Resume Maker
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Built for your
              <span className="text-gray-500"> next opportunity.</span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-8">
              Everything you need to create, refine and present your
              professional profile.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            <FeatureCard
              icon={<FaBrain />}
              title="AI Resume Generation"
              text="Describe yourself naturally and let AI transform your information into structured professional content."
              iconClass="text-cyan-400"
              bgClass="bg-cyan-400/10"
            />

            <FeatureCard
              icon={<FaFileAlt />}
              title="Professional Structure"
              text="Keep your education, experience, projects, skills and achievements organized."
              iconClass="text-blue-400"
              bgClass="bg-blue-400/10"
            />

            <FeatureCard
              icon={<FaCode />}
              title="Developer Ready"
              text="Highlight your programming skills, GitHub projects, technologies and development experience."
              iconClass="text-violet-400"
              bgClass="bg-violet-400/10"
            />

            <FeatureCard
              icon={<FaPen />}
              title="Edit Everything"
              text="Review AI-generated content and modify every section before downloading."
              iconClass="text-green-400"
              bgClass="bg-green-400/10"
            />

            <FeatureCard
              icon={<FaDownload />}
              title="PDF Export"
              text="Create a clean, professional document ready to share with recruiters."
              iconClass="text-orange-400"
              bgClass="bg-orange-400/10"
            />

            <FeatureCard
              icon={<FaShieldAlt />}
              title="Professional Profile"
              text="Present your career information in a clear format designed for modern job applications."
              iconClass="text-pink-400"
              bgClass="bg-pink-400/10"
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="py-28 bg-[#050a16] border-y border-white/[0.07]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-violet-400 text-sm uppercase tracking-[0.25em] font-semibold">
              Simple Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              From idea to resume.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <Step
              number="01"
              icon={<FaUserTie />}
              title="Tell Us About You"
              text="Describe your education, skills, experience, projects and career goals."
            />

            <Step
              number="02"
              icon={<FaMagic />}
              title="AI Does the Work"
              text="Our AI organizes your information into a professional resume structure."
            />

            <Step
              number="03"
              icon={<FaRocket />}
              title="Edit & Download"
              text="Review your resume, make changes and get it ready for your next application."
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="py-28 px-6">

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[35px] border border-cyan-400/20">

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-violet-600/10" />

          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-72 bg-cyan-400/10 rounded-full blur-[120px]" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">

            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-xl mb-7">
              <FaRocket className="text-2xl" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Your next job starts
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                with a better resume.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-lg leading-8">
              Stop spending hours formatting your resume. Give AI the
              information and focus on your next opportunity.
            </p>

            {/* IMPORTANT:
                Same working route.
            */}
            <Link
              to="/generate-resume"
              className="group inline-flex items-center gap-3 mt-9 h-14 px-8 rounded-2xl bg-white text-black font-bold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <FaBrain />
              Start Building
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>
        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-white/[0.07] bg-[#02050c]">

        <div className="max-w-6xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-3 gap-12">

            <div>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <FaBrain />
                </div>

                <span className="text-xl font-black">
                  AI Resume Maker
                </span>

              </div>

              <p className="text-gray-600 max-w-sm leading-7">
                Build a professional resume faster with artificial
                intelligence.
              </p>

            </div>

            <div>

              <h3 className="font-bold mb-5">
                Explore
              </h3>

              <div className="flex flex-col gap-3 text-gray-500">

                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition"
                >
                  About
                </Link>

                <Link
                  to="/services"
                  className="hover:text-cyan-400 transition"
                >
                  Services
                </Link>

                <Link
                  to="/contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </Link>

              </div>

            </div>

            <div>

              <h3 className="font-bold mb-5">
                Build
              </h3>

              <Link
                to="/generate-resume"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition"
              >
                Generate Resume
                <FaArrowRight className="text-xs" />
              </Link>

            </div>

          </div>

          <div className="border-t border-white/[0.07] mt-12 pt-7 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-600">

            <span>
              © 2026 AI Resume Maker
            </span>

            <span>
              Built with AI • React • Spring Boot
            </span>

          </div>

        </div>
      </footer>

    </div>
  );
};


/* =====================================================
   FEATURE CARD
===================================================== */

const FeatureCard = ({
  icon,
  title,
  text,
  iconClass,
  bgClass,
}) => {
  return (
    <div className="group relative p-7 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.045] hover:-translate-y-2 transition-all duration-300">

      <div
        className={`w-14 h-14 rounded-2xl ${bgClass} flex items-center justify-center mb-6`}
      >
        <span className={`text-2xl ${iconClass}`}>
          {icon}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-500 leading-7">
        {text}
      </p>

      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <FaArrowRight className="text-gray-600" />
      </div>

    </div>
  );
};


/* =====================================================
   STEP
===================================================== */

const Step = ({
  number,
  icon,
  title,
  text,
}) => {
  return (
    <div className="relative p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08]">

      <div className="flex items-center justify-between">

        <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 text-xl">
          {icon}
        </div>

        <span className="text-5xl font-black text-white/[0.05]">
          {number}
        </span>

      </div>

      <h3 className="text-xl font-bold mt-7">
        {title}
      </h3>

      <p className="text-gray-500 mt-3 leading-7">
        {text}
      </p>

    </div>
  );
};

export default LandingPage;
