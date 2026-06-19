"use client";
import { useState } from "react";
import Link from "next/link";

const steps = [
  { num: "01", title: "Contact Us", desc: "Tell us about your current SMSF and administrator. We'll assess your fund's needs." },
  { num: "02", title: "We Review", desc: "We assess your fund's current position, compliance status, and requirements." },
  { num: "03", title: "We Transfer", desc: "Full handover from your current administrator. We handle all the paperwork." },
  { num: "04", title: "You're Live", desc: "Ongoing support from our team. Your fund is now under expert CPA management." },
];

const benefits = [
  { title: "Free Transition", desc: "No charge for transferring your fund to dSuper. We absorb the transition costs." },
  { title: "No Disruption", desc: "Your fund continues to operate normally throughout the transfer process." },
  { title: "Full Data Migration", desc: "Complete transfer of your fund's historical data, records, and documentation." },
  { title: "Immediate Support", desc: "Access to our team from day one. Unlimited technical support included." },
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
      <div className="rounded-2xl p-10 text-center bg-green-50 border border-green-200">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 text-2xl">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you — we&apos;ll be in touch!</h3>
        <p className="text-sm text-gray-600">We respond within 1 business day to all transfer enquiries.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors" placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-600">*</span>
          </label>
          <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors" placeholder="your@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
          <input type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors" placeholder="0400 000 000" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            SMSF Name <span className="text-red-600">*</span>
          </label>
          <input type="text" name="fund" required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors" placeholder="e.g. Smith Family Super Fund" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Administrator</label>
        <input type="text" name="current_administrator" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors" placeholder="Who administers your SMSF currently?" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message / Questions</label>
        <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors resize-none" placeholder="Any questions or details about your fund..." />
      </div>
      <button type="submit" className="w-full py-4 rounded-xl text-white font-semibold text-base bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all duration-300">
        Submit Transfer Request
      </button>
      <p className="text-xs text-center text-gray-500">We respond within 1 business day. Your information is kept strictly confidential.</p>
    </form>
  );
}

export default function TransferPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 rounded-full mb-6 border border-red-100">
              Transfer
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Transfer Your SMSF <span className="text-red-600">to dSuper</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Switching your SMSF administration to dSuper is simple. We handle the entire transition process so you can focus on what matters — your investments and your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/smsf-form" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300">
                Complete Transfer Form
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                Ask a Question First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Transfer to dSuper?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make switching your SMSF administrator effortless.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four simple steps to transfer your SMSF to dSuper.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg shadow-red-600/20">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">What We Handle</h2>
          </div>
          <div className="rounded-2xl p-8 bg-white border border-gray-200">
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
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Transfer Enquiry Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Start Your Transfer
          </h2>
          <TransferForm />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transfer your SMSF?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Complete the transfer application form — free of charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/smsf-form" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300">
              Complete Transfer Form
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300">
              Ask a Question First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
