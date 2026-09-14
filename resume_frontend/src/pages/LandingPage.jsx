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
  FaTerminal,
  FaMicrochip,
  FaSatelliteDish,
  FaNetworkWired,
  FaFingerprint,
} from "react-icons/fa";

/* Reusable HUD-style corner brackets — purely decorative, never blocks clicks */
const HudCorners = ({ className = "" }) => (
  <>
    <span
      className={`pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 rounded-tl-md transition-colors duration-300 ${className}`}
    />
    <span
      className={`pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 rounded-tr-md transition-colors duration-300 ${className}`}
    />
    <span
      className={`pointer-events-none absolute left-0 bottom-0 h-4 w-4 border-l-2 border-b-2 rounded-bl-md transition-colors duration-300 ${className}`}
    />
    <span
      className={`pointer-events-none absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 rounded-br-md transition-colors duration-300 ${className}`}
    />
  </>
);

const LandingPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');

        .rm-display { font-family: 'Space Grotesk', ui-sans-serif, sans-serif; }
        .rm-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .rm-body { font-family: 'Inter', ui-sans-serif, sans-serif; }

        @keyframes rm-grid-drift {
          0% { background-position: 0 0; }
          100% { background-position: 64px 64px; }
        }
        @keyframes rm-scan {
          0% { transform: translateY(-100%); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateY(420%); opacity: 0; }
        }
        @keyframes rm-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.05); }
        }
        @keyframes rm-boot {
          0% { opacity: 0; transform: translateY(16px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .rm-grid-bg {
          background-image:
            linear-gradient(rgba(76,224,232,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(76,224,232,0.07) 1px, transparent 1px);
          background-size: 64px 64px;
          animation: rm-grid-drift 20s linear infinite;
        }
        .rm-panel-boot { animation: rm-boot 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .rm-scanline { animation: rm-scan 6s ease-in-out infinite; }
        .rm-glow-pulse { animation: rm-pulse 7s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .rm-grid-bg, .rm-panel-boot, .rm-scanline, .rm-glow-pulse { animation: none; }
        }
      `}</style>

      <div className="rm-body min-h-screen bg-[#05070C] text-[#E9EDF5] overflow-hidden">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rm-grid-bg opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070C]" />
            <div className="absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full bg-cyan-400/10 blur-[150px] rm-glow-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[420px] h-[260px] rounded-full bg-violet-500/5 blur-[130px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl rm-mono text-xs text-cyan-300 mb-8">
                  <FaTerminal className="text-[11px]" />
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                  </span>
                  resume engine online
                </div>

                <h1 className="rm-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight bg-gradient-to-br from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                  Compile your career into a resume worth reading.
                </h1>

                <p className="mt-7 text-lg md:text-xl text-slate-400 max-w-xl leading-8">
                  Feed in your skills, roles and projects. The engine
                  structures, writes and formats a resume that's ready to
                  send — in minutes, not hours.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mt-9">
                  <Link
                    to="/generate-resume"
                    className="group relative z-20 inline-flex items-center gap-3 h-14 px-7 rounded-xl bg-cyan-400 text-[#05070C] font-semibold shadow-[0_0_40px_-8px_rgba(76,224,232,0.65)] hover:shadow-[0_0_55px_-6px_rgba(76,224,232,0.85)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <FaMagic />
                    Generate resume
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/about"
                    className="relative z-20 inline-flex items-center gap-3 h-14 px-7 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-slate-200 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
                  >
                    See how it works
                  </Link>
                </div>

                {/* TRUST / DIAGNOSTICS ROW */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-xs rm-mono text-slate-500">
                  <span className="flex items-center gap-2">
                    <FaCheckCircle className="text-cyan-400" />
                    ai-generated
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCheckCircle className="text-cyan-400" />
                    fully editable
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCheckCircle className="text-cyan-400" />
                    export-ready pdf
                  </span>
                </div>
              </div>

              {/* RIGHT — HUD PANEL */}
              <div className="relative rm-panel-boot">
                <div className="absolute inset-0 bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-4 shadow-2xl overflow-hidden">
                  <HudCorners className="border-cyan-400/40" />
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-400/15 to-transparent pointer-events-none rm-scanline" />

                  {/* Panel header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 rm-mono text-[11px]">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <FaSatelliteDish className="text-xs" />
                      resume.compile()
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      live
                    </div>
                  </div>

                  {/* Dashboard */}
                  <div className="grid md:grid-cols-[1fr_150px] gap-4 p-4">
                    {/* Resume mock */}
                    <div className="rounded-xl bg-[#080D18] border border-white/10 p-6">
                      <div className="flex items-center justify-between mb-7">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <FaUserTie className="text-xl text-[#05070C]" />
                          </div>
                          <div>
                            <div className="h-3 w-32 bg-white/80 rounded-full" />
                            <div className="h-2 w-24 bg-white/20 rounded-full mt-2" />
                          </div>
                        </div>
                        <FaBolt className="text-cyan-300" />
                      </div>

                      {/* Summary */}
                      <div className="mb-7">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
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
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                          <div className="h-2 w-16 bg-white/40 rounded-full" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[10px] rm-mono text-cyan-300">
                            React
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-400/20 text-[10px] rm-mono text-violet-300">
                            Java
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[10px] rm-mono text-cyan-300">
                            Spring Boot
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-400/20 text-[10px] rm-mono text-violet-300">
                            MongoDB
                          </span>
                        </div>
                      </div>

                      {/* Experience */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
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
                      {/* Radial score gauge */}
                      <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 flex flex-col items-center">
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="text-[10px] rm-mono text-slate-500">
                            score
                          </span>
                          <FaStar className="text-yellow-400 text-xs" />
                        </div>
                        <svg width="88" height="88" viewBox="0 0 88 88" className="mt-1">
                          <circle
                            cx="44"
                            cy="44"
                            r="36"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="7"
                            fill="none"
                          />
                          <circle
                            cx="44"
                            cy="44"
                            r="36"
                            stroke="url(#rmGaugeGrad)"
                            strokeWidth="7"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={2 * Math.PI * 36}
                            strokeDashoffset={(1 - 0.92) * 2 * Math.PI * 36}
                            transform="rotate(-90 44 44)"
                          />
                          <defs>
                            <linearGradient id="rmGaugeGrad" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#4CE0E8" />
                              <stop offset="100%" stopColor="#8B7CFA" />
                            </linearGradient>
                          </defs>
                          <text
                            x="44"
                            y="49"
                            textAnchor="middle"
                            fontSize="18"
                            fontWeight="700"
                            fill="#E9EDF5"
                            fontFamily="'Space Grotesk', sans-serif"
                          >
                            92
                          </text>
                        </svg>
                        <p className="text-[11px] text-emerald-400 mt-1">
                          excellent profile
                        </p>
                      </div>

                      {/* AI analysis */}
                      <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-violet-400/10 flex items-center justify-center shrink-0">
                          <FaFingerprint className="text-violet-300" />
                        </div>
                        <div>
                          <p className="text-[10px] rm-mono text-slate-500">
                            analysis
                          </p>
                          <p className="text-sm font-semibold">optimized</p>
                        </div>
                      </div>

                      {/* PDF ready */}
                      <div className="rounded-xl bg-gradient-to-br from-cyan-400/10 to-violet-400/10 border border-cyan-400/10 p-4">
                        <FaDownload className="text-cyan-300 mb-2" />
                        <p className="text-sm font-semibold">PDF ready</p>
                        <p className="text-[11px] text-slate-500 mt-1">
                          download anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating diagnostic badge */}
                <div className="absolute -left-6 top-24 hidden md:flex items-center gap-3 px-4 py-3 rounded-xl bg-[#080D18]/90 border border-cyan-400/20 backdrop-blur-xl shadow-xl">
                  <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <FaCheckCircle className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] rm-mono text-slate-500">
                      diagnostics
                    </p>
                    <p className="text-xs font-semibold">resume optimized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATUS STRIP
        ===================================================== */}
        <section className="border-y border-white/10 bg-white/[0.02] relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-9">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              <div className="text-center px-4">
                <FaBolt className="mx-auto text-cyan-300 text-lg mb-2" />
                <h3 className="rm-display text-xl font-semibold">Fast</h3>
                <p className="text-[11px] rm-mono text-slate-500 mt-1">
                  generation
                </p>
              </div>
              <div className="text-center px-4">
                <FaBrain className="mx-auto text-violet-300 text-lg mb-2" />
                <h3 className="rm-display text-xl font-semibold">AI</h3>
                <p className="text-[11px] rm-mono text-slate-500 mt-1">
                  powered
                </p>
              </div>
              <div className="text-center px-4">
                <FaFileAlt className="mx-auto text-cyan-300 text-lg mb-2" />
                <h3 className="rm-display text-xl font-semibold">100%</h3>
                <p className="text-[11px] rm-mono text-slate-500 mt-1">
                  editable
                </p>
              </div>
              <div className="text-center px-4">
                <FaDownload className="mx-auto text-violet-300 text-lg mb-2" />
                <h3 className="rm-display text-xl font-semibold">PDF</h3>
                <p className="text-[11px] rm-mono text-slate-500 mt-1">
                  ready
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES — bento layout
        ===================================================== */}
        <section className="py-28 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="rm-mono text-xs text-cyan-400">// capabilities</p>
              <h2 className="rm-display text-4xl md:text-5xl font-semibold mt-3">
                Built for how you actually job hunt.
              </h2>
              <p className="text-slate-500 mt-5 text-lg">
                Every section — summary, skills, experience — shaped from
                what you tell it, not dropped into a generic template.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Large card */}
              <div className="group relative lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.045] transition-colors duration-300">
                <HudCorners className="border-transparent group-hover:border-cyan-400/40" />
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center mb-6">
                  <FaMicrochip className="text-2xl text-cyan-300" />
                </div>
                <h3 className="rm-display text-xl font-semibold mb-3">
                  AI-structured content
                </h3>
                <p className="text-slate-500 leading-7 max-w-md">
                  Describe your background in plain language. The engine
                  turns it into a proper summary, skill groupings and
                  experience bullets that read like a professional wrote
                  them.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.045] transition-colors duration-300">
                <HudCorners className="border-transparent group-hover:border-violet-400/40" />
                <div className="w-14 h-14 rounded-2xl bg-violet-400/10 border border-violet-400/10 flex items-center justify-center mb-6">
                  <FaNetworkWired className="text-2xl text-violet-300" />
                </div>
                <h3 className="rm-display text-xl font-semibold mb-3">
                  Professional layout
                </h3>
                <p className="text-slate-500 leading-7">
                  Skills, education, experience and projects, kept in a
                  clean, recruiter-friendly structure.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.045] transition-colors duration-300">
                <HudCorners className="border-transparent group-hover:border-cyan-400/40" />
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center mb-6">
                  <FaCode className="text-2xl text-cyan-300" />
                </div>
                <h3 className="rm-display text-xl font-semibold mb-3">
                  Developer ready
                </h3>
                <p className="text-slate-500 leading-7">
                  Showcase GitHub projects, stacks and hands-on development
                  experience the way engineers actually describe it.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.045] transition-colors duration-300">
                <HudCorners className="border-transparent group-hover:border-violet-400/40" />
                <div className="w-14 h-14 rounded-2xl bg-violet-400/10 border border-violet-400/10 flex items-center justify-center mb-6">
                  <FaChartLine className="text-2xl text-violet-300" />
                </div>
                <h3 className="rm-display text-xl font-semibold mb-3">
                  Career focused
                </h3>
                <p className="text-slate-500 leading-7">
                  Your strongest skills and achievements, surfaced first,
                  for the roles you're actually applying to.
                </p>
              </div>

              {/* Card 5 */}
              <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.045] transition-colors duration-300">
                <HudCorners className="border-transparent group-hover:border-cyan-400/40" />
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-2xl text-cyan-300" />
                </div>
                <h3 className="rm-display text-xl font-semibold mb-3">
                  Full control
                </h3>
                <p className="text-slate-500 leading-7">
                  The AI drafts the first version — you stay in charge of
                  every edit before it's downloaded.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS — circuit trace
        ===================================================== */}
        <section className="py-28 bg-white/[0.02] border-y border-white/10 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="rm-mono text-xs text-violet-300">// workflow</p>
              <h2 className="rm-display text-4xl md:text-5xl font-semibold mt-3">
                Three steps to a finished resume.
              </h2>
            </div>

            <div className="relative grid md:grid-cols-3 gap-10">
              <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-cyan-400/50 via-violet-400/50 to-cyan-400/50" />

              <div className="relative text-center">
                <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-[#05070C] border border-cyan-400/30 flex items-center justify-center rm-display text-lg font-semibold text-cyan-300">
                  01
                </div>
                <h3 className="rm-display text-xl font-semibold mt-6">
                  Describe yourself
                </h3>
                <p className="text-slate-500 mt-4 leading-7 max-w-xs mx-auto">
                  Education, skills, projects and achievements — written
                  the way you'd tell a friend.
                </p>
              </div>

              <div className="relative text-center">
                <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-[#05070C] border border-violet-400/30 flex items-center justify-center rm-display text-lg font-semibold text-violet-300">
                  02
                </div>
                <h3 className="rm-display text-xl font-semibold mt-6">
                  The engine builds it
                </h3>
                <p className="text-slate-500 mt-4 leading-7 max-w-xs mx-auto">
                  Your input gets structured into a professional resume
                  automatically.
                </p>
              </div>

              <div className="relative text-center">
                <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-[#05070C] border border-cyan-400/30 flex items-center justify-center rm-display text-lg font-semibold text-cyan-300">
                  03
                </div>
                <h3 className="rm-display text-xl font-semibold mt-6">
                  Edit & download
                </h3>
                <p className="text-slate-500 mt-4 leading-7 max-w-xs mx-auto">
                  Review it, make changes, and download the final version
                  whenever you're ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="py-28 px-6 relative z-10">
          <div className="relative max-w-5xl mx-auto rounded-[1.75rem] border border-cyan-400/20 bg-white/[0.03] p-10 md:p-16 text-center overflow-hidden">
            <HudCorners className="border-cyan-400/40" />
            <div className="absolute inset-0 rm-grid-bg opacity-20 pointer-events-none" />
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full bg-cyan-400/15 blur-[110px] pointer-events-none" />

            <div className="relative">
              <div className="mx-auto w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-7">
                <FaRocket className="text-xl text-cyan-300" />
              </div>

              <p className="rm-mono text-xs text-cyan-400">
                // ready when you are
              </p>

              <h2 className="rm-display text-4xl md:text-6xl font-semibold mt-4 leading-tight bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-transparent">
                Build your resume now.
              </h2>

              <p className="max-w-2xl mx-auto text-slate-500 text-lg mt-6">
                No blank page, no formatting fights — describe yourself and
                let the engine draft the first version for you.
              </p>

              {/* IMPORTANT: SAME ROUTE */}
              <Link
                to="/generate-resume"
                className="group relative z-20 inline-flex items-center gap-3 mt-9 h-14 px-8 rounded-xl bg-cyan-400 text-[#05070C] font-semibold shadow-[0_0_40px_-8px_rgba(76,224,232,0.65)] hover:-translate-y-0.5 hover:shadow-[0_0_55px_-6px_rgba(76,224,232,0.85)] transition-all duration-300"
              >
                <FaBrain />
                Generate my resume
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="border-t border-white/10 bg-[#03050A] relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <FaBrain className="text-[#05070C]" />
                  </div>
                  <span className="rm-display font-semibold text-xl">
                    AI Resume Maker
                  </span>
                </div>
                <p className="text-slate-600 max-w-sm leading-7">
                  Build a professional resume faster with the power of
                  artificial intelligence.
                </p>
              </div>

              {/* Links */}
              <div>
                <h3 className="rm-mono text-xs text-slate-500 mb-5">
                  explore
                </h3>
                <div className="flex flex-col gap-4 text-slate-500">
                  <Link to="/about" className="hover:text-cyan-400 transition-colors">
                    About
                  </Link>
                  <Link to="/services" className="hover:text-cyan-400 transition-colors">
                    Services
                  </Link>
                  <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Create */}
              <div>
                <h3 className="rm-mono text-xs text-slate-500 mb-5">
                  create
                </h3>
                <Link
                  to="/generate-resume"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Generate Resume
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-7 flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-700">
              <span>© 2026 AI Resume Maker</span>
              <span>Built with AI, designed for careers.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
