import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects built with intention, curiosity, and high craft for businesses across Ghana and beyond.",
  openGraph: {
    title: "Work — Khel",
    description:
      "Selected projects built with intention, curiosity, and high craft for businesses across Ghana and beyond.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
