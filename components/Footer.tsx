import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "SMSF Administration", href: "/services" },
    { name: "SMSF Setup", href: "/setup" },
    { name: "SMSF Documents", href: "/services" },
    { name: "Pension Services", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/#features" },
    { name: "Our Process", href: "/#process" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Disclosure", href: "/disclosure" },
  ],
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1327] text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.05fr_1.4fr] lg:gap-20">
          <div>
            <Link href="/" className="inline-flex min-h-0" aria-label="dSuper home">
              <Image src="/dsuper-logo-footer.png" alt="dSuper SMSF" width={160} height={55} className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Expert CPA-led SMSF administration services for Financial Planners, Accountants, and Direct Trustees across Australia. Independent, transparent, and focused on quality.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["CPA Certified", "Registered Tax Agent"].map((item) => (
                <span key={item} className="border border-white/15 bg-white/[.04] px-3 py-2 text-[.68rem] font-semibold uppercase tracking-[.13em] text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[.16em] text-white">{heading}</h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[.16em] text-white">Contact</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="mailto:info@dsuper.com.au" className="text-slate-400 transition-colors hover:text-white">info@dsuper.com.au</a></li>
                <li><a href="tel:0415670280" className="text-slate-400 transition-colors hover:text-white">0415 670 280</a></li>
                <li className="text-xs leading-5 text-slate-500">We respond within 1 business day</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-xl font-medium text-white">Ready to simplify your SMSF?</h3>
            <p className="mt-2 text-sm text-slate-400">We respond within 1 business day and offer a free initial consultation.</p>
          </div>
          <Link href="/contact" className="ds-button-primary w-full sm:w-auto">Contact Us Today <ArrowIcon /></Link>
        </div>

        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">Professional affiliations</p>
          <div className="flex flex-wrap items-center gap-5 sm:gap-8">
            <Image src="/logo-1-tpb.jpg" alt="Tax Practitioners Board" width={110} height={44} loading="eager" className="h-12 w-auto bg-white object-contain opacity-80 transition-opacity hover:opacity-100" />
            <Image src="/logo-2-smsf.jpg" alt="SMSF Association Specialist" width={110} height={44} loading="eager" className="h-12 w-auto bg-white object-contain opacity-80 transition-opacity hover:opacity-100" />
            <Image src="/logo-3-cpa.jpg" alt="CPA Australia" width={110} height={44} loading="eager" className="h-12 w-auto bg-white object-contain opacity-80 transition-opacity hover:opacity-100" />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} dSuper SMSF. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition-colors hover:text-slate-300">Privacy</Link>
            <Link href="/disclaimer" className="transition-colors hover:text-slate-300">Disclaimer</Link>
            <Link href="/disclosure" className="transition-colors hover:text-slate-300">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
