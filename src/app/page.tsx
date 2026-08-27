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
import { RocketUniverse } from "@/components/ui/RocketUniverse";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

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

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Custom cursor logic
    const cursor = document.getElementById("custom-cursor");
    const cursorGlow = document.getElementById("custom-cursor-glow");

    let glowTimeout: ReturnType<typeof setTimeout>;

    const updateCursorPosition = (e: MouseEvent) => {
      if (cursor && cursorGlow) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        clearTimeout(glowTimeout);

        glowTimeout = setTimeout(() => {
          cursorGlow.style.left = `${e.clientX}px`;
          cursorGlow.style.top = `${e.clientY}px`;
        }, 50);
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(glowTimeout);
      lenis.destroy();
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        id="custom-cursor"
        className="
          hidden md:block
          fixed
          w-3 h-3
          bg-[#c084fc]
          rounded-full
          pointer-events-none
          z-[100]
          -translate-x-1/2
          -translate-y-1/2
          transition-transform
          duration-100
          ease-out
          mix-blend-screen
        "
      />

      {/* Cursor Glow */}
      <div
        id="custom-cursor-glow"
        className="
          hidden md:block
          fixed
          w-12 h-12
          bg-[#a855f7]/40
          rounded-full
          blur-xl
          pointer-events-none
          z-[99]
          -translate-x-1/2
          -translate-y-1/2
          mix-blend-screen
        "
      />

      <AnimatedBackground />

      <Navbar />

      <main className="flex flex-col">
        <Hero />

        <About />

        {/* ================================================
            BEYOND THE CODE
        ================================================= */}

        <section
          id="universe"
          className="py-20 relative overflow-hidden"
        >
          {/* Section Heading */}
          <div className="container mx-auto px-6 md:px-12 mb-12">
            <ScrollReveal>
              <div className="relative">

                {/* Heading + Interactive Underline */}
                <div className="group relative inline-block">

                  <h2
                    className="
                      text-4xl
                      md:text-5xl
                      font-bold
                      text-white
                      cursor-pointer
                    "
                  >
                    Beyond the{" "}
                    <span
                      className="
                        bg-gradient-to-r
                        from-pink-400
                        via-purple-400
                        to-blue-400
                        bg-clip-text
                        text-transparent
                      "
                    >
                      Code
                    </span>
                  </h2>

                  {/* Short underline → expands on hover */}
                  <div
                    className="
                      mt-5
                      h-1
                      w-[100px]
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      via-pink-500
                      to-blue-500
                      transition-all
                      duration-500
                      ease-out
                      group-hover:w-[220px]
                    "
                  />

                </div>

                {/* Subtitle */}
                <p
                  className="
                    mt-5
                    text-slate-400
                    text-base
                    md:text-lg
                  "
                >
                  Explore the technologies, tools, and skills that shape my
                  journey.
                </p>

              </div>
            </ScrollReveal>
          </div>

          {/* ================================================
              ROCKET UNIVERSE
          ================================================= */}

          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <RocketUniverse />
            </ScrollReveal>
          </div>
        </section>

        {/* ================================================
            EXPERIENCE
        ================================================= */}

        <Experience />

        {/* ================================================
            PROJECTS
        ================================================= */}

        <Projects />

        {/* ================================================
            SKILLS
        ================================================= */}

        <Skills />

        {/* ================================================
            CERTIFICATIONS
        ================================================= */}

        <Certifications />

        {/* ================================================
            EDUCATION
        ================================================= */}

        <Education />

        {/* ================================================
            CONTACT
        ================================================= */}

        <Contact />
      </main>

      <Footer />
    </>
  );
}