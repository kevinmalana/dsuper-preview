"use client";
import { useState } from "react";
import Link from "next/link";

function Field({ label, name, type = "text", required = false, placeholder = "" }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>
        {label} {required && <span style={{ color: "#e6141e" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
        style={{ borderColor: "#e2e8f0", color: "#1a1a1a" }}
      />
    </div>
  );
}

function TrusteeSection({ num, required }: { num: number; required: boolean }) {
  const r = required;
  const prefix = `trustee_${num}`;
  return (
    <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
      <h4 className="font-bold text-base" style={{ color: "#1a1a1a" }}>
        Trustee / Director {num} {r && <span className="text-sm font-normal" style={{ color: "#e6141e" }}>*</span>}
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Title (Mr/Mrs/Other)" name={`${prefix}_title`} required={r} />
        <Field label="Date of Birth" name={`${prefix}_dob`} type="date" required={r} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Field label="First Name" name={`${prefix}_first`} required={r} />
        <Field label="Middle Name" name={`${prefix}_middle`} />
        <Field label="Surname" name={`${prefix}_surname`} required={r} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Field label="Email" name={`${prefix}_email`} type="email" required={r} />
        <Field label="Mobile" name={`${prefix}_mobile`} type="tel" required={r} />
        <Field label="TFN" name={`${prefix}_tfn`} required={r} />
      </div>
      <Field label="Residential Address (if different to Section A)" name={`${prefix}_address`} />
      <div className="flex gap-6">
        <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#475569" }}>
          <input type="checkbox" name={`${prefix}_member`} className="accent-red-600" />
          Fund Member
        </label>
        <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#475569" }}>
          <input type="checkbox" name={`${prefix}_director`} className="accent-red-600" />
          Director / Secretary
        </label>
      </div>
    </div>
  );
}

export default function SmsfFormPage() {
  const [submitted, setSubmitted] = useState(false);
  const [hasCorporate, setHasCorporate] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields: string[] = [];
    data.forEach((val, key) => { if (val) fields.push(`${key}: ${val}`); });
    const body = fields.join("%0A");
    const fundName = data.get("fund_name") || "Client";
    window.location.href = `mailto:info@dsuper.com.au?subject=SMSF Transfer Application – ${fundName}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-lg w-full mx-4 rounded-2xl p-12 text-center bg-white" style={{ border: "1px solid #e2e8f0" }}>
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a1a" }}>Application Submitted</h2>
          <p className="mb-6" style={{ color: "#64748b" }}>Thank you — we'll review your transfer application and be in touch within 1 business day.</p>
          <Link href="/" className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#e6141e" }}>Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Transfer Existing Administration Services
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#64748b" }}>
            Complete the form below to transfer your SMSF administration to dSuper. Fields marked with <span style={{ color: "#e6141e" }}>*</span> are required.
          </p>
          <p className="mt-4 text-sm" style={{ color: "#64748b" }}>
            Prefer to ask a question first?{" "}
            <Link href="/contact" className="font-semibold hover:underline" style={{ color: "#e6141e" }}>Send an online enquiry</Link>
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 pb-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Fund Details */}
            <div className="bg-white rounded-2xl p-8 space-y-5" style={{ border: "1px solid #e2e8f0" }}>
              <h2 className="text-xl font-bold pb-3" style={{ color: "#1a1a1a", borderBottom: "2px solid #e6141e" }}>Fund Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name of SMSF" name="fund_name" required />
                <Field label="Establishment Date" name="establishment_date" type="date" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Fund ABN" name="fund_abn" required />
                <Field label="Fund TFN" name="fund_tfn" required />
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 space-y-5" style={{ border: "1px solid #e2e8f0" }}>
              <h2 className="text-xl font-bold pb-3" style={{ color: "#1a1a1a", borderBottom: "2px solid #e6141e" }}>Contact Details</h2>
              <Field label="Primary Contact Name" name="contact_name" required />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Phone" name="contact_phone" type="tel" required />
                <Field label="Email" name="contact_email" type="email" required />
              </div>
              <Field label="Street Address (Not PO Box)" name="address_street" required />
              <div className="grid grid-cols-3 gap-4">
                <Field label="Suburb / City" name="address_suburb" required />
                <Field label="State" name="address_state" required />
                <Field label="Postcode" name="address_postcode" required />
              </div>
              <Field label="Postal Address (if different from above)" name="postal_address" />
              <div className="grid grid-cols-3 gap-4">
                <Field label="Suburb / City" name="postal_suburb" />
                <Field label="State" name="postal_state" />
                <Field label="Postcode" name="postal_postcode" />
              </div>
            </div>

            {/* Section A: Corporate Trustee */}
            <div className="bg-white rounded-2xl p-8 space-y-5" style={{ border: "1px solid #e2e8f0" }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold" style={{ color: "#1a1a1a" }}>Section A: Corporate Trustee</h2>
                  <p className="text-sm mt-1" style={{ color: "#64748b" }}>If applicable</p>
                </div>
                <label className="flex items-center gap-2 text-sm cursor-pointer mt-1 whitespace-nowrap" style={{ color: "#475569" }}>
                  <input type="checkbox" className="accent-red-600" checked={hasCorporate} onChange={e => setHasCorporate(e.target.checked)} />
                  Has Corporate Trustee
                </label>
              </div>
              {hasCorporate && (
                <div className="space-y-5 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Company Name" name="company_name" />
                    <Field label="A.C.N" name="company_acn" />
                  </div>
                  <Field label="Registered Office Address (ASIC purposes)" name="company_address" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Does the Company occupy the premises?</p>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#475569" }}>
                          <input type="radio" name="company_occupies" value="Yes" className="accent-red-600" /> Yes
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#475569" }}>
                          <input type="radio" name="company_occupies" value="No" className="accent-red-600" /> No
                        </label>
                      </div>
                    </div>
                    <Field label="If not, who occupies the premises?" name="company_occupier" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Does the Company have the occupier's consent for the premises?</p>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#475569" }}>
                        <input type="radio" name="company_consent" value="Yes" className="accent-red-600" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#475569" }}>
                        <input type="radio" name="company_consent" value="No" className="accent-red-600" /> No
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section B: Trustees/Directors */}
            <div className="bg-white rounded-2xl p-8 space-y-6" style={{ border: "1px solid #e2e8f0" }}>
              <div>
                <h2 className="text-xl font-bold" style={{ color: "#1a1a1a" }}>Section B: Trustee / Directors</h2>
                <p className="text-sm mt-1" style={{ color: "#64748b" }}>Full legal names are required. Up to 6 trustees/directors.</p>
              </div>
              <TrusteeSection num={1} required={true} />
              <TrusteeSection num={2} required={false} />
              <TrusteeSection num={3} required={false} />
              <TrusteeSection num={4} required={false} />
              <TrusteeSection num={5} required={false} />
              <TrusteeSection num={6} required={false} />
            </div>

            {/* Section C: Declaration */}
            <div className="bg-white rounded-2xl p-8 space-y-5" style={{ border: "1px solid #e2e8f0" }}>
              <h2 className="text-xl font-bold pb-3" style={{ color: "#1a1a1a", borderBottom: "2px solid #e6141e" }}>Section C: Declaration</h2>

              <div className="space-y-4">
                {[
                  { name: "decl_true", label: "I/We declare that the information in this Application is true and correct at the time of completion" },
                  { name: "decl_privacy", label: "I/We agree that D SUPER SMSF PTY LTD may collect, use and store my personal information for the purposes of processing this application and to provide ongoing services" },
                  { name: "decl_asic", label: "For Corporate Trustees — I/We authorise D SUPER SMSF PTY LTD to lodge ASIC Form 362 to be appointed as the registered Agent for ASIC purposes" },
                  { name: "decl_tax", label: "I/We agree that D SUPER SMSF PTY LTD will be appointed as the Registered Tax Agent for the Fund" },
                  { name: "decl_release", label: "I/We agree to the release of information between D SUPER SMSF PTY LTD and my adviser or their firm, if details of an adviser have been provided or if the application was submitted by the adviser" },
                  { name: "decl_no_advice", label: "I/We acknowledge that the service provided by D SUPER SMSF PTY LTD does not constitute investment or financial advice" },
                ].map(({ name, label }) => (
                  <label key={name} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name={name} required={name !== "decl_asic"} className="mt-0.5 accent-red-600 flex-shrink-0" />
                    <span className="text-sm leading-relaxed" style={{ color: "#475569" }}>{label} {name !== "decl_asic" && <span style={{ color: "#e6141e" }}>*</span>}</span>
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <Field label="Date" name="decl_date" type="date" required />
                <div /> {/* spacer */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Trustee/Director Name" name="sign_1" required />
                <Field label="Trustee/Director Name" name="sign_2" />
                <Field label="Trustee/Director Name" name="sign_3" />
                <Field label="Trustee/Director Name" name="sign_4" />
                <Field label="Trustee/Director Name" name="sign_5" />
                <Field label="Trustee/Director Name" name="sign_6" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
              style={{ backgroundColor: "#e6141e" }}
            >
              Submit Transfer Application
            </button>
            <p className="text-xs text-center" style={{ color: "#94a3b8" }}>
              We respond within 1 business day. Your information is handled in accordance with our{" "}
              <Link href="/privacy" className="hover:underline" style={{ color: "#e6141e" }}>Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
