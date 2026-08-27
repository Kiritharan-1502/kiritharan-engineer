"use client";

import React from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { GraduationCap, MapPin, Lightbulb, PenTool } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading title="About Me" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-lg text-[#cbd5e1] leading-relaxed">
            <ScrollReveal delay={0.1}>
              <p>
                I’m someone who enjoys understanding how technology works and
                finding ways to turn ideas into something practical.
                My journey in Information Science and Engineering has given me exposure to programming, web technologies, databases, testing, IT systems, and emerging technologies.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p>
                Through projects and hands-on experience, I’ve worked with technologies such as C#, Java, Python,
                SQL, Selenium WebDriver, Git, GitHub, and service management platforms including ServiceNow and Perceive. 
                I’m also developing my interest in Generative AI and exploring how it can be used to 
                create smarter and more useful solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p>
                I believe in learning by doing. I enjoy breaking down problems, experimenting with 
                different approaches, and continuously improving what I build. For me, growth comes 
                from staying curious, being open to learning, and turning challenges into opportunities 
                to understand something new.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p>
                Beyond technology, I enjoy reading, creative writing,
                journaling, travelling, music, and badminton.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScrollReveal delay={0.3} direction="left">
              <GlassCard
                hoverGlow
                className="p-6 flex flex-col items-center text-center gap-3 h-full"
              >
                <div className="p-3 rounded-full bg-[#7c3aed]/20 text-[#c084fc]">
                  <GraduationCap size={28} />
                </div>

                <h3 className="font-semibold text-white">Education</h3>

                <p className="text-sm text-[#94a3b8]">
                  B.E. in Information Science & Engineering
                  <br />
                  CGPA: 7.59
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="left">
              <GlassCard
                hoverGlow
                className="p-6 flex flex-col items-center text-center gap-3 h-full"
              >
                <div className="p-3 rounded-full bg-[#ec4899]/20 text-[#ec4899]">
                  <MapPin size={28} />
                </div>

                <h3 className="font-semibold text-white">Location</h3>

                <p className="text-sm text-[#94a3b8]">
                  Chennai, India
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.5} direction="left">
              <GlassCard
                hoverGlow
                className="p-6 flex flex-col items-center text-center gap-3 h-full"
              >
                <div className="p-3 rounded-full bg-[#22d3ee]/20 text-[#22d3ee]">
                  <Lightbulb size={28} />
                </div>

                <h3 className="font-semibold text-white">Focus</h3>

                <p className="text-sm text-[#94a3b8]">
                  Generative AI
                  <br />
                  (Symbolic + ML)
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.6} direction="left">
              <GlassCard
                hoverGlow
                className="p-6 flex flex-col items-center text-center gap-3 h-full"
              >
                <div className="p-3 rounded-full bg-[#a855f7]/20 text-[#a855f7]">
                  <PenTool size={28} />
                </div>

                <h3 className="font-semibold text-white">Creative Side</h3>

                <p className="text-sm text-[#94a3b8]">
                  Writing
                  <br />
                  Journaling
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};