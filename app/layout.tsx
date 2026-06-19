import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "dSuper SMSF | Expert SMSF Administration Services",
    template: "%s | dSuper SMSF",
  },
  description:
    "CPA-led SMSF administration services for Financial Planners, Accountants & Direct Trustees. Flat fee pricing, expert compliance, independent & unbiased.",
  keywords: [
    "SMSF administration",
    "SMSF compliance",
    "self managed super fund",
    "CPA",
    "registered tax agent",
    "SMSF setup",
    "SMSF documents",
    "Australia",
  ],
  authors: [{ name: "dSuper SMSF" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://dsuper.com.au",
    siteName: "dSuper SMSF",
    title: "dSuper SMSF | Expert SMSF Administration Services",
    description:
      "CPA-led SMSF administration services for Financial Planners, Accountants & Direct Trustees.",
  },
  twitter: {
    card: "summary_large_image",
    title: "dSuper SMSF | Expert SMSF Administration Services",
    description:
      "CPA-led SMSF administration services for Financial Planners, Accountants & Direct Trustees.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${inter.variable} scroll-smooth`}>
      <body>
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
