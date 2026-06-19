"use client";
import { useState } from "react";
import Link from "next/link";

// metadata in layout since Client Component

const faqs = [
  { q: "How long does SMSF setup take?", a: "Once we have all your information, the setup process typically takes 1-2 weeks. This includes ATO registration, trust deed preparation, and ASIC company registration (if applicable)." },
  { q: "What's the difference between Individual and Corporate Trustee?", a: "An Individual Trustee means the members of the fund are also the trustees. A Corporate Trustee means a company acts as the trustee, with the members as directors. A Corporate Trustee provides better asset protection and is often preferred for property investments." },
  { q: "Can I transfer my existing super?", a: "Yes. Once your SMSF is established and the bank account is open, we can help you transfer your existing super via SuperStream. We handle the entire process electronically." },
  { q: "Do I need a financial adviser?", a: "No. There is no legal requirement to obtain financial advice before setting up an SMSF. However, if you're unsure whether an SMSF is right for you, we recommend speaking with a licensed financial adviser." },
];

const steps = [
  { num: "1", title: "Assess Suitability", desc: "We help you understand if an SMSF is right for your circumstances." },
  { num: "2", title: "Establish Structure", desc: "Individual or Corporate Trustee — we set up the legal structure." },
  { num: "3", title: "Register with ATO", desc: "ABN, TFN, and regulated fund registration — all handled for you." },
  { num: "4", title: "Bank Account Setup", desc: "We guide you through opening your SMSF's dedicated bank account." },
  { num: "5", title: "Transfer Your Super", desc: "Electronic SuperStream transfers for fast, seamless rollovers." },
  { num: "6", title: "Start Investing", desc: "Implement your investment strategy with full control." },
];

function SetupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [trusteeType, setTrusteeType] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const type = data.get("trustee_type");
    const members = data.get("members");
    const message = data.get("message");
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ATrustee Type: ${type}%0ANumber of Members: ${members}%0AMessage: ${message}`;
    window.location.href = `mailto:info@dsuper.com.au?subject=SMSF Setup Enquiry from ${name}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl p-10 text-center" style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "4px solid #22c55e" }}>
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "#15803d" }}>Thank you — we&apos;ll be in touch!</h3>
        <p className="text-sm" style={{ color: "#166534" }}>We&apos;ll confirm your setup details within 1 business day.</p>
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
          <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>Number of Members <span style={{ color: "#e6141e" }}>*</span></label>
          <select name="members" required className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white" style={{ borderColor: "#e2e8f0" }}>
            <option value="">Select...</option>
            <option value="1">1 member</option>
            <option value="2">2 members</option>
            <option value="3">3 members</option>
            <option value="4">4 members</option>
            <option value="5">5 members</option>
            <option value="6">6 members</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Trustee Type <span style={{ color: "#e6141e" }}>*</span></label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { val: "individual", label: "Individual Trustees", price: "$1,000", desc: "Members act as trustees" },
            { val: "corporate", label: "Corporate Trustee", price: "$2,000", desc: "Company acts as trustee" },
          ].map((opt) => (
            <label key={opt.val} className="cursor-pointer rounded-lg p-4 flex items-start gap-3 transition-all" style={{ border: trusteeType === opt.val ? "2px solid #e6141e" : "2px solid #e2e8f0", backgroundColor: trusteeType === opt.val ? "rgba(230,20,30,0.03)" : "white" }}>
              <input type="radio" name="trustee_type" value={opt.val} required className="mt-1" onChange={() => setTrusteeType(opt.val)} />
              <div>
                <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>{opt.label}</div>
                <div className="font-bold" style={{ color: "#e6141e" }}>{opt.price}</div>
                <div className="text-xs" style={{ color: "#64748b" }}>{opt.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>Message / Questions</label>
        <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white resize-none" style={{ borderColor: "#e2e8f0" }} placeholder="Any questions or additional details..." />
      </div>
      <button type="submit" className="w-full py-4 rounded-lg text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg" style={{ backgroundColor: "#e6141e" }}>
        Proceed with SMSF Setup
      </button>
      <p className="text-xs text-center" style={{ color: "#64748b" }}>We respond within 1 business day. Your information is kept strictly confidential.</p>
    </form>
  );
}

export default function SetupPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: "#1a1a1a" }}>
              Set Up Your SMSF — <span style={{ color: "#e6141e" }}>Fast, Online, Fixed Price</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#64748b" }}>
              Setting up your SMSF with dSuper is simple. We handle everything from ABN registration to your first contribution. Completely digital, CPA-led, and at a transparent fixed price.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>SMSF Setup Fees</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>Transparent, fixed pricing. No hidden costs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Individual */}
            <div className="rounded-xl p-8 bg-white" style={{ border: "2px solid #e6141e" }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1a1a" }}>Individual Trustees</h3>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#e6141e" }}>$1,000</div>
              <p className="text-sm mb-6" style={{ color: "#64748b" }}>Members act as trustees of the fund</p>
              <ul className="space-y-3 mb-8">
                {["SMSF Trust Deed", "ABN & TFN Registration", "ATO Fund Registration", "Bank Account Setup Guidance", "Rollover Assistance"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#475569" }}>
                    <span style={{ color: "#8cd278" }} className="font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/smsf-setup" className="block text-center px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
                Proceed with Setup
              </Link>
            </div>

            {/* Corporate */}
            <div className="rounded-xl p-8 bg-white" style={{ border: "2px solid #e6141e" }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1a1a" }}>Corporate Trustee</h3>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#e6141e" }}>$2,000</div>
              <p className="text-sm mb-6" style={{ color: "#64748b" }}>Includes ASIC company registration</p>
              <ul className="space-y-3 mb-8">
                {["Everything in Individual Trustees", "ASIC Company Registration", "Special Purpose Trustee Company", "Better Asset Protection", "Preferred for Property Investments"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#475569" }}>
                    <span style={{ color: "#8cd278" }} className="font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/smsf-setup" className="block text-center px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
                Proceed with Setup
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>How It Works</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>Six straightforward steps to get your SMSF up and running.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white" style={{ backgroundColor: "#e6141e" }}>{step.num}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "#1a1a1a" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Inclusions */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Full Setup Inclusions</h2>
          </div>
          <div className="rounded-xl p-8 bg-white" style={{ border: "1px solid #e2e8f0" }}>
            <ul className="space-y-4">
              {[
                "Assess Suitability and Provide Initial Guidance",
                "Establish Individual or Corporate Trustee Structure",
                "Create SMSF Trust Deed and Governing Rules",
                "Register your SMSF for an ABN and TFN including an election for the SMSF to become a regulated fund",
                "Register the Fund with the ATO",
                "Attend to the Registration of the Company with ASIC (if Corporate Trustee Only)",
                "Assist in Setting up a Bank Account",
                "Rollover Existing Super",
                "Set Up Ongoing Administration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3" style={{ color: "#475569" }}>
                  <span className="font-bold mt-0.5" style={{ color: "#8cd278" }}>✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 rounded-xl p-5" style={{ backgroundColor: "rgba(230,20,30,0.04)", border: "1px solid rgba(230,20,30,0.18)" }}>
            <p className="text-sm font-medium text-center leading-relaxed" style={{ color: "#475569" }}>
              <span className="font-bold" style={{ color: "#e6141e" }}>Note: </span>
              We do not provide any Financial or Investment Advice since we do not hold an AFSL licence. Any advice provided will be general in nature. If you are not sure whether an SMSF is appropriate for you, please seek advice from a licensed advisor before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold" style={{ color: "#1a1a1a" }}>
                  {faq.q}
                  <span className="ml-4 text-xl" style={{ color: "#e6141e" }}>+</span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed" style={{ color: "#64748b" }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to set up your SMSF?</h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Complete the online application form — takes around 10 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/smsf-setup" className="inline-block px-10 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
              Complete Setup Form →
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
