import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Tech Global Contractors",
  description: "Learn about Tech Global's background, civil engineering capabilities, site execution methodology, and operational principles.",
};

export default function AboutPage() {
  const values = [
    {
      number: "01",
      title: "MATERIAL COMPLIANCE",
      description: "We use strictly tested, commercial-grade polymers, epoxy resins, aggregates, and weather-shield formulations verified against project specifications.",
    },
    {
      number: "02",
      title: "TRANSPARENT LOGISTICS",
      description: "Detailed bill of quantities (BOQ), realistic timelines, and documented site progression logs keep project stakeholders informed.",
    },
    {
      number: "03",
      title: "FIELD SUPERVISION",
      description: "Direct on-site management ensures structural masonry, epoxy leveling, and exterior finishing meet exact engineering tolerances.",
    },
    {
      number: "04",
      title: "LONG-TERM DURABILITY",
      description: "Every surface treatment and structural repair is executed to withstand heavy industrial foot traffic, chemical exposure, and environmental wear.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#111111] text-[#F5F4EF]">
      <Navbar />

      {/* Editorial Header Banner */}
      <section className="border-b border-[#222222] pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-xs font-mono uppercase text-gray-500 mb-6">
            <span className="text-[#707C27] font-bold">[ 01 / COMPANY PROFILE ]</span>
            <span>KARACHI, PAKISTAN</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-extrabold uppercase leading-none mb-6">
            ABOUT TECH GLOBAL
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
            A specialized civil contracting and industrial finishing firm built around disciplined site supervision, material compliance, and verifiable structural execution.
          </p>
        </div>
      </section>

      {/* Hero Visual Banner */}
      <section className="border-b border-[#222222] bg-[#0D0E12]">
        <div className="max-w-7xl mx-auto relative aspect-[21/9] min-h-[320px] w-full border-x border-[#222222] overflow-hidden">
          <Image
            src="/projects/hero-site.jpg"
            alt="Tech Global Civil Contracting Site Execution"
            fill
            className="object-cover grayscale contrast-125 brightness-90"
            priority
          />
          <div className="absolute bottom-0 right-0 bg-[#111111]/90 border-t border-l border-[#222222] px-4 py-2 text-[10px] font-mono text-[#707C27] uppercase tracking-widest">
            VERIFIED FACILITY EXECUTION
          </div>
        </div>
      </section>

      {/* 02. Who We Are & 03. What We Do */}
      <section className="py-20 px-6 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block">
              [ 02 / WHO WE ARE ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F5F4EF] leading-tight">
              PRECISION CIVIL CONTRACTING FOR INDUSTRIAL & COMMERCIAL ASSETS.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
              Tech Global delivers full-scope civil construction, structural renovations, specialized heavy-duty epoxy flooring systems, and protective industrial exterior coatings.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              We work directly with facility owners, project managers, and commercial operators to renovate active production sites, warehouses, corporate offices, and high-density residential properties.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#1E2330]/30 border border-[#222222] p-8 space-y-6">
            <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block pb-3 border-b border-[#222222]">
              [ 03 / WHAT WE DO — CORE CAPABILITIES ]
            </span>

            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <h3 className="font-display text-lg font-bold uppercase text-[#F5F4EF]">01. Civil & Structural Masonry</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Brickwork, blockwork, structural plastering, beam repair, and concrete slab reinforcement.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-lg font-bold uppercase text-[#F5F4EF]">02. Heavy Epoxy Flooring</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Self-leveling epoxy, anti-slip slurries, chemical-resistant toppings, and floor joint sealing.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-lg font-bold uppercase text-[#F5F4EF]">03. Weatherproofing & Insulation</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Roof elastomeric coatings, subterranean water barriers, thermal insulation, and damp proofing.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-lg font-bold uppercase text-[#F5F4EF]">04. Commercial Remodelling</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Interior structural layout modifications, wall paneling, ceiling installations, and industrial painting.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 04. Our Approach */}
      <section className="py-20 px-6 border-b border-[#222222] bg-[#1E2330]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#222222] gap-4">
            <div>
              <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-2">
                [ 04 / OUR APPROACH ]
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-[#F5F4EF]">
                EXECUTION METHODOLOGY
              </h2>
            </div>
            <p className="text-gray-400 text-xs font-mono max-w-sm">
              STRICT STAGE-GATE PROCESS FROM INITIAL SITE INSPECTION TO FINAL QUALITY SIGN-OFF.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111111] border border-[#222222] p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#707C27] block mb-4">STAGE 01</span>
                <h3 className="font-display text-xl font-bold uppercase text-[#F5F4EF] mb-3">SITE EVALUATION & BOQ</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Thorough assessment of structural substrates, moisture levels, load requirements, and material quantities before issuing formal estimates.
                </p>
              </div>
            </div>

            <div className="bg-[#111111] border border-[#222222] p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#707C27] block mb-4">STAGE 02</span>
                <h3 className="font-display text-xl font-bold uppercase text-[#F5F4EF] mb-3">SUPERVISED SITE WORK</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Direct oversight by experienced site supervisors ensuring material mixing ratios, surface preparation, and curing times meet manufacturer standards.
                </p>
              </div>
            </div>

            <div className="bg-[#111111] border border-[#222222] p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#707C27] block mb-4">STAGE 03</span>
                <h3 className="font-display text-xl font-bold uppercase text-[#F5F4EF] mb-3">INSPECTION & HANDOVER</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Final quality inspection, surface hardness verification, site clean-up, and formal delivery of project logs to the client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Our Values */}
      <section className="py-20 px-6 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-4">
            [ 05 / OUR VALUES ]
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-[#F5F4EF] mb-12">
            OPERATIONAL PRINCIPLES
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.number} className="bg-[#1E2330]/30 border border-[#222222] p-6 flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl font-bold text-[#707C27] block mb-3">{v.number}</span>
                  <h3 className="font-display text-lg font-bold uppercase text-[#F5F4EF] mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Contact CTA */}
      <section className="py-16 px-6 border-b border-[#222222] bg-[#1E2330]/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mb-2">
              DISCUSS A PROJECT WITH TECH GLOBAL
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl font-sans">
              Ready to discuss site specifications, schedule a physical inspection, or request a preliminary quotation?
            </p>
          </div>
          <Link
            href="/#contact"
            className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 border border-[#707C27] hover:bg-opacity-90 transition-opacity whitespace-nowrap"
          >
            INITIATE INQUIRY ↗
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}