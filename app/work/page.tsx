"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".work-heading", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.2,
      });

      gsap.from(".work-grid > div", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.5,
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
          <div className="flex items-center gap-2 mb-4 work-heading">
            <span className="w-4 h-[1px] bg-neutral-600"></span>
            <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Work</span>
          </div>
          <h1 className="work-heading text-[40px] sm:text-[56px] md:text-[72px] font-serif font-medium tracking-tight leading-[1.1] text-white lowercase">
            selected projects.
          </h1>
          <p className="work-heading text-[18px] sm:text-[22px] leading-[1.5] text-neutral-400 font-light mt-6 max-w-xl">
            A display of digital products built with intention, curiosity, and high craft.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 work-grid">
          {projects.map((project) => (
            <div key={project.slug}>
              <ProjectCard
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                href={`/projects/${project.slug}`}
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
