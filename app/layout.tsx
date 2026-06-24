import type { Metadata } from "next";
import { Manrope, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_SEO } from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_SEO.title,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_SEO.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — We build digital products that work`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${geistMono.variable} ${newsreader.variable} antialiased bg-background text-foreground relative overflow-x-hidden selection:bg-accent/20 selection:text-accent`}
      >
        <SmoothScroller>
          <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay noise-bg"></div>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html >
  );
}
