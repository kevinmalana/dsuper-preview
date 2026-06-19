import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | dSuper SMSF",
  description: "Get in touch with dSuper for SMSF administration, setup, transfer, or document services. We respond within 1 business day.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Contact Us</h1>
          <p className="text-lg max-w-2xl" style={{ color: "#64748b" }}>We respond within 1 business day. Get in touch for a free initial consultation about your SMSF needs.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 md:py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="rounded-xl p-8" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a1a1a" }}>Online Enquiry</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a1a1a" }}>Get in Touch</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: "rgba(230,20,30,0.08)" }}>📧</div>
                  <div>
                    <h4 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Email</h4>
                    <p className="text-sm" style={{ color: "#64748b" }}>info@dsuper.com.au</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: "rgba(230,20,30,0.08)" }}>📞</div>
                  <div>
                    <h4 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Phone</h4>
                    <p className="text-sm" style={{ color: "#64748b" }}>0415 670 280</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: "rgba(230,20,30,0.08)" }}>⏰</div>
                  <div>
                    <h4 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Response Time</h4>
                    <p className="text-sm" style={{ color: "#64748b" }}>We respond within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ border: "2px solid #e6141e" }}>
                <h3 className="font-bold mb-2" style={{ color: "#1a1a1a" }}>Looking to transfer your SMSF?</h3>
                <p className="text-sm mb-4" style={{ color: "#64748b" }}>Switching to dSuper is simple. We handle the entire transition process — free of charge.</p>
                <Link href="/transfer" className="text-sm font-semibold" style={{ color: "#e6141e" }}>Learn about SMSF Transfer →</Link>
              </div>

              <div className="mt-6 rounded-xl p-6" style={{ border: "2px solid #e6141e" }}>
                <h3 className="font-bold mb-2" style={{ color: "#1a1a1a" }}>Ready to set up a new SMSF?</h3>
                <p className="text-sm mb-4" style={{ color: "#64748b" }}>From $1,000 for Individual Trustees. Fast, online, fixed price.</p>
                <Link href="/smsf-setup" className="text-sm font-semibold" style={{ color: "#e6141e" }}>Learn about SMSF Setup →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
