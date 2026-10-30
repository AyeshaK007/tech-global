import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const sections = [
    { id: "collection", title: "01. Information We Collect" },
    { id: "purpose", title: "02. How Information Is Used" },
    { id: "sharing", title: "03. Data Sharing & Third Parties" },
    { id: "retention", title: "04. Data Retention" },
    { id: "security", title: "05. Data Security Measures" },
    { id: "cookies", title: "06. Cookies & Analytics" },
    { id: "rights", title: "07. User Rights & Data Requests" },
    { id: "contact", title: "08. Privacy Contact Information" },
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
            PRIVACY POLICY
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            This policy outlines how Tech Global handles information submitted through this website, outlining our operational procedures for privacy and communication data.
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
                TABLE OF CONTENTS
              </span>
              <ul className="space-y-3 text-xs font-mono text-gray-400">
                {sections.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-[#F5F4EF] transition-colors block py-0.5"
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
            
            <section id="collection" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                01. Information We Collect
              </h2>
              <p>
                We collect personal information that you voluntarily provide to us when initiating contact or requesting project specifications. This information may include your full name, corporate email address, contact phone number, company name, and specific project notes provided via inquiry forms or email correspondence.
              </p>
            </section>

            <section id="purpose" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                02. How Information Is Used
              </h2>
              <p>
                Information collected through this website is used solely to respond to specific project inquiries, evaluate civil technical requirements, prepare formal quotations, and maintain professional communications regarding potential or active site work.
              </p>
            </section>

            <section id="sharing" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                03. Data Sharing & Third Parties
              </h2>
              <p>
                Tech Global does not sell, rent, or trade client information to third-party marketing entities. Information may be shared with essential sub-contractors, site engineers, or technical advisers only when required to process project specifications, or when strictly dictated by legal obligation.
              </p>
            </section>

            <section id="retention" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                04. Data Retention
              </h2>
              <p>
                Inquiry data and project correspondence are retained for the duration required to process active estimates and fulfill engineering evaluations. Records of completed projects are maintained for architectural log purposes in accordance with local business compliance laws.
              </p>
            </section>

            <section id="security" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                05. Data Security Measures
              </h2>
              <p>
                Tech Global takes reasonable technical and organizational steps to protect information submitted through this website from unauthorized access, use, disclosure, or alteration. However, no internet transmission or electronic storage method can guarantee complete immunity.
              </p>
            </section>

            <section id="cookies" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                06. Cookies & Analytics
              </h2>
              <p>
                This website may utilize standard session cookies strictly necessary for page performance, route navigation, and standard visitor traffic analytics. Users can adjust browser preferences to restrict cookie storage at any time.
              </p>
            </section>

            <section id="rights" className="scroll-mt-24 space-y-3">
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] pb-2 border-b border-[#222222]">
                07. User Rights & Data Requests
              </h2>
              <p>
                You may request access to, correction of, or deletion of personal contact details submitted via this website by writing directly to our administrative office.
              </p>
            </section>

            <section id="contact" className="scroll-mt-24 space-y-3 p-6 border border-[#222222] bg-[#1E2330]/40">
              <h2 className="font-display text-xl font-bold uppercase text-[#F5F4EF] mb-2">
                08. Privacy Contact Information
              </h2>
              <p className="text-xs text-gray-400 font-mono mb-4">
                FOR DIRECT PRIVACY INQUIRIES OR DATA REQUESTS:
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