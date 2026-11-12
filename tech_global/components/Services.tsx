
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { MEDIA_MANIFEST } from "@/data/media";

export default function Services() {
  const construction = servicesData.find(
    (service) => service.slug === "complete-construction"
  );

  const masonry = servicesData.find(
    (service) => service.slug === "masonry-plastering"
  );

  const epoxy = servicesData.find(
    (service) => service.slug === "epoxy-flooring"
  );

  const painting = servicesData.find(
    (service) => service.slug === "industrial-painting"
  );

  const waterproofing = servicesData.find(
    (service) => service.slug === "waterproofing"
  );

  const restoration = servicesData.find(
    (service) => service.slug === "restoration-remodelling"
  );

  const additional = servicesData.find(
    (service) => service.slug === "additional-services"
  );

  const standardServices = [
    construction,
    masonry,
    painting,
    waterproofing,
    restoration,
    additional,
  ].filter((service) => service !== undefined);

  if (!construction || !masonry || !epoxy || !painting ||
      !waterproofing || !restoration || !additional) {
    return null;
  }

  return (
    <section
      id="services"
      className="bg-[#111111] text-[#F5F4EF] border-b border-[#222222]"
    >
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 border-b border-[#222222]">
        <div className="flex justify-between items-center text-xs font-mono tracking-widest uppercase text-gray-500 mb-6">
          <span>TECH GLOBAL / CAPABILITIES</span>
          <span>01 — 07</span>
        </div>

        <div className="grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <h2 className="font-display text-5xl sm:text-7xl font-extrabold uppercase leading-none tracking-tight">
              WHAT WE <span className="text-[#707C27]">DO.</span>
            </h2>
          </div>

          <div className="md:col-span-4 text-gray-400 text-sm leading-relaxed">
            Civil construction, protective coatings, and durable finishing
            solutions for commercial and industrial facilities.
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto border-x border-[#222222]">

        {/* Row 1: Construction & Masonry */}
        <div className="grid md:grid-cols-12 border-b border-[#222222]">

          {/* 01 / Construction */}
          <Link
            href={`/services/${construction.slug}`}
            className="md:col-span-7 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#222222] flex flex-col justify-between min-h-[320px] group"
          >
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-8">
                <span className="text-[#707C27] font-bold">
                  {construction.number} / {construction.category}
                </span>
                <span>01 / 07</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase mb-4 text-[#F5F4EF]">
                {construction.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
                {construction.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-8 flex justify-between items-center">
              <span>TURNKEY & GREY STRUCTURES</span>
              <span className="text-[#707C27]">VIEW SERVICE ↗</span>
            </div>
          </Link>

          {/* 02 / Masonry */}
          <Link
            href={`/services/${masonry.slug}`}
            className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between min-h-[320px] group"
          >
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-8">
                <span>{masonry.number} / {masonry.category}</span>
                <span>02 / 07</span>
              </div>

              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                {masonry.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {masonry.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-8 flex justify-between items-center">
              <span>BRICKWORK · BLOCKWORK · RCC</span>
              <span className="text-[#707C27]">↗</span>
            </div>
          </Link>
        </div>

        {/* Row 2: Featured Epoxy Flooring */}
        <div className="grid md:grid-cols-12 border-b border-[#222222] bg-[#1E2330]">

          {/* P22 Featured Image */}
          <div className="md:col-span-7 relative min-h-[360px] border-b md:border-b-0 md:border-r border-[#222222] overflow-hidden">
            <Image
              src={MEDIA_MANIFEST.projectFeatured.src}
              alt={MEDIA_MANIFEST.projectFeatured.alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />

            <div className="absolute top-4 left-4 bg-[#111111]/90 border border-[#222222] px-3 py-1.5 text-[10px] font-mono uppercase text-[#707C27] tracking-widest">
              FEATURED SPECIALIZATION
            </div>
          </div>

          {/* 04 / Epoxy Flooring */}
          <Link
            href={`/services/${epoxy.slug}`}
            className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-400 mb-8">
                <span className="text-[#707C27] font-bold">
                  {epoxy.number} / {epoxy.category}
                </span>
                <span>04 / 07</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase mb-4 text-[#F5F4EF]">
                {epoxy.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {epoxy.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#2A3040] space-y-2 mt-6">
              <div className="text-[11px] font-mono text-[#707C27] uppercase tracking-widest">
                INDUSTRIAL SURFACE PROTECTION
              </div>

              <div className="text-xs text-gray-400 flex justify-between items-center">
                <span>Seamless flooring solutions</span>
                <span className="text-[#707C27]">VIEW SERVICE ↗</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Row 3: Painting & Waterproofing */}
        <div className="grid md:grid-cols-12 border-b border-[#222222]">

          {/* 03 / Industrial Painting */}
          <Link
            href={`/services/${painting.slug}`}
            className="md:col-span-6 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#222222] flex flex-col justify-between min-h-[280px] group"
          >
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-6">
                <span>{painting.number} / {painting.category}</span>
                <span>03 / 07</span>
              </div>

              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                {painting.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                {painting.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-6 flex justify-between items-center">
              <span>PROTECTIVE & DECORATIVE COATINGS</span>
              <span className="text-[#707C27]">↗</span>
            </div>
          </Link>

          {/* 05 / Waterproofing */}
          <Link
            href={`/services/${waterproofing.slug}`}
            className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between min-h-[280px] group"
          >
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-6">
                <span>{waterproofing.number} / {waterproofing.category}</span>
                <span>05 / 07</span>
              </div>

              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                {waterproofing.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                {waterproofing.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-6 flex justify-between items-center">
              <span>MOISTURE & CHEMICAL BARRIERS</span>
              <span className="text-[#707C27]">↗</span>
            </div>
          </Link>
        </div>

        {/* Row 4: Restoration & Additional Services */}
        <div className="grid md:grid-cols-12">

          {/* 06 / Restoration */}
          <Link
            href={`/services/${restoration.slug}`}
            className="md:col-span-7 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#222222] flex flex-col justify-between min-h-[280px] group"
          >
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-6">
                <span>{restoration.number} / {restoration.category}</span>
                <span>06 / 07</span>
              </div>

              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                {restoration.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                {restoration.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-6 flex justify-between items-center">
              <span>RESTRUCTURING & COMMERCIAL REHABILITATION</span>
              <span className="text-[#707C27]">↗</span>
            </div>
          </Link>

          {/* 07 / Additional Services */}
          <Link
            href={`/services/${additional.slug}`}
            className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between min-h-[280px] group"
          >
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-6">
                <span>{additional.number} / {additional.category}</span>
                <span>07 / 07</span>
              </div>

              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                {additional.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {additional.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-6 flex justify-between items-center">
              <span>PAVERS · TILE · MARBLE · PLUMBING</span>
              <span className="text-[#707C27]">↗</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer Link */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-[#222222] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono uppercase">
        <span className="text-gray-500">
          SPECIFICATION ASSISTANCE AVAILABLE
        </span>

        <Link
          href="#contact"
          className="text-[#707C27] hover:text-[#F5F4EF] font-bold tracking-widest transition-colors flex items-center gap-2"
        >
          <span>DISCUSS YOUR SCOPE OF WORK</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
