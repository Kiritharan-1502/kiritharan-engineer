"use client";

import React, { useRef } from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion-3d";
import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

// Add a 3D Floating Award Model
const FloatingAward = () => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          color="#c084fc" 
          roughness={0.1} 
          metalness={0.5} 
          transmission={0.8} 
          thickness={0.5} 
          emissive="#7c3aed"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

export const Certifications = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      
      {/* 3D Background Elements for Certifications */}
      <div className="absolute right-0 top-0 w-1/3 h-full z-0 opacity-40 pointer-events-none hidden md:block">
         <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#c084fc" />
            <Environment preset="city" />
            <FloatingAward />
         </Canvas>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex items-center justify-between">
            <SectionHeading title="Certifications" subtitle="Credentials & achievements in Agentic AI, RAG, and Cloud-Native systems." />
            <div className="hidden md:flex gap-4 mb-16">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#94a3b8] hover:text-[#c084fc] hover:border-[#c084fc]/50 transition-all hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#94a3b8] hover:text-[#c084fc] hover:border-[#c084fc]/50 transition-all hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative group z-10">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 px-6 md:px-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certifications.map((cert) => (
            <GlassCard 
              key={cert.id} 
              hoverGlow 
              className="w-[300px] md:w-[350px] p-6 shrink-0 snap-center flex flex-col group/card transition-all duration-300 relative transform-gpu hover:-translate-y-2 hover:rotate-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-[#a855f7]/10 text-[#c084fc] group-hover/card:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#22d3ee]">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover/card:text-[#c084fc] transition-colors">
                {cert.name}
              </h3>
              
              <div className="mt-auto pt-4 flex flex-col gap-1 border-t border-[#a855f7]/20">
                <span className="text-[#c084fc] font-medium">{cert.issuer}</span>
                <div className="flex justify-between items-center text-sm font-mono text-[#94a3b8]">
                  <span>{cert.date}</span>
                  {cert.credentialId && (
                    <span className="opacity-50 text-xs">ID: {cert.credentialId.substring(0, 8)}...</span>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
};
