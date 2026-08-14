import Link from "next/link";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ServiceIcon({ type }: { type: "admin" | "setup" | "documents" }) {
  const paths = {
    admin: "M4 19V9m5 10V5m5 14v-7m5 7V3M2 21h20",
    setup: "M12 3 3.5 7.5 12 12l8.5-4.5L12 3Zm-8.5 9L12 16.5 20.5 12M3.5 16.5 12 21l8.5-4.5",
    documents: "M7 3h7l4 4v14H7V3Zm7 0v5h5M10 12h5m-5 4h5",
  };
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[type]} />
    </svg>
  );
}

const services = [
  {
    title: "SMSF Administration",
    desc: "Full compliance, tax returns, audit coordination — everything your fund needs to stay compliant year-round.",
    href: "/services",
    type: "admin" as const,
    number: "01",
  },
  {
    title: "SMSF Setup",
    desc: "From $1,000 — online, fast, fixed price. Individual or Corporate Trustee. We handle everything.",
    href: "/setup",
    type: "setup" as const,
    number: "02",
  },
  {
    title: "SMSF Documents",
    desc: "Trust deeds, pension commencement, change of trustee, fund wind-up and more — precise documents at a fair price.",
    href: "/services",
    type: "documents" as const,
    number: "03",
  },
];

const whyUs = [
  {
    title: "Independently Owned",
    desc: "We are a fully independent firm and are not owned, controlled or influenced by any banks, insurance providers or financial services organisations. Our recommendations and support are not driven by any external products or affiliations, giving you confidence that the guidance you receive is transparent and aligned with your financial goals.",
  },
  {
    title: "Flat Fee Pricing",
    desc: "As a specialist provider of SMSF services, we can offer cost effective solutions on a fixed fee basis. Our fee structure is simple and transparent, with no hidden costs, and our services are priced competitively to deliver strong value for our clients.",
  },
  {
    title: "No Investment Restrictions",
    desc: "Enjoy the flexibility to invest without unnecessary limitations. With our services, you are free to choose any bank, any stockbroker and a wide range of investment assets, provided they comply with superannuation laws. If you are ever unsure whether a particular investment is compliant, simply reach out to us. We are happy to guide you, and there are no additional fees for this support.",
  },
  {
    title: "Focused on Quality",
    desc: "We adhere to the professional and ethical standards set by CPA Australia including their quality review programs. We have robust review and oversight processes in place to ensure excellence in financial reporting and tax compliance, delivering consistent and reliable outcomes for our clients.",
  },
];

const clients = [
  {
    title: "Financial Planners & Advisers",
    desc: "Partner with us for seamless SMSF administration. We handle compliance so you can focus on advice.",
    label: "For advice practices",
  },
  {
    title: "Accountants",
    desc: "White-label SMSF administration that integrates with your practice. Quality compliance work you can trust.",
    label: "For accounting firms",
  },
  {
    title: "Direct Trustees",
    desc: "Take control of your retirement with expert support behind you. Full control, expert guidance.",
    label: "For fund members",
  },
];

const steps = [
  { num: "01", title: "Get in Touch", desc: "Contact us for a free initial consultation about your SMSF needs." },
  { num: "02", title: "We Handle Setup", desc: "ABN, TFN, trust deed, ATO registration — we take care of everything." },
  { num: "03", title: "Transfer Your Super", desc: "SuperStream electronic transfers for fast, seamless rollovers." },
  { num: "04", title: "Invest Your Way", desc: "Full control over your investments with no restrictions." },
];

const faqs = [
  {
    q: "How much does SMSF setup cost?",
    a: "Fund establishment with Individual Trustees is $1,000. With a Corporate Trustee, it's $2,000. Both include all necessary documentation, ATO registration, and setup support.",
  },
  {
    q: "How much super do I need for an SMSF?",
    a: "There is no minimum balance required by the ATO. Research from the University of Adelaide found SMSFs with balances approaching $200,000 perform comparably to those with much larger balances. With up to 6 members, you can share costs.",
  },
  {
    q: "What's included in the administration package?",
    a: "Annual financial statements, tax return preparation and lodgement, BAS and PAYG lodgement, independent audit coordination, actuarial certificates, and unlimited technical support.",
  },
  {
    q: "Can I invest in property, crypto, or shares?",
    a: "Yes. We place no restrictions on the number, type, or value of investments. You can invest in ASX shares, ETFs, property, cryptocurrency, precious metals, and any other allowable SMSF investment.",
  },
];

const trustItems = [
  "CPA Australia Member",
  "Registered Tax Agent",
  "100% Independently Owned",
  "Flat Fee — No Surprises",
  "Unlimited Technical Support",
];

