"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const fund = data.get("fund");
    const service = data.get("service");
    const message = data.get("message");

    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASMSF Name: ${fund}%0AService Interested In: ${service}%0AMessage: ${message}`;
    window.location.href = `mailto:info@dsuper.com.au?subject=SMSF Enquiry from ${name}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "4px solid #22c55e" }}
        className="rounded-lg p-8 text-center"
      >
        <div className="text-4xl mb-4">✅</div>
        <h3 style={{ color: "#15803d" }} className="text-xl font-bold mb-2">Thank you for your enquiry!</h3>
        <p style={{ color: "#166534" }} className="text-sm">We&apos;ll be in touch within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label style={{ color: "#1a1a2e" }} className="block text-sm font-semibold mb-2" htmlFor="name">
            Full Name <span style={{ color: "#e6141e" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            style={{ border: "1px solid #e2e8f0", color: "#1a1a2e" }}
            className="w-full px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
        </div>
        <div>
          <label style={{ color: "#1a1a2e" }} className="block text-sm font-semibold mb-2" htmlFor="email">
            Email Address <span style={{ color: "#e6141e" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            style={{ border: "1px solid #e2e8f0", color: "#1a1a2e" }}
            className="w-full px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label style={{ color: "#1a1a2e" }} className="block text-sm font-semibold mb-2" htmlFor="fund">
            SMSF Name (if applicable)
          </label>
          <input
            id="fund"
            name="fund"
            type="text"
            placeholder="e.g. Smith Family Superannuation Fund"
            style={{ border: "1px solid #e2e8f0", color: "#1a1a2e" }}
            className="w-full px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
        </div>
        <div>
          <label style={{ color: "#1a1a2e" }} className="block text-sm font-semibold mb-2" htmlFor="service">
            I&apos;m interested in <span style={{ color: "#e6141e" }}>*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            style={{ border: "1px solid #e2e8f0", color: "#1a1a2e" }}
            className="w-full px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          >
            <option value="">Select a service...</option>
            <option value="SMSF Administration">SMSF Administration</option>
            <option value="SMSF Setup">SMSF Setup</option>
            <option value="SMSF Transfer">SMSF Transfer</option>
            <option value="SMSF Documents">SMSF Documents</option>
            <option value="General Enquiry">Other / General Enquiry</option>
          </select>
        </div>
      </div>
      <div>
        <label style={{ color: "#1a1a2e" }} className="block text-sm font-semibold mb-2" htmlFor="message">
          Message <span style={{ color: "#e6141e" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your SMSF needs, or ask us a question..."
          style={{ border: "1px solid #e2e8f0", color: "#1a1a2e" }}
          className="w-full px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white resize-none"
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: "#e6141e" }}
        className="w-full py-4 rounded font-semibold text-white text-base hover:opacity-90 transition-opacity shadow-lg"
      >
        Send Enquiry
      </button>
      <p style={{ color: "#64748b" }} className="text-xs text-center">
        We respond within 1 business day. Your information is kept strictly confidential.
      </p>
    </form>
  );
}
