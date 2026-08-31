"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  SlidersHorizontal,
  Factory,
  MapPin,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const trainings = [
  {
    number: "01",
    title: "ABB Robot Training",
    location: "Bangalore, India",
    icon: Bot,
    description:
      "Professional training focused on ABB industrial robot programming, operation, and application fundamentals for automotive manufacturing environments.",
    focus: [
      "ABB Robotics",
      "Robot Programming",
      "Robot Operation",
      "Industrial Automation",
    ],
    accent: "#1769d5",
    soft: "#eef5ff",
    border: "#cfe0f8",
  },
  {
    number: "02",
    title: "Yaskawa Robot Training",
    location: "Chennai, India",
    icon: SlidersHorizontal,
    description:
      "Hands-on training in Yaskawa industrial robot systems with practical exposure to robot programming, operation, troubleshooting, and paint application systems.",
    focus: [
      "Yaskawa Robotics",
      "Robot Programming",
      "Troubleshooting",
      "Paint Applications",
    ],
    accent: "#7652e8",
    soft: "#f4f0ff",
    border: "#ddd3fa",
  },
  {
    number: "03",
    title: "Dürr Robot Systems Training",
    location: "Germany",
    icon: Factory,
    description:
      "Advanced training on Dürr robot systems covering robotic paint applications, programming, process optimization, and system operation.",
    focus: [
      "Dürr Robotics",
      "Paint Robot Systems",
      "Robot Programming",
      "Process Optimization",
    ],
    accent: "#19aaa7",
    soft: "#eefaf9",
    border: "#ccebea",
  },
];

