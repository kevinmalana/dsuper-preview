"use client";
import { useState } from "react";
import Link from "next/link";

/* ─── Reusable field components ─── */
function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
      />
    </div>
  );
}

function SectionHeader({ title, info }: { title: string; info?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-gray-900 pb-3 border-b-2 border-red-600">
        {title}
      </h2>
      {info && (
        <p className="mt-3 text-sm leading-relaxed rounded-lg px-4 py-3 bg-red-50 text-gray-600 border border-red-100">
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
    <div className="bg-gray-50 rounded-2xl p-6 space-y-4 border border-gray-200">
      <h4 className="font-bold text-base text-gray-900">
        Member {num}{" "}
        {required ? (
          <span className="text-sm font-normal text-red-600">* Required</span>
        ) : (
          <span className="text-sm font-normal text-gray-400">(Optional)</span>
        )}
      </h4>

      {/* Title / Given Name / Surname */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title {required && <span className="text-red-600">*</span>}
          </label>
          <select
            name={`${prefix}_title`}
            required={required}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
          >
            <option value="">Select…</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Dr</option>
            <option>Other</option>
          </select>
        </div>
        <Field
          label="Given Name"
          name={`${prefix}_given`}
          required={required}
          placeholder="Given name"
        />
        <Field
          label="Surname"
          name={`${prefix}_surname`}
          required={required}
          placeholder="Surname"
        />
      </div>

      {/* DOB / TFN / Residential Address */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field
          label="Date of Birth"
          name={`${prefix}_dob`}
          type="date"
          required={required}
        />
        <Field
          label="TFN"
          name={`${prefix}_tfn`}
          required={required}
          placeholder="Tax File Number"
        />
        <Field
          label="Residential Address"
          name={`${prefix}_address`}
          required={required}
          placeholder="Full residential address"
        />
      </div>

      {/* Role checkboxes */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Role</p>
        <div className="flex flex-wrap gap-6">
          {["Individual Trustee", "Member", "Director"].map((role) => (
            <label
              key={role}
              className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
            >
              <input
                type="checkbox"
                name={`${prefix}_role_${role.toLowerCase().replace(/ /g, "_")}`}
                className="w-4 h-4 rounded accent-red-600"
              />
              {role}
            </label>
          ))}
        </div>
      </div>

      {/* Employed question */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Is this member employed by another member and not related?
        </p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="radio"
              name={`${prefix}_employed`}
              value="Yes"
              className="accent-red-600"
            />{" "}
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="radio"
              name={`${prefix}_employed`}
              value="No"
              defaultChecked
              className="accent-red-600"
            />{" "}
            No
          </label>
        </div>
      </div>

      {/* Disqualified question */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Are you a disqualified person under superannuation laws?
        </p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="radio"
              name={`${prefix}_disqualified`}
              value="Yes"
              className="accent-red-600"
            />{" "}
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="radio"
              name={`${prefix}_disqualified`}
              value="No"
              defaultChecked
              className="accent-red-600"
            />{" "}
            No
          </label>
        </div>
      </div>

      {/* Corporate trustee incorporation details */}
      <div className="bg-white rounded-xl p-4 space-y-3 border border-gray-200">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          If we are incorporating the corporate trustee, complete below
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="City of Birth" name={`${prefix}_birth_city`} placeholder="City" />
          <Field
            label="State of Birth"
            name={`${prefix}_birth_state`}
            placeholder="State"
          />
          <Field
            label="Country of Birth"
            name={`${prefix}_birth_country`}
            placeholder="Country"
          />
        </div>
        <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            name={`${prefix}_beneficial_shareholder`}
            className="mt-0.5 flex-shrink-0 accent-red-600"
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
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
        <div className="max-w-lg w-full mx-auto bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6 text-3xl">
            ✅
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted</h2>
          <p className="text-gray-500 mb-2">
            Thank you — your SMSF setup application has been sent to our team.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            We&apos;ll be in touch within 1 business day to confirm next steps.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 rounded-full mb-6 border border-red-100">
            Setup Application
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            SMSF Setup Application
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Complete the form below to set up your new SMSF with dSuper. Fields marked with{" "}
            <span className="text-red-600">*</span> are required.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Have questions?{" "}
            <Link href="/contact" className="font-semibold text-red-600 hover:underline">
              Contact us first
            </Link>
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Setup Type */}
            <div className="bg-white rounded-2xl p-8 space-y-6 border border-gray-200 shadow-sm">
              <SectionHeader title="Set-up Type" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Setup type */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">Set-up type</p>
                  <label className="flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer border-2 border-red-600 bg-red-50/30">
                    <input
                      type="radio"
                      name="setup_type"
                      value="New SMSF"
                      defaultChecked
                      className="accent-red-600"
                    />
                    <span className="text-sm font-medium text-gray-900">New SMSF</span>
                  </label>
                </div>

                {/* Administration type */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Choose one <span className="text-red-600">*</span>
                  </p>
                  <div className="space-y-3">
                    {[
                      { val: "daily", label: "Daily Administration" },
                      { val: "annual", label: "Annual Administration" },
                    ].map((opt) => (
                      <label
                        key={opt.val}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition-all border-2 ${
                          adminType === opt.val
                            ? "border-red-600 bg-red-50/30"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="admin_type"
                          value={opt.val}
                          required
                          className="accent-red-600"
                          onChange={() => setAdminType(opt.val as "daily" | "annual")}
                        />
                        <span className="text-sm font-medium text-gray-900">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Contact */}
            <div className="bg-white rounded-2xl p-8 space-y-6 border border-gray-200 shadow-sm">
              <SectionHeader title="Primary Contact" />

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="contact_is_trustee"
                  className="w-4 h-4 rounded accent-red-600"
                />
                <span className="text-sm font-medium text-gray-700">
                  I am a Trustee/Director
                </span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="contact_title"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  >
                    <option value="">Select…</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                    <option>Dr</option>
                    <option>Other</option>
                  </select>
                </div>
                <Field
                  label="First Name"
                  name="contact_first"
                  required
                  placeholder="First name"
                />
                <Field
                  label="Last Name"
                  name="contact_last"
                  required
                  placeholder="Last name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Field
                  label="Email"
                  name="contact_email"
                  type="email"
                  required
                  placeholder="your@email.com"
                />
                <Field
                  label="Work Number"
                  name="contact_work"
                  type="tel"
                  required
                  placeholder="(02) 0000 0000"
                />
                <Field
                  label="Mobile"
                  name="contact_mobile"
                  type="tel"
                  required
                  placeholder="0400 000 000"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Address"
                  name="contact_address"
                  required
                  placeholder="Street address"
                />
                <Field
                  label="Postal Address (if different)"
                  name="contact_postal"
                  placeholder="Postal address"
                />
              </div>
            </div>

            {/* Section A: Proposed Fund Name */}
            <div className="bg-white rounded-2xl p-8 space-y-6 border border-gray-200 shadow-sm">
              <SectionHeader
                title="Section A: Proposed Fund Name"
                info="Provide a name for the fund. For example, Citizen Superannuation Fund."
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Fund Name (Superannuation Fund){" "}
                  <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    name="preferred_fund_name"
                    required
                    placeholder="e.g. Smith"
                    className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  />
                  <span className="text-sm font-medium text-gray-500 whitespace-nowrap px-3 py-2.5 rounded-lg bg-gray-100 border border-gray-200">
                    Superannuation Fund
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Trustee of the fund <span className="text-red-600">*</span>
                </p>
                <div className="space-y-3">
                  {[
                    {
                      val: "individual",
                      label: "Individual Trustee – Complete Section C",
                    },
                    {
                      val: "corporate",
                      label: "Corporate Trustee – Complete Section B & C",
                    },
                  ].map((opt) => (
                    <label
                      key={opt.val}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition-all border-2 ${
                        trusteeType === opt.val
                          ? "border-red-600 bg-red-50/30"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="trustee_type"
                        value={opt.val}
                        required
                        className="accent-red-600"
                        onChange={() =>
                          setTrusteeType(opt.val as "individual" | "corporate")
                        }
                      />
                      <span className="text-sm font-medium text-gray-900">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Section B: Corporate Trustee Details (conditional) */}
            {trusteeType === "corporate" && (
              <div className="bg-white rounded-2xl p-8 space-y-6 border border-gray-200 shadow-sm">
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

                <div>
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      name="corp_existing"
                      className="w-4 h-4 rounded accent-red-600"
                      checked={existingCompany}
                      onChange={(e) => setExistingCompany(e.target.checked)}
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Existing company as trustee
                    </span>
                  </label>

                  {existingCompany && (
                    <div className="space-y-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                      <Field
                        label="Company Name"
                        name="corp_existing_name"
                        placeholder="Existing company name"
                      />
                      <Field
                        label="Registered Address"
                        name="corp_existing_address"
                        placeholder="Registered address"
                      />
                      <Field
                        label="Company ACN/ABN"
                        name="corp_existing_acn"
                        placeholder="ACN or ABN"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Section C: Trustee and Member Details */}
            <div className="bg-white rounded-2xl p-8 space-y-6 border border-gray-200 shadow-sm">
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

            {/* Section D: Declaration */}
            <div className="bg-white rounded-2xl p-8 space-y-6 border border-gray-200 shadow-sm">
              <SectionHeader title="Section D: Declaration" />

              <p className="text-sm text-gray-600 leading-relaxed">
                By submitting this application form, you acknowledge and accept all of the
                following terms of our service:
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: "decl_true",
                    label:
                      "I/We declare that the information in this Application is true and correct at the time of completion.",
                    required: true,
                  },
                  {
                    name: "decl_execution_only",
                    label:
                      "I/We confirm that this is a set-up of a SMSF via 'Execution only service' and does not constitute any financial or investment advice.",
                    required: true,
                  },
                  {
                    name: "decl_no_licence",
                    label:
                      "I/We agree that D SUPER SMSF PTY LTD and its employees or directors are not licensed to provide any advice on the establishment of an SMSF and have not influenced my/our decision to establish an SMSF.",
                    required: true,
                  },
                  {
                    name: "decl_no_personal_advice",
                    label:
                      "I/We acknowledge that establishing an SMSF via this form does not take into account my/our personal objectives and financial situation or needs and I/we have independently determined that establishing an SMSF is appropriate for my/our particular circumstances.",
                    required: true,
                  },
                  {
                    name: "decl_privacy",
                    label:
                      "I/We agree that D SUPER SMSF PTY LTD may collect, use and store my/our personal information for the purposes of processing this application to set up an SMSF and to lodge relevant forms with the ATO on my/our behalf.",
                    required: true,
                  },
                  {
                    name: "decl_asic",
                    label:
                      "For Corporate Trustees, I/We authorise D SUPER SMSF PTY LTD to lodge ASIC Form 362 to be appointed as the registered Agent for ASIC purpose.",
                    required: false,
                  },
                  {
                    name: "decl_tax_agent",
                    label:
                      "I/We agree that D SUPER SMSF PTY LTD will be appointed as the Registered Tax Agent for the SMSF and will be the address for all ATO correspondence (unless advised otherwise)",
                    required: true,
                  },
                ].map(({ name, label, required }) => (
                  <label key={name} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name={name}
                      required={required}
                      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded accent-red-600"
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {label}
                      {required && <span className="text-red-600"> *</span>}
                      {!required && (
                        <span className="ml-1 text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-400 border border-gray-200">
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
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Trustee / Director Name(s) <span className="text-red-600">*</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Trustee/Director 1"
                    name="sign_1"
                    required
                    placeholder="Full legal name"
                  />
                  <Field
                    label="Trustee/Director 2"
                    name="sign_2"
                    placeholder="Full legal name"
                  />
                  <Field
                    label="Trustee/Director 3"
                    name="sign_3"
                    placeholder="Full legal name"
                  />
                  <Field
                    label="Trustee/Director 4"
                    name="sign_4"
                    placeholder="Full legal name"
                  />
                  <Field
                    label="Trustee/Director 5"
                    name="sign_5"
                    placeholder="Full legal name"
                  />
                  <Field
                    label="Trustee/Director 6"
                    name="sign_6"
                    placeholder="Full legal name"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-lg bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all duration-300"
            >
              Submit SMSF Setup Application →
            </button>

            <p className="text-xs text-center text-gray-400">
              We respond within 1 business day. Your information is handled in accordance with
              our{" "}
              <Link href="/privacy" className="text-red-600 hover:underline">
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
