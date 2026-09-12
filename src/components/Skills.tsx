"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const skillCategories = [
  {
    title: "Programming & Commissioning",
    skills: [
      "Painting",
      "Industrial Robots",
      "Application Systems",
      "Offline Programming",
      "Robot Programming",
      "Commissioning",
    ],
  },
  {
    title: "Process Optimization",
    skills: [
      "Paint Application Quality",
      "Process Optimization",
      "Efficiency Improvement",
      "Cycle Time Improvement",
      "Process Validation",
    ],
  },
  {
    title: "Error Analysis & Troubleshooting",
    skills: [
      "Error Analysis",
      "Robot Troubleshooting",
      "Defect Elimination",
      "Fault Diagnosis",
      "Root Cause Analysis",
    ],
  },
  {
    title: "Start-Up Support",
    skills: [
      "System Deployment",
      "Commissioning Support",
      "Production Start-Up",
      "Debugging",
      "Production Support",
    ],
  },
  {
    title: "Training & Support",
    skills: [
      "Technical Training",
      "Robot Operation",
      "Technical Instructions",
      "Customer Support",
      "On-Site Support",
    ],
  },
  {
    title: "Service Operations",
    skills: [
      "Painting System Maintenance",
      "Service Operations",
      "Troubleshooting",
      "Field Service",
      "Breakdown Support",
    ],
  },
  {
    title: "Technical Proficiency",
    skills: [
      "ABB",
      "Yaskawa",
      "Dürr",
      "Paint Application",
      "Robot Systems",
      "Automation",
    ],
  },
  {
    title: "Communication & Teamwork",
    skills: [
      "Cross-Functional Collaboration",
      "Technical Communication",
      "Problem Solving",
      "Team Coordination",
      "Vendor Coordination",
    ],
  },
  {
    title: "Global Travel",
    skills: [
      "International Assignments",
      "Global Technical Support",
      "On-Site Engineering",
      "Customer Locations",
      "Worldwide Travel",
    ],
  },
];

