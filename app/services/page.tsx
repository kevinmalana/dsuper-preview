import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | dSuper SMSF",
  description:
    "Comprehensive SMSF administration, setup, and document services. CPA-led, flat fee pricing, no investment restrictions.",
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

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-gray-600">
      <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      {text}
    </li>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 rounded-full mb-6 border border-red-100">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive SMSF services delivered with CPA-standard precision and complete transparency.
          </p>
        </div>
      </section>

      {/* Annual Administration */}
      <section className="py-16 lg:py-24 bg-white" id="administration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-50 rounded-full border border-red-100">
                Core Service
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">SMSF Annual Administration</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All SMSFs are required to have financial statements prepared, lodge an Annual Return with the ATO, and be audited each year by an approved auditor. Our Annual Administration Package covers everything you need to stay compliant.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                To transfer your existing SMSF administration to us,{" "}
                <Link href="/smsf-form" className="font-semibold text-red-600 hover:underline">complete the transfer form</Link>.
                To enquire about pricing,{" "}
                <Link href="/contact" className="font-semibold text-red-600 hover:underline">contact us</Link>.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all duration-300">
                Get a Quote
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-4">What&apos;s Included</h3>
              <ul className="space-y-3">
                {adminServices.map((s) => <CheckItem key={s} text={s} />)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Administration */}
      <section className="py-16 lg:py-24 bg-gray-50" id="daily">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-50 rounded-full border border-red-100">
                Premium
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Daily SMSF Administration</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                For SMSFs requiring regular ATO reporting (TBAR &amp; Quarterly BAS) and members who wish to view contribution &amp; pension information in real time.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all duration-300">
                Get a Quote
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Everything in Annual, Plus</h3>
              <ul className="space-y-3 mb-6">
                {dailyExtras.map((s) => <CheckItem key={s} text={s} />)}
              </ul>
              <h4 className="font-bold text-sm text-gray-900 mb-3">Plus all Annual Administration services</h4>
              <ul className="space-y-2">
                {adminServices.slice(0, 5).map((s) => (
                  <li key={s} className="flex items-start gap-3 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="py-16 lg:py-24 bg-white" id="setup">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SMSF Set Up Service</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              An SMSF needs to be set up correctly so that it&apos;s eligible for tax concessions, can receive contributions and is easy to administer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border-2 border-red-600 text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Individual Trustees</h3>
              <div className="text-4xl font-extrabold text-red-600 mb-4">$1,000</div>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-red-600 text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Trustee</h3>
              <div className="text-4xl font-extrabold text-red-600 mb-4">$2,000</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">What&apos;s Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {setupServices.map((s) => (
                <div key={s} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/smsf-setup" className="inline-block px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all duration-300">
              Proceed with SMSF Setup &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 lg:py-24 bg-gray-50" id="documents">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SMSF Document Service</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide a range of document services for SMSFs. Contact us for a full detailed fee and service schedule.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all duration-300">
                Enquire Now
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <ul className="space-y-3">
                {docServices.map((s) => <CheckItem key={s} text={s} />)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need help with your SMSF?</h2>
          <p className="text-lg text-gray-400 mb-8">Get in touch for a free initial consultation.</p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
