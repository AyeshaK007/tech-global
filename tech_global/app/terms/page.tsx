import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F4EF] selection:bg-[#707C27] selection:text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-xs uppercase tracking-widest text-[#707C27] font-bold mb-8 inline-block hover:underline">
          ← Back to Main
        </Link>
        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 block mb-2">LEGAL COMPLIANCE</span>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold uppercase mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300 text-sm leading-relaxed border-t border-[#222222] pt-8">
          <p>Last updated: October 2026</p>
          <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mt-6">1. Scope of Work</h3>
          <p>All civil construction, epoxy installation, waterproofing, and finishing services rendered by Tech Global are bound by written commercial contracts and approved scope specifications.</p>
          
          <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mt-6">2. Quotations & Estimates</h3>
          <p>Project cost estimates submitted via our web portal are subject to final on-site inspection, material specifications, and structural verification.</p>

          <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mt-6">3. Intellectual Property</h3>
          <p>All website design, photographic portfolios, and branding architecture remain the property of Tech Global and authorized digital partners.</p>
        </div>
      </div>
    </div>
  );
}