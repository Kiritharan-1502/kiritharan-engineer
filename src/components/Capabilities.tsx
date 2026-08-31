"use client";

import React from "react";
import {
  Bot,
  Paintbrush,
  Rocket,
  Wrench,
  CheckCircle2,
  Car,
  Factory,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilityCards = [
  {
    number: "01",
    title: "Robot Programming",
    subtitle: "ABB • Yaskawa • Dürr",
    icon: Bot,
    skills: [
      "Offline Programming",
      "Robot Teaching & Programming",
      "Program Modification",
      "Path Optimization",
      "Application Prove-out",
    ],
    description:
      "Expertise in programming and optimizing industrial robots for high performance and accuracy.",
  },

  {
    number: "02",
    title: "Paint Process",
    subtitle: "Automotive Paint Applications",
    icon: Paintbrush,
    skills: [
      "Sealer Application",
      "Primer Application",
      "Base Coat Application",
      "Clear Coat Application",
      "Dual Tone Application",
      "Paint Parameters Control",
    ],
    description:
      "Hands-on expertise in automotive paint applications and process parameter management.",
  },

  {
    number: "03",
    title: "Commissioning",
    subtitle: "Production & Start-up",
    icon: Rocket,
    skills: [
      "Commissioning & Start-up",
      "Process Validation",
      "Line Integration",
      "Cycle Time Improvement",
      "Production Support",
    ],
    description:
      "End-to-end commissioning and start-up support for smooth production ramp-up.",
  },

  {
    number: "04",
    title: "Troubleshooting",
    subtitle: "Reliability & Maintenance",
    icon: Wrench,
    skills: [
      "Robot Diagnostics",
      "Fault Analysis",
      "Breakdown Maintenance",
      "Collision Recovery",
      "Root Cause Analysis",
    ],
    description:
      "Quick troubleshooting and effective resolution to minimize downtime and ensure reliability.",
  },
];

export const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className="
        scroll-mt-0
        bg-white
        px-5
        py-14
        text-[#101d35]
        md:px-10
        md:py-16
        lg:px-14
        lg:py-20
      "
    >
      <div className="mx-auto w-full max-w-[1380px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="
              text-[42px]
              font-black
              leading-none
              tracking-[-0.055em]
              text-[#101d35]
              md:text-[50px]
              lg:text-[56px]
            "
          >
            Technical Capabilities
          </h2>

          {/* SIMPLE BLUE UNDERLINE */}

          <div
            className="
              mt-5
              h-[4px]
              w-[90px]
              rounded-full
              bg-[#1769d5]
            "
          />

          <p
            className="
              mt-5
              max-w-[1050px]
              text-[16px]
              font-medium
              leading-7
              text-[#617492]
              md:text-[17px]
            "
          >
            Core technical strengths and hands-on experience across
            industrial robotics, automotive paint systems,
            commissioning, and troubleshooting.
          </p>
        </motion.div>

        {/* =====================================================
            CAPABILITY CARD DECK
        ===================================================== */}

        <div
          className="
            relative
            mt-14
            flex
            flex-col
            items-center
            gap-6
            lg:min-h-[515px]
            lg:flex-row
            lg:items-stretch
            lg:justify-center
            lg:gap-0
          "
        >
          {capabilityCards.map((card, index) => {
            const Icon = card.icon;

            /*
             * Very subtle rotation.
             * The cards still feel creative,
             * but remain professional.
             */

            const rotations = [-2, -0.7, 0.7, 2];

            return (
              <motion.div
                key={card.number}
                initial={{
                  opacity: 0,
                  y: 25,
                  rotate: rotations[index],
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: rotations[index],
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -12,
                  rotate: 0,
                  scale: 1.025,
                  zIndex: 20,
                  transition: {
                    duration: 0.2,
                  },
                }}
                style={{
                  zIndex: index + 1,
                }}
                className="
                  group
                  relative
                  w-full
                  max-w-[345px]
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#d9e2ec]
                  border-t-[4px]
                  border-t-[#1769d5]
                  bg-white
                  shadow-[0_10px_30px_rgba(16,29,53,0.07)]
                  transition-shadow
                  duration-300

                  lg:-ml-7
                  lg:first:ml-0
                "
              >

                {/* =================================================
                    BACKGROUND NUMBER
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-[-18px]
                    select-none
                    text-[120px]
                    font-black
                    leading-none
                    text-[#1769d5]
                    opacity-[0.035]
                  "
                >
                  {card.number}
                </div>

                {/* =================================================
                    NUMBER BADGE
                ================================================= */}

                <div
                  className="
                    absolute
                    left-5
                    top-0
                    flex
                    h-[50px]
                    w-[52px]
                    items-center
                    justify-center
                    rounded-b-xl
                    bg-[#1769d5]
                    text-[16px]
                    font-black
                    text-white
                    shadow-sm
                  "
                >
                  {card.number}
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="relative px-6 pb-0 pt-10">

                  {/* ICON */}

                  <div className="flex justify-center">
                    <div
                      className="
                        flex
                        h-[74px]
                        w-[74px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#cfe0f5]
                        bg-[#f5f9ff]
                      "
                    >
                      <Icon
                        size={32}
                        strokeWidth={1.7}
                        className="text-[#1769d5]"
                      />
                    </div>
                  </div>

                  {/* TITLE */}

                  <div className="mt-5 text-center">
                    <h3
                      className="
                        text-[20px]
                        font-black
                        leading-tight
                        tracking-[-0.035em]
                        text-[#101d35]
                      "
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[11px]
                        font-bold
                        text-[#1769d5]
                      "
                    >
                      {card.subtitle}
                    </p>
                  </div>

                  {/* DIVIDER */}

                  <div className="my-5 h-px bg-[#e5ebf2]" />

                  {/* =================================================
                      SKILLS
                  ================================================= */}

                  <div className="space-y-3">
                    {card.skills.map((skill) => (
                      <div
                        key={skill}
                        className="
                          flex
                          items-start
                          gap-2.5
                          text-[12.5px]
                          font-medium
                          leading-5
                          text-[#526987]
                        "
                      >
                        <CheckCircle2
                          size={15}
                          strokeWidth={2}
                          className="
                            mt-[1px]
                            shrink-0
                            text-[#1769d5]
                          "
                        />

                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    BOTTOM DESCRIPTION
                ================================================= */}

                <div
                  className="
                    mt-6
                    min-h-[108px]
                    border-t
                    border-[#e0e8f1]
                    bg-[#f5f9ff]
                    px-6
                    py-5
                  "
                >
                  <div className="flex items-start gap-3">

                    {/* SMALL ICON */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#d6e4f4]
                        bg-white
                        shadow-sm
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#1769d5]"
                      />
                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        text-[11.5px]
                        font-medium
                        leading-5
                        text-[#526987]
                      "
                    >
                      {card.description}
                    </p>

                  </div>
                </div>

                {/* =================================================
                    HOVER ARROW
                ================================================= */}

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    text-[#1769d5]
                    opacity-0
                    transition-opacity
                    duration-200
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight size={19} />
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            ROBOT PLATFORMS + APPLICATION AREAS
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mt-12
            overflow-hidden
            rounded-2xl
            border
            border-[#dce5ef]
            bg-white
            px-5
            py-7
            shadow-[0_8px_30px_rgba(16,29,53,0.05)]
            md:px-8
          "
        >

          {/* ===================================================
              ROBOT PLATFORMS
          =================================================== */}

          <div className="flex items-center gap-4">

            <div className="h-px flex-1 bg-[#dce5ef]" />

            <h3
              className="
                shrink-0
                text-[13px]
                font-black
                uppercase
                tracking-[0.08em]
                text-[#1769d5]
              "
            >
              Robot Platforms
            </h3>

            <div className="h-px flex-1 bg-[#dce5ef]" />

          </div>

          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-3
              md:grid-cols-3
            "
          >

            {/* ABB */}

            <div
              className="
                flex
                h-[62px]
                items-center
                justify-center
                rounded-xl
                border
                border-[#dce5ef]
                bg-white
                text-[25px]
                font-black
                text-[#e31e24]
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              ABB
            </div>

            {/* YASKAWA */}

            <div
              className="
                flex
                h-[62px]
                items-center
                justify-center
                rounded-xl
                border
                border-[#dce5ef]
                bg-white
                text-[23px]
                font-black
                text-[#1769a9]
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              YASKAWA
            </div>

            {/* DÜRR */}

            <div
              className="
                flex
                h-[62px]
                items-center
                justify-center
                rounded-xl
                border
                border-[#dce5ef]
                bg-white
                text-[24px]
                font-black
                text-[#174f80]
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              DÜRR
            </div>

          </div>

          {/* ===================================================
              APPLICATION AREAS
          =================================================== */}

          <div className="mt-7 flex items-center gap-4">

            <div className="h-px flex-1 bg-[#dce5ef]" />

            <h3
              className="
                shrink-0
                text-[13px]
                font-black
                uppercase
                tracking-[0.08em]
                text-[#1769d5]
              "
            >
              Application Areas
            </h3>

            <div className="h-px flex-1 bg-[#dce5ef]" />

          </div>

          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-3
              md:grid-cols-3
            "
          >

            {/* AUTOMOTIVE PAINT */}

            <div
              className="
                flex
                h-[55px]
                items-center
                gap-4
                rounded-xl
                border
                border-[#cfe0f5]
                bg-[#f7faff]
                px-5
                text-[14px]
                font-bold
                text-[#203b61]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-sm
              "
            >
              <Car
                size={22}
                strokeWidth={1.8}
                className="text-[#1769d5]"
              />

              <span>Automotive Paint</span>
            </div>

            {/* ROBOTIC AUTOMATION */}

            <div
              className="
                flex
                h-[55px]
                items-center
                gap-4
                rounded-xl
                border
                border-[#cfe0f5]
                bg-[#f7faff]
                px-5
                text-[14px]
                font-bold
                text-[#203b61]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-sm
              "
            >
              <Bot
                size={22}
                strokeWidth={1.8}
                className="text-[#1769d5]"
              />

              <span>Robotic Automation</span>
            </div>

            {/* PRODUCTION ENGINEERING */}

            <div
              className="
                flex
                h-[55px]
                items-center
                gap-4
                rounded-xl
                border
                border-[#cfe0f5]
                bg-[#f7faff]
                px-5
                text-[14px]
                font-bold
                text-[#203b61]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-sm
              "
            >
              <Factory
                size={22}
                strokeWidth={1.8}
                className="text-[#1769d5]"
              />

              <span>Production Engineering</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};