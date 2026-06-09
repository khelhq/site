"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  imageClassName?: string;
  href?: string;
}

export default function ProjectCard({ title, category, imageUrl, imageClassName, href }: ProjectCardProps) {
  const content = (
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
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 z-10 flex items-baseline gap-2 pointer-events-none">
          <h3 className="text-white text-[15px] md:text-[17px] font-semibold leading-none">{title}</h3>
          <p className="text-white/60 text-[13px] md:text-[15px] font-light leading-none">{category}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="w-full block">{content}</Link>;
  }

  return content;
}
