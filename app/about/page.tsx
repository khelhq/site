"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-heading", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.2,
      });

      gsap.from(".about-body", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.5,
      });

      gsap.from(".about-cta", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.9,
      });

      gsap.from(".about-divider", {
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
      <div className="max-w-3xl mx-auto px-6 pt-[22vh] pb-24 md:pb-32">
        {/* Section: Khel intro */}
        <section>
          <h1 className="about-heading text-[36px] sm:text-[48px] md:text-[64px] leading-[1.15] tracking-tight">
            <span className="font-manifesto font-normal text-neutral-400">Khel</span>
            <span className="font-medium text-[#ededed]"> — play,</span>
            <br />
            <span className="font-medium text-[#ededed]">game, craft</span>
            <br />
            <span className="font-medium text-[#ededed]">in motion.</span>
          </h1>
          
          <p className="about-body text-[20px] sm:text-[24px] leading-[1.5] text-neutral-300 mt-12 max-w-xl font-light tracking-tight">
            A small collective of developers and engineers based in Ghana, building digital products for businesses that take their online presence seriously.
          </p>
          
          <p className="about-body text-[15px] sm:text-[16px] leading-[1.7] text-neutral-400 mt-6 max-w-xl font-light">
            We work locally and internationally with zero middlemen, no handoffs, and absolute intention. By taking on fewer projects, we ensure every build receives our full craft and care.
          </p>
        </section>

        <div className="about-divider w-full h-px bg-neutral-800 my-12" />

        {/* CTAs */}
        <div className="about-cta flex flex-col sm:flex-row gap-6 sm:gap-10">
          <a
            href="https://wa.me/233558161835"
            className="group inline-flex items-center gap-2 text-[15px] sm:text-[16px] font-medium text-[#ededed] hover:text-[#d4ff90] transition-colors duration-300"
          >
            <span className="border-b border-current pb-0.5">
              Start a project
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://wa.me/233558161835"
            className="group inline-flex items-center gap-2 text-[15px] sm:text-[16px] font-medium text-[#ededed] hover:text-[#d4ff90] transition-colors duration-300"
          >
            <span className="border-b border-current pb-0.5">
              Work with us
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </main>
  );
}
