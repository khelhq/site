"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectCard from "@/components/ProjectCard";

import SplitType from "split-type";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Split the text into lines
    const split = new SplitType(".hero-text", { types: "lines" });
    
    // Wrap each line in an overflow-hidden container for the masking effect
    split.lines?.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.className = "overflow-hidden inline-block w-full";
      line.parentNode?.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    // Animate lines up from 100% 
    gsap.from(split.lines, {
      y: "100%",
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.08,
      delay: 0.2,
      onComplete: () => {
        // Revert to original text after animation for proper responsive resizing
        split.revert();
      }
    });

    gsap.from(".project-grid > div", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.6,
      stagger: 0.2,
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#111111] text-[#ededed] font-sans selection:bg-[#d4ff90] selection:text-black">
      <div className="max-w-5xl mx-auto px-6 pt-[22vh] pb-32">
        <section className="max-w-4xl">
          <p className="hero-text text-[28px] sm:text-[36px] md:text-[42px] leading-[1.3] font-medium tracking-tight text-[#ededed]">
            We are a strategic design and technology studio dedicated to engineering best-in-class digital products. We don't just build; we invest knowledge to transcend expectations.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mt-24 md:mt-32 mb-24 md:mb-32 w-full flex flex-col gap-8 md:gap-16 project-grid">
          <div className="w-full">
            <ProjectCard
              title="Air Studios"
              category="Website"
              imageUrl="/Mockkup.jpg"
              imageClassName="scale-[1.15] group-hover:scale-[1.20]"
            />
          </div>
          <div className="w-full">
            <ProjectCard
              title="Muzeyi Yelyen - Portofolio 25"
              category="Website"
              imageUrl="/Mockkupv2.jpg"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
