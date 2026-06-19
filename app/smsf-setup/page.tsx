"use client";
import { useState } from "react";
import Link from "next/link";

/* ─── Reusable field components ─── */
function Field({
  label, name, type = "text", required = false, placeholder = "",
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
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
        className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-white"
        style={{ borderColor: "#e5e5e5", color: "#1a1a1a" }}
      />
    </div>
  );
}

function SectionHeader({ title, info }: { title: string; info?: string }) {
  return (
    <div className="mb-6">
      <h2
        className="text-xl font-bold pb-3"
        style={{ color: "#1a1a1a", borderBottom: "2px solid #e6141e" }}
      >
        {title}
      </h2>
      {info && (
        <p className="mt-3 text-sm leading-relaxed rounded-lg px-4 py-3"
          style={{ backgroundColor: "rgba(230,20,30,0.04)", color: "#555555", border: "1px solid rgba(230,20,30,0.1)" }}>
          {info}
        </p>
      )}
    </div>
  );
}

/* ─── Member sub-form ─── */
function MemberSection({ num, required }: { num: number; required: boolean }) {
  const prefix = `member_${num}`;
  return (
    <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: "#f9f9f9", border: "1px solid #e5e5e5" }}>
      <h4 className="font-bold text-base" style={{ color: "#1a1a1a" }}>
        Member {num}{" "}
        {required ? (
          <span className="text-sm font-normal" style={{ color: "#e6141e" }}>* Required</span>
        ) : (
          <span className="text-sm font-normal" style={{ color: "#888" }}>(Optional)</span>
        )}
      </h4>

      {/* Title / Given Name / Surname */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>
            Title {required && <span style={{ color: "#e6141e" }}>*</span>}
          </label>
          <select
            name={`${prefix}_title`}
            required={required}
            className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-white"
            style={{ borderColor: "#e5e5e5", color: "#1a1a1a" }}
          >
            <option value="">Select…</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Dr</option>
            <option>Other</option>
          </select>
        </div>
        <Field label="Given Name" name={`${prefix}_given`} required={required} placeholder="Given name" />
        <Field label="Surname" name={`${prefix}_surname`} required={required} placeholder="Surname" />
      </div>

      {/* DOB / TFN / Residential Address */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Date of Birth" name={`${prefix}_dob`} type="date" required={required} />
        <Field label="TFN" name={`${prefix}_tfn`} required={required} placeholder="Tax File Number" />
        <Field label="Residential Address" name={`${prefix}_address`} required={required} placeholder="Full residential address" />
      </div>

      {/* Role checkboxes */}
      <div>
        <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>Role</p>
        <div className="flex flex-wrap gap-6">
          {["Individual Trustee", "Member", "Director"].map((role) => (
            <label key={role} className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#555555" }}>
              <input
                type="checkbox"
                name={`${prefix}_role_${role.toLowerCase().replace(/ /g, "_")}`}
                className="w-4 h-4 rounded"
                style={{ accentColor: "#e6141e" }}
              />
              {role}
            </label>
          ))}
        </div>
      </div>

      {/* Employed question */}
      <div>
        <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>
          Is this member employed by another member and not related?
        </p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#555555" }}>
            <input type="radio" name={`${prefix}_employed`} value="Yes" style={{ accentColor: "#e6141e" }} /> Yes
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#555555" }}>
            <input type="radio" name={`${prefix}_employed`} value="No" defaultChecked style={{ accentColor: "#e6141e" }} /> No
          </label>
        </div>
      </div>

      {/* Disqualified question */}
      <div>
        <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>
          Are you a disqualified person under superannuation laws?
        </p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#555555" }}>
            <input type="radio" name={`${prefix}_disqualified`} value="Yes" style={{ accentColor: "#e6141e" }} /> Yes
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#555555" }}>
            <input type="radio" name={`${prefix}_disqualified`} value="No" defaultChecked style={{ accentColor: "#e6141e" }} /> No
          </label>
        </div>
      </div>

      {/* Corporate trustee incorporation details */}
      <div className="rounded-lg p-4 space-y-3" style={{ backgroundColor: "#ffffff", border: "1px solid #e5e5e5" }}>
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#888" }}>
          If we are incorporating the corporate trustee, complete below
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="City of Birth" name={`${prefix}_birth_city`} placeholder="City" />
          <Field label="State of Birth" name={`${prefix}_birth_state`} placeholder="State" />
          <Field label="Country of Birth" name={`${prefix}_birth_country`} placeholder="Country" />
        </div>
        <label className="flex items-start gap-2 text-sm cursor-pointer" style={{ color: "#555555" }}>
          <input
            type="checkbox"
            name={`${prefix}_beneficial_shareholder`}
            className="mt-0.5 flex-shrink-0"
            style={{ accentColor: "#e6141e" }}
          />
          <span>Beneficial shareholder – 1 ordinary fully paid $1 share</span>
        </label>
      </div>
    </div>
  );
}

