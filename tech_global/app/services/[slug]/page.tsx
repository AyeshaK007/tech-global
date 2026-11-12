import { servicesData } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#111111] text-[#F5F4EF] min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb / Category Header */}
        <div className="mb-8 border-b border-[#222222] pb-6 flex items-center justify-between">
          <div>
            <span className="text-[#707C27] text-xs font-bold tracking-widest uppercase block mb-2">
              [ {service.category} ]
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-[#F5F4EF]">
              {service.title}
            </h1>
          </div>
          <Link
            href="/#services"
            className="text-xs font-mono text-gray-400 hover:text-[#707C27] uppercase tracking-widest transition-colors hidden sm:block"
          >
            ← BACK TO SERVICES
          </Link>
        </div>

        {/* Conditional Visual Presentation: Verified Photo OR Intentional Typographic Specification Header */}
        {service.heroImage ? (
          <div className="mb-16 border border-[#222222] bg-[#1E2330]">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0D0E12]">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="bg-[#111111] border-t border-[#222222] px-6 py-4 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#707C27] shrink-0" />
                <span className="text-[#F5F4EF] font-bold uppercase tracking-widest">
                  VERIFIED TECHNICAL SITE ASSET
                </span>
              </div>
              <span className="text-gray-400">{service.category} — 2026</span>
            </div>
          </div>
        ) : (
          <div className="mb-16 border border-[#222222] bg-[#1E2330] p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-[#707C27] shrink-0" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#707C27]">
                TECHNICAL SPECIFICATION RECORD
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl uppercase font-bold text-[#F5F4EF] mb-3">
              ENGINEERED EXECUTION &amp; STANDARD PROTOCOLS
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl font-sans">
              This service adheres to documented commercial engineering standards. In strict compliance with our visual integrity policy, unverified photography is omitted in favor of precise technical parameters.
            </p>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mb-4">
                SERVICE OVERVIEW
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
                {service.description}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold uppercase text-[#F5F4EF] mb-4">
                SCOPE &amp; CAPABILITIES
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-300 font-sans">
                    <span className="text-[#707C27] font-mono mt-1">/</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Specs */}
          <div className="lg:col-span-4">
            <div className="border border-[#222222] bg-[#1E2330] p-6 space-y-6">
              <h3 className="font-display text-lg font-bold uppercase text-[#F5F4EF] border-b border-[#222222] pb-3">
                TECHNICAL PARAMETERS
              </h3>
              <div className="space-y-4">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="border-b border-[#222222]/50 pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-sm font-mono font-bold text-[#F5F4EF]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#222222]">
                <Link
                  href="/contact"
                  className="w-full block text-center bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest py-3 px-4 hover:bg-opacity-90 transition-opacity"
                >
                  REQUEST CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}