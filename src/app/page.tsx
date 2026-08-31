"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Experience } from "@/components/Experience";
import { Trainings } from "@/components/Trainings";
import { Education } from "@/components/Education";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // =========================================================
    // LENIS — SMOOTH SCROLLING
    // =========================================================

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#101d35]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          MAIN CONTENT
          Desktop sidebar width = 126px
      ===================================================== */}

      <main
        className="
          ml-0
          min-h-screen
          bg-white
          md:ml-[126px]
        "
      >

        {/* ===================================================
            HOME
        =================================================== */}

        <Hero />

        {/* ===================================================
            ABOUT
        =================================================== */}

        <About />

        {/* ===================================================
            AREAS OF EXPERTISE
        =================================================== */}

        <Expertise />

        {/* ===================================================
            PROFESSIONAL EXPERIENCE
        =================================================== */}

        <Experience />

        {/* ===================================================
            PROFESSIONAL TRAININGS
        =================================================== */}

        <Trainings />

        {/* ===================================================
            EDUCATION & CERTIFICATIONS
        =================================================== */}
<Capabilities />

        {/* ===================================================
            CONTACT
        =================================================== */}

        <Education />

        {/* ===================================================
            TECHNICAL CAPABILITIES
        =================================================== */}

        
        <Contact />

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
}