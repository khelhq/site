import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web apps, custom software & AI automations. We connect design thinking with engineering.",
  openGraph: {
    title: "Services — Khel",
    description:
      "Websites, web apps, custom software & AI automations. We connect design thinking with engineering.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
