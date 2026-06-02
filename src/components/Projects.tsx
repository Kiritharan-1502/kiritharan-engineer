"use client";

import React from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading title="Things I've Built" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.1}
              className={cn(
                "h-full",
                project.size === "large" ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              )}
            >
              <GlassCard
                hoverGlow
                className={cn(
                  "p-6 md:p-8 h-full flex flex-col group relative transform-gpu hover:-translate-y-2 hover:rotate-1",
                  project.size === "large" && "md:flex-row gap-8"
                )}
              >
                <div className={cn("flex flex-col flex-1", project.size === "large" && "md:w-1/2")}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-[#94a3b8] md:hidden">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#c084fc] transition-colors">
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-[#22d3ee] transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className={cn("text-[#cbd5e1] mb-6 flex-grow", project.size === "large" && "text-lg")}>
                    {project.description}
                  </p>

                  {/* Move Tech Stack here for Large Cards */}
                  {project.size === "large" && (
                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono text-[#a855f7] bg-[#7c3aed]/10 px-2 py-1 rounded border border-[#a855f7]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className={cn("flex flex-col flex-1", project.size === "large" && "md:w-1/2 justify-between")}>
                   <div className="hidden md:flex justify-end gap-3 text-[#94a3b8] mb-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#c084fc] transition-colors">
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-[#22d3ee] transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>

                  {project.highlights && (
                    <div className={cn("mb-6", project.size === "large" && "bg-[#0a0a0f]/40 p-5 rounded-xl border border-[#a855f7]/20")}>
                      {project.size === "large" && <h4 className="text-sm font-bold text-[#c084fc] mb-3 uppercase tracking-wider">Key Highlights</h4>}
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-[#e2e8f0] flex items-start">
                            <span className="text-[#22d3ee] mr-2 mt-0.5">›</span> 
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Keep Tech Stack here for Medium/Small Cards */}
                  {project.size !== "large" && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono text-[#a855f7] bg-[#7c3aed]/10 px-2 py-1 rounded border border-[#a855f7]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
