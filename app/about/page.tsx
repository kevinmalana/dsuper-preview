import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | dSuper SMSF",
  description: "Independent CPA-led SMSF administration specialists. Not owned by any bank or financial institution.",
};

const whyUs = [
  { title: "Independently Owned", desc: "We are a fully independent firm and are not owned, controlled or influenced by any banks, insurance providers or financial services organisations. Our recommendations and support are not driven by any external products or affiliations, giving you confidence that the guidance you receive is transparent and aligned with your financial goals." },
  { title: "Focused on Quality", desc: "We adhere to the professional and ethical standards set by CPA Australia including their quality review programs. We have robust review and oversight processes in place to ensure excellence in financial reporting and tax compliance, delivering consistent and reliable outcomes for our clients." },
  { title: "Flat Fee Pricing", desc: "As a specialist provider of SMSF services, we can offer cost effective solutions on a fixed fee basis. Our fee structure is simple and transparent, with no hidden costs, and our services are priced competitively to deliver strong value for our clients." },
  { title: "No Investment Restrictions", desc: "Enjoy the flexibility to invest without unnecessary limitations. With our services, you are free to choose any bank, any stockbroker and a wide range of investment assets, provided they comply with superannuation laws. If you are ever unsure whether a particular investment is compliant, simply reach out to us. We are happy to guide you, and there are no additional fees for this support." },
  { title: "Flexibility", desc: "We take a flexible and client focused approach in everything we do. We are committed to understanding your specific needs and preferences, and we adapt our services accordingly to ensure they align with your goals. Whether it is the level of support you require, turnaround times or communication style, we are happy to tailor our approach to suit you and provide a more personalised experience." },
];

const credentials = [
  { title: "CPA Australia Member", desc: "As Certified Practising Accountants (CPA), we adhere to strict professional and ethical standards set by leading accounting bodies." },
  { title: "Registered Tax Agent", desc: "As a registered Tax Agent, we are required to meet specific disclosure obligations in relation to the services we provide." },
  { title: "Independently Owned", desc: "Not owned, controlled or influenced by any banks, insurance providers or financial services organisations." },
  { title: "Accredited SMSF Association Specialist", desc: "Independently recognised for our SMSF expertise and knowledge." },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 rounded-full mb-6 border border-red-100">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            About dSuper
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Independent SMSF administration specialists, committed to making your fund simple, efficient and stress-free.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We are an independent specialist provider of SMSF administration and compliance services to Financial Planners/Advisory Firms, Accountants and Direct Trustees. It is our core focus and area of expertise.</p>
                <p>Our services cover the full SMSF lifecycle, including fund setup and ongoing support such as compliance, accounting, tax reporting and independent audit through an approved auditor.</p>
                <p>Our team consists of qualified accountants with strong SMSF expertise, committed to providing ongoing support tailored to each client&apos;s needs.</p>
              </div>
            </div>
            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Credentials</h3>
              <div className="space-y-6">
                {credentials.map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-bold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{c.title}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <div className="space-y-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white rounded-2xl p-5 md:p-8 border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
            &ldquo;We aim to make managing your SMSF simple and efficient by offering a complete range of services at a fair and transparent price.&rdquo;
          </blockquote>
          <p className="text-red-500 font-semibold">— dSuper Team</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">We welcome you to get in touch</h2>
          <p className="text-lg text-gray-600 mb-8">Learn more about how we can support you and your SMSF.</p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
