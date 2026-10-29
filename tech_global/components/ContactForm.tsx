export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-[#707C27] text-xs font-bold tracking-widest uppercase block mb-2">[ 04 / INITIATE PROJECT ]</span>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold uppercase mt-2 mb-6 text-[#F5F4EF]">LET'S BUILD.</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Submit your project specifications below for detailed cost estimates, technical consultations, or site assessments.
            </p>
          </div>

          <div className="border-t border-[#222222] pt-8 space-y-4 text-xs text-gray-400">
            <div>
              <span className="text-gray-500 uppercase tracking-widest block mb-1">Direct Contact</span>
              <span className="text-[#F5F4EF] font-semibold text-sm">info@techglobal.contractors</span>
            </div>
            <div>
              <span className="text-gray-500 uppercase tracking-widest block mb-1">Operations</span>
              <span className="text-[#F5F4EF] font-semibold text-sm">Commercial & Industrial Civil Contracting</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-[#1E2330] p-8 md:p-12 border border-[#222222]">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Full Name *</label>
                <input type="text" required placeholder="Ayesha Khan" className="w-full bg-[#111111] border border-[#222222] p-3.5 text-sm text-[#F5F4EF] focus:border-[#707C27] outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Company Name</label>
                <input type="text" placeholder="Mukhtalif Ventures" className="w-full bg-[#111111] border border-[#222222] p-3.5 text-sm text-[#F5F4EF] focus:border-[#707C27] outline-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Email Address *</label>
                <input type="email" required placeholder="ayesha@company.com" className="w-full bg-[#111111] border border-[#222222] p-3.5 text-sm text-[#F5F4EF] focus:border-[#707C27] outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Phone Number *</label>
                <input type="tel" required placeholder="+92 300 0000000" className="w-full bg-[#111111] border border-[#222222] p-3.5 text-sm text-[#F5F4EF] focus:border-[#707C27] outline-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Service Required *</label>
                <select className="w-full bg-[#111111] border border-[#222222] p-3.5 text-sm text-gray-300 focus:border-[#707C27] outline-none">
                  <option>Construction & Civil Works</option>
                  <option>Plastering & Masonry</option>
                  <option>Finishing & Paint Work</option>
                  <option>Epoxy Flooring Solutions</option>
                  <option>Waterproofing Services</option>
                  <option>Restoration & Remodelling</option>
                  <option>Additional Services (Flooring, Plumbing)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Project Location *</label>
                <input type="text" required placeholder="City / Industrial Area" className="w-full bg-[#111111] border border-[#222222] p-3.5 text-sm text-[#F5F4EF] focus:border-[#707C27] outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Project Description *</label>
              <textarea rows={4} required placeholder="Describe scope, requirements, or timeline..." className="w-full bg-[#111111] border border-[#222222] p-3.5 text-sm text-[#F5F4EF] focus:border-[#707C27] outline-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#707C27] text-white py-4 text-xs font-bold uppercase tracking-widest border border-[#707C27] hover:bg-opacity-90 transition-opacity">
              Submit Project Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}