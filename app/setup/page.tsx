import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMSF Setup & Pricing | dSuper",
  description:
    "Establish your SMSF online, fast, and at a fixed price. Individual Trustee $1,000, Corporate Trustee $2,000.",
};

export default function SetupPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 rounded-full mb-6 border border-red-100">
            SMSF Establishment
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Setup Your SMSF <span className="text-red-600">Today</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Online, fast, and at a fixed price. We handle the ATO
            registration, trust deeds, and everything in between.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual Trustee */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-red-500/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Individual Trustee
              </h3>
              <p className="text-gray-600 mb-6">
                Best for 1-2 members acting as trustees in their own names.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-extrabold text-gray-900">
                  $1,000
                </span>
                <span className="text-gray-500 font-medium">once-off</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Customised SMSF Trust Deed",
                  "ATO Registration (ABN & TFN)",
                  "SuperStream & ESA setup",
                  "Free initial compliance review",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-red-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-8 py-4 rounded-lg font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Corporate Trustee */}
            <div className="bg-gray-900 p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl relative overflow-hidden ring-2 ring-red-600/20">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Corporate Trustee
              </h3>
              <p className="text-gray-400 mb-6">
                Recommended for asset protection, estate planning, and
                borrowing.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-extrabold text-white">
                  $2,000
                </span>
                <span className="text-gray-500 font-medium">once-off</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Establishment of Corporate Trustee Company",
                  "ASIC Registration & Custom Constitution",
                  "Customised SMSF Trust Deed",
                  "ATO Registration (ABN & TFN)",
                  "SuperStream & ESA setup",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-red-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-8 py-4 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              What happens after you sign up?
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Our streamlined setup process gets your fund compliant and ready
              to invest in days, not weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Complete the Application",
                desc: "Fill out our secure online questionnaire with your member details and chosen trustee structure.",
              },
              {
                step: "2",
                title: "We Draft the Documents",
                desc: "Our team prepares your bespoke trust deed and corporate trustee documents for electronic signature.",
              },
              {
                step: "3",
                title: "ATO Registration & Bank",
                desc: "We register your fund with the ATO. Once your ABN/TFN is issued, you can open your SMSF bank account.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 font-bold text-xl flex items-center justify-center mx-auto mb-4 ring-4 ring-red-100">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does SMSF setup take?",
                a: "Once we have all your information, the setup process typically takes 1–2 weeks, including ATO registration, trust deed preparation, and ASIC registration if applicable.",
              },
              {
                q: "What's the difference between Individual and Corporate Trustee?",
                a: "An Individual Trustee means members are also trustees. A Corporate Trustee means a company acts as trustee with members as directors — better for asset protection and property investment.",
              },
              {
                q: "Can I transfer my existing super?",
                a: "Yes. Once your SMSF is established and the bank account is open, we handle the entire SuperStream transfer electronically.",
              },
              {
                q: "Do I need a financial adviser?",
                a: "No legal requirement exists. However, if you're unsure whether an SMSF is right for you, a licensed financial adviser can help.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl p-6 border border-gray-200 group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Fixed price, no surprises. Get your SMSF up and running today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300"
          >
            Book a Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
