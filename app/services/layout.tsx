import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web & brand websites, web apps, custom software, AI automations, and Google Workspace integrations. Everything we do connects design thinking with engineering.",
  openGraph: {
    title: "Services — Khel",
    description:
      "Web & brand websites, web apps, custom software, AI automations, and Google Workspace integrations.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