const tools = [
  "DXQ 3D Onsite",
  "RobotStudio",
  "Robview",
  "FFFTP",
  "MotoSim",
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState(0);

  const { theme } = useTheme();

  const isDark = theme === "dark";

  const activeSkills =
    skillCategories[activeCategory].skills;

  return (
    <section
      id="skills"
      className={`relative w-full overflow-hidden px-6 py-16 transition-colors duration-500 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20 ${
        isDark
          ? "bg-[#080814] text-white"
          : "bg-white text-[#101d35]"
      }`}
    >
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div
        className={`pointer-events-none absolute right-[-180px] top-[100px] h-[500px] w-[500px] rounded-full blur-[150px] ${
          isDark
            ? "bg-blue-600/[.045]"
            : "bg-blue-500/[.025]"
        }`}
      />

      {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

      <div
        className={`pointer-events-none absolute inset-0 ${
          isDark
            ? "opacity-[.025]"
            : "opacity-[.018]"
        } [background-image:linear-gradient(rgba(59,130,246,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.25)_1px,transparent_1px)] [background-size:80px_80px]`}
      />

      <div className="relative mx-auto max-w-[1400px]">

        {/* =========================================================
            HEADING
        ========================================================= */}

        <motion.div
          initial="rest"
          whileHover="hover"
          className="inline-flex cursor-default flex-col items-start"
        >
          <motion.h2
            variants={{
              rest: {
                y: 0,
              },
              hover: {
                y: -1,
              },
            }}
            className={`text-[clamp(2.8rem,4.2vw,4rem)] font-bold leading-[.95] tracking-[-.05em] ${
              isDark
                ? "text-white"
                : "text-[#101d35]"
            }`}
          >
            Skills &{" "}
            <span className="text-[#3b82f6]">
              Expertise.
            </span>
          </motion.h2>

          <motion.div
            variants={{
              rest: {
                width: "58px",
              },
              hover: {
                width: "100%",
              },
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 h-[4px] rounded-full bg-[#3b82f6]"
          />
        </motion.div>

        {/* =========================================================
            SKILLS AREA
        ========================================================= */}

        <motion.div
          initial={false}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-10 grid items-start gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-14"
        >

          {/* =======================================================
              LEFT — SKILL CATEGORIES
          ======================================================= */}

          <div
            className={`border-l ${
              isDark
                ? "border-white/[.07]"
                : "border-slate-200"
            }`}
          >
            {skillCategories.map(
              (category, index) => {
                const active =
                  activeCategory === index;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() =>
                      setActiveCategory(index)
                    }
                    className={`group relative flex w-full items-center justify-between px-4 py-3.5 text-left transition-all duration-300 sm:px-6 sm:py-4 ${
                      active
                        ? "bg-blue-500/[.07]"
                        : isDark
                          ? "hover:bg-white/[.025]"
                          : "hover:bg-blue-500/[.035]"
                    }`}
                  >

                    {/* Active blue line */}
                    <span
                      className={`absolute left-[-2px] top-0 h-full w-[3px] bg-blue-500 transition-opacity duration-300 ${
                        active
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />

                    {/* Category title */}
                    <span
                      className={`text-[13px] font-medium leading-6 transition-colors duration-300 sm:text-[15px] ${
                        active
                          ? isDark
                            ? "text-white"
                            : "text-[#101d35]"
                          : isDark
                            ? "text-slate-400"
                            : "text-[#64748b]"
                      }`}
                    >
                      {category.title}
                    </span>

                    {/* =================================================
                        ROBOT ICON
                    ================================================= */}

                    <span
                      className={`
                        ml-4
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300

                        ${
                          active
                            ? isDark
                              ? "border-blue-500/40 bg-blue-500/[.08] text-blue-400 opacity-100 shadow-[0_0_18px_rgba(59,130,246,0.10)]"
                              : "border-blue-500/30 bg-blue-500/[.06] text-blue-500 opacity-100"
                            : isDark
                              ? "border-white/[.06] bg-white/[.015] text-slate-500 opacity-40 group-hover:border-blue-500/30 group-hover:bg-blue-500/[.05] group-hover:text-blue-400 group-hover:opacity-100"
                              : "border-slate-200 bg-slate-50 text-slate-400 opacity-40 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-500 group-hover:opacity-100"
                        }
                      `}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[19px] w-[19px] transition-transform duration-300 group-hover:scale-110"
                      >
                        {/* Antenna */}
                        <path
                          d="M12 3.5V5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        {/* Antenna light */}
                        <circle
                          cx="12"
                          cy="2.5"
                          r="1"
                          fill="currentColor"
                        />

                        {/* Robot head */}
                        <rect
                          x="5"
                          y="6"
                          width="14"
                          height="12"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />

                        {/* Left eye */}
                        <circle
                          cx="9"
                          cy="11"
                          r="1"
                          fill="currentColor"
                        />

                        {/* Right eye */}
                        <circle
                          cx="15"
                          cy="11"
                          r="1"
                          fill="currentColor"
                        />

                        {/* Mouth */}
                        <path
                          d="M9 14H15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        {/* Left side */}
                        <path
                          d="M3.5 10.5V13.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        {/* Right side */}
                        <path
                          d="M20.5 10.5V13.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                );
              },
            )}
          </div>

          {/* =======================================================
              RIGHT — ACTIVE SKILLS
          ======================================================= */}

          <div className="pt-1">
            <AnimatePresence mode="wait">

              <motion.div
                key={
                  skillCategories[
                    activeCategory
                  ].title
                }
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
              >

                {/* Category number */}
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-medium uppercase tracking-[.25em] text-blue-400">
                    {String(
                      activeCategory + 1,
                    ).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-blue-500/40" />
                </div>

                {/* Active category title */}
                <h3
                  className={`mt-4 text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-.04em] ${
                    isDark
                      ? "text-white"
                      : "text-[#101d35]"
                  }`}
                >
                  {
                    skillCategories[
                      activeCategory
                    ].title
                  }
                </h3>

                {/* Skill pills */}
                <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                  {activeSkills.map(
                    (skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          delay:
                            index * 0.03,
                        }}
                        whileHover={{
                          y: -2,
                        }}
                        className="
                          rounded-full
                          border
                          border-blue-500/25
                          bg-blue-500/[.045]
                          px-4
                          py-2
                          text-[13px]
                          text-blue-500
                          sm:px-5
                          sm:py-2.5
                          sm:text-sm
                        "
                      >
                        {skill}
                      </motion.span>
                    ),
                  )}
                </div>
              </motion.div>

            </AnimatePresence>
          </div>
        </motion.div>

        {/* =========================================================
            SOFTWARE & TOOLS
        ========================================================= */}

        <motion.div
          initial={false}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className={`mt-10 border-t pt-7 sm:mt-12 sm:pt-8 ${
            isDark
              ? "border-white/[.07]"
              : "border-slate-200"
          }`}
        >

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            {/* Toolkit heading */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[.28em] text-blue-500/80">
                Software & Tools
              </p>

              <h3
                className={`mt-2 text-xl font-semibold tracking-[-.03em] ${
                  isDark
                    ? "text-white"
                    : "text-[#101d35]"
                }`}
              >
                Technical Toolkit
              </h3>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2.5 md:justify-end">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className={`rounded-full border px-4 py-2 text-[13px] sm:px-5 sm:py-2.5 sm:text-sm ${
                    isDark
                      ? "border-white/[.09] bg-white/[.025] text-slate-400"
                      : "border-slate-200 bg-slate-50 text-[#64748b]"
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};