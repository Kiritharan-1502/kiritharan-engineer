"use client";

import React from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { GraduationCap, MapPin, BrainCircuit, PenTool } from "lucide-react";

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
                I am an AI Engineer specializing in Agentic AI, Knowledge Graphs, and AIOps systems. I focus on building intelligent, scalable systems using modern AI paradigms.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p>
                I work at the intersection of Agentic AI (ReAct, tool-using agents, multi-agent systems), Retrieval-Augmented Generation (RAG), Knowledge Graphs & ontology-driven reasoning (OWL, GraphDB, Neo4j), and AIOps for cloud-native environments.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p>
                Currently, I'm building systems that combine graph-based reasoning with vector retrieval, Kubernetes-native telemetry pipelines, and AI agents with memory (episodic, semantic, procedural).
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p>
                I design end-to-end pipelines — from data ingestion and feature engineering to model/agent design, knowledge graph modeling (RDF/OWL), integration with Prometheus, TimescaleDB, OpenSearch, and deployment using Kubernetes, Helm, and Docker.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScrollReveal delay={0.3} direction="left">
              <GlassCard hoverGlow className="p-6 flex flex-col items-center text-center gap-3 h-full">
                <div className="p-3 rounded-full bg-[#7c3aed]/20 text-[#c084fc]">
                  <GraduationCap size={28} />
                </div>
                <h3 className="font-semibold text-white">Education</h3>
                <p className="text-sm text-[#94a3b8]">B.E. in Computer Science from VTU (2021-2025)</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="left">
              <GlassCard hoverGlow className="p-6 flex flex-col items-center text-center gap-3 h-full">
                <div className="p-3 rounded-full bg-[#ec4899]/20 text-[#ec4899]">
                  <MapPin size={28} />
                </div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-sm text-[#94a3b8]">Bangalore, India<br/>(Hybrid)</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.5} direction="left">
              <GlassCard hoverGlow className="p-6 flex flex-col items-center text-center gap-3 h-full">
                <div className="p-3 rounded-full bg-[#22d3ee]/20 text-[#22d3ee]">
                  <BrainCircuit size={28} />
                </div>
                <h3 className="font-semibold text-white">Focus</h3>
                <p className="text-sm text-[#94a3b8]">Hybrid AI<br/>(Symbolic + ML)</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.6} direction="left">
              <GlassCard hoverGlow className="p-6 flex flex-col items-center text-center gap-3 h-full">
                <div className="p-3 rounded-full bg-[#a855f7]/20 text-[#a855f7]">
                  <PenTool size={28} />
                </div>
                <h3 className="font-semibold text-white">Writing</h3>
                <p className="text-sm text-[#94a3b8]">Technical content author on AI architecture</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
