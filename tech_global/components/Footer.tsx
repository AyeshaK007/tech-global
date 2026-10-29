import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#222222] py-8 px-6 bg-[#1E2330] text-xs text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2026 TECH GLOBAL. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-6 uppercase tracking-widest font-semibold">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}