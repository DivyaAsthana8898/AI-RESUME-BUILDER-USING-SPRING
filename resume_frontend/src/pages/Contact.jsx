import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully! ✅");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again. ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Unable to send message. Please try again. ❌");
    } finally {
      setLoading(false);
    }
  };

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

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Web3Forms API Key */}
            <input
              type="hidden"
              name="access_key"
              value="ce808810-81d1-4feb-ad49-0a596f78d55e"
            />

            {/* Subject */}
            <input
              type="hidden"
              name="subject"
              value="New Contact Message - AI Resume Maker"
            />

            {/* From Name */}
            <input
              type="hidden"
              name="from_name"
              value="AI Resume Maker Website"
            />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
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
                name="email"
                placeholder="Enter your email"
                required
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
                name="message"
                placeholder="Write your message..."
                required
                className="textarea textarea-bordered w-full bg-base-100 focus:outline-none focus:border-primary resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full flex items-center justify-center gap-2"
            >
              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status && (
              <p className="text-center text-sm font-medium mt-3">
                {status}
              </p>
            )}

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
