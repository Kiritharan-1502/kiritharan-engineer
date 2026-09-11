"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Trainings } from "@/components/Trainings";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) =>
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
    <div
      className="
        min-h-screen
        bg-[var(--background)]
        text-[var(--foreground)]
        transition-colors
        duration-300
      "
    >
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <main className="w-full">
        {/* HOME */}
        <Hero />

        {/* ABOUT */}
        <About />

        {/* EXPERIENCE */}
        <Experience />

        {/* TRAINING */}
        <Trainings />

        {/* SKILLS */}
        <Skills />

        {/* EDUCATION */}
        <Education />

        {/* CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}