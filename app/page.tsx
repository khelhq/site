"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectCard from "@/components/ProjectCard";

import SplitType from "split-type";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let split: SplitType;

    const initSplit = () => {
      split = new SplitType(".hero-text", { types: "lines" });
      split.lines?.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.className = "line-mask overflow-hidden";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });
    };

    initSplit();

    gsap.from(split!.lines, {
      y: "100%",
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.08,
      delay: 0.2,
    });

    const handleResize = () => {
      const wrappers = document.querySelectorAll('.line-mask');
      wrappers.forEach(w => {
        if (w.parentNode) {
          while (w.firstChild) w.parentNode.insertBefore(w.firstChild, w);
          w.parentNode.removeChild(w);
        }
      });
      split.revert();
      initSplit();
    };

    let resizeTimer: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      split.revert();
    };

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
      <div className="max-w-5xl mx-auto px-6 pt-[22vh] pb-8 md:pb-16">
        <section className="max-w-4xl">
          <p className="hero-text text-[28px] sm:text-[36px] md:text-[42px] leading-[1.3] font-medium tracking-tight text-[#ededed]">
            We design and engineer high-performance digital products for scaling brands.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mt-24 md:mt-32 w-full flex flex-col gap-8 md:gap-16 project-grid">
          <div className="w-full">
            <ProjectCard
              title="Air Studios"
              category="Website"
              imageUrl="/Mockkup.jpg"
              imageClassName="scale-[1.15] group-hover:scale-[1.20]"
              href="/projects/air-studios"
            />
          </div>
          <div className="w-full">
            <ProjectCard
              title="Muzeyi Yelyen - Portofolio 25"
              category="Website"
              imageUrl="/Mockkupv2.jpg"
              href="/projects/muzeyi-yelyen"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
