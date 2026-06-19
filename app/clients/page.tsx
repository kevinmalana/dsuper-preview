import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Clients | dSuper SMSF",
  description: "SMSF administration services for Financial Planners, Accountants, and Direct Trustees across Australia.",
};

const clientTypes = [
  {
    title: "Financial Planners & Advisers",
    intro: "Partner with dSuper to provide seamless SMSF administration for your clients. We handle the compliance so you can focus on delivering strategic advice.",
    benefits: [
      "Dedicated point of contact for your practice",
      "Timely turnaround on all compliance work",
      "Regular reporting to keep you and your clients informed",
      "No conflict with your advisory relationship",
      "Flexible communication style to suit your practice",
    ],
    quote: "We work alongside financial advisers as a trusted compliance partner, never competing for the advisory relationship.",
  },
  {
    title: "Accountants",
    intro: "White-label SMSF administration that integrates seamlessly with your accounting practice. Quality compliance work you can trust and confidently present as your own.",
    benefits: [
      "White-label service option available",
      "Consistent quality aligned with CPA standards",
      "Fast turnaround to meet your clients' deadlines",
      "Technical support for complex SMSF matters",
      "Competitive pricing that protects your margin",
    ],
    quote: "Our accountant partners trust us to deliver the same quality and care they provide to their own clients.",
  },
  {
    title: "Direct Trustees",
    intro: "Take control of your retirement with expert support behind you. Whether you're setting up a new SMSF or looking for better administration, we're here to help.",
    benefits: [
      "Direct access to qualified SMSF accountants",
      "Unlimited technical support on compliance matters",
      "Flat fee pricing — no surprises",
      "No investment restrictions",
      "Free transition from your current administrator",
    ],
    quote: "We give direct trustees the confidence and expertise to run their SMSF with peace of mind.",
  },
];

export default function ClientsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 rounded-full mb-6 border border-red-100">
            Our Clients
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Who We Work With
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We serve three distinct client groups, each with tailored SMSF administration solutions.
          </p>
        </div>
      </section>

      {/* Client Sections */}
      {clientTypes.map((client, i) => (
        <section
          key={client.title}
          className={`py-16 lg:py-20 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {client.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {client.intro}
                </p>
                <blockquote className="pl-4 mb-6 italic text-gray-700 border-l-4 border-red-600">
                  {client.quote}
                </blockquote>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm bg-red-600 hover:bg-red-700 transition-colors shadow-md shadow-red-600/20"
                >
                  Get in Touch
                </Link>
              </div>
              <div className={`rounded-2xl p-8 border border-gray-200 ${
                i % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}>
                <h3 className="font-bold text-lg mb-4 text-gray-900">
                  How We Help
                </h3>
                <ul className="space-y-3">
                  {client.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to work with dSuper?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Get in touch for a free initial consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
