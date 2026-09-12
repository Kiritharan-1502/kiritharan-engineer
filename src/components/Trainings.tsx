"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { trainings } from "@/data/trainings";

export function Trainings() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="training"
      className={`relative overflow-hidden ${
        isLight
          ? "bg-white text-slate-950"
          : "bg-[#080814] text-white"
      }`}
    >
      <div
        className="
          mx-auto w-full max-w-[1400px]
          px-7 py-20
          sm:px-10 sm:py-24
          md:px-14
          lg:px-16
          xl:px-20
        "
      >
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="max-w-[900px]">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
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
            }}
            className="
              group
              inline-block
              text-[2.1rem]
              font-bold
              leading-none
              tracking-[-0.045em]
              sm:text-[2.7rem]
              md:text-[3.1rem]
            "
          >
            Technical{" "}
            <span className="text-blue-500">
              Training.
            </span>

            <span
              className="
                mt-3
                block
                h-[3px]
                w-10
                bg-blue-500
                transition-all
                duration-500
                ease-out
                group-hover:w-full
              "
            />
          </motion.h2>

          <p
            className={`mt-5 max-w-[820px] text-[13px] leading-6 sm:text-[1px] sm:leading-7 ${
              isLight
                ? "text-slate-600"
                : "text-slate-400"
            }`}
          >
            Specialized training across industrial robotic
            platforms, strengthening practical expertise in
            robot programming, paint applications,
            troubleshooting, and automotive production
            systems.
          </p>
        </div>

        {/* =========================================================
            TIMELINE
        ========================================================= */}

        <div className="relative mt-14 sm:mt-16">

          <div
            className={`absolute bottom-0 left-[28px] top-0 w-px sm:left-[29px] ${
              isLight
                ? "bg-slate-200"
                : "bg-blue-500/[0.22]"
            }`}
          />

          <div className="space-y-12 sm:space-y-16">

            {trainings.map((training, index) => (
              <motion.article
                key={training.title}
                initial={{
                  opacity: 0,
                  y: 22,
                  scale: 0.985,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  scale: 1.006,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="
                  group
                  relative
                  pl-[84px]
                  sm:pl-[86px]
                "
              >
                {/* =================================================
                    NUMBER CIRCLE
                ================================================= */}

                <motion.div
                  initial={{
                    scale: 0.94,
                    opacity: 0.7,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  whileHover={{
                    scale: 1.04,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.18,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    absolute
                    left-0
                    top-0
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-[12px]
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isLight
                        ? "border-blue-200 bg-white text-blue-500 group-hover:border-blue-300 group-hover:shadow-[0_0_24px_rgba(37,99,235,0.16)]"
                        : "border-blue-500/[0.30] bg-[#080814] text-blue-400 group-hover:border-blue-500/[0.50] group-hover:shadow-[0_0_26px_rgba(59,130,246,0.20)]"
                    }
                  `}
                >
                  {training.number}
                </motion.div>

                {/* =================================================
                    TRAINING CONTENT CARD

                    MOBILE:
                    SCROLL → BLUE GLOW

                    DESKTOP:
                    SCROLL + HOVER → BLUE GLOW
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0.82,
                    y: 20,
                    scale: 0.985,
                    filter: "brightness(0.97)",
                    boxShadow: isLight
                      ? "0 12px 45px rgba(37,99,235,0)"
                      : "0 0 0 rgba(37,99,235,0)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "brightness(1)",
                    boxShadow: isLight
                      ? "0 12px 45px rgba(37,99,235,0.13), 0 0 28px rgba(59,130,246,0.07)"
                      : "0 0 38px rgba(37,99,235,0.12), 0 18px 55px rgba(0,0,0,0.24)",
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.006,
                    filter: "brightness(1.035)",
                    boxShadow: isLight
                      ? "0 16px 52px rgba(37,99,235,0.16), 0 0 38px rgba(59,130,246,0.11)"
                      : "0 0 46px rgba(37,99,235,0.17), 0 18px 60px rgba(0,0,0,0.28)",
                  }}
                  viewport={{
                    once: false,
                    amount: 0.18,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    relative
                    overflow-hidden
                    rounded-[4px]
                    border
                    px-5
                    py-6
                    sm:px-7
                    sm:py-7
                    lg:px-8

                    ${
                      isLight
                        ? "border-slate-200 bg-white hover:border-blue-300"
                        : "border-white/[0.08] bg-[#0b0d1a] hover:border-blue-500/[0.38] hover:bg-[#0d1020]"
                    }
                  `}
                >

                  {/* SCROLL GLOW */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.18,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      ${
                        isLight
                          ? "bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.045),transparent_58%)]"
                          : "bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.065),transparent_58%)]"
                      }
                    `}
                  />

                  {/* HOVER GLOW */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[4px]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100

                      ${
                        isLight
                          ? "shadow-[inset_0_0_38px_rgba(37,99,235,0.055)]"
                          : "shadow-[inset_0_0_45px_rgba(37,99,235,0.08)]"
                      }
                    `}
                  />

                  {/* BLUE TOP ACCENT */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-[2px]
                      w-16
                      bg-blue-500
                      transition-all
                      duration-300
                      group-hover:w-24
                    "
                  />

                  {/* TITLE + LOCATION */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      flex-col
                      gap-4
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    "
                  >
                    <div className="min-w-0">

                      <div className="mb-3 flex flex-wrap items-center gap-3">

                        {training.logo && (
                          <div className="relative h-6 w-20 shrink-0">
                            <Image
                              src={training.logo}
                              alt={`${training.title} logo`}
                              fill
                              sizes="80px"
                              className="object-contain object-left"
                            />
                          </div>
                        )}

                        <span
                          className={`text-[8px] font-semibold uppercase tracking-[0.3em] ${
                            isLight
                              ? "text-slate-400"
                              : "text-slate-500"
                          }`}
                        >
                          {training.category}
                        </span>
                      </div>

                      <h3
                        className="
                          text-[21px]
                          font-semibold
                          leading-tight
                          tracking-[-0.025em]
                          transition-colors
                          duration-300
                          sm:text-[23px]
                          md:text-[24px]
                          group-hover:text-blue-500
                        "
                      >
                        {training.title}
                      </h3>
                    </div>

                    <div
                      className={`
                        inline-flex
                        w-fit
                        shrink-0
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-3
                        py-2
                        text-[10px]
                        transition-all
                        duration-300

                        ${
                          isLight
                            ? "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-blue-200 group-hover:text-blue-600"
                            : "border-white/[0.07] bg-white/[0.025] text-slate-400 group-hover:border-blue-500/[0.20] group-hover:text-blue-400"
                        }
                      `}
                    >
                      <span className="h-1 w-1 rounded-full bg-blue-500" />

                      {training.location}
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <p
                    className={`
                      relative
                      z-10
                      mt-5
                      max-w-[900px]
                      text-[13px]
                      leading-6
                      sm:text-[14px]
                      sm:leading-7

                      ${
                        isLight
                          ? "text-slate-600"
                          : "text-slate-400"
                      }
                    `}
                  >
                    {training.description}
                  </p>

                  {/* LEARNINGS + FOCUS */}

                  <div
                    className="
                      relative
                      z-10
                      mt-7
                      grid
                      grid-cols-1
                      gap-8
                      lg:grid-cols-[minmax(0,1fr)_minmax(280px,1.1fr)]
                      lg:gap-12
                    "
                  >

                    {/* KEY LEARNINGS */}

                    <div className="min-w-0">

                      <div
                        className={`
                          mb-4
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.28em]

                          ${
                            isLight
                              ? "text-slate-400"
                              : "text-slate-500"
                          }
                        `}
                      >
                        Key Learnings
                      </div>

                      <ul className="space-y-4">

                        {training.learned.map(
                          (item) => (
                            <li
                              key={item}
                              className={`
                                relative
                                pl-4
                                text-[13px]
                                leading-6
                                sm:text-[14px]
                                sm:leading-7

                                ${
                                  isLight
                                    ? "text-slate-600"
                                    : "text-slate-300"
                                }
                              `}
                            >
                              <span
                                className="
                                  absolute
                                  left-0
                                  top-[10px]
                                  h-1
                                  w-1
                                  rounded-full
                                  bg-blue-500
                                "
                              />

                              {renderBoldText(item)}
                            </li>
                          ),
                        )}

                      </ul>
                    </div>

                    {/* TRAINING FOCUS */}

                    <div className="min-w-0">

                      <div
                        className={`
                          mb-4
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.28em]

                          ${
                            isLight
                              ? "text-slate-400"
                              : "text-slate-500"
                          }
                        `}
                      >
                        Training Focus
                      </div>

                      <div className="flex flex-wrap gap-2">

                        {training.focus.map(
                          (item) => (
                            <span
                              key={item}
                              className={`
                                rounded-[3px]
                                border
                                px-3
                                py-2
                                text-[9px]
                                font-medium
                                leading-none
                                transition-all
                                duration-300

                                ${
                                  isLight
                                    ? "border-blue-100 bg-blue-50 text-blue-600 group-hover:border-blue-200"
                                    : "border-blue-500/[0.16] bg-blue-500/[0.06] text-blue-400 group-hover:border-blue-500/[0.25]"
                                }
                              `}
                            >
                              {item}
                            </span>
                          ),
                        )}

                      </div>
                    </div>

                  </div>
                </motion.div>
              </motion.article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BOLD TEXT SUPPORT
========================================================= */

function renderBoldText(text: string) {
  const parts = text.split("**");

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong
        key={index}
        className="font-semibold text-current"
      >
        {part}
      </strong>
    ) : (
      <span key={index}>
        {part}
      </span>
    ),
  );
}