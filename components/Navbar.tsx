"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
    { title: "Work", href: "/#work" },
    { title: "Services", href: "/#services" },
    { title: "Connect", href: "https://wa.me/233558161835" },
];

const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.02
        }
    }
};

const linkVariants: any = {
    hidden: { opacity: 0, y: 8 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 25, stiffness: 350 }
    },
    exit: {
        opacity: 0,
        y: 4,
        transition: { duration: 0.1 }
    }
};

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);

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
            className="fixed top-8 left-0 right-0 z-50 flex flex-col items-center px-6 pointer-events-none"
        >
            {/* 1. Centered Header Pill Container ( z-50 relative ) */}
            <div className={cn(
                "w-[340px] md:w-[500px] bg-[#1a1a1a]/40 backdrop-blur-2xl border border-white/5 py-2.5 px-3 flex items-center justify-between pointer-events-auto shadow-xl transition-all duration-300 relative z-50",
                isOpen ? "rounded-t-2xl rounded-b-none border-b-transparent" : "rounded-2xl"
            )}>
                <div className="flex items-center gap-3 pl-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M6 3v18" />
                        <path d="M18 6l-9 6 9 6" />
                    </svg>
                    <span className="font-medium text-white tracking-tight text-[17px]">Khel.</span>
                </div>

                <div className="flex items-center pr-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1.5 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center justify-center rounded-xl hover:bg-white/5"
                        aria-label="Menu"
                    >
                        <MenuToggleIcon open={isOpen} className="size-6" duration={400} />
                    </button>
                </div>
            </div>

            {/* 2. Sibling Dropdown Drawer (Placed directly below flush, z-40) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", damping: 30, stiffness: 250 }}
                        className="w-[340px] md:w-[500px] bg-[#1a1a1a]/40 backdrop-blur-2xl border border-white/5 border-t-0 rounded-b-2xl overflow-hidden shadow-xl pointer-events-auto z-40 mt-[-1px]"
                    >
                        <div className="pt-4 pb-6 px-6 flex flex-col gap-6">
                            {/* Navigation Links */}
                            <motion.div
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                variants={containerVariants}
                                className="flex flex-col gap-3 items-start justify-center"
                            >
                                {links.map((link) => (
                                    <motion.div 
                                        key={link.title} 
                                        variants={linkVariants}
                                        className="w-full flex justify-start items-center"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-neutral-200 hover:text-[#d4ff90] transition-colors duration-300 uppercase block select-none leading-normal whitespace-nowrap"
                                        >
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Drawer Footer */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="flex justify-center items-center text-[10px] tracking-widest text-neutral-500 uppercase mt-2 pt-4 border-t border-white/5"
                            >
                                <div className="flex gap-6 font-medium">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">INSTAGRAM</a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LINKEDIN</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
