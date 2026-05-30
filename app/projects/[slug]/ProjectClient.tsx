"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Project } from "@/data/projects";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectClient({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Split text for hero title
    const splitTitle = new SplitType(".hero-title", { types: "chars,words" });
    
    // Initial load animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.fromTo(".nav-back", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, delay: 0.2 })
      .fromTo(splitTitle.chars, { y: "100%", opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.02 }, "-=0.8")
      .fromTo(".hero-image-wrapper", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.inOut" }, "-=0.8");

    // Scroll animations
    const sections = gsap.utils.toArray(".fade-up-section");
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });

    // Parallax gallery images
    const images = gsap.utils.toArray(".parallax-image");
    images.forEach((img: any) => {
      gsap.fromTo(img, 
        { y: -30 }, 
        {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });

    return () => {
      splitTitle.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#111111] text-[#ededed] font-sans selection:bg-[#d4ff90] selection:text-black">
      <div className="max-w-5xl mx-auto px-6 pt-[12vh] pb-16 md:pb-32">

        {/* Navigation */}
        <div className="nav-back mb-16 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xs font-mono tracking-widest uppercase hover:text-[#d4ff90] transition-colors inline-flex items-center gap-2"
          >
            <span className="text-lg leading-none">&larr;</span> Back to Work
          </Link>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-mono tracking-widest uppercase text-[#d4ff90] hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              See Live
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
            </a>
          )}
        </div>

        {/* Hero Title Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div className="overflow-hidden">
              <h1 className="hero-title text-[38px] sm:text-[56px] md:text-[76px] lg:text-[90px] leading-[1] font-manifesto uppercase text-[#ededed]">
                {project.title}
              </h1>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-white/50 pb-2 shrink-0">
              <span>{project.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
              <span>{project.year}</span>
            </div>
          </div>
          
          {/* Full-width Hero Image */}
          <div className="hero-image-wrapper relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </section>

        {/* Overview Block */}
        <section className="fade-up-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-b border-neutral-900 py-12 my-20">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1px] bg-neutral-600"></span>
              <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Overview</span>
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider mb-2">Client / Project</h4>
              <p className="text-[#ededed] text-[15px] font-normal leading-relaxed">{project.client}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider mb-2">Timeline</h4>
              <p className="text-[#ededed] text-[15px] font-normal leading-relaxed">{project.timeline}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider mb-2">What we built</h4>
              <p className="text-[#ededed] text-[15px] font-normal leading-relaxed">{project.whatWeBuilt}</p>
            </div>
          </div>
        </section>

        {/* The Problem Block */}
        <section className="fade-up-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1px] bg-neutral-600"></span>
              <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">The Problem</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-[18px] sm:text-[22px] leading-[1.6] font-serif font-light text-neutral-200 tracking-tight max-w-2xl">
              {project.problem}
            </p>
          </div>
        </section>

        {/* Our Approach Block */}
        <section className="fade-up-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1px] bg-neutral-600"></span>
              <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Our Approach</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-neutral-400 text-[15px] sm:text-[16px] leading-[1.7] font-light max-w-2xl">
              {project.approach}
            </p>
          </div>
        </section>

        {/* Key Visuals Grid */}
        <section className="flex flex-col gap-12 md:gap-20 mb-24 md:mb-32">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="fade-up-section relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
              <Image
                src={img}
                alt={`${project.title} Visual ${idx + 1}`}
                fill
                className="parallax-image object-cover scale-[1.1]"
                sizes="100vw"
              />
            </div>
          ))}
        </section>

        {/* Outcome Block */}
        <section className="fade-up-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32 border-t border-neutral-900 pt-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1px] bg-neutral-600"></span>
              <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Outcome</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-neutral-300 text-[15px] sm:text-[16px] leading-[1.7] font-light max-w-2xl">
              {project.outcome}
            </p>
          </div>
        </section>

        {/* Next Project Link */}
        <section className="fade-up-section mt-32 md:mt-48 text-center flex flex-col items-center justify-center border-t border-neutral-900 pt-20">
          <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em] mb-6">Next Project</span>
          <Link 
            href={`/projects/${project.nextProjectSlug}`} 
            className="group text-[28px] sm:text-[44px] md:text-[56px] font-manifesto uppercase tracking-tight text-[#ededed] hover:text-[#d4ff90] transition-colors relative flex items-center gap-4"
          >
            <span>{project.nextProjectTitle}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-3">→</span>
          </Link>
        </section>

      </div>
    </main>
  );
}
