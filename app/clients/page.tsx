import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Clients | dSuper SMSF",
  description: "SMSF administration services for Financial Planners, Accountants, and Direct Trustees across Australia.",
};

const clientTypes = [
  {
    title: "Financial Planners & Advisers",
    icon: "👔",
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
    icon: "🧮",
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
    icon: "🏠",
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
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Who We Work With</h1>
          <p className="text-lg max-w-2xl" style={{ color: "#64748b" }}>We serve three distinct client groups, each with tailored SMSF administration solutions.</p>
        </div>
      </section>

      {/* Client Sections */}
      {clientTypes.map((client, i) => (
        <section key={client.title} className="py-20" style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-5xl mb-4">{client.icon}</div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>{client.title}</h2>
                <p className="leading-relaxed mb-6" style={{ color: "#64748b" }}>{client.intro}</p>
                <blockquote className="pl-4 mb-6 italic" style={{ borderLeft: "3px solid #e6141e", color: "#475569" }}>
                  {client.quote}
                </blockquote>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
                  Get in Touch
                </Link>
              </div>
              <div className="rounded-xl p-8" style={{ backgroundColor: i % 2 === 0 ? "#f8fafc" : "#ffffff", border: "1px solid #e2e8f0" }}>
                <h3 className="font-bold text-lg mb-4" style={{ color: "#1a1a1a" }}>How We Help</h3>
                <ul className="space-y-3">
                  {client.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "#475569" }}>
                      <span className="font-bold mt-0.5" style={{ color: "#8cd278" }}>✓</span>
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
      <section className="py-16" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to work with dSuper?</h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Get in touch for a free initial consultation.</p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
