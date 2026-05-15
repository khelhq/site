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
      .fromTo(".hero-meta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.6")
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
      <div className="max-w-6xl mx-auto px-6 pt-[12vh] pb-16 md:pb-32">

        {/* Hero Section */}
        <section className="mb-32 md:mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
            <div className="overflow-hidden">
              <h1 className="hero-title text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[1] font-manifesto uppercase text-[#ededed]">
                {project.title}
              </h1>
            </div>
            <div className="hero-meta flex flex-col gap-2 font-mono text-sm tracking-widest uppercase text-white/50 text-left md:text-right shrink-0 pb-2">
              <p>{project.category}</p>
              <p>{project.year}</p>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 text-[#d4ff90] hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  See Live
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                </a>
              )}
            </div>
          </div>
          
          <div className="hero-image-wrapper relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
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

        {/* Details Section */}
        <section className="fade-up-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-40">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono tracking-widest uppercase text-white/50 mb-4 border-t border-white/10 pt-4">Overview</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[20px] md:text-[28px] leading-[1.4] font-medium tracking-tight text-[#ededed]">
              {project.overview}
            </p>
          </div>
        </section>

        <section className="fade-up-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-40">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono tracking-widest uppercase text-white/50 mb-4 border-t border-white/10 pt-4">Challenge & Solution</h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-8 md:gap-12">
            <div>
              <h3 className="text-lg mb-4 text-[#d4ff90] font-medium">The Challenge</h3>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-white/70 max-w-2xl">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-4 text-[#d4ff90] font-medium">The Solution</h3>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-white/70 max-w-2xl">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="flex flex-col gap-16 md:gap-32">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="fade-up-section relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
              <Image
                src={img}
                alt={`${project.title} Gallery ${idx + 1}`}
                fill
                className="parallax-image object-cover scale-[1.1]"
                sizes="100vw"
              />
            </div>
          ))}
        </section>

        {/* Next Project / Footer (simplified) */}
        <section className="fade-up-section mt-32 md:mt-48 text-center flex flex-col items-center justify-center">
          <p className="text-xs font-mono tracking-widest uppercase text-white/50 mb-6">Want to see more?</p>
          <Link href="/" className="text-[32px] md:text-[56px] font-manifesto uppercase tracking-tight hover:text-[#d4ff90] transition-colors relative group">
            <span className="relative z-10">Back to Index</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#d4ff90] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </section>
      </div>
    </main>
  );
}
