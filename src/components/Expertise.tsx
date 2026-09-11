"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Droplets,
  PlayCircle,
  Wrench,
  TrendingUp,
  Headphones,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const expertiseAreas = [
  {
    id: "robot-programming",
    title: "Robot Programming",
    icon: Bot,
    skills: [
      "ABB",
      "Yaskawa",
      "Dürr",
      "Offline Programming",
      "Robot Path Optimization",
      "Robot Teaching",
      "Program Modification",
      "Application Prove-out",
    ],
    description:
      "Hands-on experience with industrial robot programming, offline programming, path optimization, application prove-out, and robotic system programming across ABB, Yaskawa, and Dürr platforms.",
  },

  {
    id: "paint-process",
    title: "Paint Process",
    icon: Droplets,
    skills: [
      "Paint Application",
      "Paint Parameters",
      "Application Quality",
      "Process Control",
      "Defect Reduction",
      "Paint Process Optimization",
    ],
    description:
      "Experience in automotive paint processes with focus on application quality, process parameters, defect reduction, and optimization of robotic paint applications.",
  },

  {
    id: "commissioning",
    title: "Commissioning & Start-up",
    icon: PlayCircle,
    skills: [
      "Robot Commissioning",
      "Application Prove-out",
      "Production Trials",
      "Line Start-up",
      "Debugging",
      "Ramp-up Support",
    ],
    description:
      "Practical experience supporting robot commissioning, application prove-out, production trials, debugging, line start-up, and production ramp-up activities.",
  },

  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: Wrench,
    skills: [
      "Robot Fault Diagnosis",
      "Application Issues",
      "Production Support",
      "Fault Recovery",
      "Root Cause Analysis",
      "Technical Problem Solving",
    ],
    description:
      "Experience troubleshooting robotic systems, paint application problems, production issues, and supporting teams in identifying and resolving technical faults.",
  },

  {
    id: "production",
    title: "Production Optimization",
    icon: TrendingUp,
    skills: [
      "Cycle Time Improvement",
      "Process Optimization",
      "Quality Improvement",
      "Production Performance",
      "Continuous Improvement",
      "Process Reliability",
    ],
    description:
      "Focused on improving production performance through cycle-time optimization, process improvements, quality enhancement, and reliable robotic paint shop operations.",
  },

  {
    id: "support",
    title: "Technical Support",
    icon: Headphones,
    skills: [
      "Customer Support",
      "Production Support",
      "Technical Coordination",
      "Issue Resolution",
      "Project Support",
      "On-site Assistance",
    ],
    description:
      "Technical support experience involving customers, production teams, maintenance teams, project execution, issue resolution, and robotic system implementation.",
  },

  {
    id: "training",
    title: "Training & Documentation",
    icon: GraduationCap,
    skills: [
      "Robot Programming Training",
      "Technical Documentation",
      "Program Documentation",
      "Knowledge Transfer",
      "Operator Support",
    ],
    description:
      "Experience supporting technical knowledge transfer, robot programming training, documentation, and practical guidance for production and engineering teams.",
  },
];

