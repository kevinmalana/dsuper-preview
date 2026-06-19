import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* CTA banner */}
      <section className="py-10" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold" style={{ color: "#1a1a1a" }}>Ready to get started?</h3>
            <p className="text-sm mt-1" style={{ color: "#64748b" }}>Free initial consultation — no obligation, no pressure.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>
              Contact Us
            </Link>
            <Link href="/smsf-setup" className="px-6 py-3 rounded-lg text-sm font-semibold border-2 hover:bg-gray-50 transition-colors" style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}>
              Setup SMSF
            </Link>
          </div>
        </div>
      </section>

      {/* Dark footer */}
      <footer style={{ backgroundColor: "#1a1a1a" }}>
        <div className="h-1" style={{ backgroundColor: "#e6141e" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/dsuper-logo-footer.png"
                  alt="dSuper SMSF"
                  width={120}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Making SMSF administration simple, efficient and stress-free for Australians.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#8cd278" }} />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>CPA Australia Member</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/services", label: "Our Services" },
                  { href: "/transfer", label: "SMSF Transfer" },
                  { href: "/setup", label: "SMSF Setup" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13px] transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Services</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/services", label: "SMSF Administration" },
                  { href: "/setup", label: "SMSF Set Up" },
                  { href: "/services", label: "SMSF Documents" },
                  { href: "/transfer", label: "SMSF Transfer" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[13px] transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Contact</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:info@dsuper.com.au" className="text-[13px] transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                    info@dsuper.com.au
                  </a>
                </li>
                <li>
                  <a href="tel:0415670280" className="text-[13px] transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                    0415 670 280
                  </a>
                </li>
                <li className="pt-1">
                  <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>We respond within 1 business day</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Credentials strip */}
          <div className="mt-10 pt-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <Image src="/logo-1-tpb.jpg" alt="Tax Practitioners Board" width={110} height={44} className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
            <div className="hidden sm:block w-px h-7" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
            <Image src="/logo-2-smsf.jpg" alt="SMSF Association Specialist" width={110} height={44} className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
            <div className="hidden sm:block w-px h-7" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
            <Image src="/logo-3-cpa.jpg" alt="CPA Australia" width={110} height={44} className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Copyright + legal */}
          <div className="mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
              © 2026 dSuper SMSF. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/disclaimer", label: "Disclaimer" },
                { href: "/disclosure", label: "Disclosure" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-[11px] transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.2)" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
}
