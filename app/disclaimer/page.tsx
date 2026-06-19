import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | dSuper SMSF",
  description: "dSuper SMSF disclaimer and terms of use.",
};

export default function DisclaimerPage() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Disclaimer</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose" style={{ color: "#475569" }}>
          <p>Last updated: 2026</p>
          <h2 style={{ color: "#1a1a1a" }}>General Information</h2>
          <p>The information contained on this website is for general information purposes only. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.</p>
          <h2 style={{ color: "#1a1a1a" }}>No Financial Advice</h2>
          <p>dSuper SMSF does not hold an Australian Financial Services Licence (AFSL). The information provided on this website and through our services is general in nature and does not constitute financial advice. You should not rely on any information on this website as financial advice. If you require financial advice, please consult a licensed financial adviser.</p>
          <h2 style={{ color: "#1a1a1a" }}>SMSF Suitability</h2>
          <p>The decision to establish or transfer an SMSF is a personal one that should be made based on your individual circumstances. We recommend you seek independent financial and legal advice before making any decisions regarding your superannuation.</p>
          <h2 style={{ color: "#1a1a1a" }}>Professional Standards</h2>
          <p>dSuper SMSF is a CPA Australia member firm and a registered Tax Agent with the Tax Practitioners Board. We adhere to the professional and ethical standards set by these bodies.</p>
          <h2 style={{ color: "#1a1a1a" }}>Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, dSuper SMSF shall not be liable for any loss or damage arising from the use of this website or our services. By accessing and reading the content of this website, you agree to these terms and conditions.</p>
        </div>
      </section>
    </div>
  );
}
