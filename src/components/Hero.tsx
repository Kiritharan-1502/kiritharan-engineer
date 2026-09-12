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
      className={`relative w-full overflow-hidden transition-colors duration-500 ${
        isDark
          ? "bg-[#080814] text-white"
          : "bg-white text-[#101d35]"
      }`}
    >
      {/* =====================================================
          THEME TOGGLE
          HOME PAGE ONLY
      ===================================================== */}

      <motion.button
        type="button"
        onClick={toggleTheme}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={
          isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
        className={`fixed right-4 top-[78px] z-[90] flex h-10 w-10 items-center justify-center rounded-full border shadow-lg sm:right-6 sm:top-[94px] sm:h-11 sm:w-11 ${
          isDark
            ? "border-white/15 bg-white/[0.06] text-white hover:border-blue-400/50 hover:bg-blue-500/[0.10]"
            : "border-slate-200 bg-white text-[#101d35] hover:border-blue-300 hover:bg-blue-50"
        }`}
      >
        {isDark ? (
          <Sun size={18} strokeWidth={1.8} />
        ) : (
          <Moon size={17} strokeWidth={1.8} />
        )}
      </motion.button>

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div className="flex w-full flex-col lg:min-h-screen lg:flex-row">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div
          className={`relative z-10 flex w-full flex-col justify-center px-6 pb-10 pt-[100px] sm:px-8 sm:pb-12 sm:pt-[110px] md:px-12 md:pb-14 lg:min-h-screen lg:w-[44%] lg:px-16 lg:pb-16 lg:pt-28 xl:px-[4.5vw] ${
            isDark ? "bg-[#080814]" : "bg-white"
          }`}
        >
          {/* Background glow */}

          <div
            className={`pointer-events-none absolute left-[-180px] top-[22%] h-[420px] w-[420px] rounded-full blur-[150px] ${
              isDark
                ? "bg-blue-600/[0.025]"
                : "bg-blue-500/[0.035]"
            }`}
          />

          <div className="relative">

            {/* EYEBROW */}

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
              className="flex items-center gap-4 sm:gap-6"
            >
              <span className="h-[2px] w-10 bg-[#3b82f6] sm:w-14" />

              <span
                className={`text-[8px] font-medium uppercase tracking-[0.30em] sm:text-[10px] sm:tracking-[0.32em] ${
                  isDark
                    ? "text-slate-400"
                    : "text-[#52627d]"
                }`}
              >
                Senior Engineer
              </span>
            </motion.div>

            {/* MAIN HEADING */}

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
              className="mt-7 max-w-[680px] text-[clamp(3.1rem,11vw,6.4rem)] font-bold leading-[0.88] tracking-[-0.065em] sm:mt-10 sm:text-[clamp(4rem,8vw,6.4rem)]"
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

            {/* DESCRIPTION */}

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
              className={`mt-7 max-w-[620px] text-[13px] leading-[1.8] sm:mt-10 sm:text-[16px] sm:leading-[1.9] md:text-[18px] ${
                isDark
                  ? "text-slate-400"
                  : "text-[#52627d]"
              }`}
            >
              Senior Offline Robot Programmer with 9+
              years of experience in automotive
              manufacturing, robotic paint automation
              and production engineering.
            </motion.p>

            {/* ACTIONS */}

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
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4 sm:mt-10 sm:gap-8"
            >
              {/* Explore */}

              <a
                href="#experience"
                className={`group flex h-12 items-center gap-5 border px-5 text-[9px] font-semibold uppercase tracking-[0.18em] sm:h-16 sm:gap-8 sm:px-8 sm:text-[11px] sm:tracking-[0.2em] ${
                  isDark
                    ? "border-white/20 text-white hover:border-[#3b82f6] hover:bg-blue-500/[0.06]"
                    : "border-[#101d35]/20 text-[#101d35] hover:border-[#3b82f6]"
                }`}
              >
                <span>Explore My Work</span>

                <span className="text-lg text-blue-500 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Resume */}

              <a
                href="/logos/Kiritharan.K%20CV.pdf"
                download="Kiritharan_Resume.pdf"
                className={`group flex h-12 items-center gap-3 text-[9px] font-medium uppercase tracking-[0.16em] sm:h-16 sm:gap-4 sm:text-[11px] sm:tracking-[0.2em] ${
                  isDark
                    ? "text-slate-400 hover:text-white"
                    : "text-[#52627d] hover:text-[#101d35]"
                }`}
              >
                Download Resume

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3b82f6]/50 text-[#3b82f6] sm:h-9 sm:w-9">
                  ↓
                </span>
              </a>
            </motion.div>

            {/* STATS */}

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
              className={`mt-8 border-t pt-5 sm:mt-12 sm:pt-7 ${
                isDark
                  ? "border-white/[0.08]"
                  : "border-slate-200"
              }`}
            >
              <div className="grid grid-cols-4">
                {[
                  ["9+", "Years", "Experience"],
                  ["3", "Robot", "Platforms"],
                  ["10+", "Key", "Skills"],
                  ["∞", "Continuous", "Learning"],
                ].map(
                  ([value, line1, line2], index) => (
                    <div
                      key={value}
                      className={`${
                        index < 3
                          ? "border-r"
                          : ""
                      } ${
                        isDark
                          ? "border-white/[0.08]"
                          : "border-slate-200"
                      } ${
                        index === 0
                          ? "pr-2"
                          : index === 3
                            ? "pl-2"
                            : "px-2"
                      } sm:${
                        index === 0
                          ? "pr-4"
                          : index === 3
                            ? "pl-4"
                            : "px-4"
                      }`}
                    >
                      <p
                        className={`text-[22px] font-semibold tracking-[-0.04em] sm:text-3xl md:text-4xl ${
                          isDark
                            ? "text-white"
                            : "text-[#101d35]"
                        }`}
                      >
                        {value}
                      </p>

                      <p
                        className={`mt-1 text-[6px] font-medium uppercase leading-[1.5] tracking-[0.14em] sm:mt-2 sm:text-[8px] sm:tracking-[0.2em] ${
                          isDark
                            ? "text-slate-600"
                            : "text-slate-400"
                        }`}
                      >
                        {line1}
                        <br />
                        {line2}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            ROBOT IMAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative h-[38vh] min-h-[280px] max-h-[430px] overflow-hidden sm:h-[45vh] sm:max-h-[520px] lg:h-auto lg:min-h-screen lg:max-h-none lg:w-[56%]"
        >
          <img
            src="/logos/robotics-hero.jpg"
            alt="Industrial robotic automation"
            className="h-full w-full object-cover"
          />

          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-r from-[#080814] via-[#080814]/15 to-transparent"
                : "bg-gradient-to-r from-white via-white/10 to-transparent"
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
};