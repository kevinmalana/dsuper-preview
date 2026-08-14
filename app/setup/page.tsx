import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMSF Setup & Pricing | dSuper",
  description:
    "Establish your SMSF online, fast, and at a fixed price. Individual Trustees $1,000, Corporate Trustee $2,000.",
};

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

const pricing = [
  {
    title: "Individual Trustees",
    price: "$1,000",
    description: "Members act as trustees of the fund",
    inclusions: [
      "SMSF Trust Deed",
      "ABN & TFN Registration",
      "ATO Fund Registration",
      "Bank Account Setup Guidance",
      "Rollover Assistance",
    ],
  },
  {
    title: "Corporate Trustee",
    price: "$2,000",
    description: "Includes ASIC company registration",
    inclusions: [
      "Everything in Individual Trustees",
      "ASIC Company Registration",
      "Special Purpose Trustee Company",
      "Better Asset Protection",
      "Preferred for Property Investments",
    ],
  },
];

const steps = [
  { num: "01", title: "Assess Suitability", description: "We help you understand if an SMSF is right for your circumstances." },
  { num: "02", title: "Establish Structure", description: "Individual or Corporate Trustee — we set up the legal structure." },
  { num: "03", title: "Register with ATO", description: "ABN, TFN, and regulated fund registration — all handled for you." },
  { num: "04", title: "Bank Account Setup", description: "We guide you through opening your SMSF's dedicated bank account." },
  { num: "05", title: "Transfer Your Super", description: "Electronic SuperStream transfers for fast, seamless rollovers." },
  { num: "06", title: "Start Investing", description: "Implement your investment strategy with full control." },
];

const fullInclusions = [
  "Assess Suitability and Provide Initial Guidance",
  "Establish Individual or Corporate Trustee Structure",
  "Create SMSF Trust Deed and Governing Rules",
  "Register your SMSF for an ABN and TFN including an election for the SMSF to become a regulated fund",
  "Register the Fund with the ATO",
  "Attend to the Registration of the Company with ASIC (if Corporate Trustee Only)",
  "Assist in Setting up a Bank Account",
  "Rollover Existing Super",
  "Set Up Ongoing Administration",
];

const faqs = [
  {
    question: "How long does SMSF setup take?",
    answer: "Once we have all your information, the setup process typically takes 1-2 weeks. This includes ATO registration, trust deed preparation, and ASIC company registration (if applicable).",
  },
  {
    question: "What's the difference between Individual and Corporate Trustee?",
    answer: "An Individual Trustee means the members of the fund are also the trustees. A Corporate Trustee means a company acts as the trustee, with the members as directors. A Corporate Trustee provides better asset protection and is often preferred for property investments.",
  },
  {
    question: "Can I transfer my existing super?",
    answer: "Yes. Once your SMSF is established and the bank account is open, we can help you transfer your existing super via SuperStream. We handle the entire process electronically.",
  },
  {
    question: "Do I need a financial adviser?",
    answer: "No. There is no legal requirement to obtain financial advice before setting up an SMSF. However, if you're unsure whether an SMSF is right for you, we recommend speaking with a licensed financial adviser.",
  },
];

export default function SetupPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="ds-hero relative isolate border-b border-slate-200">
        <div className="ds-hero-grid absolute inset-0 -z-20" />
        <div className="ds-hero-glow absolute -right-32 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="ds-eyebrow">SMSF Establishment</p>
          <h1 className="mt-5 max-w-5xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[.94] tracking-[-.06em] text-[#101a33]">
            Set Up Your SMSF — <span className="text-red-600">Fast, Online, Fixed Price</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Setting up your SMSF with dSuper is simple. We handle everything from ABN registration to your first contribution. Completely digital, CPA-led, and at a transparent fixed price.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="ds-eyebrow">Choose your structure</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-.045em] text-[#101a33] sm:text-5xl">SMSF Setup Fees</h2>
            <p className="mt-4 text-lg text-slate-600">Transparent, fixed pricing. No hidden costs.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {pricing.map((option, index) => (
              <article key={option.title} className={`flex flex-col border p-7 sm:p-10 ${index === 1 ? "border-[#101a33] bg-[#101a33] text-white shadow-[0_35px_70px_-42px_rgba(15,28,63,.8)]" : "border-slate-300 bg-white text-[#101a33]"}`}>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[.16em] ${index === 1 ? "text-red-300" : "text-red-600"}`}>Trustee structure</p>
                    <h3 className="mt-4 text-2xl font-medium tracking-tight">{option.title}</h3>
                  </div>
                  <span className={`text-xs font-semibold tracking-[.18em] ${index === 1 ? "text-slate-300" : "text-slate-500"}`}>0{index + 1}</span>
                </div>
                <p className={`mt-3 text-sm ${index === 1 ? "text-slate-300" : "text-slate-600"}`}>{option.description}</p>
                <p className="mt-8 text-5xl font-medium tracking-[-.05em] sm:text-6xl">{option.price}</p>
                <ul className="mt-8 flex-1 space-y-4 border-t border-current/15 pt-7">
                  {option.inclusions.map((item) => (
                    <li key={item} className={`flex items-start gap-3 text-sm sm:text-base ${index === 1 ? "text-slate-200" : "text-slate-700"}`}>
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center ${index === 1 ? "text-red-300" : "text-red-600"}`}><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/smsf-setup" className={`mt-9 inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm font-semibold transition-all ${index === 1 ? "bg-red-600 text-white hover:bg-red-700" : "border border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`}>
                  Proceed with Setup <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="ds-eyebrow">Setup journey</p>
              <h2 className="ds-section-title mt-4">How It Works</h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">Six straightforward steps to get your SMSF up and running.</p>
            </div>
            <ol className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {steps.map((step) => (
                <li key={step.num} className="bg-white p-7 sm:p-8">
                  <span className="text-xs font-semibold tracking-[.18em] text-red-600">{step.num}</span>
                  <h3 className="mt-7 text-xl font-medium text-[#101a33]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="ds-eyebrow">Everything included</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-.045em] text-[#101a33] sm:text-5xl">Full Setup Inclusions</h2>
          </div>
          <div className="mt-12 border border-slate-200 bg-white p-6 sm:p-10">
            <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
              {fullInclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center text-red-600"><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="mt-6 border border-red-200 bg-red-50 p-6 text-sm leading-7 text-slate-700 sm:px-8" aria-label="Financial advice disclaimer">
            <strong className="text-red-700">Note:</strong> We do not provide any Financial or Investment Advice since we do not hold an AFSL licence. Any advice provided will be general in nature. If you are not sure whether an SMSF is appropriate for you, please seek advice from a licensed advisor before proceeding.
          </aside>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <div>
            <p className="ds-eyebrow">Helpful answers</p>
            <h2 className="ds-section-title mt-4">Frequently Asked Questions</h2>
          </div>
          <div className="border-t border-slate-300">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-slate-300">
                <summary className="flex cursor-pointer items-center justify-between gap-5 py-6 text-left text-lg font-medium text-[#101a33]">
                  {faq.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-slate-300 text-xl font-light text-red-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-7 pr-12 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-6 sm:px-6 lg:px-8">
        <div className="ds-cta mx-auto max-w-7xl px-6 py-14 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-red-300">Online application</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-.04em] text-white sm:text-5xl">Ready to set up your SMSF?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Complete the online application form — takes around 10 minutes.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/smsf-setup" className="ds-button-primary">Complete Setup Form <ArrowIcon /></Link>
            <Link href="/contact" className="ds-button-dark">Ask a Question First</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
