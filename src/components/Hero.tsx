"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export function Hero() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="home"
      className={`
        relative
        w-full
        max-w-full
        overflow-hidden
        ${
          isLight
            ? "bg-white text-slate-950"
            : "bg-[#080814] text-white"
        }
      `}
    >
      {/* =========================================================
          THEME TOGGLE
      ========================================================= */}

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          isLight
            ? "Switch to dark mode"
            : "Switch to light mode"
        }
        className={`
          absolute
          right-5
          top-24
          z-40
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          backdrop-blur-md
          transition-all
          duration-300
          sm:right-7
          sm:h-12
          sm:w-12
          lg:right-6
          lg:top-24

          ${
            isLight
              ? "border-slate-300 bg-white/75 text-slate-600 hover:border-blue-400 hover:text-blue-600"
              : "border-white/[0.15] bg-white/[0.035] text-slate-300 hover:border-blue-400 hover:bg-blue-500/[0.06] hover:text-blue-400"
          }
        `}
      >
        {isLight ? (
          /* =======================================================
             SUN ICON
          ======================================================= */

          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <path
              d="M12 2V4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M12 20V22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M4.93 4.93L6.34 6.34"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M17.66 17.66L19.07 19.07"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M2 12H4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M20 12H22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M4.93 19.07L6.34 17.66"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M17.66 6.34L19.07 4.93"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          /* =======================================================
             MOON ICON
          ======================================================= */

          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M20.5 15.5C19.2 16.2 17.7 16.6 16.2 16.5C11.4 16.2 7.7 12.2 7.9 7.5C8 6.1 8.4 4.8 9.1 3.6C5.5 4.8 3 8.1 3 12C3 16.9 7 21 12 21C16 21 19.3 18.5 20.5 15.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* =========================================================
          HERO CONTAINER
      ========================================================= */}

      <div className="mx-auto w-full max-w-[1600px]">

        {/* =======================================================
            DESKTOP / LAPTOP

            44% CONTENT
            56% IMAGE

            MOBILE

            CONTENT
            ↓
            IMAGE
        ======================================================= */}

        <div
          className="
            grid
            min-w-0
            grid-cols-1
            lg:min-h-screen
            lg:grid-cols-[44%_56%]
          "
        >

          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}

          <div
            className="
              relative
              z-20
              flex
              min-w-0
              flex-col
              justify-center
              px-7
              pb-12
              pt-28

              sm:px-10
              sm:pb-16
              sm:pt-32

              md:px-14

              lg:px-16
              lg:pb-20
              lg:pt-32

              xl:px-20
            "
          >

            {/* ===================================================
                EYEBROW
            =================================================== */}

            <div className="mb-7 flex items-center gap-4 sm:mb-8">

              <span className="h-[2px] w-10 bg-blue-500 sm:w-12" />

              <span
                className={`
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  sm:text-[9px]

                  ${
                    isLight
                      ? "text-slate-500"
                      : "text-slate-400"
                  }
                `}
              >
                Senior Engineer
              </span>

            </div>

            {/* ===================================================
                MAIN HEADING
            =================================================== */}

            <motion.h1
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
              }}
              className="
                max-w-full
                text-[3.1rem]
                font-bold
                leading-[0.94]
                tracking-[-0.055em]

                sm:text-[4.4rem]
                md:text-[5rem]

                lg:max-w-[650px]
                lg:text-[4.7rem]

                xl:text-[5.6rem]
              "
            >
              Engineering
              <br />

              <span className="text-blue-500">
                Intelligent
              </span>

              <br />

              Solutions.
            </motion.h1>

            {/* ===================================================
                DESCRIPTION
            =================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.12,
              }}
              className={`
                mt-8
                max-w-[620px]
                text-[12px]
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
              Senior Offline Robot Programmer with 9+ years
              of experience in automotive manufacturing,
              robotic paint automation and production
              engineering.
            </motion.p>

            {/* ===================================================
                BUTTONS
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-4
                sm:mt-9
              "
            >

              {/* Explore */}
              <a
                href="#experience"
                className={`
                  group
                  inline-flex
                  h-11
                  items-center
                  justify-between
                  border
                  px-5
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  transition-all
                  duration-300

                  sm:h-12
                  sm:px-6
                  sm:text-[9px]

                  ${
                    isLight
                      ? "border-slate-200 text-slate-900 hover:border-blue-500 hover:text-blue-600"
                      : "border-white/[0.12] text-white hover:border-blue-500 hover:bg-blue-500/[0.05]"
                  }
                `}
              >
                <span>
                  Explore My Work
                </span>

                <span className="ml-7 text-blue-500 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Resume */}
              <a
                href="/logos/Kiritharan.K%20CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group
                  inline-flex
                  items-center
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  transition-colors
                  duration-300
                  sm:text-[9px]

                  ${
                    isLight
                      ? "text-slate-500 hover:text-blue-600"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                Download Resume

                <span
                  className={`
                    ml-3
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-[12px]
                    transition-all
                    duration-300

                    ${
                      isLight
                        ? "border-slate-200 group-hover:border-blue-500 group-hover:text-blue-600"
                        : "border-white/[0.12] group-hover:border-blue-500 group-hover:text-blue-400"
                    }
                  `}
                >
                  ↓
                </span>
              </a>

            </motion.div>

            {/* ===================================================
                STATS
            =================================================== */}

            <div
              className={`
                mt-9
                grid
                grid-cols-4
                border-t
                pt-5

                sm:mt-11
                sm:pt-6

                ${
                  isLight
                    ? "border-slate-200"
                    : "border-white/[0.08]"
                }
              `}
            >

              {[
                ["9+", "YEARS", "EXPERIENCE"],
                ["3", "ROBOT", "PLATFORMS"],
                ["10+", "KEY", "SKILLS"],
                ["∞", "CONTINUOUS", "LEARNING"],
              ].map(
                (
                  [number, line1, line2],
                  index,
                ) => (
                  <div
                    key={`${number}-${line1}`}
                    className={`
                      min-w-0
                      px-2
                      sm:px-4

                      ${
                        index !== 3
                          ? isLight
                            ? "border-r border-slate-200"
                            : "border-r border-white/[0.07]"
                          : ""
                      }

                      ${
                        index === 0
                          ? "pl-0"
                          : ""
                      }
                    `}
                  >

                    <div className="text-[21px] font-semibold leading-none sm:text-[26px]">
                      {number}
                    </div>

                    <div
                      className={`
                        mt-2
                        text-[5px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        leading-[1.55]
                        sm:text-[7px]

                        ${
                          isLight
                            ? "text-slate-400"
                            : "text-slate-500"
                        }
                      `}
                    >
                      <span className="block">
                        {line1}
                      </span>

                      <span className="block">
                        {line2}
                      </span>
                    </div>

                  </div>
                ),
              )}

            </div>
          </div>

          {/* =====================================================
              RIGHT — ROBOT IMAGE
          ===================================================== */}

          <div
            className="
              relative
              z-10
              min-w-0
              overflow-hidden

              min-h-[360px]

              sm:min-h-[430px]

              md:min-h-[500px]

              lg:min-h-screen
            "
          >

            <Image
              src="/logos/robotics-hero.jpg"
              alt="Industrial robotic painting system"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 56vw"
              className="
                object-cover
                object-center
              "
            />

            {/* ===================================================
                DESKTOP IMAGE → DARK BLEND

                This is the important part.

                It makes the robot image merge naturally
                into the dark content instead of creating
                a hard vertical line.
            =================================================== */}

            <div
              className={`
                pointer-events-none
                absolute
                inset-0

                ${
                  isLight
                    ? "bg-gradient-to-r from-white via-white/30 to-transparent"
                    : "bg-gradient-to-r from-[#080814] via-[#080814]/45 to-transparent"
                }

                lg:block
              `}
            />

            {/* Additional subtle bottom fade */}
            <div
              className={`
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-32

                ${
                  isLight
                    ? "bg-gradient-to-t from-white/20 to-transparent"
                    : "bg-gradient-to-t from-[#080814]/40 to-transparent"
                }
              `}
            />

          </div>

        </div>
      </div>
    </section>
  );
}