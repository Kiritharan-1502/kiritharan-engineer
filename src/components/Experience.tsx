"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    role: "Senior Offline Robot Programmer / Senior Engineer",
    company: "Dürr India Pvt Ltd",
    period: "Sep 2025 – Present",
    location: "Chennai, India",
    current: true,
    summary:
      "Leading offline robot programming, paint application optimization, commissioning and technical support for automotive paint shop systems.",
    responsibilities: [
      "Offline programming and optimization of industrial paint robots.",
      "Robot path optimization and application prove-out.",
      "Commissioning, debugging and production ramp-up support.",
      "Paint process optimization for quality and cycle-time improvement.",
      "Troubleshooting robotic and application-related issues.",
      "Supporting customers, production teams and project execution.",
    ],
    technologies: [
      "ABB",
      "Yaskawa",
      "Dürr",
      "Offline Programming",
      "Paint Robotics",
    ],
  },

  {
    number: "02",
    role: "Vehicle Production Engineering / Engineer",
    company: "Renault Nissan Automotive India Pvt Ltd",
    period: "Jan 2024 – Sep 2025",
    location: "Chennai, India",
    current: false,
    summary:
      "Worked in vehicle production engineering with focus on robotic paint systems, production support, quality and process improvement.",
    responsibilities: [
      "Supported production engineering activities for automotive manufacturing.",
      "Monitored robotic paint application parameters and process quality.",
      "Worked with production and maintenance teams to resolve technical issues.",
      "Supported process improvements and production line performance.",
      "Investigated defects and implemented corrective actions.",
      "Coordinated technical activities during production and commissioning.",
    ],
    technologies: [
      "Production Engineering",
      "Paint Systems",
      "Robot Programming",
      "Process Optimization",
    ],
  },

  {
    number: "03",
    role: "Painting Robot Programmer / Junior Engineer",
    company: "Seoyon E-HWA Automotive India Pvt Ltd",
    period: "Mar 2021 – Jan 2024",
    location: "Chennai, India",
    current: false,
    summary:
      "Developed hands-on experience in industrial robot programming, paint application systems, troubleshooting and production support.",
    responsibilities: [
      "Programmed and modified industrial paint robot applications.",
      "Performed robot teaching and path optimization.",
      "Supported commissioning and production trials.",
      "Troubleshot robot and paint application problems.",
      "Worked on defect reduction and process improvement.",
      "Supported production teams during line operation and ramp-up.",
    ],
    technologies: [
      "ABB",
      "Yaskawa",
      "Robot Teaching",
      "Paint Application",
      "Troubleshooting",
    ],
  },

  {
    number: "04",
    role: "Painting Robot Programmer / Assistant Engineer",
    company: "Motherson Automotive Technologies & Engineering",
    period: "Jun 2019 – Mar 2021",
    location: "Chennai, India",
    current: false,
    summary:
      "Worked on robotic painting operations, robot programming, process support and troubleshooting within automotive manufacturing.",
    responsibilities: [
      "Supported industrial paint robot programming and modifications.",
      "Performed robot teaching and application adjustments.",
      "Supported paint quality and process validation activities.",
      "Troubleshot robot faults and production issues.",
      "Worked with production and maintenance teams.",
      "Supported continuous improvement activities on the paint line.",
    ],
    technologies: [
      "Robot Programming",
      "Paint Robotics",
      "Process Support",
      "Maintenance",
    ],
  },

  {
    number: "05",
    role: "Painting Robot Operator / Trainee",
    company: "Royal Enfield",
    period: "May 2017 – Nov 2018",
    location: "Chennai, India",
    current: false,
    summary:
      "Started professional experience in robotic painting operations, quality inspection, maintenance and basic robot troubleshooting.",
    responsibilities: [
      "Operated robotic painting systems in production.",
      "Monitored paint application parameters and process quality.",
      "Inspected finished products against quality requirements.",
      "Supported breakdown maintenance and troubleshooting.",
      "Worked with production teams to maintain line performance.",
      "Developed foundational knowledge of industrial robot operations.",
    ],
    technologies: [
      "Robot Operations",
      "Paint Parameters",
      "Quality Inspection",
      "Maintenance",
    ],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="
        scroll-mt-0
        bg-white
        px-6
        py-16
        text-[#101d35]
        md:px-10
        md:py-20
        lg:px-16
      "
    >
      <div className="mx-auto w-full max-w-[1250px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h2
            className="
              text-[42px]
              font-bold
              leading-tight
              tracking-[-0.035em]
              text-[#101d35]
              md:text-[48px]
            "
          >
            Professional Experience
          </h2>

          <div className="mt-4 h-[3px] w-16 bg-[#1768d5]" />

          <p
            className="
              mt-6
              max-w-[900px]
              text-[16px]
              leading-[1.8]
              text-[#52627d]
              md:text-[18px]
              md:leading-[1.8]
            "
          >
            A career built through hands-on experience in industrial robotics,
            automotive paint systems, commissioning, troubleshooting and
            production engineering.
          </p>
        </motion.div>

        {/* =====================================================
            CAREER TIMELINE
        ===================================================== */}

        <div className="relative mt-12">

          {/* TIMELINE LINE */}

          <div
            className="
              absolute
              bottom-6
              left-[23px]
              top-6
              hidden
              w-px
              bg-[#d9e2ee]
              md:block
            "
          />

          {/* =================================================
              EXPERIENCE ITEMS
          ================================================= */}

          <div className="space-y-7">
            {experiences.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="relative md:pl-[64px]"
              >

                {/* TIMELINE DOT */}

                <div
                  className="
                    absolute
                    left-[16px]
                    top-[30px]
                    hidden
                    h-[16px]
                    w-[16px]
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-white
                    bg-[#1768d5]
                    shadow-[0_0_0_1px_#1768d5]
                    md:flex
                  "
                />

                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className={`
                    rounded-xl
                    border
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    md:p-7
                    ${
                      item.current
                        ? "border-[#1768d5] shadow-[0_8px_30px_rgba(23,104,213,0.10)]"
                        : "border-[#e1e7ef] shadow-[0_3px_15px_rgba(16,29,53,0.035)] hover:border-[#b9cce5] hover:shadow-[0_8px_25px_rgba(16,29,53,0.06)]"
                    }
                  `}
                >

                  {/* =================================================
                      TOP ROW
                  ================================================= */}

                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                    {/* LEFT */}

                    <div className="flex min-w-0 gap-4">

                      {/* NUMBER */}

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#f1f6fd]
                          text-sm
                          font-bold
                          text-[#1768d5]
                        "
                      >
                        {item.number}
                      </div>

                      {/* JOB INFORMATION */}

                      <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-3">

                          <h3
                            className="
                              text-[19px]
                              font-bold
                              leading-7
                              text-[#101d35]
                              md:text-[21px]
                            "
                          >
                            {item.role}
                          </h3>

                          {item.current && (
                            <span
                              className="
                                rounded-full
                                bg-[#e9f8f0]
                                px-3
                                py-1
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-wide
                                text-[#16834b]
                              "
                            >
                              Current
                            </span>
                          )}
                        </div>

                        <p
                          className="
                            mt-1
                            text-[15px]
                            font-semibold
                            text-[#1768d5]
                          "
                        >
                          {item.company}
                        </p>

                      </div>
                    </div>

                    {/* DATE / LOCATION */}

                    <div
                      className="
                        flex
                        shrink-0
                        flex-col
                        gap-2
                        text-sm
                        text-[#65748e]
                        md:items-end
                      "
                    >
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={15}
                          strokeWidth={1.8}
                        />
                        <span>{item.period}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={15}
                          strokeWidth={1.8}
                        />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      DIVIDER
                  ================================================= */}

                  <div className="my-6 h-px bg-[#e7ecf3]" />

                  {/* =================================================
                      ROLE SUMMARY
                  ================================================= */}

                  <div>
                    <h4
                      className="
                        text-[14px]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-[#1768d5]
                      "
                    >
                      Role Summary
                    </h4>

                    <p
                      className="
                        mt-2
                        max-w-[1000px]
                        text-[15px]
                        leading-7
                        text-[#52627d]
                        md:text-[16px]
                      "
                    >
                      {item.summary}
                    </p>
                  </div>

                  {/* =================================================
                      RESPONSIBILITIES
                  ================================================= */}

                  <div className="mt-6">

                    <h4
                      className="
                        text-[15px]
                        font-bold
                        text-[#101d35]
                      "
                    >
                      Key Responsibilities
                    </h4>

                    <div
                      className="
                        mt-3
                        grid
                        grid-cols-1
                        gap-x-8
                        gap-y-2
                        md:grid-cols-2
                      "
                    >
                      {item.responsibilities.map((responsibility) => (
                        <div
                          key={responsibility}
                          className="
                            flex
                            items-start
                            gap-2.5
                            text-[14px]
                            leading-6
                            text-[#52627d]
                            md:text-[15px]
                          "
                        >
                          <CheckCircle2
                            size={16}
                            strokeWidth={1.8}
                            className="
                              mt-[5px]
                              shrink-0
                              text-[#1768d5]
                            "
                          />

                          <span>{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      TECHNICAL AREAS
                  ================================================= */}

                  <div className="mt-6">

                    <h4
                      className="
                        text-[14px]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-[#1768d5]
                      "
                    >
                      Technical Areas
                    </h4>

                    <div
                      className="
                        mt-3
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-[#dce5f0]
                            bg-[#f8fafc]
                            px-3
                            py-1.5
                            text-[12px]
                            font-medium
                            text-[#52627d]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            CAREER SUMMARY
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="
            mt-10
            rounded-xl
            border
            border-[#dfe7f1]
            bg-[#f7f9fc]
            px-6
            py-6
            md:px-8
          "
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center">

            <div
              className="
                flex
                shrink-0
                items-center
                gap-3
                text-[16px]
                font-bold
                text-[#101d35]
                md:w-[220px]
              "
            >
              <BriefcaseBusiness
                size={20}
                className="text-[#1768d5]"
              />

              Career Focus
            </div>

            <div className="hidden h-8 w-px bg-[#dce3ed] md:block" />

            <p
              className="
                text-[14px]
                leading-6
                text-[#52627d]
                md:text-[15px]
              "
            >
              Industrial robotics, automotive paint systems, robot
              programming, commissioning, troubleshooting, process
              optimization and production support.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};