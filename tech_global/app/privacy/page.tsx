import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F4EF] selection:bg-[#707C27] selection:text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-xs uppercase tracking-widest text-[#707C27] font-bold mb-8 inline-block hover:underline">
          ← Back to Main
        </Link>
        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 block mb-2">LEGAL COMPLIANCE</span>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold uppercase mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300 text-sm leading-relaxed border-t border-[#222222] pt-8">
          <p>Last updated: October 2026</p>
          <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mt-6">1. Information Collection</h3>
          <p>Tech Global collects information submitted via our project enquiry and quotation forms, including full names, company names, contact emails, phone numbers, and project specifications.</p>
          
          <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mt-6">2. Use of Information</h3>
          <p>Information provided is utilized solely for communicating regarding civil contracting services, scheduling site evaluations, and formulating commercial cost estimates.</p>

          <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mt-6">3. Data Security</h3>
          <p>We maintain stringent security measures to protect submitted project credentials and contact information against unauthorized access or disclosure.</p>
        </div>
      </div>
    </div>
  );
}