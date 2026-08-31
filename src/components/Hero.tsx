"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UserRound,
  Bot,
  Settings,
  SearchCheck,
  ChartNoAxesColumnIncreasing,
  BookOpen,
  Globe,
} from "lucide-react";

export const Hero = () => {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-white text-[#101d35]"
    >
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <div className="border-b border-[#eef1f5]">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-10">

          <div
            className="
              grid
              items-center
              gap-8
              lg:grid-cols-[1.03fr_0.97fr]
            "
          >

            {/* =====================================================
                LEFT SIDE
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 py-6"
            >

              {/* EXPERIENCE */}
              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-3
                  text-[15px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-[#1266d6]
                "
              >
                <span className="h-[2px] w-6 bg-[#1266d6]" />
                <span>9+ Years of Experience</span>
              </div>


              {/* MAIN HEADING */}
              <h1
                className="
                  max-w-[610px]
                  text-[42px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.025em]
                  sm:text-[44px]
                  lg:text-[47px]
                "
              >
                Engineering Intelligent
                <br />
                Solutions. Optimizing
                <br />
                Performance.
              </h1>


              {/* DESCRIPTION */}
              <p
                className="
                  mt-4
                  max-w-[650px]
                  text-[15px]
                  leading-[1.75]
                  text-[#43516b]
                "
              >
                Senior Offline Robot Programmer with expertise in paint robot
                programming, automation, process optimization and production
                engineering within automotive manufacturing environments.
              </p>


              {/* BUTTONS */}
              <div className="mt-5 flex items-center gap-4">

                <button
                  onClick={() => scrollTo("#projects")}
                  className="
                    flex
                    h-[48px]
                    items-center
                    gap-3
                    rounded-md
                    bg-[#0867dc]
                    px-6
                    text-[12px]
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:bg-[#0759bd]
                  "
                >
                  EXPLORE MY WORK
                  <ArrowRight size={17} />
                </button>


                <button
                  onClick={() => scrollTo("#about")}
                  className="
                    flex
                    h-[48px]
                    items-center
                    gap-3
                    rounded-md
                    border-2
                    border-[#1768d5]
                    px-6
                    text-[12px]
                    font-semibold
                    text-[#1266d6]
                    transition
                    hover:bg-[#f2f7ff]
                  "
                >
                  VIEW PROFILE
                  <UserRound size={16} />
                </button>

              </div>


              {/* TECHNOLOGIES */}
              <div className="mt-6">

                <p
                  className="
                    mb-2.5
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-wide
                    text-[#526079]
                  "
                >
                  Technologies I Work With
                </p>


                <div className="flex items-center gap-7">

                  <span
                    className="
                      text-[25px]
                      font-black
                      tracking-tight
                      text-[#1664bd]
                    "
                  >
                    DÜRR
                  </span>


                  <span
                    className="
                      text-[25px]
                      font-black
                      tracking-tight
                      text-[#df1717]
                    "
                  >
                    ABB
                  </span>


                  <span
                    className="
                      text-[25px]
                      font-black
                      tracking-tight
                      text-[#1264b8]
                    "
                  >
                    YASKAWA
                  </span>


                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      text-[20px]
                      font-semibold
                      text-[#46536b]
                    "
                  >
                    <span
                      className="
                        rounded
                        border-2
                        border-[#46536b]
                        p-1
                      "
                    >
                      <Settings size={18} />
                    </span>

                    PLC
                  </span>

                </div>

              </div>

            </motion.div>


            {/* =====================================================
                RIGHT SIDE — IMAGE PLACEHOLDER
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="
                relative
                flex
                h-[455px]
                items-center
                justify-end
              "
            >

              {/* FRAME */}
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  h-[455px]
                  w-[94%]
                  -translate-y-1/2
                  border
                  border-[#2473dc]/60
                "
              />


              {/* BLUEPRINT */}
              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  z-0
                  hidden
                  -translate-y-1/2
                  opacity-20
                  lg:block
                "
              >
                <svg
                  width="290"
                  height="390"
                  viewBox="0 0 330 430"
                  fill="none"
                >
                  <path
                    d="M55 390V300L105 255V185L165 135L215 170V235L270 285"
                    stroke="#1266d6"
                    strokeWidth="2"
                  />

                  <circle
                    cx="105"
                    cy="255"
                    r="30"
                    stroke="#1266d6"
                    strokeWidth="2"
                  />

                  <circle
                    cx="165"
                    cy="135"
                    r="30"
                    stroke="#1266d6"
                    strokeWidth="2"
                  />

                  <circle
                    cx="215"
                    cy="235"
                    r="30"
                    stroke="#1266d6"
                    strokeWidth="2"
                  />
                </svg>
              </div>


              {/* IMAGE AREA
                  PHOTO WILL BE ADDED LAST
              */}
              <div
                className="
                  relative
                  z-10
                  h-[455px]
                  w-[455px]
                  bg-[#f5f8fc]
                "
              />


              {/* DOTS */}
              <div
                className="
                  absolute
                  right-5
                  top-4
                  z-20
                  grid
                  grid-cols-6
                  gap-[10px]
                  opacity-60
                "
              >
                {Array.from({ length: 30 }).map((_, i) => (
                  <span
                    key={i}
                    className="
                      h-[4px]
                      w-[4px]
                      rounded-full
                      bg-[#1266d6]
                    "
                  />
                ))}
              </div>

            </motion.div>

          </div>

        </div>
      </div>


      {/* =========================================================
          CORE EXPERTISE
      ========================================================= */}
      <section className="bg-white px-8 py-5 lg:px-10">

        <div className="mx-auto max-w-[1400px]">

          {/* TITLE */}
          <div className="mb-4 text-center">

            <h2
              className="
                text-[25px]
                font-bold
                uppercase
                leading-tight
                tracking-tight
                text-[#101d35]
              "
            >
              Core{" "}
              <span className="border-b-[3px] border-[#1266d6]">
                Expertise
              </span>
            </h2>


            <p
              className="
                mt-1
                text-[13px]
                leading-5
                text-[#526079]
              "
            >
              I deliver end-to-end engineering solutions that drive
              efficiency, quality and innovation.
            </p>

          </div>


          {/* CARDS */}
          <div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-6
            "
          >

            <ExpertiseCard
              icon={<Bot size={38} />}
              title={
                <>
                  Robot Programming
                  <br />
                  & Commissioning
                </>
              }
              description="Expert in ABB, Yaskawa & Dürr robots for paint and industrial applications."
            />

            <ExpertiseCard
              icon={<Settings size={38} />}
              title="Process Optimization"
              description="Improving cycle time, paint quality, transfer efficiency and line performance."
            />

            <ExpertiseCard
              icon={<SearchCheck size={38} />}
              title={
                <>
                  Troubleshooting &
                  <br />
                  Error Analysis
                </>
              }
              description="Root cause analysis and defect elimination for sustainable results."
            />

            <ExpertiseCard
              icon={<ChartNoAxesColumnIncreasing size={38} />}
              title={
                <>
                  System Start-up
                  <br />
                  & Support
                </>
              }
              description="Supporting system deployment, trials, debugging and production ramp-up."
            />

            <ExpertiseCard
              icon={<BookOpen size={38} />}
              title={
                <>
                  Technical Training
                  <br />
                  & Documentation
                </>
              }
              description="Training teams and preparing SOPs, process sheets and technical guides."
            />

            <ExpertiseCard
              icon={<Globe size={38} />}
              title={
                <>
                  Global Support
                  <br />
                  & Projects
                </>
              }
              description="Willingness to travel worldwide for assignments and customer support."
            />

          </div>

        </div>

      </section>

    </section>
  );
};


/* ===============================================================
   EXPERTISE CARD
================================================================ */

const ExpertiseCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="
        flex
        min-h-[190px]
        flex-col
        items-center
        rounded-xl
        border
        border-[#e2e7ee]
        bg-white
        px-4
        py-4
        text-center
        shadow-[0_2px_10px_rgba(20,40,70,0.04)]
      "
    >

      {/* ICON */}
      <div
        className="
          mb-2.5
          flex
          h-[44px]
          items-center
          justify-center
          text-[#1266d6]
        "
      >
        {icon}
      </div>


      {/* TITLE */}
      <h3
        className="
          text-[14px]
          font-bold
          leading-[1.25]
          text-[#101d35]
        "
      >
        {title}
      </h3>


      {/* DESCRIPTION */}
      <p
        className="
          mt-2.5
          text-[12px]
          leading-[1.5]
          text-[#526079]
        "
      >
        {description}
      </p>

    </motion.div>
  );
};