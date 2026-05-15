"use client";


import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.2
        });
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
        >
            <div className="w-fit bg-[#1a1a1a]/40 backdrop-blur-lg border border-white/5 rounded-2xl py-2.5 px-3 flex items-center gap-20 md:gap-48 pointer-events-auto shadow-xl">
                <div className="flex items-center gap-3 pl-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M6 3v18" />
                        <path d="M18 6l-9 6 9 6" />
                    </svg>
                    <span className="font-medium text-white tracking-tight text-[17px]">Khel.</span>
                </div>

                <div className="flex items-center pr-2">
                    <button className="p-1.5 text-white/80 hover:text-white transition-colors" aria-label="Menu">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="0" width="6" height="6" />
                            <rect x="8" y="0" width="6" height="6" />
                            <rect x="0" y="8" width="6" height="6" />
                            <rect x="8" y="8" width="6" height="6" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
