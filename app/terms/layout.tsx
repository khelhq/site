import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing the use of Khel Technologies' website and services.",
  openGraph: {
    title: "Terms of Service — Khel",
    description:
      "Terms and conditions governing the use of Khel Technologies' website and services.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
