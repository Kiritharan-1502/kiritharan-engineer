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
                project.size === "large"
                  ? "md:col-span-2 lg:col-span-2"
                  : "col-span-1"
              )}
            >
              <GlassCard
                hoverGlow
                className={cn(
                  "p-6 md:p-8 h-full flex flex-col group relative transform-gpu hover:-translate-y-2 hover:rotate-1",
                  project.size === "large" && "md:flex-row gap-8"
                )}
              >
                {/* LEFT SIDE */}
                <div
                  className={cn(
                    "flex flex-col flex-1",
                    project.size === "large" && "md:w-1/2"
                  )}
                >
                  {/* Project Title */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
                      {project.title}
                    </h3>

                    {/* Mobile Links */}
                    <div className="flex gap-3 text-[#94a3b8] md:hidden">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#c084fc] transition-colors"
                          aria-label="GitHub"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#22d3ee] transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={cn(
                      "text-[#cbd5e1] mb-6 flex-grow",
                      project.size === "large" && "text-lg"
                    )}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack - Large Cards */}
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

                {/* RIGHT SIDE */}
                <div
                  className={cn(
                    "flex flex-col flex-1",
                    project.size === "large" &&
                      "md:w-1/2 justify-between"
                  )}
                >
                  {/* Desktop Links */}
                  <div className="hidden md:flex justify-end gap-3 text-[#94a3b8] mb-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#c084fc] transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#22d3ee] transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  {/* Key Highlights */}
                  {project.highlights && (
                    <div
                      className={cn(
                        "mb-6",
                        project.size === "large" &&
                          "bg-[#0a0a0f]/40 p-5 rounded-xl border border-[#a855f7]/20"
                      )}
                    >
                      {project.size === "large" && (
                        <h4 className="text-sm font-bold text-[#c084fc] mb-3 uppercase tracking-wider">
                          Key Highlights
                        </h4>
                      )}

                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-[#e2e8f0] flex items-start"
                          >
                            <span className="text-[#22d3ee] mr-2 mt-0.5">
                              ›
                            </span>

                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Published Research Paper*/}
                  {project.publication && (
                    <div className="mb-6 p-5 rounded-xl border border-[#22d3ee]/20 bg-[#22d3ee]/5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#22d3ee] text-lg">
                          ✦
                        </span>

                        <h4 className="text-sm font-bold text-[#22d3ee] uppercase tracking-wider">
                          Published Research Paper
                        </h4>
                      </div>

                      <h5 className="text-sm font-semibold text-white leading-relaxed mb-2">
                        {project.publication.title}
                      </h5>

                      <p className="text-xs text-[#cbd5e1] mb-2">
                        {project.publication.journal}
                      </p>

                      <p className="text-xs text-[#94a3b8] mb-3">
                        {project.publication.details}
                      </p>

                      <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
                        <span className="text-[#cbd5e1]">
                          Authors:
                        </span>{" "}
                        {project.publication.authors}
                      </p>

                      {project.publication.link && (
                        <a
                          href={project.publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#22d3ee] hover:text-white transition-colors"
                        >
                          View Publication
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Tech Stack - Medium/Small Cards */}
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