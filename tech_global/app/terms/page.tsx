import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  const sections = [
    { id: "website-info", title: "01. Website Information & Accuracy" },
    { id: "quotations", title: "02. Inquiries & Quotation Requests" },
    { id: "contracts", title: "03. Written Agreements & Scope" },
    { id: "estimates", title: "04. Pricing & Estimates" },
    { id: "scheduling", title: "05. Project Scheduling & Execution" },
    { id: "intellectual-property", title: "06. Intellectual Property & Photography" },
    { id: "external-links", title: "07. External Links" },
    { id: "liability", title: "08. Limitation of Liability" },
    { id: "jurisdiction", title: "09. Governing Law" },
    { id: "contact-details", title: "10. Contact Details" },
  ];

  return (
    <main className="min-h-screen bg-[#111111] text-[#F5F4EF]">
      <Navbar />

      {/* Header Banner */}
      <section className="border-b border-[#222222] pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-xs font-mono uppercase text-gray-500 mb-6">
            <span className="text-[#707C27] font-bold">[ LEGAL COMPLIANCE ]</span>
            <span>LAST UPDATED: OCTOBER 2026</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-extrabold uppercase leading-none mb-6">
            TERMS OF SERVICE
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            These terms govern your access to and use of the Tech Global website and set forth operational boundaries for inquiries, technical specifications, and site services.
          </p>
        </div>
      </section>

      {/* Main Content Layout with Table of Contents */}
      <section className="py-16 px-6 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          
          {/* Table of Contents (Sticky Desktop Sidebar) */}
          <aside className="md:col-span-4 hidden md:block">
            <div className="sticky top-24 border border-[#222222] bg-[#1E2330]/30 p-6">
              <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-4 pb-2 border-b border-[#222222]">
                TERMS NAVIGATION
              </span>
              <ul className="space-y-2.5 text-xs font-mono text-gray-400">
                {sections.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-[#F5F4EF] transition-colors block py-0.5 truncate"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-4 border-t border-[#222222]">
                <Link
                  href="/"
                  className="text-xs font-mono text-[#707C27] hover:text-[#F5F4EF] transition-colors uppercase tracking-widest flex items-center gap-2"
                >
                  <span>← BACK TO MAIN SITE</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Policy Text Column */}
          <div className="md:col-span-8 max-w-3xl space-y-12 text-sm sm:text-base text-gray-300 leading-relaxed">
            
            <section id="website-info" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                01. Website Information & Accuracy
              </h2>
              <p>
                The information provided on this website is for general informational and preliminary specification purposes only. While Tech Global makes reasonable efforts to maintain accuracy, material technical specs, product formulations, and service methodologies are subject to site-specific evaluations and may update without notice.
              </p>
            </section>

            <section id="quotations" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                02. Inquiries & Quotation Requests
              </h2>
              <p>
                Submitting a project scope, inquiry form, or request for quotation via this website does not constitute a binding civil contracting agreement. All preliminary inquiries are subject to technical review and verified site inspections before formal acceptance.
              </p>
            </section>

            <section id="contracts" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                03. Written Agreements & Scope
              </h2>
              <p>
                All binding civil construction, masonry, industrial painting, epoxy flooring, and waterproofing commitments are exclusively governed by formal, written bilateral contracts executed directly between Tech Global and the client. Website contents do not supersede written legal agreements.
              </p>
            </section>

            <section id="estimates" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                04. Pricing & Estimates
              </h2>
              <p>
                Any preliminary cost indications or budget ranges mentioned online are non-binding visual estimates. Final project pricing is determined through comprehensive bill of quantities (BOQ) evaluations and site inspection reports.
              </p>
            </section>

            <section id="scheduling" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                05. Project Scheduling & Execution
              </h2>
              <p>
                Project timelines and completion milestones referenced on this site represent standard operational baselines. Specific site schedules are established through direct contract negotiations and may be modified due to environmental conditions, structural site variations, or material availability.
              </p>
            </section>

            <section id="intellectual-property" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                06. Intellectual Property & Photography
              </h2>
              <p>
                All website text, layout design, visual branding assets, and proprietary technical diagrams are the property of Tech Global. Selected photographic material representing completed facility work remains the intellectual property of Tech Global, its respective clients, or authorized visual partners. Reproduction without express written permission is prohibited.
              </p>
            </section>

            <section id="external-links" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                07. External Links
              </h2>
              <p>
                This website may contain links to third-party technical reference portals or partner sites. Tech Global is not responsible for the content, privacy practices, or operational policies of external web domains.
              </p>
            </section>

            <section id="liability" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                08. Limitation of Liability
              </h2>
              <p>
                Tech Global shall not be held liable for any direct, indirect, or incidental damages arising from the use of, or inability to use, information contained on this website. Site reliance is at the user's own discretion.
              </p>
            </section>

            <section id="jurisdiction" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                09. Governing Law
              </h2>
              <p>
                These terms and any non-contractual disputes arising from website use shall be governed by and construed in accordance with the applicable laws of Pakistan.
              </p>
            </section>

            <section id="contact-details" className="scroll-mt-24 space-y-3 p-6 border border-[#222222] bg-[#1E2330]/40">
              <h2 className="font-display text-xl font-bold uppercase text-[#F5F4EF] mb-2">
                10. Contact Details
              </h2>
              <p className="text-xs text-gray-400 font-mono mb-4">
                FOR QUESTIONS REGARDING THESE TERMS:
              </p>
              <div className="text-xs font-mono space-y-1 text-gray-300">
                <div>TECH GLOBAL CONTRACTORS</div>
                <div>KARACHI, PAKISTAN</div>
                <div>EMAIL: INQUIRIES@TECHGLOBAL.COM</div>
              </div>
            </section>

            <div className="pt-6 border-t border-[#222222] md:hidden">
              <Link
                href="/"
                className="text-xs font-mono text-[#707C27] hover:text-[#F5F4EF] transition-colors uppercase tracking-widest flex items-center gap-2"
              >
                <span>← BACK TO MAIN SITE</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}