import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "dSuper SMSF | Expert SMSF Administration Services Australia",
  description: "CPA-led SMSF administration services for Financial Planners, Accountants & Direct Trustees. Flat fee pricing, registered tax agent, independent & unbiased.",
};

/* ─── SVG Icons ─── */
const Icons = {
  shield: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  dollar: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  chart: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  check: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  doc: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  setup: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19a1.5 1.5 0 010-2.565l5.384-3.19a1.5 1.5 0 011.56 0l5.384 3.19a1.5 1.5 0 010 2.565l-5.384 3.19a1.5 1.5 0 01-1.56 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 17.25h16.5" /></svg>,
  admin: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>,
  briefcase: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>,
  calculator: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM6 18.75h12A2.25 2.25 0 0020.25 16.5V7.5A2.25 2.25 0 0018 5.25H6A2.25 2.25 0 003.75 7.5v9A2.25 2.25 0 006 18.75z" /></svg>,
  home: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  arrow: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>,
  checkCircle: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>,
  phone: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
  mail: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
};

const services = [
  { title: "SMSF Administration", desc: "Full compliance, tax returns, audit coordination — everything your fund needs to stay compliant year-round.", icon: Icons.admin, href: "/services" },
  { title: "SMSF Setup", desc: "From $1,000 — online, fast, fixed price. Individual or Corporate Trustee. We handle everything.", icon: Icons.setup, href: "/setup" },
  { title: "SMSF Documents", desc: "Trust deeds, pension commencement, change of trustee, fund wind-up and more — precise documents at a fair price.", icon: Icons.doc, href: "/services" },
];

const whyUs = [
  { title: "Independently Owned", desc: "We are a fully independent firm and are not owned, controlled or influenced by any banks, insurance providers or financial services organisations. Our recommendations and support are not driven by any external products or affiliations, giving you confidence that the guidance you receive is transparent and aligned with your financial goals.", icon: Icons.shield },
  { title: "Flat Fee Pricing", desc: "As a specialist provider of SMSF services, we can offer cost effective solutions on a fixed fee basis. Our fee structure is simple and transparent, with no hidden costs, and our services are priced competitively to deliver strong value for our clients.", icon: Icons.dollar },
  { title: "No Investment Restrictions", desc: "Enjoy the flexibility to invest without unnecessary limitations. With our services, you are free to choose any bank, any stockbroker and a wide range of investment assets, provided they comply with superannuation laws. If you are ever unsure whether a particular investment is compliant, simply reach out to us. We are happy to guide you, and there are no additional fees for this support.", icon: Icons.chart },
  { title: "Focused on Quality", desc: "We adhere to the professional and ethical standards set by CPA Australia including their quality review programs. We have robust review and oversight processes in place to ensure excellence in financial reporting and tax compliance, delivering consistent and reliable outcomes for our clients.", icon: Icons.check },
];

const clients = [
  { title: "Financial Planners & Advisers", desc: "Partner with us for seamless SMSF administration. We handle compliance so you can focus on advice.", icon: Icons.briefcase },
  { title: "Accountants", desc: "White-label SMSF administration that integrates with your practice. Quality compliance work you can trust.", icon: Icons.calculator },
  { title: "Direct Trustees", desc: "Take control of your retirement with expert support behind you. Full control, expert guidance.", icon: Icons.home },
];

const steps = [
  { num: "01", title: "Get in Touch", desc: "Contact us for a free initial consultation about your SMSF needs." },
  { num: "02", title: "We Handle Setup", desc: "ABN, TFN, trust deed, ATO registration — we take care of everything." },
  { num: "03", title: "Transfer Your Super", desc: "SuperStream electronic transfers for fast, seamless rollovers." },
  { num: "04", title: "Invest Your Way", desc: "Full control over your investments with no restrictions." },
];

const faqs = [
  { q: "How much does SMSF setup cost?", a: "Fund establishment with Individual Trustees is $1,000. With a Corporate Trustee, it's $2,000. Both include all necessary documentation, ATO registration, and setup support." },
  { q: "How much super do I need for an SMSF?", a: "There is no minimum balance required by the ATO. Research from the University of Adelaide found SMSFs with balances approaching $200,000 perform comparably to those with much larger balances. With up to 6 members, you can share costs." },
  { q: "What's included in the administration package?", a: "Annual financial statements, tax return preparation and lodgement, BAS and PAYG lodgement, independent audit coordination, actuarial certificates, and unlimited technical support." },
  { q: "Can I invest in property, crypto, or shares?", a: "Yes. We place no restrictions on the number, type, or value of investments. You can invest in ASX shares, ETFs, property, cryptocurrency, precious metals, and any other allowable SMSF investment." },
];

