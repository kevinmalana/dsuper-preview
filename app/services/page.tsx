import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | dSuper SMSF",
  description: "Comprehensive SMSF administration, setup, and document services. CPA-led, flat fee pricing, no investment restrictions.",
};

const adminServices = [
  "Preparation of Annual Financial Statements",
  "Preparation and Lodgement of Annual Tax Return",
  "Preparation and Lodgement of Annual BAS and PAYG",
  "Coordination of the Independent Annual SMSF Audit",
  "Organising Actuarial Certificates for ECPI if required",
  "Acting as the Registered Tax Agent for the Fund",
  "Acting as ASIC agent for Corporate and/or Bare Trustee Companies",
  "No Restrictions on Number, Type, or Value of Investments",
  "Unlimited Technical Support on Compliance Matters",
  "Free Transition of your Fund to our System",
];

const dailyExtras = [
  "Daily Processing of Fund Transactions",
  "Online Access to Real Time Portfolio and Reporting Information",
];

const setupServices = [
  "Assess Suitability and Provide Initial Guidance",
  "Establish Individual or Corporate Trustee Structure",
  "Create SMSF Trust Deed and Governing Rules",
  "Register your SMSF for an ABN and TFN",
  "Register the Fund with the ATO",
  "Attend to the Registration of the Company with ASIC (if Corporate Trustee)",
  "Assist in Setting up a Bank Account",
  "Rollover Existing Super",
  "Set Up Ongoing Administration",
];

const docServices = [
  "Set up Bare Trust deed with Bare Trustee Company for LRBA Properties",
  "Change of Trustee or Member Documentation",
  "Pension Related Documents",
  "Trust Deed Upgrade",
  "Investment Strategy",
  "Lump Sum Withdrawal & Rollover",
  "Fund Wind Up",
  "Other SMSF Related Documents",
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Our Services</h1>
          <p className="text-lg max-w-2xl" style={{ color: "#64748b" }}>Comprehensive SMSF services delivered with CPA-standard precision and complete transparency.</p>
        </div>
      </section>

      {/* Annual Administration */}
      <section className="py-12 md:py-12 md:py-20 bg-white" id="administration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(230,20,30,0.08)", color: "#e6141e" }}>Core Service</span>
              <h2 className="text-3xl font-bold mt-4 mb-4" style={{ color: "#1a1a1a" }}>SMSF Annual Administration</h2>
              <p className="leading-relaxed mb-4" style={{ color: "#64748b" }}>
                All SMSFs are required to have financial statements prepared, lodge an Annual Return with the ATO, and be audited each year by an approved auditor. Our Annual Administration Package covers everything you need to stay compliant.
              </p>
              <p className="text-sm mb-6" style={{ color: "#64748b" }}>To transfer your existing SMSF administration to us, <Link href="/smsf-form" className="font-semibold hover:underline" style={{ color: "#e6141e" }}>complete the transfer form</Link>. To enquire about pricing, <Link href="/contact" className="font-semibold hover:underline" style={{ color: "#e6141e" }}>contact us</Link>.</p>
              <Link href="/contact" className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
                Get a Quote
              </Link>
            </div>
            <div className="rounded-xl p-8" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <h3 className="font-bold text-lg mb-4" style={{ color: "#1a1a1a" }}>What&apos;s Included</h3>
              <ul className="space-y-3">
                {adminServices.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm" style={{ color: "#475569" }}>
                    <span className="font-bold mt-0.5" style={{ color: "#8cd278" }}>✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Administration */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }} id="daily">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(230,20,30,0.08)", color: "#e6141e" }}>Premium</span>
              <h2 className="text-3xl font-bold mt-4 mb-4" style={{ color: "#1a1a1a" }}>Daily SMSF Administration</h2>
              <p className="leading-relaxed mb-6" style={{ color: "#64748b" }}>
                For SMSFs requiring regular ATO reporting (TBAR & Quarterly BAS) and members who wish to view contribution & pension information in real time.
              </p>
              <Link href="/contact" className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
                Get a Quote
              </Link>
            </div>
            <div className="rounded-xl p-8" style={{ backgroundColor: "white", border: "1px solid #e2e8f0" }}>
              <h3 className="font-bold text-lg mb-4" style={{ color: "#1a1a1a" }}>Everything in Annual, Plus</h3>
              <ul className="space-y-3 mb-6">
                {dailyExtras.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm" style={{ color: "#475569" }}>
                    <span className="font-bold mt-0.5" style={{ color: "#8cd278" }}>✓</span>
                    {s}
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-sm mb-3" style={{ color: "#1a1a1a" }}>Plus all Annual Administration services</h4>
              <ul className="space-y-2">
                {adminServices.slice(0, 5).map((s) => (
                  <li key={s} className="flex items-start gap-3 text-xs" style={{ color: "#94a3b8" }}>
                    <span style={{ color: "#8cd278" }}>✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="py-12 md:py-12 md:py-20 bg-white" id="setup">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>SMSF Set Up Service</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>An SMSF needs to be set up correctly so that it&apos;s eligible for tax concessions, can receive contributions and is easy to administer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl p-8 text-center" style={{ border: "2px solid #e6141e" }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1a1a" }}>Individual Trustees</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: "#e6141e" }}>$1,000</div>
            </div>
            <div className="rounded-xl p-8 text-center" style={{ border: "2px solid #e6141e" }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1a1a" }}>Corporate Trustee</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: "#e6141e" }}>$2,000</div>
            </div>
          </div>

          <div className="rounded-xl p-8" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
            <h3 className="font-bold text-lg mb-4" style={{ color: "#1a1a1a" }}>What&apos;s Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {setupServices.map((s) => (
                <div key={s} className="flex items-start gap-3 text-sm" style={{ color: "#475569" }}>
                  <span className="font-bold mt-0.5" style={{ color: "#8cd278" }}>✓</span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/smsf-setup" className="inline-block px-8 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
              Proceed with SMSF Setup →
            </Link>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }} id="documents">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>SMSF Document Service</h2>
              <p className="leading-relaxed mb-6" style={{ color: "#64748b" }}>
                We provide a range of document services for SMSFs. Contact us for a full detailed fee and service schedule.
              </p>
              <Link href="/contact" className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
                Enquire Now
              </Link>
            </div>
            <div className="rounded-xl p-8" style={{ backgroundColor: "white", border: "1px solid #e2e8f0" }}>
              <ul className="space-y-3">
                {docServices.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm" style={{ color: "#475569" }}>
                    <span className="font-bold mt-0.5" style={{ color: "#8cd278" }}>✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need help with your SMSF?</h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Get in touch for a free initial consultation.</p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