export default function HomePageModern() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="ds-hero relative isolate">
        <div className="ds-hero-grid absolute inset-0 -z-20" />
        <div className="ds-hero-glow absolute -right-32 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 border border-red-200/80 bg-white/85 px-3 py-2 text-xs font-semibold tracking-wide text-red-700 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 bg-red-600" />
              CPA Certified · Registered Tax Agent
            </div>
            <h1 className="max-w-3xl text-[clamp(3rem,7vw,6.8rem)] font-medium leading-[.91] tracking-[-.065em] text-[#101a33]">
              SMSF Administration,
              <span className="mt-2 block text-red-600">Made Simple</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Expert CPA-led compliance services for Financial Planners, Accountants &amp; Direct Trustees across Australia. Independent, transparent, and dedicated to your fund&apos;s success.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="ds-button-primary">
                Get Started <ArrowIcon />
              </Link>
              <Link href="/services" className="ds-button-secondary">
                Our Services
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 border-t border-slate-200 pt-6 sm:grid-cols-3">
              {["Free initial consultation", "Flat fee — no surprises", "100% independent"].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-0.5 text-red-600"><CheckIcon /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="relative lg:pl-6">
            <div className="ds-trust-panel relative overflow-hidden p-7 sm:p-9">
              <div className="absolute right-0 top-0 h-28 w-28 bg-red-600/10 blur-3xl" />
              <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-red-300">Professional confidence</p>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight text-white">Why choose dSuper</h2>
                </div>
                <span className="text-5xl font-light text-white/10">dS</span>
              </div>
              <ul className="space-y-3">
                {trustItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-slate-200 last:border-0">
                    <span className="grid h-7 w-7 place-items-center bg-red-500/15 text-red-300"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <blockquote className="mt-7 border-l-2 border-red-500 pl-4 text-sm italic leading-6 text-slate-300">
                &ldquo;We aim to make managing your SMSF simple and efficient by offering a complete range of services at a fair and transparent price.&rdquo;
                <footer className="mt-3 not-italic font-semibold text-white">— dSuper Team</footer>
              </blockquote>
            </div>
          </aside>
        </div>
      </section>

      <section aria-label="dSuper credentials" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { num: "CPA", label: "Certified Firm" },
            { num: "100%", label: "Independent" },
            { num: "Flat", label: "Fee Pricing" },
            { num: "1 Day", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="border-slate-200 px-3 py-7 even:border-l lg:border-l lg:first:border-l-0 lg:px-8 lg:py-8">
              <div className="text-2xl font-medium tracking-[-.04em] text-[#101a33] sm:text-3xl">{stat.num}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[.14em] text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="ds-eyebrow">What We Offer</p>
              <h2 className="ds-section-title mt-4">Our Services</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Everything your SMSF needs to stay compliant, efficient, and stress-free.
            </p>
          </div>
          <div className="mt-14 grid border-y border-slate-200 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="ds-service group relative border-b border-slate-200 px-1 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <ServiceIcon type={service.type} />
                  </span>
                  <span className="text-xs font-semibold tracking-[.18em] text-slate-400">{service.number}</span>
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-[-.03em] text-[#101a33]">{service.title}</h3>
                <p className="mt-4 min-h-24 leading-7 text-slate-600">{service.desc}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-red-600">
                  Learn more <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#101a33] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="ds-eyebrow text-red-300">Why dSuper</p>
              <h2 className="ds-section-title ds-title-light mt-4">Why Choose Us</h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
                Independent expertise, transparent pricing and quality-focused compliance support.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {whyUs.map((item, index) => (
                <article key={item.title} className="bg-[#101a33] p-7 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center border border-red-400/30 bg-red-500/10 text-red-300"><CheckIcon /></span>
                    <span className="text-xs tracking-[.18em] text-white/30">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="ds-eyebrow">Our Clients</p>
            <h2 className="ds-section-title mt-4">Who We Serve</h2>
            <p className="mt-5 text-lg text-slate-600">Trusted by professionals and individuals across Australia.</p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {clients.map((client, index) => (
              <article key={client.title} className="ds-client-card group p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[.15em] text-red-600">{client.label}</span>
                  <span className="text-4xl font-light text-slate-200 transition-colors group-hover:text-red-100">0{index + 1}</span>
                </div>
                <h3 className="mt-12 text-2xl font-medium tracking-[-.03em] text-[#101a33]">{client.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{client.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-slate-200 bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="ds-eyebrow">Process</p>
              <h2 className="ds-section-title mt-4">How It Works</h2>
            </div>
            <ol className="border-t border-slate-300">
              {steps.map((step) => (
                <li key={step.num} className="grid gap-3 border-b border-slate-300 py-7 sm:grid-cols-[5rem_1fr_1.35fr] sm:items-baseline">
                  <span className="text-sm font-semibold text-red-600">{step.num}</span>
                  <h3 className="text-lg font-medium text-[#101a33]">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <div>
            <p className="ds-eyebrow">FAQ</p>
            <h2 className="ds-section-title mt-4">Frequently Asked Questions</h2>
          </div>
          <div className="border-t border-slate-300">
            {faqs.map((faq, index) => (
              <details key={faq.q} className="group border-b border-slate-300" open={index === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-5 py-6 text-left text-lg font-medium text-[#101a33]">
                  {faq.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-slate-300 text-xl font-light text-red-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-7 pr-12 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-6 sm:px-6 lg:px-8">
        <div className="ds-cta mx-auto max-w-7xl overflow-hidden px-6 py-14 sm:px-12 sm:py-16 lg:flex lg:items-end lg:justify-between lg:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-red-300">Free initial consultation</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-.04em] text-white sm:text-5xl">Ready to take control of your super?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Join hundreds of Australians who trust dSuper for their SMSF administration. Get started with a free consultation.</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:pl-10">
            <Link href="/contact" className="ds-button-primary whitespace-nowrap">Get Started <ArrowIcon /></Link>
            <Link href="/services" className="ds-button-dark whitespace-nowrap">View Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
