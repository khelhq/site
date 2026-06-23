import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small collective of developers and engineers based in Ghana, building digital products for businesses that take their online presence seriously.",
  openGraph: {
    title: "About — Khel",
    description:
      "A small collective of developers and engineers based in Ghana, building digital products for businesses that take their online presence seriously.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
