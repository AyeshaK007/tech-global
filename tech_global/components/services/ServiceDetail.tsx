import Image from "next/image";
import Link from "next/link";
import { Service } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <main className="min-h-screen bg-[#111111] text-[#F5F4EF]">
      <Navbar />

      {/* Header / Meta */}
      <section className="border-b border-[#222222] pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-xs font-mono uppercase text-gray-500 mb-8 pb-4 border-b border-[#222222]">
            <span>01 / SERVICE SPECIFICATION</span>
            <span className="text-[#707C27] font-bold">{service.number} / {service.category}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.9] mb-8">
            {service.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {service.headline}
          </p>
        </div>
      </section>

      {/* Photographic Spotlight */}
      <section className="border-b border-[#222222]">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[21/9] w-full bg-[#1E2330] overflow-hidden">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover grayscale contrast-125 brightness-90"
              priority
            />
          </div>
        </div>
      </section>

      {/* Scope of Work & Specifications Grid */}
      <section className="border-b border-[#222222] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          
          {/* Overview Column */}
          <div className="md:col-span-5">
            <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-4">
              CAPABILITY OVERVIEW
            </span>
            <h2 className="font-display text-3xl font-bold uppercase mb-6">
              ENGINEERED STANDARDS
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="border-t border-[#222222] pt-6 space-y-2">
              <span className="text-xs font-mono text-gray-500 uppercase block mb-3">
                KEY SPECIFICATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {service.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="border border-[#222222] bg-[#1E2330] px-3 py-1 text-xs font-mono text-gray-300 uppercase"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Scope List Column */}
          <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-[#222222] pt-8 md:pt-0 md:pl-12">
            <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-6">
              SCOPE OF WORK & DELIVERABLES
            </span>
            <ul className="space-y-4">
              {service.scope.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 border border-[#222222] bg-[#1E2330]/40"
                >
                  <span className="font-mono text-xs text-[#707C27] font-bold mt-0.5">
                    0{index + 1}
                  </span>
                  <span className="text-sm text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Direct Inquire CTA Banner */}
      <section className="py-16 px-6 bg-[#1E2330]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-mono text-[#707C27] uppercase block mb-2">REQUIRE THIS SPECIFICATION?</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase">DISCUSS YOUR PROJECT REQUIREMENTS</h3>
          </div>
          <Link
            href="/#contact"
            className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 border border-[#707C27] flex items-center gap-2 hover:bg-opacity-90 transition-opacity"
          >
            <span>REQUEST QUOTE ↗</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}