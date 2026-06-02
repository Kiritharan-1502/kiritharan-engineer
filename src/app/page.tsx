"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { InteractiveBrain } from "@/components/ui/InteractiveBrain";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Custom cursor logic (desktop only)
    const cursor = document.getElementById('custom-cursor');
    const cursorGlow = document.getElementById('custom-cursor-glow');

    const updateCursorPosition = (e: MouseEvent) => {
      if (cursor && cursorGlow) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // Add a slight delay to the glow for a trailing effect
        setTimeout(() => {
          cursorGlow.style.left = `${e.clientX}px`;
          cursorGlow.style.top = `${e.clientY}px`;
        }, 50);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        id="custom-cursor" 
        className="hidden md:block fixed w-3 h-3 bg-[#c084fc] rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out mix-blend-screen"
      ></div>
      <div 
        id="custom-cursor-glow" 
        className="hidden md:block fixed w-12 h-12 bg-[#a855f7]/40 rounded-full blur-xl pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      ></div>

      <AnimatedBackground />
      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        <About />

        {/* 3D Interactive Brain Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionHeading title="Knowledge Graph" subtitle="Explore my skills and experience mapped as an interactive neural network." className="mb-0" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} distance={50} direction="up">
              <InteractiveBrain />
            </ScrollReveal>
          </div>
        </section>

        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
