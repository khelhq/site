import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: "italic", // Explicitly requested italic for "manifesto" voice
});

export const metadata: Metadata = {
  title: "Systems, Not Services",
  description: "I build small, boring systems that capture leads, respond instantly, and remove manual work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased bg-background text-foreground relative overflow-x-hidden selection:bg-accent/20 selection:text-accent`}
      >
        <SmoothScroller>
          <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay noise-bg"></div>
          {children}
        </SmoothScroller>
      </body>
    </html >
  );
}
