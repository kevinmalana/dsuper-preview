import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | dSuper SMSF",
  description: "Independent CPA-led SMSF administration specialists. Not owned by any bank or financial institution.",
};

const whyUs = [
  { title: "Independently Owned", desc: "We are a fully independent firm and are not owned, controlled or influenced by any banks, insurance providers or financial services organisations. Our recommendations and support are not driven by any external products or affiliations, giving you confidence that the guidance you receive is transparent and aligned with your financial goals.", icon: "🛡️" },
  { title: "Focused on Quality", desc: "We adhere to the professional and ethical standards set by CPA Australia including their quality review programs. We have robust review and oversight processes in place to ensure excellence in financial reporting and tax compliance, delivering consistent and reliable outcomes for our clients.", icon: "✅" },
  { title: "Flat Fee Pricing", desc: "As a specialist provider of SMSF services, we can offer cost effective solutions on a fixed fee basis. Our fee structure is simple and transparent, with no hidden costs, and our services are priced competitively to deliver strong value for our clients.", icon: "💰" },
  { title: "No Investment Restrictions", desc: "Enjoy the flexibility to invest without unnecessary limitations. With our services, you are free to choose any bank, any stockbroker and a wide range of investment assets, provided they comply with superannuation laws. If you are ever unsure whether a particular investment is compliant, simply reach out to us. We are happy to guide you, and there are no additional fees for this support.", icon: "📈" },
  { title: "Flexibility", desc: "We take a flexible and client focused approach in everything we do. We are committed to understanding your specific needs and preferences, and we adapt our services accordingly to ensure they align with your goals. Whether it is the level of support you require, turnaround times or communication style, we are happy to tailor our approach to suit you and provide a more personalised experience.", icon: "🤝" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>About dSuper</h1>
          <p className="text-lg max-w-2xl" style={{ color: "#64748b" }}>Independent SMSF administration specialists, committed to making your fund simple, efficient and stress-free.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#1a1a1a" }}>Who We Are</h2>
              <div className="space-y-4" style={{ color: "#475569" }}>
                <p>We are an independent specialist provider of SMSF administration and compliance services to Financial Planners/Advisory Firms, Accountants and Direct Trustees. It is our core focus and area of expertise.</p>
                <p>Our services cover the full SMSF lifecycle, including fund setup and ongoing support such as compliance, accounting, tax reporting and independent audit through an approved auditor.</p>
                <p>Our team consists of qualified accountants with strong SMSF expertise, committed to providing ongoing support tailored to each client&apos;s needs.</p>
              </div>
            </div>
            <div className="rounded-xl p-8" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: "#1a1a1a" }}>Our Credentials</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl" style={{ backgroundColor: "rgba(230,20,30,0.08)" }}>🎓</div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#1a1a1a" }}>CPA Australia Member</h4>
                    <p className="text-sm" style={{ color: "#64748b" }}>As Certified Practising Accountants (CPA), we adhere to strict professional and ethical standards set by leading accounting bodies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl" style={{ backgroundColor: "rgba(230,20,30,0.08)" }}>📋</div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#1a1a1a" }}>Registered Tax Agent</h4>
                    <p className="text-sm" style={{ color: "#64748b" }}>As a registered Tax Agent, we are required to meet specific disclosure obligations in relation to the services we provide.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl" style={{ backgroundColor: "rgba(230,20,30,0.08)" }}>⚖️</div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#1a1a1a" }}>Independently Owned</h4>
                    <p className="text-sm" style={{ color: "#64748b" }}>Not owned, controlled or influenced by any banks, insurance providers or financial services organisations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl" style={{ backgroundColor: "rgba(230,20,30,0.08)" }}>🏅</div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#1a1a1a" }}>Accredited SMSF Association Specialist</h4>
                    <p className="text-sm" style={{ color: "#64748b" }}>Independently recognised for our SMSF expertise and knowledge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Why Choose Us</h2>
          </div>
          <div className="space-y-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-5 md:p-8" style={{ border: "1px solid #e2e8f0" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-2xl" style={{ backgroundColor: "rgba(230,20,30,0.08)" }}>{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1a1a" }}>{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
            &ldquo;We aim to make managing your SMSF simple and efficient by offering a complete range of services at a fair and transparent price.&rdquo;
          </blockquote>
          <p style={{ color: "#e6141e" }} className="font-semibold">— dSuper Team</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>We welcome you to get in touch</h2>
          <p className="text-lg mb-8" style={{ color: "#64748b" }}>Learn more about how we can support you and your SMSF.</p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity shadow-lg" style={{ backgroundColor: "#e6141e" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
