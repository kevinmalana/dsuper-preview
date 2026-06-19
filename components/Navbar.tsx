"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/transfer", label: "Transfer" },
  { href: "/setup", label: "Setup" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(26,26,26,0.98)" : "#1a1a1a",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/dsuper-logo-footer.png"
              alt="dSuper SMSF"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 rounded-lg"
                  style={{
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.8)",
                    backgroundColor: isActive ? "rgba(0,0,0,0.15)" : "transparent",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-white" />
                  )}
                </Link>
              );
            })}

          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg transition-colors duration-200 hover:bg-black/10"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="block h-0.5 bg-white rounded-full transition-all duration-300 origin-left" style={{ transform: isOpen ? "rotate(45deg) scaleX(1.1)" : "none" }} />
              <span className="block h-0.5 bg-white rounded-full transition-all duration-300" style={{ opacity: isOpen ? 0 : 1, transform: isOpen ? "translateX(8px)" : "none" }} />
              <span className="block h-0.5 bg-white rounded-full transition-all duration-300 origin-left" style={{ transform: isOpen ? "rotate(-45deg) scaleX(1.1)" : "none" }} />
            </div>
          </button>
        </div>

        <div
          className="md:hidden overflow-hidden transition-all duration-400 ease-in-out"
          style={{ maxHeight: isOpen ? "420px" : "0", opacity: isOpen ? 1 : 0 }}
        >
          <div className="pb-4 pt-3 space-y-1" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.8)",
                    backgroundColor: isActive ? "rgba(0,0,0,0.15)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

          </div>
        </div>
      </div>
    </nav>
  );
}
