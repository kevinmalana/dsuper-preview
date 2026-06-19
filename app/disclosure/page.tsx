import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosure | dSuper SMSF",
  description: "Financial services disclosure statement for dSuper SMSF.",
};

export default function DisclosurePage() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#e6141e" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>Disclosure</h1>
          <p className="text-lg max-w-2xl" style={{ color: "#64748b" }}>Important disclosures regarding our services and obligations.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8" style={{ color: "#475569" }}>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>Tax Agent Disclosure</h2>
              <p className="text-sm leading-relaxed">
                dSuper SMSF is a registered Tax Agent with the Tax Practitioners Board (TPB). As a registered Tax Agent, we are required to meet specific disclosure obligations in relation to the services we provide.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Our registration details can be verified on the Tax Practitioners Board Register at <a href="https://www.tpb.gov.au" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: "#e6141e" }}>www.tpb.gov.au</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>Financial Advice Disclosure</h2>
              <p className="text-sm leading-relaxed">
                dSuper SMSF does not provide financial product advice and does not hold an Australian Financial Services Licence (AFSL). We provide accounting, tax and compliance services only.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Any information or guidance provided by dSuper SMSF is general in nature and does not take into account your individual circumstances, objectives, financial situation or needs. You should consider whether the information is appropriate to your needs and seek independent financial advice from a licensed adviser before making any financial decisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>CPA Australia Membership</h2>
              <p className="text-sm leading-relaxed">
                Our team members are Certified Practising Accountants (CPA) and adhere to the strict professional and ethical standards set by CPA Australia, including their quality review programs. As CPA members, we are bound by the CPA Australia Code of Professional Conduct.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>ASIC Agent Disclosure</h2>
              <p className="text-sm leading-relaxed">
                dSuper SMSF acts as ASIC agent for Corporate Trustee and Bare Trustee companies associated with SMSFs we administer. This service is provided as part of our administration package.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>Audit Independence</h2>
              <p className="text-sm leading-relaxed">
                All SMSF audits are coordinated through independent, approved auditors who are registered with the Australian Securities & Investments Commission (ASIC). dSuper SMSF does not conduct audits of the funds it administers, ensuring complete independence as required by superannuation law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>Privacy</h2>
              <p className="text-sm leading-relaxed">
                The collection and handling of your personal information is governed by our <a href="/privacy" className="font-medium hover:underline" style={{ color: "#e6141e" }}>Privacy Policy</a>. We are committed to protecting your personal information in accordance with the Australian Privacy Principles.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>Contact Us</h2>
              <p className="text-sm leading-relaxed">
                If you have any questions about these disclosures, please contact us at{" "}
                <a href="mailto:info@dsuper.com.au" className="font-medium hover:underline" style={{ color: "#e6141e" }}>info@dsuper.com.au</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
