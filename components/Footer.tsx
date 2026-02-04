import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        < section className="pt-24 flex flex-col items-center text-center space-y-12" >
            <div className="space-y-6 pt-8">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-200">Ready to replace manual work?</h2>
                <p className="text-neutral-500">We only take on 3 systems projects per quarter.</p>

                <a href="https://wa.me/233558161835?text=I%20have%20a%20systems%20problem" className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors border-b border-neutral-800 pb-1 hover:border-white">
                    Start the conversation <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>

            <div className="pt-12 text-neutral-800 text-xs font-mono uppercase tracking-wider flex justify-between w-full">
                <span>Accra, Ghana</span>
                <span>&copy; {new Date().getFullYear()} Khel Technologies.</span>
            </div>
        </section >
    );
};