import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 py-16">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h1>

        <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
          Have a question, suggestion, or need help with your resume?
          Feel free to reach out. We'd love to hear from you.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Information */}
        <div className="bg-base-200 rounded-2xl p-8 shadow-xl border border-base-300">

          <h2 className="text-2xl font-bold mb-6">
            Contact Information
          </h2>

          <p className="text-base-content/70 mb-8">
            You can contact us through any of the following options.
            We will try to get back to you as soon as possible.
          </p>

          {/* Email */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FaEnvelope className="text-primary text-xl" />
            </div>

            <div>
              <p className="font-semibold">Email</p>
              <p className="text-base-content/60">
                support@airesumemaker.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FaPhone className="text-primary text-xl" />
            </div>

            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-base-content/60">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FaMapMarkerAlt className="text-primary text-xl" />
            </div>

            <div>
              <p className="font-semibold">Location</p>
              <p className="text-base-content/60">
                India
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-base-200 rounded-2xl p-8 shadow-xl border border-base-300">

          <h2 className="text-2xl font-bold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full bg-base-100 focus:outline-none focus:border-primary resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-primary w-full flex items-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="max-w-5xl mx-auto mt-10 text-center">
        <p className="text-base-content/50 text-sm">
          © 2026 AI Resume Maker. Build your professional resume with AI.
        </p>
      </div>

    </div>
  );
}

export default Contact;
