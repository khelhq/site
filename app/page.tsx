"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "@/components/ProjectCard";

import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

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

    gsap.from(".project-grid > div", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.6,
      stagger: 0.2,
    });

    // Services Section Scroll Triggered Animation
    gsap.from(".services-header", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 85%",
      }
    });

    gsap.from(".service-card", {
      y: 45,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%",
      }
    });

    // CTA Section Scroll Triggered Animation
    gsap.from(".cta-title", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 85%",
      }
    });

    gsap.from(".cta-actions", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 85%",
      }
    });

    // Recalculate ScrollTrigger offsets once fonts and DOM are fully loaded
    ScrollTrigger.refresh();

    // Force a refresh after client-side routing layout completes
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth === lastWidth) return;
      lastWidth = currentWidth;

      const wrappers = document.querySelectorAll('.line-mask');
      wrappers.forEach(w => {
        if (w.parentNode) {
          while (w.firstChild) w.parentNode.insertBefore(w.firstChild, w);
          w.parentNode.removeChild(w);
        }
      });
      split?.revert();
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
      clearTimeout(refreshTimer);
      split?.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#111111] text-[#ededed] font-sans selection:bg-[#d4ff90] selection:text-black">
      <div className="max-w-5xl mx-auto px-6 pt-[22vh] pb-8 md:pb-16">
        <section className="max-w-4xl">
          <p className="hero-text text-[28px] sm:text-[36px] md:text-[42px] leading-[1.3] font-medium tracking-tight text-[#ededed]">
            We build digital products that work. Websites, web apps, automations, and custom software, for businesses that mean it, wherever they are.
          </p>
        </section>

        {/* Projects Section */}
        <section id="work" className="mt-24 md:mt-32 w-full flex flex-col gap-3 md:gap-4 project-grid">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-neutral-600"></span>
            <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Selected Work</span>
          </div>
          <div className="w-full">
            <ProjectCard
              title="Presbon Safe"
              category="NGO Website"
              imageUrl="/mockup3.jpg"
              href="/projects/presbon-safe"
            />
          </div>
          <div className="w-full">
            <ProjectCard
              title="Air Studios"
              category="Website"
              imageUrl="/Mockkup.jpg"
              imageClassName="scale-[1.15] group-hover:scale-[1.20]"
              href="/projects/air-studios"
            />
          </div>
        </section>

        {/* Services Section ("WHAT WE DO") */}
        <section id="services" className="mt-32 md:mt-48 w-full services-section">
          <div className="flex justify-between items-end w-full mb-8 services-header">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1px] bg-neutral-600"></span>
              <h2 className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">What we do</h2>
            </div>
            <Link
              href="/services"
              className="text-[12px] md:text-[13px] text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group font-medium uppercase tracking-[0.1em]"
            >
              Full services <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="border border-neutral-800/80 bg-[#111111] overflow-hidden">
            {/* Row 1: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Card 01 */}
              <div className="p-10 md:p-12 flex flex-col justify-between min-h-[300px] border-b border-neutral-800/80 md:border-r hover:bg-neutral-900/10 transition-colors duration-500 group service-card">
                <div>
                  <span className="text-[12px] font-mono text-neutral-600/80 tracking-[0.3em] mb-8 block group-hover:text-[#d4ff90] transition-colors duration-500">01</span>
                  <h3 className="text-neutral-100 text-[24px] md:text-[28px] font-light leading-[1.2] tracking-tight mb-5">Web & Brand Websites</h3>
                </div>
                <p className="text-[14px] leading-[1.7] text-neutral-400 font-light">Design-led, performant websites that reflect what your business actually does.</p>
              </div>

              {/* Card 02 */}
              <div className="p-10 md:p-12 flex flex-col justify-between min-h-[300px] border-b border-neutral-800/80 md:border-r hover:bg-neutral-900/10 transition-colors duration-500 group service-card">
                <div>
                  <span className="text-[12px] font-mono text-neutral-600/80 tracking-[0.3em] mb-8 block group-hover:text-[#d4ff90] transition-colors duration-500">02</span>
                  <h3 className="text-neutral-100 text-[24px] md:text-[28px] font-light leading-[1.2] tracking-tight mb-5">Web Applications & SaaS</h3>
                </div>
                <p className="text-[14px] leading-[1.7] text-neutral-400 font-light">Full-stack products built for real users, scoped, designed, and shipped properly.</p>
              </div>

              {/* Card 03 */}
              <div className="p-10 md:p-12 flex flex-col justify-between min-h-[300px] border-b border-neutral-800/80 hover:bg-neutral-900/10 transition-colors duration-500 group service-card">
                <div>
                  <span className="text-[12px] font-mono text-neutral-600/80 tracking-[0.3em] mb-8 block group-hover:text-[#d4ff90] transition-colors duration-500">03</span>
                  <h3 className="text-neutral-100 text-[24px] md:text-[28px] font-light leading-[1.2] tracking-tight mb-5">Custom Software & Tools</h3>
                </div>
                <p className="text-[14px] leading-[1.7] text-neutral-400 font-light">If you know what you need but can&apos;t find it anywhere, we build that.</p>
              </div>
            </div>

            {/* Row 2: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Card 04 */}
              <div className="p-10 md:p-12 flex flex-col justify-between min-h-[300px] border-b border-neutral-800/80 md:border-b-0 md:border-r hover:bg-neutral-900/10 transition-colors duration-500 group service-card">
                <div>
                  <span className="text-[12px] font-mono text-neutral-600/80 tracking-[0.3em] mb-8 block group-hover:text-[#d4ff90] transition-colors duration-500">04</span>
                  <h3 className="text-neutral-100 text-[24px] md:text-[28px] font-light leading-[1.2] tracking-tight mb-5">AI Automations</h3>
                </div>
                <p className="text-[14px] leading-[1.7] text-neutral-400 font-light">Intelligent workflows that handle the repetitive stuff, lead capture, responses, scheduling, so your team doesn&apos;t have to.</p>
              </div>

              {/* Card 05 */}
              <div className="p-10 md:p-12 flex flex-col justify-between min-h-[300px] hover:bg-neutral-900/10 transition-colors duration-500 group service-card">
                <div>
                  <span className="text-[12px] font-mono text-neutral-600/80 tracking-[0.3em] mb-8 block group-hover:text-[#d4ff90] transition-colors duration-500">05</span>
                  <h3 className="text-neutral-100 text-[24px] md:text-[28px] font-light leading-[1.2] tracking-tight mb-5">Google Workspace Automations</h3>
                </div>
                <p className="text-[14px] leading-[1.7] text-neutral-400 font-light">Custom scripts, integrations, and automations across Gmail, Sheets, Drive, and Calendar that eliminate manual busywork.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 md:mt-48 mb-8 md:mb-16 w-full cta-section">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-4 h-[1px] bg-neutral-600"></span>
            <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Start a conversation</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-6">
            <div className="max-w-xl cta-title">
              <h2 className="text-[38px] sm:text-[48px] md:text-[60px] leading-[1.1] font-serif text-white tracking-tight">
                Have something <br />
                to <span className="font-manifesto text-neutral-400">build?</span>
              </h2>
            </div>

            <div className="flex flex-col items-end gap-4 w-full md:w-auto cta-actions">
              <a
                href="https://wa.me/233558161835"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 bg-[#ededed] hover:bg-[#d4ff90] text-black font-semibold rounded-full flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg cursor-pointer text-[15px]"
              >
                Start a conversation
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/work"
                className="text-[13px] text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group font-medium uppercase tracking-[0.05em] mr-4"
              >
                Or see the work first <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
