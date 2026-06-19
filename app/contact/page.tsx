import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | dSuper",
  description:
    "Get in touch with dSuper for a free SMSF consultation. We respond within 1 business day.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 rounded-full mb-6 border border-red-100">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Let&apos;s Talk About Your SMSF
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you are a Financial Planner, Accountant, or Direct Trustee,
            we are here to help. We respond to all inquiries within 1 business
            day.
          </p>
        </div>
      </section>

      {/* Split Layout */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Trust signals */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why work with dSuper?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "CPA-Qualified Team",
                    desc: "Our principal is a Certified Practising Accountant with specialist SMSF expertise.",
                  },
                  {
                    title: "Registered Tax Agent",
                    desc: "We are authorised to deal directly with the ATO on your behalf.",
                  },
                  {
                    title: "Independent & Unbiased",
                    desc: "No commissions, no product flogging. Pure compliance and administration.",
                  },
                  {
                    title: "Fixed Pricing",
                    desc: "No hourly billing surprises. Everything quoted upfront.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-red-50 border border-red-100">
                <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-2">
                  Existing Client?
                </p>
                <p className="text-gray-700">
                  For urgent enquiries about an existing fund, email us directly
                  at{" "}
                  <a
                    href="mailto:contact@dsuper.com.au"
                    className="text-red-600 font-semibold underline underline-offset-2"
                  >
                    contact@dsuper.com.au
                  </a>{" "}
                  with your fund name and ABN for priority service.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    What are you interested in?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="enquiry"
                    name="enquiry"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="setup">SMSF Setup</option>
                    <option value="transfer">SMSF Transfer</option>
                    <option value="admin">Ongoing Administration</option>
                    <option value="compliance">Compliance Review</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors resize-none"
                    placeholder="Tell us about your situation and what you need help with..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300"
                >
                  Send Enquiry
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-red-600 underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  . We&apos;ll never share your details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-red-100 mb-2">Prefer to talk?</p>
          <p className="text-2xl font-bold text-white">
            Call us on{" "}
            <a href="tel:1300123456" className="underline underline-offset-4">
              1300 123 456
            </a>
          </p>
          <p className="text-red-200 text-sm mt-2">
            Monday–Friday, 9am–5pm AEDT
          </p>
        </div>
      </section>
    </div>
  );
}
