import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | dSuper SMSF",
  description: "dSuper SMSF privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Privacy Policy</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose" style={{ color: "#475569" }}>
          <p>Last updated: 2026</p>
          <h2 style={{ color: "#1a1a1a" }}>1. Information We Collect</h2>
          <p>We collect personal information that you provide directly to us, including your name, email address, phone number, SMSF details, and any other information you choose to provide through our contact forms or communications.</p>
          <h2 style={{ color: "#1a1a1a" }}>2. How We Use Your Information</h2>
          <p>We use your personal information to provide our SMSF administration services, respond to your enquiries, communicate with you about your fund, and comply with our legal and regulatory obligations.</p>
          <h2 style={{ color: "#1a1a1a" }}>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except where required by law, regulation, or as necessary to provide our services (such as with the ATO or approved auditors).</p>
          <h2 style={{ color: "#1a1a1a" }}>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
          <h2 style={{ color: "#1a1a1a" }}>5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To make a request, please contact us at info@dsuper.com.au.</p>
          <h2 style={{ color: "#1a1a1a" }}>6. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@dsuper.com.au.</p>
        </div>
      </section>
    </div>
  );
}
