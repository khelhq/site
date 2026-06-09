"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TermsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".terms-heading", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".terms-meta", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".terms-section", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.5,
      });

      gsap.from(".terms-divider", {
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
      title: "1. Services",
      content: [
        "Khel Technologies provides digital product development services including, but not limited to, website design and development, web application development, custom software solutions, AI automations, and Google Workspace integrations.",
        "The specific scope, deliverables, timeline, and pricing for any project will be outlined in a separate project proposal or agreement between Khel Technologies and the client.",
      ],
    },
    {
      title: "2. Use of Website",
      content: [
        "You may use our website for lawful purposes only. You agree not to:",
        "Use the website in any way that violates applicable laws or regulations.",
        "Attempt to gain unauthorized access to any part of the website, server, or connected systems.",
        "Introduce viruses, malware, or other harmful material.",
        "Scrape, crawl, or use automated tools to extract data from the website without our prior written consent.",
      ],
    },
    {
      title: "3. Intellectual Property",
      content: [
        "All content on this website — including but not limited to design, text, graphics, logos, code, and project showcases — is the property of Khel Technologies or its respective clients and is protected by applicable intellectual property laws.",
        "You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission.",
        "**Client work:** Project showcases displayed on our website are shown with the permission of our clients. The underlying intellectual property of client projects belongs to the respective clients as outlined in their individual project agreements.",
      ],
    },
    {
      title: "4. Project Engagements",
      content: [
        "When you engage Khel Technologies for a project, the following general terms apply unless otherwise specified in a written agreement:",
        "**Proposals and scope:** All project work is governed by a mutually agreed-upon proposal or statement of work. Changes to the scope may result in adjustments to timeline and pricing.",
        "**Payment:** Payment terms will be outlined in the project proposal. We typically require an upfront deposit before work begins, with the balance due upon project completion or at agreed milestones.",
        "**Ownership:** Upon full payment, the client receives ownership of the final deliverables as specified in the project agreement. Khel Technologies retains the right to showcase the work in our portfolio unless otherwise agreed in writing.",
        "**Communication:** We primarily communicate through WhatsApp, email, and scheduled calls. Timely client feedback is essential for meeting project deadlines.",
      ],
    },
    {
      title: "5. Limitation of Liability",
      content: [
        "To the maximum extent permitted by law, Khel Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.",
        "Our total liability for any claim arising from our services shall not exceed the amount paid by you to Khel Technologies for the specific project or service giving rise to the claim.",
        "We do not guarantee that our website will be uninterrupted, error-free, or free of harmful components.",
      ],
    },
    {
      title: "6. Warranties and Disclaimers",
      content: [
        "Our website and its content are provided on an \"as is\" and \"as available\" basis. We make no warranties, express or implied, regarding the website's accuracy, reliability, or availability.",
        "For project deliverables, we provide a reasonable warranty period (typically 30 days after delivery) during which we will address bugs or defects in our work at no additional cost. This does not cover issues arising from third-party services, client modifications, or new feature requests.",
      ],
    },
    {
      title: "7. Third-Party Links and Services",
      content: [
        "Our website may contain links to third-party websites and services. These links are provided for convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of third-party sites.",
        "Client projects may integrate third-party services (e.g., payment gateways, analytics platforms, hosting providers). Khel Technologies is not liable for the performance, availability, or policies of these third-party services.",
      ],
    },
    {
      title: "8. Confidentiality",
      content: [
        "Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of a project engagement. This includes but is not limited to business strategies, technical specifications, and unpublished designs.",
        "This obligation survives the termination of any project agreement.",
      ],
    },
    {
      title: "9. Termination",
      content: [
        "We reserve the right to terminate or restrict access to our website at any time, without notice, for conduct that we believe violates these Terms or is harmful to our interests.",
        "For project engagements, either party may terminate the agreement with written notice. In the event of termination, the client is responsible for payment for all work completed up to the date of termination.",
      ],
    },
    {
      title: "10. Governing Law",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Ghana.",
      ],
    },
    {
      title: "11. Changes to These Terms",
      content: [
        "We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website or services after any changes constitutes your acceptance of the revised terms.",
      ],
    },
    {
      title: "12. Contact Us",
      content: [
        "If you have any questions about these Terms of Service, please contact us:",
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
        <h1 className="terms-heading text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight font-medium text-[#ededed] mb-4">
          Terms of Service
        </h1>

        <p className="terms-meta text-[13px] text-neutral-500 uppercase tracking-[0.15em] font-mono mb-12">
          Effective Date — June 2026 &nbsp;·&nbsp; Last Updated — June 2026
        </p>

        <div className="terms-divider w-full h-px bg-neutral-800 mb-12" />

        <p className="terms-section text-[15px] sm:text-[16px] leading-[1.7] text-neutral-400 font-light mb-12">
          Welcome to the Khel Technologies website. By accessing or using our website and services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree with any part of these Terms, please do not use our website or services.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <section key={idx} className="terms-section">
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

        <div className="terms-divider w-full h-px bg-neutral-800 mt-16 mb-8" />

        <p className="terms-section text-[13px] text-neutral-600 font-mono uppercase tracking-[0.1em]">
          © {new Date().getFullYear()} Khel Technologies. All rights reserved.
        </p>
      </div>
    </main>
  );
}
