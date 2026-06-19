import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "dSuper SMSF | Expert SMSF Administration Services Australia",
  description: "CPA-led SMSF administration services for Financial Planners, Accountants & Direct Trustees. Flat fee pricing, registered tax agent, independent & unbiased.",
};

/* ─── SVG Icons ─── */
const Icons = {
  shield: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>,
  dollar: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  chart: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>,
  check: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  doc: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>,
  setup: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19a1.5 1.5 0 010-2.565l5.384-3.19a1.5 1.5 0 011.56 0l5.384 3.19a1.5 1.5 0 010 2.565l-5.384 3.19a1.5 1.5 0 01-1.56 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 17.25h16.5"/></svg>,
  admin: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/></svg>,
  briefcase: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>,
  calculator: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM6 18.75h12A2.25 2.25 0 0020.25 16.5V7.5A2.25 2.25 0 0018 5.25H6A2.25 2.25 0 003.75 7.5v9A2.25 2.25 0 006 18.75z"/></svg>,
  home: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>,
  arrow: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>,
  checkCircle: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>,
  phone: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>,
  mail: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>,
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
    <div className="bg-white">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-24 lg:pt-32 lg:pb-40">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-red-700">CPA Certified · Registered Tax Agent</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-gray-900">
                SMSF Administration, <br />
                <span className="relative inline-block">
                  <span className="text-red-600">Made Simple</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-red-600/10 rounded-sm -z-10" />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                Expert CPA-led compliance services for Financial Planners, Accountants & Direct Trustees across Australia. Independent, transparent, and dedicated to your fund&apos;s success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300 hover:-translate-y-0.5">
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-gray-900 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
                  Our Services
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">
                {["Free initial consultation", "Flat fee — no surprises", "100% independent"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="text-red-600">{Icons.checkCircle}</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual (Dashboard Mockup) */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-100 ring-1 ring-black/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Fund Compliance Dashboard</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Live</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium text-sm">Compliance Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">100% Compliant</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium text-sm">Tax Return Lodgement</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">On Track</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium text-sm">Audit Coordination</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">Completed</span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                        {Icons.shield}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">CPA Verified</p>
                        <p className="text-xs text-gray-500">Last reviewed 2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-white/10">
            {[
              { num: "CPA", label: "Certified Firm" },
              { num: "100%", label: "Independent" },
              { num: "Flat", label: "Fee Pricing" },
              { num: "1 Day", label: "Response Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{stat.num}</div>
                <div className="text-sm font-medium text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-red-600 tracking-wide uppercase">What We Offer</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Everything your SMSF needs to stay compliant, efficient, and stress-free.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                <div className="mt-6 text-red-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more {Icons.arrow}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-red-600 tracking-wide uppercase">Why dSuper</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Serve ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-red-600 tracking-wide uppercase">Our Clients</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Who We Serve</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Trusted by professionals and individuals across Australia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div key={client.title} className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-red-600/5 border border-transparent hover:border-gray-200 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{client.title}</h3>
                <p className="text-gray-500 leading-relaxed">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-red-600 tracking-wide uppercase">Process</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-red-600/20">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-red-600 tracking-wide uppercase">FAQ</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to take control of your super?</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Join hundreds of Australians who trust dSuper for their SMSF administration. Get started with a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300 hover:-translate-y-0.5">
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}