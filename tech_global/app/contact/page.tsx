import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Site Evaluation | Tech Global Contractors",
  description: "Schedule an on-site civil structural inspection or submit commercial BOQ specifications to Tech Global's engineering team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#F5F4EF]">
      <Navbar />

      {/* Page Editorial Header */}
      <section className="border-b border-[#222222] pt-20 pb-16 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-xs font-mono uppercase text-gray-500 mb-6">
            <span className="text-[#707C27] font-bold">[ 01 / DIRECT CONTACT ]</span>
            <span>ENGINEERING DESK</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-extrabold uppercase leading-none mb-6">
            CONTACT TECH GLOBAL
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
            Direct communication channels for site managers, commercial facility directors, and property owners seeking verified civil contracting, epoxy flooring, or protective coatings.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Details Section */}
      <Contact />

      {/* Supplementary Technical Desk Information */}
      <section className="py-16 px-6 border-b border-[#222222] bg-[#1E2330]/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-xs font-mono">
          
          <div className="bg-[#111111] border border-[#222222] p-8 space-y-3">
            <span className="text-[#707C27] block">PROCUREMENT & BOQ</span>
            <h3 className="font-display text-lg font-bold uppercase text-[#F5F4EF] font-sans">MATERIAL BILLING</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              For sub-contracting quotes or structural material datasheets, submit technical drawings directly to <span className="text-gray-200">boq@techglobal.pk</span>.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#222222] p-8 space-y-3">
            <span className="text-[#707C27] block">SITE INSPECTIONS</span>
            <h3 className="font-display text-lg font-bold uppercase text-[#F5F4EF] font-sans">PHYSICAL VISITS</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Site assessments across Sindh and major industrial hubs are scheduled within 48 hours of logged technical requests.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#222222] p-8 space-y-3">
            <span className="text-[#707C27] block">EMERGENCY REPAIRS</span>
            <h3 className="font-display text-lg font-bold uppercase text-[#F5F4EF] font-sans">FACILITY DISRUPTIONS</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Urgent substrate failure, water leakage, or high-load slab degradation inquiries receive direct phone dispatch.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}