"use client";

import { motion } from "framer-motion";
import { Menu, ArrowUpRight } from "lucide-react";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
        >
            <div className="w-full max-w-5xl bg-[#141414]/80 backdrop-blur-md border border-neutral-800 rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/50">
                <div className="flex items-center gap-3">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M10 10H22L30 30H10V10Z" fill="currentColor" />
                        <path d="M32 10H24L16 30H24L32 10Z" fill="currentColor" fillOpacity="0.5" />
                    </svg>
                    <span className="font-bold text-neutral-200 tracking-tight text-xl">Khel.</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
                    <a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a>
                    <a href="#process" className="hover:text-white transition-colors">Process</a>
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-[#d4ff90] text-black rounded-full text-sm font-bold hover:bg-[#bfff60] transition-colors flex items-center gap-2">
                        Let's Talk <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
