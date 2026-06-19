"use client";
import { useState } from "react";
import Link from "next/link";

// metadata moved to layout since this is a Client Component

const steps = [
  { num: "01", title: "Contact Us", desc: "Tell us about your current SMSF and administrator. We'll assess your fund's needs." },
  { num: "02", title: "We Review", desc: "We assess your fund's current position, compliance status, and requirements." },
  { num: "03", title: "We Transfer", desc: "Full handover from your current administrator. We handle all the paperwork." },
  { num: "04", title: "You're Live", desc: "Ongoing support from our team. Your fund is now under expert CPA management." },
];

const benefits = [
  { title: "Free Transition", desc: "No charge for transferring your fund to dSuper. We absorb the transition costs.", icon: "💸" },
  { title: "No Disruption", desc: "Your fund continues to operate normally throughout the transfer process.", icon: "🔄" },
  { title: "Full Data Migration", desc: "Complete transfer of your fund's historical data, records, and documentation.", icon: "📁" },
  { title: "Immediate Support", desc: "Access to our team from day one. Unlimited technical support included.", icon: "🤝" },
];

function TransferForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const fund = data.get("fund");
    const current = data.get("current_administrator");
    const message = data.get("message");
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASMSF Name: ${fund}%0ACurrent Administrator: ${current}%0AMessage: ${message}`;
    window.location.href = `mailto:info@dsuper.com.au?subject=SMSF Transfer Enquiry from ${name}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl p-10 text-center" style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "4px solid #22c55e" }}>
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "#15803d" }}>Thank you — we&apos;ll be in touch!</h3>
        <p className="text-sm" style={{ color: "#166534" }}>We respond within 1 business day to all transfer enquiries.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>Full Name <span style={{ color: "#e6141e" }}>*</span></label>
          <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white" style={{ borderColor: "#e2e8f0" }} placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>Email <span style={{ color: "#e6141e" }}>*</span></label>
          <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white" style={{ borderColor: "#e2e8f0" }} placeholder="your@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>Phone</label>
          <input type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white" style={{ borderColor: "#e2e8f0" }} placeholder="0400 000 000" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>SMSF Name <span style={{ color: "#e6141e" }}>*</span></label>
          <input type="text" name="fund" required className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white" style={{ borderColor: "#e2e8f0" }} placeholder="e.g. Smith Family Super Fund" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>Current Administrator</label>
        <input type="text" name="current_administrator" className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white" style={{ borderColor: "#e2e8f0" }} placeholder="Who administers your SMSF currently?" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>Message / Questions</label>
        <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white resize-none" style={{ borderColor: "#e2e8f0" }} placeholder="Any questions or details about your fund..." />
      </div>
      <button type="submit" className="w-full py-4 rounded-lg text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg" style={{ backgroundColor: "#e6141e" }}>
        Submit Transfer Request
      </button>
      <p className="text-xs text-center" style={{ color: "#64748b" }}>We respond within 1 business day. Your information is kept strictly confidential.</p>
    </form>
  );
}

export default function TransferPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              Transfer Your SMSF <span style={{ color: "#e6141e" }}>to dSuper</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#64748b" }}>
              Switching your SMSF administration to dSuper is simple. We handle the entire transition process so you can focus on what matters — your investments and your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/smsf-form" className="inline-block px-8 py-4 rounded-lg text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg" style={{ backgroundColor: "#e6141e" }}>
                Complete Transfer Form
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base border-2 hover:bg-gray-50 transition-colors" style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}>
                Ask a Question First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Why Transfer to dSuper?</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>We make switching your SMSF administrator effortless.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" style={{ backgroundColor: "rgba(230,20,30,0.08)" }}>{b.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>How It Works</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>Four simple steps to transfer your SMSF to dSuper.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-white" style={{ backgroundColor: "#e6141e" }}>{step.num}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>What We Handle</h2>
          </div>
          <div className="rounded-xl p-8" style={{ backgroundColor: "white", border: "1px solid #e2e8f0" }}>
            <ul className="space-y-4">
              {[
                "Contact your current administrator to arrange handover",
                "Transfer all fund documentation and records",
                "Update ATO registration and tax agent details",
                "Migrate historical financial data",
                "Coordinate with your fund's auditor",
                "Set up ongoing reporting and compliance schedules",
                "Provide immediate access to our support team",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3" style={{ color: "#475569" }}>
                  <span className="font-bold mt-0.5" style={{ color: "#8cd278" }}>✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transfer your SMSF?</h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Complete the transfer application form — free of charge.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/smsf-form" className="inline-block px-10 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
              Complete Transfer Form →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold border-2 transition-colors hover:bg-white/5" style={{ borderColor: "rgba(255,255,255,0.25)", color: "white" }}>
              Ask a Question First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
