"use client";

import React, { useState } from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SkillPill } from "./ui/SkillPill";
import { skillCategories } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading title="Skills & Technologies" />
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 space-y-2 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-4 text-left font-medium transition-all duration-300 rounded-xl whitespace-nowrap lg:whitespace-normal relative",
                  activeCategory === category.id
                    ? "text-white bg-[#a855f7]/10"
                    : "text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-white/5"
                )}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7c3aed] to-[#ec4899] rounded-l-xl lg:block hidden"
                  />
                )}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTabMobile"
                    className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] rounded-b-xl lg:hidden block"
                  />
                )}
                {category.name}
              </button>
            ))}
          </div>

          {/* Skill Pills */}
          <div className="w-full lg:w-2/3 min-h-[300px]">
            <AnimatePresence mode="wait">
              {skillCategories.map(
                (category) =>
                  category.id === activeCategory && (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-wrap gap-4"
                    >
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <SkillPill skill={skill} />
                        </motion.div>
                      ))}
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
