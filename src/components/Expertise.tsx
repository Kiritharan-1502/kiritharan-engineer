"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const expertiseCategories = [
  {
    name: "Robot Programming",
    items: [
      "ABB",
      "Yaskawa",
      "Dürr",
      "Offline Programming",
      "Robot Path Optimization",
      "Robot Teaching",
      "Program Modification",
      "Application Prove-out",
    ],
  },
  {
    name: "Paint Process",
    items: [
      "Sealer",
      "Primer",
      "Base Coat",
      "Clear Coat",
      "Dual-Tone Application",
      "Paint Quality",
      "Transfer Efficiency",
      "Process Validation",
    ],
  },
  {
    name: "Commissioning & Start-up",
    items: [
      "Site Commissioning",
      "System Start-up",
      "Application Trials",
      "Production Ramp-up",
      "Debugging",
      "Process Validation",
      "Site Acceptance",
    ],
  },
  {
    name: "Troubleshooting",
    items: [
      "Root Cause Analysis",
      "Robot Diagnostics",
      "Application Issues",
      "Defect Elimination",
      "Corrective Actions",
      "Collision Avoidance",
      "Downtime Reduction",
      "Process Improvement",
    ],
  },
  {
    name: "Production Optimization",
    items: [
      "Cycle Time Improvement",
      "Robot Path Optimization",
      "Process Stability",
      "Production Efficiency",
      "Paint Application Optimization",
      "Quality Improvement",
      "Performance Monitoring",
    ],
  },
  {
    name: "Technical Support",
    items: [
      "Customer Technical Support",
      "Field Service",
      "Global Project Support",
      "Technical Troubleshooting",
      "Engineering Support",
      "Production Support",
      "Vendor Coordination",
    ],
  },
  {
    name: "Training & Documentation",
    items: [
      "Technical Training",
      "SOP Preparation",
      "Process Documentation",
      "Technical Instructions",
      "Process Sheets",
      "Knowledge Transfer",
    ],
  },
];

export const Expertise = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const active = expertiseCategories[activeCategory];

  return (
    <section
      id="expertise"
      className="
        scroll-mt-0
        bg-white
        px-6
        py-20
        text-[#101d35]
        md:px-10
        md:py-24
        lg:px-16
        xl:px-20
      "
    >
      <div className="mx-auto w-full max-w-[1320px]">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="
              text-[40px]
              font-bold
              leading-tight
              tracking-[-0.035em]
              text-[#101d35]
              md:text-[48px]
            "
          >
            Areas of Expertise
          </h2>

          <div className="mt-4 h-[3px] w-16 bg-[#1768d5]" />

          <p
            className="
              mt-5
              max-w-[900px]
              text-[16px]
              leading-7
              text-[#52627d]
              md:text-[17px]
            "
          >
            Specialized experience in industrial robotics, automotive paint
            systems, commissioning, troubleshooting, and production process
            optimization.
          </p>
        </motion.div>

        {/* =====================================================
            EXPERTISE CONTENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="
            mt-12
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[300px_1fr]
          "
        >

          {/* ===================================================
              LEFT CATEGORY LIST
          =================================================== */}

          <div
            className="
              flex
              flex-col
              gap-2
            "
          >
            {expertiseCategories.map((category, index) => {
              const isActive = activeCategory === index;

              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`
                    relative
                    flex
                    min-h-[54px]
                    w-full
                    items-center
                    rounded-lg
                    px-5
                    text-left
                    text-[15px]
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-[#f3edfb] text-[#101d35] shadow-sm"
                        : "text-[#8da0bb] hover:bg-[#f8f9fb] hover:text-[#43516b]"
                    }
                  `}
                >
                  {/* Active blue/purple accent */}

                  {isActive && (
                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[4px]
                        rounded-l-lg
                        bg-gradient-to-b
                        from-[#1768d5]
                        to-[#b44cf0]
                      "
                    />
                  )}

                  {category.name}
                </button>
              );
            })}
          </div>

          {/* ===================================================
              RIGHT CONTENT
          =================================================== */}

          <div
            className="
              min-h-[360px]
              rounded-xl
              border
              border-[#e4e8ef]
              bg-white
              p-7
              md:p-9
            "
          >

            {/* Category title */}

            <div className="mb-7">
              <div
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#1768d5]
                "
              >
                Core Capability
              </div>

              <h3
                className="
                  mt-2
                  text-[24px]
                  font-bold
                  tracking-tight
                  text-[#101d35]
                  md:text-[28px]
                "
              >
                {active.name}
              </h3>
            </div>

            {/* =================================================
                EXPERTISE PILLS
            ================================================= */}

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="
                flex
                flex-wrap
                content-start
                gap-3
              "
            >
              {active.items.map((item) => (
                <span
                  key={item}
                  className="
                    inline-flex
                    min-h-[42px]
                    items-center
                    rounded-full
                    border
                    border-[#dfe4eb]
                    bg-[#f8f9fb]
                    px-5
                    py-2
                    text-[14px]
                    font-medium
                    text-[#43516b]
                    transition-all
                    duration-200
                    hover:border-[#1768d5]
                    hover:bg-[#f1f6fd]
                    hover:text-[#1768d5]
                  "
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div
              className="
                mt-10
                border-t
                border-[#edf0f4]
                pt-6
              "
            >
              <p
                className="
                  max-w-[850px]
                  text-[15px]
                  leading-7
                  text-[#66758d]
                "
              >
                {activeCategory === 0 &&
                  "Hands-on experience with industrial robot programming, offline programming, path optimization, application prove-out, and robotic system programming across ABB, Yaskawa, and Dürr platforms."}

                {activeCategory === 1 &&
                  "Practical experience across automotive paint application processes including sealer, primer, base coat, clear coat, and dual-tone applications with focus on quality and transfer efficiency."}

                {activeCategory === 2 &&
                  "Experience supporting system commissioning, application trials, debugging, production ramp-up, process validation, and site acceptance activities."}

                {activeCategory === 3 &&
                  "Strong troubleshooting capability focused on identifying root causes, eliminating defects, resolving robotic and application issues, and improving production reliability."}

                {activeCategory === 4 &&
                  "Experience improving robot paths, cycle time, process stability, paint application quality, production efficiency, and overall line performance."}

                {activeCategory === 5 &&
                  "Technical support experience involving customer assistance, field service, troubleshooting, engineering coordination, vendor interaction, and project execution."}

                {activeCategory === 6 &&
                  "Experience preparing technical documentation, SOPs, process sheets, technical instructions, and supporting knowledge transfer and engineering team training."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM SUMMARY
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            mt-8
            rounded-xl
            border
            border-[#e1e7ef]
            bg-[#f7f9fc]
            px-6
            py-6
            md:px-8
          "
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center">

            <div
              className="
                shrink-0
                text-[15px]
                font-bold
                text-[#101d35]
                md:w-[190px]
              "
            >
              Professional Focus
            </div>

            <div className="h-px bg-[#dfe5ed] md:h-8 md:w-px" />

            <p
              className="
                text-[14px]
                leading-6
                text-[#52627d]
                md:text-[15px]
              "
            >
              Combining robotic programming, paint process knowledge,
              commissioning, troubleshooting, and production optimization to
              deliver reliable and efficient automotive manufacturing
              solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};