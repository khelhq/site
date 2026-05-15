"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function NoisyBlurBackground() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let proxy = { blur: 0, opacity: 0.04 };
    let blurSetter = gsap.quickSetter(overlayRef.current, "backdropFilter");
    let opacitySetter = gsap.quickSetter(noiseRef.current, "opacity");

    let clamp = gsap.utils.clamp(0, 15); // max blur 15px
    let clampOpacity = gsap.utils.clamp(0.04, 0.3); // max noise opacity 0.3

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        let velocity = Math.abs(self.getVelocity());
        
        // Map velocity to blur and opacity
        let targetBlur = clamp(velocity / 150);
        let targetOpacity = clampOpacity(0.04 + velocity / 3000);

        gsap.to(proxy, {
          blur: targetBlur,
          opacity: targetOpacity,
          duration: 0.6,
          ease: "power2.out",
          onUpdate: () => {
            blurSetter(`blur(${proxy.blur}px)`);
            opacitySetter(proxy.opacity);
          },
          overwrite: true
        });
      }
    });
  }, []);

  return (
    <>
      {/* Velocity-based Blur Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[40] pointer-events-none"
        style={{ backdropFilter: "blur(0px)", WebkitBackdropFilter: "blur(0px)" }}
      />
      {/* Dynamic Noise layer */}
      <div 
        ref={noiseRef}
        className="fixed inset-0 z-[41] pointer-events-none mix-blend-overlay noise-bg"
        style={{ opacity: 0.04 }}
      />
    </>
  );
}
