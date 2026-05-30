"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".services-heading", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.2,
      });

      gsap.from(".services-item", {
        y: 35,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.5,
      });

      gsap.from(".engage-section", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.9,
      });

      gsap.from(".cta-section", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.1,
      });

      gsap.from(".divider-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.2,
        delay: 0.4,
      });
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#111111] text-[#ededed] font-sans selection:bg-[#d4ff90] selection:text-black"
    >
      <div className="max-w-5xl mx-auto px-6 pt-[22vh] pb-24 md:pb-32">
        {/* Header */}
        <section className="mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4 services-heading">
            <span className="w-4 h-[1px] bg-neutral-600"></span>
            <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Services</span>
          </div>
          <h1 className="services-heading text-[32px] sm:text-[48px] md:text-[60px] font-sans font-medium tracking-tight leading-[1.1] text-white max-w-2xl lowercase">
            we work across three areas. everything we do connects design thinking with engineering.
          </h1>
        </section>

        {/* Services List Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Service 1 */}
          <div className="services-item flex flex-col">
            <h2 className="text-white text-[28px] sm:text-[34px] font-sans font-medium leading-[1.05] tracking-tight mb-6 lowercase">
              web & brand<br />websites
            </h2>

            <ul className="space-y-2.5 text-[16px] sm:text-[18px] font-normal text-neutral-200">
              <li>Brand Development</li>
              <li>Custom Web Design</li>
              <li>CMS Setup & Integration</li>
              <li>Launch & Optimization</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="services-item flex flex-col">
            <h2 className="text-white text-[28px] sm:text-[34px] font-sans font-medium leading-[1.05] tracking-tight mb-6 lowercase">
              web apps<br />& saas products
            </h2>

            <ul className="space-y-2.5 text-[16px] sm:text-[18px] font-normal text-neutral-200">
              <li>Product Scoping & Strategy</li>
              <li>UX/UI Layout Design</li>
              <li>Full-stack Web Engineering</li>
              <li>Database & Third-party APIs</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="services-item flex flex-col">
            <h2 className="text-white text-[28px] sm:text-[34px] font-sans font-medium leading-[1.05] tracking-tight mb-6 lowercase">
              custom software<br />& digital tools
            </h2>

            <ul className="space-y-2.5 text-[16px] sm:text-[18px] font-normal text-neutral-200">
              <li>Technical Scoping & Analysis</li>
              <li>Scalable Software Architecture</li>
              <li>Custom Dashboard Build</li>
              <li>Full Handoff or Ongoing Support</li>
            </ul>
          </div>

        </section>

        <div className="divider-line w-full h-px bg-neutral-800 my-16 md:my-24" />

        {/* How we engage */}
        <section className="engage-section">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-4 h-[1px] bg-neutral-600"></span>
            <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">How we engage</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl">
            <div className="flex flex-col">
              <h3 className="text-white text-[20px] sm:text-[22px] font-sans font-medium tracking-tight mb-3 lowercase">
                project-based
              </h3>
              <p className="text-neutral-200 text-[16px] sm:text-[18px] leading-relaxed font-normal">
                Scoped work with a fixed deliverable. Ideal for clean, defined launches, brand redesigns, or scoping initial product releases.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white text-[20px] sm:text-[22px] font-sans font-medium tracking-tight mb-3 lowercase">
                ongoing retainer
              </h3>
              <p className="text-neutral-200 text-[16px] sm:text-[18px] leading-relaxed font-normal">
                Retainer or build partner relationship. Ideal for scaling products, continuous feature refinement, and ongoing technical advisory.
              </p>
            </div>
          </div>
        </section>

        <div className="divider-line w-full h-px bg-neutral-800 my-16 md:my-24" />

        {/* CTA */}
        <section className="cta-section">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-4 h-[1px] bg-neutral-600"></span>
            <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Start a conversation</span>
          </div>

          <p className="text-[18px] sm:text-[22px] leading-[1.5] text-neutral-300 font-light tracking-tight max-w-xl">
            Not sure which fits? Tell us what you&apos;re trying to solve — we&apos;ll figure it out together.
          </p>

          <div className="mt-8">
            <a
              href="https://wa.me/233558161835"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[15px] sm:text-[16px] font-medium text-[#ededed] hover:text-[#d4ff90] transition-colors duration-300"
            >
              <span className="border-b border-current pb-0.5">
                Start a conversation
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
