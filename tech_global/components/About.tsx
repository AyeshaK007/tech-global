export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-[#222222] bg-[#1E2330]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <span className="text-[#707C27] text-xs font-bold tracking-widest uppercase block mb-2">[ 03 / ABOUT US ]</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-[#F5F4EF] leading-tight mb-6">
            UNCOMPROMISING CIVIL ENGINEERING STANDARDS.
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Tech Global is an established civil contracting and industrial finishing firm. We specialize in structural masonry, high-load epoxy floor systems, weatherproofing, and comprehensive property remodelling.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Every project is managed with strict material compliance, transparent timelines, and professional site execution.
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <div className="bg-[#111111] border border-[#222222] p-8">
            <span className="font-display text-4xl font-bold text-[#707C27] block mb-2">100%</span>
            <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold">Structural Compliance</span>
          </div>
          <div className="bg-[#111111] border border-[#222222] p-8">
            <span className="font-display text-4xl font-bold text-[#F5F4EF] block mb-2">07</span>
            <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold">Core Specialized Services</span>
          </div>
          <div className="bg-[#111111] border border-[#222222] p-8 col-span-2">
            <span className="font-display text-2xl font-bold text-[#F5F4EF] block mb-2">Verified Commercial Execution</span>
            <p className="text-gray-400 text-xs">Serving industrial plants, commercial warehouses, offices, and residential facilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}