/* ─── Main page component ─── */
export default function SmsfSetupPage() {
  const [submitted, setSubmitted] = useState(false);
  const [trusteeType, setTrusteeType] = useState<"individual" | "corporate" | "">("");
  const [existingCompany, setExistingCompany] = useState(false);
  const [adminType, setAdminType] = useState<"daily" | "annual" | "">("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fundName = data.get("preferred_fund_name") || "New SMSF";
    const fields: string[] = [];
    data.forEach((val, key) => {
      if (val) fields.push(`${key}: ${val}`);
    });
    const body = encodeURIComponent(fields.join("\n"));
    window.location.href = `mailto:info@dsuper.com.au?subject=SMSF Setup Application – ${fundName} Superannuation Fund&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#f9f9f9" }}>
        <div
          className="max-w-lg w-full mx-auto rounded-2xl p-12 text-center bg-white"
          style={{ border: "1px solid #e5e5e5" }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
            style={{ backgroundColor: "rgba(140,210,120,0.15)" }}
          >
            ✅
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a1a" }}>
            Application Submitted
          </h2>
          <p className="mb-2" style={{ color: "#555555" }}>
            Thank you — your SMSF setup application has been sent to our team.
          </p>
          <p className="text-sm mb-8" style={{ color: "#888" }}>
            We'll be in touch within 1 business day to confirm next steps.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#e6141e" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)" }}
      >
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            SMSF Setup Application
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#555555" }}>
            Complete the form below to set up your new SMSF with dSuper. Fields marked with{" "}
            <span style={{ color: "#e6141e" }}>*</span> are required.
          </p>
          <p className="mt-4 text-sm" style={{ color: "#555555" }}>
            Have questions?{" "}
            <Link href="/contact" className="font-semibold hover:underline" style={{ color: "#e6141e" }}>
              Contact us first
            </Link>
          </p>
        </div>
      </section>

      {/* ─── Form ─── */}
      <section className="py-12 pb-24" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* ── Setup Type ── */}
            <div className="bg-white rounded-2xl p-8 space-y-6" style={{ border: "1px solid #e5e5e5" }}>
              <SectionHeader title="Set-up Type" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Setup type */}
                <div>
                  <p className="text-sm font-medium mb-3" style={{ color: "#1a1a1a" }}>
                    Set-up type
                  </p>
                  <label
                    className="flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer"
                    style={{ border: "2px solid #e6141e", backgroundColor: "rgba(230,20,30,0.03)" }}
                  >
                    <input
                      type="radio"
                      name="setup_type"
                      value="New SMSF"
                      defaultChecked
                      style={{ accentColor: "#e6141e" }}
                    />
                    <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>New SMSF</span>
                  </label>
                </div>

                {/* Administration type */}
                <div>
                  <p className="text-sm font-medium mb-3" style={{ color: "#1a1a1a" }}>
                    Choose one <span style={{ color: "#e6141e" }}>*</span>
                  </p>
                  <div className="space-y-3">
                    {[
                      { val: "daily", label: "Daily Administration" },
                      { val: "annual", label: "Annual Administration" },
                    ].map((opt) => (
                      <label
                        key={opt.val}
                        className="flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition-all"
                        style={{
                          border: adminType === opt.val ? "2px solid #e6141e" : "2px solid #e5e5e5",
                          backgroundColor: adminType === opt.val ? "rgba(230,20,30,0.03)" : "#f9f9f9",
                        }}
                      >
                        <input
                          type="radio"
                          name="admin_type"
                          value={opt.val}
                          required
                          style={{ accentColor: "#e6141e" }}
                          onChange={() => setAdminType(opt.val as "daily" | "annual")}
                        />
                        <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Primary Contact ── */}
            <div className="bg-white rounded-2xl p-8 space-y-6" style={{ border: "1px solid #e5e5e5" }}>
              <SectionHeader title="Primary Contact" />

              {/* I am a Trustee/Director checkbox */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="contact_is_trustee"
                  className="w-4 h-4 rounded"
                  style={{ accentColor: "#e6141e" }}
                />
                <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>I am a Trustee/Director</span>
              </label>

              {/* Title / First Name / Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>
                    Title <span style={{ color: "#e6141e" }}>*</span>
                  </label>
                  <select
                    name="contact_title"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ borderColor: "#e5e5e5", color: "#1a1a1a" }}
                  >
                    <option value="">Select…</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                    <option>Dr</option>
                    <option>Other</option>
                  </select>
                </div>
                <Field label="First Name" name="contact_first" required placeholder="First name" />
                <Field label="Last Name" name="contact_last" required placeholder="Last name" />
              </div>

              {/* Email / Work Number / Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Field label="Email" name="contact_email" type="email" required placeholder="your@email.com" />
                <Field label="Work Number" name="contact_work" type="tel" required placeholder="(02) 0000 0000" />
                <Field label="Mobile" name="contact_mobile" type="tel" required placeholder="0400 000 000" />
              </div>

              {/* Address / Postal Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Address" name="contact_address" required placeholder="Street address" />
                <Field label="Postal Address (if different)" name="contact_postal" placeholder="Postal address" />
              </div>
            </div>

            {/* ── Section A: Proposed Fund Name ── */}
            <div className="bg-white rounded-2xl p-8 space-y-6" style={{ border: "1px solid #e5e5e5" }}>
              <SectionHeader
                title="Section A: Proposed Fund Name"
                info="Provide a name for the fund. For example, Citizen Superannuation Fund."
              />

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>
                  Preferred Fund Name (Superannuation Fund) <span style={{ color: "#e6141e" }}>*</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    name="preferred_fund_name"
                    required
                    placeholder="e.g. Smith"
                    className="flex-1 px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ borderColor: "#e5e5e5", color: "#1a1a1a" }}
                  />
                  <span
                    className="text-sm font-medium whitespace-nowrap px-3 py-2.5 rounded-lg"
                    style={{ backgroundColor: "#f9f9f9", border: "1px solid #e5e5e5", color: "#555555" }}
                  >
                    Superannuation Fund
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-3" style={{ color: "#1a1a1a" }}>
                  Trustee of the fund <span style={{ color: "#e6141e" }}>*</span>
                </p>
                <div className="space-y-3">
                  {[
                    { val: "individual", label: "Individual Trustee – Complete Section C" },
                    { val: "corporate", label: "Corporate Trustee – Complete Section B & C" },
                  ].map((opt) => (
                    <label
                      key={opt.val}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition-all"
                      style={{
                        border: trusteeType === opt.val ? "2px solid #e6141e" : "2px solid #e5e5e5",
                        backgroundColor: trusteeType === opt.val ? "rgba(230,20,30,0.03)" : "#f9f9f9",
                      }}
                    >
                      <input
                        type="radio"
                        name="trustee_type"
                        value={opt.val}
                        required
                        style={{ accentColor: "#e6141e" }}
                        onChange={() => setTrusteeType(opt.val as "individual" | "corporate")}
                      />
                      <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Section B: Corporate Trustee Details (conditional) ── */}
            {trusteeType === "corporate" && (
              <div className="bg-white rounded-2xl p-8 space-y-6" style={{ border: "1px solid #e5e5e5" }}>
                <SectionHeader
                  title="Section B: Corporate Trustee Details"
                  info="If a trustee company is required, we can arrange for the incorporation of the company."
                />

                <Field
                  label="Preferred Company Name"
                  name="corp_preferred_name"
                  placeholder="First choice company name"
                />
                <Field
                  label="Second Preference Company Name"
                  name="corp_second_name"
                  placeholder="Second choice company name"
                />
                <Field
                  label="Registered Address"
                  name="corp_registered_address"
                  placeholder="Registered address for the company"
                />

                {/* Existing company checkbox */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      name="corp_existing"
                      className="w-4 h-4 rounded"
                      style={{ accentColor: "#e6141e" }}
                      checked={existingCompany}
                      onChange={(e) => setExistingCompany(e.target.checked)}
                    />
                    <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Existing company as trustee</span>
                  </label>

                  {existingCompany && (
                    <div className="space-y-4 rounded-xl p-5" style={{ backgroundColor: "#f9f9f9", border: "1px solid #e5e5e5" }}>
                      <Field label="Company Name" name="corp_existing_name" placeholder="Existing company name" />
                      <Field label="Registered Address" name="corp_existing_address" placeholder="Registered address" />
                      <Field label="Company ACN/ABN" name="corp_existing_acn" placeholder="ACN or ABN" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Section C: Trustee and Member Details ── */}
            <div className="bg-white rounded-2xl p-8 space-y-6" style={{ border: "1px solid #e5e5e5" }}>
              <SectionHeader
                title="Section C: Trustee and Member Details"
                info="A SMSF may have up to 4 members and ALL members must be individual trustee or director of the trustee company. If the fund has only 1 member and the trustee is not a company there must be one other individual trustee. A member cannot be employed by another member or trustee unless they are relatives."
              />

              <MemberSection num={1} required={true} />
              <MemberSection num={2} required={false} />
              <MemberSection num={3} required={false} />
              <MemberSection num={4} required={false} />
              <MemberSection num={5} required={false} />
              <MemberSection num={6} required={false} />
            </div>

            {/* ── Section D: Declaration ── */}
            <div className="bg-white rounded-2xl p-8 space-y-6" style={{ border: "1px solid #e5e5e5" }}>
              <SectionHeader title="Section D: Declaration" />

              <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>
                By submitting this application form, you acknowledge and accept all of the following terms of our service:
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: "decl_true",
                    label: "I/We declare that the information in this Application is true and correct at the time of completion.",
                    required: true,
                  },
                  {
                    name: "decl_execution_only",
                    label: "I/We confirm that this is a set-up of a SMSF via 'Execution only service' and does not constitute any financial or investment advice.",
                    required: true,
                  },
                  {
                    name: "decl_no_licence",
                    label: "I/We agree that D SUPER SMSF PTY LTD and its employees or directors are not licensed to provide any advice on the establishment of an SMSF and have not influenced my/our decision to establish an SMSF.",
                    required: true,
                  },
                  {
                    name: "decl_no_personal_advice",
                    label: "I/We acknowledge that establishing an SMSF via this form does not take into account my/our personal objectives and financial situation or needs and I/we have independently determined that establishing an SMSF is appropriate for my/our particular circumstances.",
                    required: true,
                  },
                  {
                    name: "decl_privacy",
                    label: "I/We agree that D SUPER SMSF PTY LTD may collect, use and store my/our personal information for the purposes of processing this application to set up an SMSF and to lodge relevant forms with the ATO on my/our behalf.",
                    required: true,
                  },
                  {
                    name: "decl_asic",
                    label: "For Corporate Trustees, I/We authorise D SUPER SMSF PTY LTD to lodge ASIC Form 362 to be appointed as the registered Agent for ASIC purpose.",
                    required: false,
                  },
                  {
                    name: "decl_tax_agent",
                    label: "I/We agree that D SUPER SMSF PTY LTD will be appointed as the Registered Tax Agent for the SMSF and will be the address for all ATO correspondence (unless advised otherwise)",
                    required: true,
                  },
                ].map(({ name, label, required }) => (
                  <label key={name} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name={name}
                      required={required}
                      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded"
                      style={{ accentColor: "#e6141e" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "#555555" }}>
                      {label}
                      {required && <span style={{ color: "#e6141e" }}> *</span>}
                      {!required && (
                        <span
                          className="ml-1 text-xs px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: "#f9f9f9", color: "#888", border: "1px solid #e5e5e5" }}
                        >
                          Corporate Trustee only
                        </span>
                      )}
                    </span>
                  </label>
                ))}
              </div>

              {/* Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <Field label="Date" name="decl_date" type="date" required />
                <div />
              </div>

              {/* Trustee/Director Names */}
              <div>
                <p className="text-sm font-medium mb-3" style={{ color: "#1a1a1a" }}>
                  Trustee / Director Name(s) <span style={{ color: "#e6141e" }}>*</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Trustee/Director 1" name="sign_1" required placeholder="Full legal name" />
                  <Field label="Trustee/Director 2" name="sign_2" placeholder="Full legal name" />
                  <Field label="Trustee/Director 3" name="sign_3" placeholder="Full legal name" />
                  <Field label="Trustee/Director 4" name="sign_4" placeholder="Full legal name" />
                  <Field label="Trustee/Director 5" name="sign_5" placeholder="Full legal name" />
                  <Field label="Trustee/Director 6" name="sign_6" placeholder="Full legal name" />
                </div>
              </div>
            </div>

            {/* ── Submit ── */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-all duration-200 shadow-lg"
              style={{ backgroundColor: "#e6141e" }}
            >
              Submit SMSF Setup Application →
            </button>

            <p className="text-xs text-center" style={{ color: "#888" }}>
              We respond within 1 business day. Your information is handled in accordance with our{" "}
              <Link href="/privacy" className="hover:underline" style={{ color: "#e6141e" }}>
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
