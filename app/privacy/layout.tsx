import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Khel",
  description:
    "Learn how Khel Technologies collects, uses, and protects your personal information.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
