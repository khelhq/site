import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowDown, X } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-white selection:text-black">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-32 space-y-24">

        {/* 1. Hero / Manifesto */}
        <section id="about" className="space-y-8 mt-12 mb-12 scroll-mt-32">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-medium tracking-tight text-neutral-400">
            We are <span className="text-white underline decoration-neutral-700 underline-offset-4 decoration-1">Khel.</span>
            <br />
            Systems architects who build <span className="text-white">custom digital infrastructure</span> to <span className="text-white">replace manual work.</span>
          </h1>
          <p className="max-w-2xl text-lg text-neutral-500 font-normal">
            We don’t just build websites. We engineer intelligence into your business so you can scale without adding headcount.
          </p>
        </section>

        {/* 2. The Infrastructure */}
        <section id="infrastructure" className="space-y-6 scroll-mt-32">
          <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
            <ArrowDown className="w-4 h-4" />
            <span>The Infrastructure</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Asset 1: Conversion Systems */}
            {/* Asset 1: Conversion Systems */}
            <div className="space-y-4">
              <div className="group relative aspect-square bg-[#0f0f0f] rounded-3xl border border-neutral-900 overflow-hidden hover:border-neutral-700 transition-colors">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/muzeyi-yelyen.jpg"
                    alt="Conversion Funnel - High Performance Web Example"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="text-xl font-bold">Conversion Systems</h3>
                <p className="text-neutral-300 font-medium">Your website should be a funnel, not a brochure.</p>
                <p className="text-neutral-500 text-xs tracking-wide">High-Performance Web • Lead Capture • Payment Routing</p>
              </div>
            </div>

            {/* Asset 2: Autonomous Workflows */}
            {/* Asset 2: Autonomous Workflows */}
            <div className="space-y-4">
              <div className="group relative aspect-square bg-[#0f0f0f] rounded-3xl border border-neutral-900 overflow-hidden hover:border-neutral-700 transition-colors">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/workflow-nodes.png"
                    alt="Autonomous Workflows - Automated Systems Example"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="text-xl font-bold">Autonomous Workflows</h3>
                <p className="text-neutral-300 font-medium">Operations that run without human error.</p>
                <p className="text-neutral-500 text-xs tracking-wide">AI Agents • Auto-Invoicing • CRM Sync</p>
              </div>
            </div>
          </div>

          {/* Asset 3: Digital Infrastructure */}
          {/* <div className="md:col-span-2 aspect-[2/1] bg-[#0f0f0f] rounded-3xl border border-neutral-900 overflow-hidden hover:border-neutral-700 transition-colors relative group">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-48 h-48 stroke-1 text-neutral-500" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 space-y-2">
                <h3 className="text-xl font-bold">Digital Infrastructure</h3>
                <p className="text-neutral-300 font-medium">Custom software for complex business needs.</p>
                <p className="text-neutral-500 text-xs tracking-wide">Admin Panels • SaaS Platforms • Client Portals</p>
              </div>
              <div className="absolute top-8 right-8 text-neutral-800 text-sm font-mono border border-neutral-900 px-3 py-1 rounded-full">Engineering Grade</div>
            </div> */}
        </section>

        {/* 3. Why businesses fail */}
        <section id="process" className="space-y-8 scroll-mt-32">
          <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
            <ArrowDown className="w-4 h-4" />
            <span>Why businesses fail</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Leads Ignored", icon: <X className="w-6 h-6" /> },
              { label: "Manual Data", icon: <X className="w-6 h-6" /> },
              { label: "Slow Site Speed", icon: <X className="w-6 h-6" /> },
              { label: "Chaos via WhatsApp", icon: <X className="w-6 h-6" /> },
            ].map((item, i) => (
              <div key={i} className="aspect-square bg-[#0f0f0f] rounded-2xl border border-neutral-900 flex flex-col items-center justify-center gap-4 hover:bg-[#141414] transition-colors">
                <span className="text-neutral-600">{item.icon}</span>
                <span className="text-sm font-medium text-neutral-400">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-8">
            <p className="text-2xl font-serif italic text-neutral-200">"We fix that. Built on modern infrastructure"</p>
          </div>
        </section>

        <Footer />

      </div >
    </main >
  );
}