export const Trainings = () => {
  return (
    <section
      id="trainings"
      className="
        scroll-mt-0
        bg-white
        px-6
        py-12
        md:px-10
        md:py-14
        lg:px-16
      "
    >
      <div className="mx-auto w-full max-w-[1260px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2
            className="
              text-[38px]
              font-bold
              leading-tight
              tracking-[-0.035em]
              text-[#101d35]
              md:text-[44px]
            "
          >
            Professional Trainings
          </h2>

          <div className="mt-3 h-[3px] w-[66px] bg-[#1769d5]" />

          <p
            className="
              mt-4
              max-w-[940px]
              text-[15px]
              leading-[1.65]
              text-[#52627d]
              md:text-[17px]
            "
          >
            Specialized robot training completed across leading industrial
            robotics platforms, strengthening practical expertise in
            programming, troubleshooting, paint applications, and automation
            systems.
          </p>
        </motion.div>

        {/* =====================================================
            TRAINING CARDS
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
            xl:gap-6
          "
        >
          {trainings.map((training, index) => {
            const Icon = training.icon;

            return (
              <motion.article
                key={training.number}
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="
                  relative
                  flex
                  h-[455px]
                  flex-col
                  overflow-hidden
                  rounded-[9px]
                  border
                  border-[#dce4ee]
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_10px_28px_rgba(16,29,53,0.07)]
                "
              >

                {/* =================================================
                    TOP ACCENT
                ================================================= */}

                <div
                  className="h-[4px] w-full shrink-0"
                  style={{
                    backgroundColor: training.accent,
                  }}
                />

                {/* =================================================
                    NUMBER TAB
                ================================================= */}

                <div
                  className="
                    absolute
                    left-7
                    top-0
                    flex
                    h-[52px]
                    w-[46px]
                    items-center
                    justify-center
                    rounded-b-[7px]
                  "
                  style={{
                    backgroundColor: training.accent,
                  }}
                >
                  <span className="text-[15px] font-bold text-white">
                    {training.number}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="flex flex-1 flex-col px-7 pt-6">

                  {/* ICON */}

                  <div className="flex justify-center">
                    <div
                      className="
                        flex
                        h-[62px]
                        w-[62px]
                        items-center
                        justify-center
                        rounded-full
                        border
                      "
                      style={{
                        backgroundColor: training.soft,
                        borderColor: training.border,
                      }}
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.7}
                        style={{
                          color: training.accent,
                        }}
                      />
                    </div>
                  </div>

                  {/* TITLE */}

                  <div
                    className="
                      mt-3
                      flex
                      h-[48px]
                      items-center
                      justify-center
                    "
                  >
                    <h3
                      className="
                        text-center
                        text-[19px]
                        font-bold
                        leading-[1.25]
                        tracking-[-0.02em]
                        text-[#101d35]
                      "
                    >
                      {training.title}
                    </h3>
                  </div>

                  {/* LOCATION */}

                  <div className="mt-2 flex h-[30px] justify-center">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        px-3
                        py-1
                        text-[12px]
                        font-semibold
                      "
                      style={{
                        color: training.accent,
                        backgroundColor: training.soft,
                        borderColor: training.border,
                      }}
                    >
                      <MapPin size={13} />
                      {training.location}
                    </span>
                  </div>

                  {/* DIVIDER */}

                  <div className="mt-4 h-px w-full bg-[#e6ebf1]" />

                  {/* DESCRIPTION */}

                  <div
                    className="
                      flex
                      h-[105px]
                      items-center
                    "
                  >
                    <p
                      className="
                        text-center
                        text-[13.5px]
                        leading-[1.65]
                        text-[#52627d]
                      "
                    >
                      {training.description}
                    </p>
                  </div>

                  {/* DIVIDER */}

                  <div className="h-px w-full bg-[#e6ebf1]" />

                  {/* TRAINING FOCUS */}

                  <div className="pt-3">

                    <div className="flex items-center gap-2">
                      <GraduationCap
                        size={15}
                        strokeWidth={1.8}
                        style={{
                          color: training.accent,
                        }}
                      />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                        "
                        style={{
                          color: training.accent,
                        }}
                      >
                        Training Focus
                      </span>
                    </div>

                    <div
                      className="
                        mt-2
                        flex
                        min-h-[48px]
                        flex-wrap
                        content-start
                        gap-1.5
                      "
                    >
                      {training.focus.map((item) => (
                        <span
                          key={item}
                          className="
                            rounded-full
                            border
                            px-2.5
                            py-1
                            text-[11px]
                            font-medium
                          "
                          style={{
                            color: training.accent,
                            backgroundColor: training.soft,
                            borderColor: training.border,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    COMPLETED BAR
                ================================================= */}

                <div
                  className="
                    flex
                    h-[46px]
                    shrink-0
                    items-center
                    gap-2
                    px-7
                  "
                  style={{
                    backgroundColor: training.soft,
                  }}
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.8}
                    style={{
                      color: training.accent,
                    }}
                  />

                  <span
                    className="
                      text-[11px]
                      font-semibold
                    "
                    style={{
                      color: training.accent,
                    }}
                  >
                    Professional Training Completed
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            TRAINING JOURNEY
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            mt-5
            flex
            min-h-[78px]
            items-center
            rounded-[9px]
            border
            border-[#dce4ee]
            bg-[#f8faff]
            px-6
            py-4
          "
        >

          {/* ICON */}

          <div
            className="
              hidden
              h-[48px]
              w-[48px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              md:flex
            "
          >
            <GraduationCap
              size={24}
              strokeWidth={1.7}
              className="text-[#1769d5]"
            />
          </div>

          {/* TITLE */}

          <div
            className="
              shrink-0
              md:ml-4
              md:border-r
              md:border-[#dce4ee]
              md:pr-7
            "
          >
            <h3
              className="
                text-[14px]
                font-bold
                text-[#101d35]
              "
            >
              Robotics Training Journey
            </h3>
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              ml-0
              mt-2
              text-[12.5px]
              leading-[1.55]
              text-[#52627d]
              md:ml-7
              md:mt-0
            "
          >
            Training across ABB, Yaskawa and Dürr robotic platforms,
            strengthening practical expertise in industrial robot programming,
            paint applications, troubleshooting and automotive manufacturing
            systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};