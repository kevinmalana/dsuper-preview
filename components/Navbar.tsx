"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Transfer", href: "/transfer" },
  { name: "Setup", href: "/smsf-setup" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isOpen
          ? "border-slate-200/90 bg-white/95 shadow-[0_12px_30px_-24px_rgba(15,28,63,.45)] backdrop-blur-xl"
          : "border-transparent bg-white/75 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex min-h-0 items-center" aria-label="dSuper home">
            <Image
              src="/dsuper-logo.png"
              alt="dSuper SMSF"
              width={160}
              height={48}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative min-h-0 px-3 py-2 text-sm font-medium transition-colors lg:px-4 ${
                    isActive ? "text-red-700" : "text-slate-600 hover:text-[#101a33]"
                  }`}
                >
                  {link.name}
                  <span className={`absolute inset-x-3 -bottom-[1.36rem] h-0.5 bg-red-600 transition-transform ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                </Link>
              );
            })}
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center border border-slate-200 bg-white text-[#101a33] transition-colors hover:border-slate-300 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18 18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="md:hidden">
            <div className="grid grid-cols-2 gap-2 border-t border-slate-200 py-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between border px-4 py-3 text-sm font-semibold ${
                      isActive ? "border-red-200 bg-red-50 text-red-700" : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {link.name}<span aria-hidden="true" className="text-slate-400">↗</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