export default function HomePage() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative hero-shimmer" style={{ background: "linear-gradient(160deg, #ffffff 0%, #f1f5f9 40%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]" style={{ backgroundColor: "#e6141e", filter: "blur(100px)" }} />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-[0.02]" style={{ backgroundColor: "#1a1a1a", filter: "blur(80px)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24 lg:py-40">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: "rgba(230,20,30,0.05)", border: "1px solid rgba(230,20,30,0.12)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#e6141e" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "#e6141e" }} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-center" style={{ color: "#e6141e" }}>CPA Certified · Registered Tax Agent · Accredited SMSF Association Specialist</span>
            </div>

            <h1 className="animate-fade-in-up delay-100 text-3xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] mb-7 tracking-tight" style={{ color: "#1a1a1a" }}>
              SMSF Administration, <br />
              <span className="relative inline-block">
                <span style={{ color: "#e6141e" }}>Made Simple</span>
                <span className="absolute -bottom-1 left-0 w-full h-3 opacity-10 rounded-sm" style={{ backgroundColor: "#e6141e" }} />
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "#64748b" }}>
              Expert CPA-led compliance services for Financial Planners, Accountants & Direct Trustees across Australia. Independent, transparent, and dedicated to your fund&apos;s success.
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-red-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base shadow-lg shadow-red-500/20" style={{ backgroundColor: "#e6141e" }}>
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link href="/services" className="btn-press inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 hover:bg-gray-50 transition-colors" style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}>
                Our Services
              </Link>
            </div>

            <div className="animate-fade-in-up delay-400 mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm" style={{ color: "#94a3b8" }}>
              {["Free initial consultation", "Flat fee — no surprises", "100% independent"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span style={{ color: "#e6141e" }}>{Icons.checkCircle}</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(230,20,30,0.06) 0%, transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {[
              { num: "CPA", label: "Certified Firm" },
              { num: "100%", label: "Independent" },
              { num: "Flat", label: "Fee Pricing" },
              { num: "1 Day", label: "Response Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-number text-2xl md:text-3xl font-bold text-white mb-1">{stat.num}</div>
                <div className="text-xs md:text-sm font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-12 md:py-20 lg:py-28" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label text-xs font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 inline-block" style={{ backgroundColor: "rgba(230,20,30,0.06)", color: "#e6141e", letterSpacing: "0.15em" }}>Our Services</span>
            <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold mb-5 tracking-tight" style={{ color: "#1a1a1a" }}>How We Help Your SMSF</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748b" }}>Comprehensive SMSF services delivered with CPA-standard precision and complete transparency.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => (
              <Link key={s.title} href={s.href} className="card-hover group rounded-2xl p-8 bg-white relative overflow-hidden" style={{ border: "1px solid #e2e8f0", animationDelay: `${i * 100}ms` }}>
                <div className="absolute top-0 left-0 w-full h-1 transition-all duration-500 group-hover:h-1.5" style={{ backgroundColor: "#e6141e" }} />
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: "rgba(230,20,30,0.06)", color: "#e6141e" }}>{s.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5" style={{ color: "#e6141e" }}>
                  Learn more {Icons.arrow}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 inline-block" style={{ backgroundColor: "rgba(230,20,30,0.06)", color: "#e6141e" }}>Why dSuper</span>
            <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold mb-5 tracking-tight" style={{ color: "#1a1a1a" }}>Why Choose dSuper?</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748b" }}>We&apos;re not your typical SMSF administrator. We&apos;re professionals who genuinely care about your fund.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {whyUs.map((item, i) => (
              <div key={item.title} className="text-center group px-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: "rgba(230,20,30,0.06)", color: "#e6141e", boxShadow: "0 0 0 1px rgba(230,20,30,0.06)" }}>{item.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: "#f8fafc" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.02]" style={{ backgroundColor: "#e6141e", filter: "blur(100px)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 inline-block" style={{ backgroundColor: "rgba(230,20,30,0.06)", color: "#e6141e" }}>How It Works</span>
            <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold mb-5 tracking-tight" style={{ color: "#1a1a1a" }}>Simple Process</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748b" }}>Getting started with dSuper is straightforward. We guide you through every step.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
            {steps.map((step, i) => (
              <div key={step.num} className="text-center relative group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-px" style={{ background: "linear-gradient(90deg, rgba(230,20,30,0.2), rgba(230,20,30,0.05))" }} />
                )}
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-lg font-bold text-white shadow-lg shadow-red-500/15 relative z-10 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: "#e6141e" }}>{step.num}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Work With ─── */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 inline-block" style={{ backgroundColor: "rgba(230,20,30,0.06)", color: "#e6141e" }}>Our Clients</span>
            <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold mb-5 tracking-tight" style={{ color: "#1a1a1a" }}>Who We Work With</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748b" }}>Whether you&apos;re a professional adviser or managing your own retirement, we have a solution for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {clients.map((c, i) => (
              <div key={c.title} className="card-hover rounded-2xl p-8 bg-white text-center group" style={{ border: "1px solid #e2e8f0" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: "rgba(230,20,30,0.06)", color: "#e6141e" }}>{c.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/clients" className="btn-press inline-flex items-center gap-2 px-7 py-3.5 border-2 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-md" style={{ borderColor: "#e6141e", color: "#e6141e" }}>
              Learn more about who we serve {Icons.arrow}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 md:py-20 lg:py-28" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 inline-block" style={{ backgroundColor: "rgba(230,20,30,0.06)", color: "#e6141e" }}>FAQ</span>
            <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold mb-5 tracking-tight" style={{ color: "#1a1a1a" }}>Frequently Asked Questions</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-md" style={{ border: "1px solid #e2e8f0" }}>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold transition-colors duration-200 hover:bg-gray-50/50" style={{ color: "#1a1a1a" }}>
                  <span className="pr-4">{faq.q}</span>
                  <span className="rotate-icon ml-4 text-2xl flex-shrink-0 font-light leading-none" style={{ color: "#e6141e" }}>+</span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#64748b" }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(230,20,30,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(230,20,30,0.05) 0%, transparent 50%)" }} />
        <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: "#e6141e" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 tracking-tight">Ready to simplify your SMSF?</h2>
          <p className="text-lg mb-12 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>Get in touch today. We respond within 1 business day and offer a free initial consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-red-glow inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-white font-semibold text-base shadow-lg shadow-red-500/20" style={{ backgroundColor: "#e6141e" }}>
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
            <Link href="/setup" className="btn-press inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold text-base border-2 transition-colors duration-200 hover:bg-white/5" style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}>
              Set Up Your SMSF
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
