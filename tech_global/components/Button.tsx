
import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#707C27]";

  const variants = {
    // Primary: Solid olive
    primary:
      "bg-[#707C27] text-white border border-[#707C27] px-6 py-3.5 hover:bg-[#626D22] active:bg-[#555F1E]",

    // Secondary: Olive outline
    secondary:
      "bg-transparent text-[#F5F4EF] border border-[#707C27] px-6 py-3.5 hover:border-[#F5F4EF] hover:bg-[#707C27]/10",

    // Dark: Navy inset
    dark:
      "bg-[#1E2330] text-[#F5F4EF] border border-[#222222] px-6 py-3.5 hover:border-[#707C27]",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>

      <span
        className="text-sm font-normal leading-none"
        aria-hidden="true"
      >
        ↗
      </span>
    </Link>
  );
}
