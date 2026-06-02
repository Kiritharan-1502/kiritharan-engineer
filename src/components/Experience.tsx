"use client";

import React from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { experiences } from "@/data/experience";
import { Briefcase, Building2, Server } from "lucide-react";
import { cn } from "@/lib/utils";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading title="Experience" />
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#7c3aed] via-[#ec4899] to-transparent opacity-30"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.1}>
                <div className="relative pl-12 md:pl-24 group">
                  {/* Timeline Dot with Icon */}
                  <div className={cn(
                    "absolute left-[5px] md:left-[10px] top-6 w-8 h-8 rounded-full border border-[#c084fc]/50 shadow-[0_0_15px_rgba(192,132,252,0.4)] z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-125",
                    exp.iconBg || "bg-[#0a0a0f]"
                  )}>
                    {exp.company.includes("Nokia") ? <Building2 size={14} className="text-white" /> : <Server size={14} className="text-white" />}
                  </div>

                  <GlassCard hoverGlow className="p-6 md:p-8 transform-gpu transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] group-hover:border-[#c084fc]/30">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 border-b border-[#a855f7]/10 pb-4">
                      <div className="flex items-center gap-4">
                        {/* Company Initial Avatar */}
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg",
                          exp.iconBg || "bg-gradient-to-br from-[#7c3aed] to-[#ec4899]"
                        )}>
                          {exp.company.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Briefcase size={14} className="text-[#a855f7]" />
                            <p className="text-[#a855f7] font-medium">{exp.company}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm md:text-right font-mono text-[#94a3b8] mt-2 md:mt-0 bg-[#0a0a0f]/50 py-2 px-3 rounded-lg border border-[#a855f7]/10 w-fit md:w-auto">
                        <p className="text-[#c084fc]">{exp.duration}</p>
                        {exp.location && <p className="mt-1">{exp.location}</p>}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6 text-[#cbd5e1]">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-[#22d3ee] mt-1 opacity-70 group-hover:opacity-100 transition-opacity">›</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-5 border-t border-[#a855f7]/10">
                      {exp.techTags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono text-[#c084fc] bg-[#7c3aed]/10 px-2.5 py-1 rounded-md border border-[#7c3aed]/20 transition-colors group-hover:bg-[#7c3aed]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