export const Expertise = () => {
  const [selectedArea, setSelectedArea] = useState(0);

  const selected = expertiseAreas[selectedArea];
  const SelectedIcon = selected.icon;

  return (
    <section
      id="expertise"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#080814]
        px-6
        py-28
        text-white
        md:px-10
        lg:px-16
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/[0.035]
          blur-[150px]
        "
      />

      <div className="relative mx-auto w-full max-w-[1250px]">

        {/* =====================================================
            SKILLS & EXPERTISE HEADING
        ===================================================== */}

        <motion.div
          initial="rest"
          whileHover="hover"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            inline-flex
            cursor-default
            flex-col
            items-start
          "
        >
          <motion.h2
            variants={{
              rest: {
                y: 0,
              },

              hover: {
                y: -1,
              },

              visible: {
                y: 0,
              },
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[clamp(2.8rem,4.2vw,4rem)]
              font-bold
              leading-[0.95]
              tracking-[-0.05em]
              text-white
            "
          >
            Skills &{" "}
            <span className="text-[#3b82f6]">
              Expertise.
            </span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            variants={{
              rest: {
                width: "58px",
              },

              hover: {
                width: "100%",
              },

              visible: {
                width: "58px",
              },
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              h-[4px]
              rounded-full
              bg-[#3b82f6]
            "
          />
        </motion.div>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            max-w-[900px]
            text-[17px]
            leading-[1.85]
            text-slate-400
            sm:text-[18px]
            lg:text-[19px]
          "
        >
          Specialized experience in industrial robotics, automotive paint
          systems, commissioning, troubleshooting, and production process
          optimization.
        </motion.p>

        {/* =====================================================
            EXPERTISE CONTENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-12
            grid
            gap-6
            lg:grid-cols-[275px_1fr]
          "
        >

          {/* =================================================
              LEFT CATEGORY LIST
          ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-3
            "
          >
            <div className="px-4 pt-3 pb-2">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-slate-600
                "
              >
                Core Capabilities
              </p>
            </div>

            <div className="mt-2 space-y-1">
              {expertiseAreas.map((area, index) => {
                const Icon = area.icon;
                const isSelected = selectedArea === index;

                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedArea(index)}
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-4
                      py-3.5
                      text-left
                      transition-all
                      duration-300
                      ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-[0_8px_25px_rgba(37,99,235,0.16)]"
                          : "text-slate-400 hover:bg-white/[0.045] hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      size={17}
                      strokeWidth={2}
                      className={
                        isSelected
                          ? "text-white"
                          : "text-slate-600 transition-colors duration-300 group-hover:text-blue-400"
                      }
                    />

                    <span
                      className={`
                        text-[13px]
                        font-semibold
                        transition-colors
                        duration-300
                        ${
                          isSelected
                            ? "text-white"
                            : "text-slate-400 group-hover:text-white"
                        }
                      `}
                    >
                      {area.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              RIGHT CAPABILITY PANEL
          ================================================= */}

          <motion.div
            key={selected.id}
            initial={{
              opacity: 0,
              x: 12,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-7
              transition-all
              duration-300
              hover:border-blue-400/25
              hover:bg-white/[0.035]
              md:p-9
            "
          >

            {/* TOP */}

            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-500/20
                  bg-blue-500/[0.08]
                  text-blue-400
                "
              >
                <SelectedIcon
                  size={23}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-blue-400
                  "
                >
                  Core Capability
                </p>

                <h3
                  className="
                    mt-2
                    text-[clamp(1.7rem,3vw,2rem)]
                    font-semibold
                    leading-tight
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  {selected.title}
                </h3>
              </div>
            </div>

            {/* SKILLS */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-2.5
              "
            >
              {selected.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-blue-500/20
                    bg-blue-500/[0.06]
                    px-3.5
                    py-2
                    text-[12px]
                    font-medium
                    text-blue-300
                    transition-all
                    duration-200
                    hover:border-blue-400/40
                    hover:bg-blue-500/[0.12]
                    hover:text-blue-200
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* DIVIDER */}

            <div
              className="
                my-7
                h-px
                w-full
                bg-white/[0.07]
              "
            />

            {/* DESCRIPTION */}

            <div className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="
                  mt-0.5
                  shrink-0
                  text-blue-400
                "
              />

              <p
                className="
                  max-w-[850px]
                  text-[15px]
                  leading-7
                  text-slate-400
                  md:text-[16px]
                "
              >
                {selected.description}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            PROFESSIONAL FOCUS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mt-6
            rounded-2xl
            border
            border-white/[0.08]
            bg-white/[0.025]
            px-6
            py-5
            md:px-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              md:flex-row
              md:items-center
              md:gap-6
            "
          >
            <div
              className="
                flex
                shrink-0
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-[3px]
                  w-8
                  bg-[#3b82f6]
                "
              />

              <p
                className="
                  text-[13px]
                  font-semibold
                  text-white
                "
              >
                Professional Focus
              </p>
            </div>

            <div
              className="
                hidden
                h-8
                w-px
                bg-white/[0.08]
                md:block
              "
            />

            <p
              className="
                text-[14px]
                leading-6
                text-slate-400
                md:text-[15px]
              "
            >
              Combining robotic programming, paint process knowledge,
              commissioning, troubleshooting, and production optimization
              to deliver reliable and efficient automotive manufacturing
              solutions.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Expertise;