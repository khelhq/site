"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PrivacyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".privacy-heading", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".privacy-meta", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".privacy-section", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.5,
      });

      gsap.from(".privacy-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power3.inOut",
        delay: 0.4,
      });
    },
    { scope: containerRef }
  );

  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "We may collect the following types of information when you interact with our website or services:",
        "**Contact information** — such as your name, email address, and phone number when you reach out to us via our contact form or WhatsApp.",
        "**Project details** — information you share about your business, project requirements, and goals during consultation.",
        "**Usage data** — anonymous, aggregated data about how visitors interact with our website, including pages visited, time spent, and referring sources. This data is collected through privacy-respecting analytics tools.",
        "**Device information** — browser type, operating system, and screen resolution to ensure optimal website performance.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use the information we collect for the following purposes:",
        "To respond to your inquiries and communicate about potential or active projects.",
        "To deliver, maintain, and improve our services.",
        "To send project updates, invoices, and relevant communications related to our engagement.",
        "To analyze website usage patterns and improve the user experience.",
        "We do not sell, rent, or trade your personal information to third parties.",
      ],
    },
    {
      title: "3. Data Sharing",
      content: [
        "We do not share your personal data with third parties except in the following limited circumstances:",
        "**Service providers** — trusted third-party tools we use for analytics, hosting, or communication (e.g., Vercel for hosting, WhatsApp for messaging). These providers are bound by their own privacy policies.",
        "**Legal compliance** — if required by law, regulation, or valid legal process.",
        "**Business protection** — to protect the rights, property, or safety of Khel Technologies, our clients, or the public.",
      ],
    },
    {
      title: "4. Data Security",
      content: [
        "We take reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our website is served over HTTPS, and we follow industry best practices for secure software development.",
        "However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.",
      ],
    },
    {
      title: "5. Cookies",
      content: [
        "Our website may use essential cookies to ensure basic functionality. We do not use advertising or tracking cookies.",
        "If we use analytics tools, they are configured to respect user privacy and do not collect personally identifiable information.",
      ],
    },
    {
      title: "6. Third-Party Links",
      content: [
        "Our website may contain links to third-party websites (e.g., LinkedIn, Instagram, client project sites). We are not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies independently.",
      ],
    },
    {
      title: "7. Your Rights",
      content: [
        "Depending on your jurisdiction, you may have the right to:",
        "Access, correct, or delete the personal data we hold about you.",
        "Withdraw consent for data processing where consent is the basis for processing.",
        "Object to or restrict certain processing activities.",
        "To exercise any of these rights, please contact us at the email address below.",
      ],
    },
    {
      title: "8. Data Retention",
      content: [
        "We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Project-related data is retained for the duration of our engagement and a reasonable period thereafter for reference and support.",
      ],
    },
    {
      title: "9. Children\u2019s Privacy",
      content: [
        "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete it promptly.",
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any updates will be posted on this page with a revised effective date. We encourage you to review this policy periodically.",
      ],
    },
    {
      title: "11. Contact Us",
      content: [
        "If you have any questions about this Privacy Policy or how we handle your data, please contact us:",
        "WhatsApp: +233 558 161 835",
        "LinkedIn: Khel Technologies",
      ],
    },
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#111111] text-[#ededed] font-sans selection:bg-[#d4ff90] selection:text-black"
    >
      <div className="max-w-3xl mx-auto px-6 pt-[22vh] pb-24 md:pb-32">
        {/* Back link */}
        <Link
          href="/"
          className="text-xs font-mono tracking-widest uppercase hover:text-[#d4ff90] transition-colors inline-flex items-center gap-2 mb-16"
        >
          <span className="text-lg leading-none">&larr;</span> Back
        </Link>

        {/* Heading */}
        <h1 className="privacy-heading text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight font-medium text-[#ededed] mb-4">
          Privacy Policy
        </h1>

        <p className="privacy-meta text-[13px] text-neutral-500 uppercase tracking-[0.15em] font-mono mb-12">
          Effective Date — June 2026 &nbsp;·&nbsp; Last Updated — June 2026
        </p>

        <div className="privacy-divider w-full h-px bg-neutral-800 mb-12" />

        <p className="privacy-section text-[15px] sm:text-[16px] leading-[1.7] text-neutral-400 font-light mb-12">
          Khel Technologies (&quot;Khel,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <section key={idx} className="privacy-section">
              <h2 className="text-[18px] sm:text-[20px] font-medium text-[#ededed] tracking-tight mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-[15px] leading-[1.7] text-neutral-400 font-light"
                    dangerouslySetInnerHTML={{
                      __html: paragraph.replace(
                        /\*\*(.*?)\*\*/g,
                        '<span class="text-neutral-200 font-medium">$1</span>'
                      ),
                    }}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="privacy-divider w-full h-px bg-neutral-800 mt-16 mb-8" />

        <p className="privacy-section text-[13px] text-neutral-600 font-mono uppercase tracking-[0.1em]">
          © {new Date().getFullYear()} Khel Technologies. All rights reserved.
        </p>
      </div>
    </main>
  );
}
