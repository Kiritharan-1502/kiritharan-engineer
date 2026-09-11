"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className={`
        relative
        min-h-screen
        w-full
        overflow-hidden
        transition-colors
        duration-500

        ${
          isDark
            ? "bg-[#080814] text-white"
            : "bg-white text-[#101d35]"
        }
      `}
    >
      {/* =====================================================
          THEME TOGGLE
          HOME PAGE ONLY
      ===================================================== */}

      <motion.button
        type="button"
        onClick={toggleTheme}
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.94,
        }}
        aria-label={
          isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
        title={
          isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
        className={`
          fixed
          right-6
          top-[102px]
          z-[90]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          shadow-lg
          transition-all
          duration-300

          ${
            isDark
              ? `
                border-white/15
                bg-white/[0.06]
                text-white
                hover:border-blue-400/50
                hover:bg-blue-500/[0.10]
                hover:text-blue-300
              `
              : `
                border-slate-200
                bg-white
                text-[#101d35]
                shadow-slate-200/60
                hover:border-blue-300
                hover:bg-blue-50
                hover:text-blue-600
              `
          }
        `}
      >
        {isDark ? (
          <Sun
            size={19}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover:rotate-45
            "
          />
        ) : (
          <Moon
            size={18}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
            "
          />
        )}
      </motion.button>

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="flex min-h-screen w-full flex-col lg:flex-row">

        {/* =====================================================
            LEFT — CONTENT
        ===================================================== */}

        <div
          className={`
            relative
            z-10
            flex
            min-h-screen
            w-full
            flex-col
            justify-center
            px-8
            pb-20
            pt-32
            md:px-12
            lg:w-[44%]
            lg:px-16
            lg:pb-16
            lg:pt-28
            xl:px-[4.5vw]

            ${
              isDark
                ? "bg-[#080814]"
                : "bg-white"
            }
          `}
        >

          {/* Background glow */}

          <div
            className={`
              pointer-events-none
              absolute
              left-[-150px]
              top-[25%]
              h-[450px]
              w-[450px]
              rounded-full
              blur-[150px]

              ${
                isDark
                  ? "bg-blue-600/[0.025]"
                  : "bg-blue-500/[0.035]"
              }
            `}
          />

          <div className="relative">

            {/* =================================================
                EYEBROW
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="flex items-center gap-6"
            >
              <span className="h-[2px] w-14 bg-[#3b82f6]" />

              <span
                className={`
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.32em]

                  ${
                    isDark
                      ? "text-slate-400"
                      : "text-[#52627d]"
                  }
                `}
              >
                Senior Engineer
              </span>
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-10
                max-w-[680px]
                text-[clamp(4rem,6vw,6.4rem)]
                font-bold
                leading-[0.86]
                tracking-[-0.065em]
              "
            >
              <span
                className={
                  isDark
                    ? "block text-white"
                    : "block text-[#101d35]"
                }
              >
                Engineering
              </span>

              <span className="block text-[#3b82f6]">
                Intelligent
              </span>

              <span
                className={
                  isDark
                    ? "block text-white"
                    : "block text-[#101d35]"
                }
              >
                Solutions.
              </span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className={`
                mt-12
                max-w-[620px]
                text-[16px]
                leading-[1.9]
                md:text-[18px]

                ${
                  isDark
                    ? "text-slate-400"
                    : "text-[#52627d]"
                }
              `}
            >
              Senior Offline Robot Programmer with 9+
              years of experience in automotive
              manufacturing, robotic paint automation
              and production engineering.
            </motion.p>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-8
              "
            >

              {/* Explore My Work */}

              <a
                href="#experience"
                className={`
                  group
                  flex
                  h-16
                  items-center
                  gap-8
                  border
                  px-8
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  transition-all
                  duration-300

                  ${
                    isDark
                      ? `
                        border-white/20
                        text-white
                        hover:border-[#3b82f6]
                        hover:bg-blue-500/[0.06]
                        hover:text-blue-300
                      `
                      : `
                        border-[#101d35]/20
                        text-[#101d35]
                        hover:border-[#3b82f6]
                        hover:bg-blue-500/[0.05]
                        hover:text-blue-600
                      `
                  }
                `}
              >
                <span>
                  Explore My Work
                </span>

                <span
                  className="
                    text-xl
                    text-blue-500
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>

              {/* Download Resume */}

              <a
                href="/logos/Kiritharan.K%20CV.pdf"
                download="Kiritharan_Resume.pdf"
                className={`
                  group
                  flex
                  h-16
                  items-center
                  gap-4
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  transition-colors
                  duration-300

                  ${
                    isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-[#52627d] hover:text-[#101d35]"
                  }
                `}
              >
                <span>
                  Download Resume
                </span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#3b82f6]/50
                    text-[#3b82f6]
                    transition-all
                    duration-300
                    group-hover:border-[#3b82f6]
                    group-hover:bg-[#3b82f6]/10
                    group-hover:translate-y-0.5
                  "
                >
                  ↓
                </span>
              </a>
            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              className={`
                mt-14
                border-t
                pt-7

                ${
                  isDark
                    ? "border-white/[0.08]"
                    : "border-slate-200"
                }
              `}
            >
              <div className="grid grid-cols-4">

                {/* Experience */}

                <div
                  className={`
                    border-r
                    pr-4

                    ${
                      isDark
                        ? "border-white/[0.08]"
                        : "border-slate-200"
                    }
                  `}
                >
                  <p
                    className={`
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      md:text-4xl

                      ${
                        isDark
                          ? "text-white"
                          : "text-[#101d35]"
                      }
                    `}
                  >
                    9+
                  </p>

                  <p
                    className={`
                      mt-2
                      text-[8px]
                      font-medium
                      uppercase
                      leading-[1.6]
                      tracking-[0.2em]

                      ${
                        isDark
                          ? "text-slate-600"
                          : "text-slate-400"
                      }
                    `}
                  >
                    Years
                    <br />
                    Experience
                  </p>
                </div>

                {/* Robot Platforms */}

                <div
                  className={`
                    border-r
                    px-4

                    ${
                      isDark
                        ? "border-white/[0.08]"
                        : "border-slate-200"
                    }
                  `}
                >
                  <p
                    className={`
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      md:text-4xl

                      ${
                        isDark
                          ? "text-white"
                          : "text-[#101d35]"
                      }
                    `}
                  >
                    3
                  </p>

                  <p
                    className={`
                      mt-2
                      text-[8px]
                      font-medium
                      uppercase
                      leading-[1.6]
                      tracking-[0.2em]

                      ${
                        isDark
                          ? "text-slate-600"
                          : "text-slate-400"
                      }
                    `}
                  >
                    Robot
                    <br />
                    Platforms
                  </p>
                </div>

                {/* Key Skills */}

                <div
                  className={`
                    border-r
                    px-4

                    ${
                      isDark
                        ? "border-white/[0.08]"
                        : "border-slate-200"
                    }
                  `}
                >
                  <p
                    className={`
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      md:text-4xl

                      ${
                        isDark
                          ? "text-white"
                          : "text-[#101d35]"
                      }
                    `}
                  >
                    10+
                  </p>

                  <p
                    className={`
                      mt-2
                      text-[8px]
                      font-medium
                      uppercase
                      leading-[1.6]
                      tracking-[0.2em]

                      ${
                        isDark
                          ? "text-slate-600"
                          : "text-slate-400"
                      }
                    `}
                  >
                    Key
                    <br />
                    Skills
                  </p>
                </div>

                {/* Continuous Learning */}

                <div className="pl-4">
                  <p
                    className={`
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      md:text-4xl

                      ${
                        isDark
                          ? "text-white"
                          : "text-[#101d35]"
                      }
                    `}
                  >
                    ∞
                  </p>

                  <p
                    className={`
                      mt-2
                      text-[8px]
                      font-medium
                      uppercase
                      leading-[1.6]
                      tracking-[0.2em]

                      ${
                        isDark
                          ? "text-slate-600"
                          : "text-slate-400"
                      }
                    `}
                  >
                    Continuous
                    <br />
                    Learning
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* =====================================================
            RIGHT — ROBOT IMAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.03,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            min-h-[55vh]
            w-full
            overflow-hidden
            lg:min-h-screen
            lg:w-[56%]
          "
        >
          <img
            src="/logos/robotics-hero.jpg"
            alt="Industrial robotic system"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          <div
            className={`
              absolute
              inset-0

              ${
                isDark
                  ? "bg-gradient-to-r from-black/[0.08] via-transparent to-black/[0.08]"
                  : "bg-gradient-to-r from-white/[0.06] via-transparent to-white/[0.04]"
              }
            `}
          />

          <div
            className="
              absolute
              inset-0
              bg-[#3b82f6]/[0.025]
              mix-blend-multiply
            "
          />
        </motion.div>

      </div>
    </section>
  );
};