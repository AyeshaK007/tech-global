
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServiceDetail({
  service,
}: {
  service: Service;
}) {
  // Remove an existing number prefix from category, if present.
  const categoryLabel = service.category.replace(/^\d+\s*\/\s*/, "");

  return (
    <main className="min-h-screen bg-[#111111] text-[#F5F4EF]">
      <Navbar />

      {/* Header / Meta */}
      <section className="border-b border-[#222222] pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-xs font-mono uppercase text-gray-500 mb-8 pb-4 border-b border-[#222222]">
            <span>SERVICE SPECIFICATION</span>

            <span className="text-[#707C27] font-bold">
              {service.number} / {categoryLabel}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.9] mb-8">
            {service.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Photographic or Typographic Feature */}
      <section className="border-b border-[#222222]">
        <div className="max-w-7xl mx-auto">
          {service.heroImage ? (
            <div className="relative aspect-[21/9] w-full bg-[#1E2330] overflow-hidden">
              <Image
                src={service.heroImage}
                alt={`${service.title} service image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
                priority
              />
            </div>
          ) : (
            <div className="min-h-[260px] sm:min-h-[360px] bg-[#1E2330] px-6 py-12 sm:px-12 sm:py-16 flex flex-col justify-between">
              <span className="text-xs font-mono tracking-widest text-[#707C27] uppercase">
                {service.number} / TECHNICAL CAPABILITY
              </span>

              <div className="max-w-4xl">
                <p className="text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">
                  TECH GLOBAL / CIVIL CONTRACTORS
                </p>

                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-bold leading-[0.95]">
                  {categoryLabel}
                </h2>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Scope and Specifications */}
      <section className="border-b border-[#222222] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">

          {/* Overview */}
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

            {/* Specifications */}
            <div className="border-t border-[#222222] pt-6">
              <span className="text-xs font-mono text-gray-500 uppercase block mb-4">
                KEY SPECIFICATIONS
              </span>

              <div className="divide-y divide-[#222222]">
                {service.specs.map((spec, index) => (
                  <div
                    key={`${spec.label}-${index}`}
                    className="py-3 flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      {spec.label}
                    </span>

                    <span className="text-sm text-gray-200 uppercase">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-[#222222] pt-8 md:pt-0 md:pl-12">
            <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-6">
              SCOPE OF WORK & DELIVERABLES
            </span>

            <ul className="divide-y divide-[#222222] border-y border-[#222222]">
              {service.features.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="flex items-start gap-6 py-5"
                >
                  <span className="font-mono text-xs text-[#707C27] font-bold mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-gray-200 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-[#1E2330]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-mono text-[#707C27] uppercase block mb-2">
              REQUIRE THIS SERVICE?
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase">
              DISCUSS YOUR PROJECT REQUIREMENTS
            </h3>
          </div>

          <Link
            href="/#contact"
            className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 border border-[#707C27]"
          >
            REQUEST QUOTE ↗
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
