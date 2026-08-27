"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GradientText } from "./animations/GradientText";
import { TypewriterEffect } from "./animations/TypewriterEffect";
import { GradientButton } from "./ui/GradientButton";
import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

// Add a 3D Abstract Neural/Tech structure for the Hero background
const AbstractHero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#a855f7" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#22d3ee" />
      
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, -2]}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshPhysicalMaterial 
            color="#7c3aed" 
            wireframe 
            roughness={0.1}
            emissive="#7c3aed"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[4, -1, -3]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial 
            color="#ec4899" 
            wireframe 
            roughness={0.2}
            emissive="#ec4899"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[-2, -3, -5]}>
          <octahedronGeometry args={[2, 0]} />
          <meshPhysicalMaterial 
            color="#22d3ee" 
            wireframe 
            roughness={0.1}
            emissive="#22d3ee"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
    </Canvas>
  );
};

export const Hero = () => {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const taglineWords = "Software Developer • IT Operations Engineer • Generative AI • Problem Solving".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <AbstractHero3D />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xl md:text-2xl font-mono text-[#c084fc]"
        >
          <TypewriterEffect text="Hi, I'm" speed={100} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 drop-shadow-2xl"
        >
          <GradientText text="Shakthi Nandini J" />
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.5 },
            },
          }}
          className="text-xl md:text-3xl font-medium mb-8 flex flex-wrap justify-center gap-x-2 text-[#e2e8f0] drop-shadow-lg"
        >
          {taglineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="max-w-2xl text-lg md:text-xl text-[#94a3b8] mb-12 leading-relaxed backdrop-blur-sm bg-[#0a0a0f]/30 p-4 rounded-2xl"
        >
          Bridging full-stack engineering and Generative AI to build intelligent, autonomous, and scalable cloud systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <GradientButton onClick={() => scrollTo("#projects")} variant="solid">
            View My Work
          </GradientButton>
          <GradientButton onClick={() => scrollTo("#contact")} variant="outline">
            Get In Touch
          </GradientButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-[#a855f7] opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
};
