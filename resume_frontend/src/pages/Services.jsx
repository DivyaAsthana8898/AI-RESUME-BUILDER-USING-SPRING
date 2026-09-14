import React from "react";
import { FaBrain, FaCode, FaRocket, FaFileAlt } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-base-300 text-base-content px-6 py-12">
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20">
              <FaBrain className="text-5xl text-primary" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">AI Resume Maker</span>
          </h1>

          <p className="text-base-content/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Create professional, job-ready resumes with the power of
            Artificial Intelligence. Simply describe yourself and let AI
            generate your resume in seconds.
          </p>
        </div>

        {/* Main About Card */}
        <div className="bg-base-200 rounded-3xl border border-base-content/10 shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div>
              <h2 className="text-3xl font-bold mb-5">
                Build Your Resume <span className="text-primary">Smarter</span>
              </h2>

              <p className="text-base-content/70 leading-7 mb-5">
                AI Resume Maker helps students, freshers, and professionals
                create structured and professional resumes without spending
                hours formatting them manually.
              </p>

              <p className="text-base-content/70 leading-7">
                Just provide information about your education, skills,
                experience, projects and career goals. Our AI converts your
                description into a well-structured resume.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-base-300 rounded-2xl p-6 border border-base-content/10">
                <FaBrain className="text-3xl text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Powered</h3>
                <p className="text-sm text-base-content/60">
                  Generate resume content using AI.
                </p>
              </div>

              <div className="bg-base-300 rounded-2xl p-6 border border-base-content/10">
                <FaFileAlt className="text-3xl text-secondary mb-4" />
                <h3 className="font-bold text-lg mb-2">Professional</h3>
                <p className="text-sm text-base-content/60">
                  Clean and structured resume format.
                </p>
              </div>

              <div className="bg-base-300 rounded-2xl p-6 border border-base-content/10">
                <FaCode className="text-3xl text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">Easy to Edit</h3>
                <p className="text-sm text-base-content/60">
                  Modify your resume information easily.
                </p>
              </div>

              <div className="bg-base-300 rounded-2xl p-6 border border-base-content/10">
                <FaRocket className="text-3xl text-success mb-4" />
                <h3 className="font-bold text-lg mb-2">Fast</h3>
                <p className="text-sm text-base-content/60">
                  Generate your resume within seconds.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="text-center bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Goal
          </h2>

          <p className="max-w-3xl mx-auto text-base-content/70 leading-7">
            Our goal is to make resume creation simple, fast and accessible
            for everyone. Whether you are a student looking for your first
            internship or a professional looking for your next opportunity,
            AI Resume Maker helps you present yourself professionally.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
