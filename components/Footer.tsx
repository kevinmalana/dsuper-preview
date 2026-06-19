import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
      { name: "Terms of Service", href: "/terms" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "FSG / CRS", href: "/compliance" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section: Brand & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/dsuper-logo-footer.png"
                alt="dSuper SMSF"
                width={140}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Expert CPA-led SMSF administration services for Financial Planners, Accountants, and Direct Trustees across Australia. Independent, transparent, and focused on quality.
            </p>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                CPA Certified
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Registered Tax Agent
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-7 flex items-center justify-start lg:justify-end">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 max-w-md w-full">
              <h3 className="text-xl font-bold text-white mb-2">Ready to simplify your SMSF?</h3>
              <p className="text-gray-400 text-sm mb-6">We respond within 1 business day and offer a free initial consultation.</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg text-base font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/10"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Section: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-gray-800">
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@dsuper.com.au" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@dsuper.com.au
                </a>
              </li>
              <li>
                <a href="tel:0415670280" className="text-sm text-gray-400 hover:text-white transition-colors">
                  0415 670 280
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-500">We respond within 1 business day</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Credentials Strip */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 py-8">
          <Image src="/logo-1-tpb.jpg" alt="Tax Practitioners Board" width={110} height={44} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <div className="hidden sm:block w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
          <Image src="/logo-2-smsf.jpg" alt="SMSF Association Specialist" width={110} height={44} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <div className="hidden sm:block w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
          <Image src="/logo-3-cpa.jpg" alt="CPA Australia" width={110} height={44} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            © {currentYear} dSuper SMSF. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="/disclaimer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Disclaimer</Link>
            <Link href="/disclosure" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}