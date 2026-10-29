import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sansFont = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Tech Global | Civil Contracting & Industrial Finishes",
  description: "Civil contractors, epoxy flooring, industrial painting, waterproofing, and specialized commercial coatings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${displayFont.variable} ${sansFont.variable} antialiased bg-[#111111] text-[#F5F4EF]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}