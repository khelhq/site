import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full pt-24 pb-8 px-6 border-t border-neutral-900 bg-[#111111] relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#dcf594]/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-20">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="M6 3v18" />
                                <path d="M18 6l-9 6 9 6" />
                            </svg>
                            <span className="font-medium text-white tracking-tight text-[19px]">Khel.</span>
                        </Link>
                        <p className="text-neutral-400 max-w-sm text-[15px] leading-[1.6] font-light">
                            Solving the complicated, elevating the unique. We don't just build; we invest knowledge to transcend expectations.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Platform</h4>
                            <nav className="flex flex-col gap-3">
                                {[
                                    { label: "Work", href: "/work" },
                                    { label: "Services", href: "/services" },
                                    { label: "About", href: "/about" }
                                ].map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-neutral-300 hover:text-white transition-colors duration-300 text-[14px] flex items-center gap-2"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.2em]">Connect</h4>
                            <nav className="flex flex-col gap-3">
                                {[
                                    { label: "LinkedIn", href: "https://www.linkedin.com/company/khel-technologies/", isExternal: true },
                                    { label: "Instagram", href: "https://instagram.com", isExternal: true },
                                    { label: "X", href: "https://x.com", isExternal: true },
                                    { label: "WhatsApp", href: "https://wa.me/233558161835", isExternal: true },
                                    { label: "Call", href: "tel:+233558161835", isExternal: false }
                                ].map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.isExternal ? "_blank" : undefined}
                                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                                        className="text-neutral-300 hover:text-white transition-colors duration-300 text-[14px] flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                ))}
                            </nav>
                        </div>


                    </div>
                </div>

                <div className="pt-10 border-t border-neutral-900/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[11px] text-neutral-500 tracking-[0.1em] uppercase">
                    <div className="flex items-center gap-4">
                        <p>© {currentYear} KHEL TECHNOLOGIES</p>
                        <span className="w-1 h-1 bg-neutral-800 rounded-full" />
                        <p>EST. 2024</p>
                    </div>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
