import React from "react";
import {
  FaBrain,
  FaFileAlt,
  FaRocket,
  FaCode,
  FaMagic,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <FaBrain />
                <span className="text-sm font-semibold">
                  AI Powered Resume Builder
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Build a Resume That
                <span className="text-primary"> Gets Noticed.</span>
              </h1>

              <p className="mt-6 text-lg text-base-content/70 leading-relaxed max-w-xl">
                AI Resume Maker helps you create professional, job-ready
                resumes in minutes. Simply describe your skills and
                experience, and let AI transform your information into a
                structured professional resume.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success" />
                  <span>AI Generated Content</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success" />
                  <span>Professional Format</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success" />
                  <span>PDF Ready</span>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">

                {/* Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>

                <div className="relative card bg-base-200 border border-base-300 shadow-2xl">
                  <div className="card-body p-8">

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center">
                        <FaFileAlt className="text-2xl text-primary" />
                      </div>

                      <div>
                        <h2 className="text-xl font-bold">
                          Your Professional Resume
                        </h2>

                        <p className="text-sm text-base-content/60">
                          Generated with AI
                        </p>
                      </div>
                    </div>

                    {/* Fake Resume Lines */}
                    <div className="space-y-4">

                      <div className="h-3 bg-base-content/20 rounded-full w-3/4"></div>

                      <div className="h-2 bg-base-content/10 rounded-full w-full"></div>

                      <div className="h-2 bg-base-content/10 rounded-full w-5/6"></div>

                      <div className="divider"></div>

                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/15"></div>

                        <div className="flex-1 space-y-2">
                          <div className="h-2 bg-base-content/20 rounded-full w-1/2"></div>
                          <div className="h-2 bg-base-content/10 rounded-full w-full"></div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-accent/15"></div>

                        <div className="flex-1 space-y-2">
                          <div className="h-2 bg-base-content/20 rounded-full w-2/3"></div>
                          <div className="h-2 bg-base-content/10 rounded-full w-full"></div>
                        </div>
                      </div>

                    </div>

                    <div className="mt-6">
                      <div className="badge badge-primary badge-outline p-3">
                        Ready to Apply
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-base-200/50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">
              About Our Platform
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Everything You Need to Create a Better Resume
            </h2>

            <p className="mt-4 text-base-content/60">
              Our platform combines artificial intelligence with a simple
              resume-building experience so you can focus on your career
              instead of formatting documents.
            </p>
          </div>


          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="card-body">

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <FaMagic className="text-2xl text-primary" />
                </div>

                <h3 className="text-xl font-bold">
                  AI Powered
                </h3>

                <p className="text-base-content/60 mt-2 leading-relaxed">
                  Describe your experience in simple words and let AI
                  organize it into professional resume content.
                </p>

              </div>
            </div>


            {/* CARD 2 */}
            <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="card-body">

                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                  <FaCode className="text-2xl text-accent" />
                </div>

                <h3 className="text-xl font-bold">
                  Developer Friendly
                </h3>

                <p className="text-base-content/60 mt-2 leading-relaxed">
                  Add your technical skills, projects, GitHub, experience,
                  education and certifications with ease.
                </p>

              </div>
            </div>


            {/* CARD 3 */}
            <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="card-body">

                <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center mb-4">
                  <FaRocket className="text-2xl text-success" />
                </div>

                <h3 className="text-xl font-bold">
                  Career Ready
                </h3>

                <p className="text-base-content/60 mt-2 leading-relaxed">
                  Generate a clean and professional resume that is ready
                  to download and use for your job applications.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">
              Simple Process
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Create Your Resume in 3 Steps
            </h2>
          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold shadow-lg">
                1
              </div>

              <h3 className="text-xl font-bold mt-5">
                Describe Yourself
              </h3>

              <p className="mt-3 text-base-content/60">
                Tell us about your skills, education, experience and
                projects.
              </p>
            </div>


            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold shadow-lg">
                2
              </div>

              <h3 className="text-xl font-bold mt-5">
                Let AI Generate
              </h3>

              <p className="mt-3 text-base-content/60">
                Our AI converts your description into structured resume
                information.
              </p>
            </div>


            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold shadow-lg">
                3
              </div>

              <h3 className="text-xl font-bold mt-5">
                Download & Apply
              </h3>

              <p className="mt-3 text-base-content/60">
                Review your resume, make changes if needed and download
                your professional PDF.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-primary/20 via-base-200 to-accent/10 border border-base-300 p-10 md:p-14 text-center shadow-lg">

            <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
              <FaBrain className="text-3xl text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Build Your Resume?
            </h2>

            <p className="mt-4 text-base-content/60 max-w-2xl mx-auto">
              Turn your skills and experience into a professional resume
              and take the next step toward your dream job.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
