"use client";

import React from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { education } from "@/data/education";
import { BookOpen } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading title="Education" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <ScrollReveal key={edu.id} delay={index * 0.2}>
              <GlassCard hoverGlow className="p-8 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#ec4899] p-[1px] mb-6 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <div className="w-full h-full rounded-2xl bg-[#0a0a0f] flex items-center justify-center text-[#c084fc]">
                    <BookOpen size={28} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                <p className="text-[#a855f7] font-medium mb-4">{edu.degree}</p>
                <div className="mt-auto inline-block px-4 py-1 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 text-sm font-mono text-[#cbd5e1]">
                  {edu.duration}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
