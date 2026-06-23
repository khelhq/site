import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects built with intention, curiosity, and high craft. Websites, platforms, and digital products for businesses across Ghana and beyond.",
  openGraph: {
    title: "Work — Khel",
    description:
      "Selected projects built with intention, curiosity, and high craft.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
