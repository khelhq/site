"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  imageClassName?: string;
}

export default function ProjectCard({ title, category, imageUrl, imageClassName }: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col group cursor-pointer">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden bg-neutral-900 border border-white/5">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="100vw"
          className={`object-cover transition-transform duration-1000 ${imageClassName || "group-hover:scale-105"}`}
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
        
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 flex flex-col gap-2 pointer-events-none">
          <p className="text-white/70 text-[10px] md:text-[11px] font-mono font-medium uppercase tracking-[0.2em]">{category}</p>
          <h3 className="text-white text-[18px] md:text-[24px] font-manifesto">{title}</h3>
        </div>
      </div>
    </div>
  );
}
