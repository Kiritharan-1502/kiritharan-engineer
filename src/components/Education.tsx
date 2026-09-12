"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const education = [
  {
    number: "01",
    degree: "Diploma",
    institution:
      "Lakshmi Ammal Polytechnic College",
    year: "2017",
  },
  {
    number: "02",
    degree: "Bachelor of Technology",
    institution: "Kalinga University",
    year: "2020",
  },
  {
    number: "03",
    degree: "Master of Business Administration",
    institution: "Loyola College, Chennai",
    year: "2025",
  },
];

export const Education = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      id="education"
      className={`relative w-full overflow-hidden px-6 py-16 transition-colors duration-500 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20 ${
        isDark
          ? "bg-[#080814] text-white"
          : "bg-white text-[#101d35]"
      }`}
    >
      {/* Glow */}

      <div
        className={`pointer-events-none absolute right-[-180px] top-[100px] h-[500px] w-[500px] rounded-full blur-[150px] ${
          isDark
            ? "bg-blue-600/[.04]"
            : "bg-blue-500/[.025]"
        }`}
      />

      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADING */}

        <motion.div
          initial="rest"
          whileHover="hover"
          className="inline-flex cursor-default flex-col items-start"
        >
          <motion.h2
            variants={{
              rest: {
                y: 0,
              },
              hover: {
                y: -1,
              },
            }}
            className={`text-[clamp(2.8rem,4.2vw,4rem)] font-bold leading-[.95] tracking-[-.05em] ${
              isDark
                ? "text-white"
                : "text-[#101d35]"
            }`}
          >
            Education{" "}
            <span className="text-[#3b82f6]">
              Journey.
            </span>
          </motion.h2>

          <motion.div
            variants={{
              rest: {
                width: "58px",
              },
              hover: {
                width: "100%",
              },
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 h-[4px] rounded-full bg-[#3b82f6]"
          />
        </motion.div>

        {/* DESCRIPTION */}

        <p
          className={`mt-8 max-w-2xl text-[15px] leading-[1.8] sm:text-[17px] md:text-[18px] ${
            isDark
              ? "text-slate-400"
              : "text-[#506481]"
          }`}
        >
          Academic qualifications that built the
          foundation for my technical knowledge
          and professional career.
        </p>

        {/* TIMELINE */}

        <div className="relative mt-10 sm:mt-14 lg:mt-16">

          <div className="absolute left-[25px] top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:block" />

          <div className="space-y-4 sm:space-y-5">

            {education.map((item) => (
              <motion.article
                key={item.number}
                initial={false}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.005,
                }}
                className={`group relative overflow-hidden rounded-2xl border px-5 py-6 transition-all duration-300 md:ml-[55px] md:px-8 md:py-8 ${
                  isDark
                    ? "border-white/[.08] bg-white/[.02] hover:border-blue-500/30"
                    : "border-slate-200 bg-slate-50/70 hover:border-blue-500/30"
                }`}
              >

                {/* Top glow */}

                <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  {/* LEFT */}

                  <div className="flex items-start gap-4 sm:gap-5">

                    {/* NUMBER */}

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/[.07] text-sm font-semibold text-blue-500 sm:h-12 sm:w-12">
                      {item.number}
                    </div>

                    {/* DETAILS */}

                    <div>
                      <h3
                        className={`text-xl font-semibold leading-tight tracking-[-.03em] md:text-2xl ${
                          isDark
                            ? "text-white"
                            : "text-[#101d35]"
                        }`}
                      >
                        {item.degree}
                      </h3>

                      <p
                        className={`mt-2 text-[14px] leading-6 sm:text-[15px] md:text-base ${
                          isDark
                            ? "text-slate-400"
                            : "text-[#64748b]"
                        }`}
                      >
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* YEAR */}

                  <div
                    className={`flex items-center gap-4 border-t pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 ${
                      isDark
                        ? "border-white/[.07]"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/[.05] text-blue-500">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="17"
                          rx="2"
                        />
                        <line
                          x1="16"
                          y1="2"
                          x2="16"
                          y2="6"
                        />
                        <line
                          x1="8"
                          y1="2"
                          x2="8"
                          y2="6"
                        />
                        <line
                          x1="3"
                          y1="10"
                          x2="21"
                          y2="10"
                        />
                      </svg>
                    </div>

                    <div>
                      <p
                        className={`text-[10px] font-medium uppercase tracking-[.2em] ${
                          isDark
                            ? "text-slate-500"
                            : "text-slate-400"
                        }`}
                      >
                        Completed
                      </p>

                      <p className="mt-1 text-base font-medium text-blue-500">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}

                <div className="mt-6 h-px w-16 bg-blue-500/40 transition-all duration-300 group-hover:w-24 group-hover:bg-blue-400" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* FOOTER */}

        <div
          className={`mt-10 border-t pt-6 sm:mt-12 sm:pt-7 ${
            isDark
              ? "border-white/[.07]"
              : "border-slate-200"
          }`}
        >
          <p
            className={`text-[10px] uppercase tracking-[.18em] sm:text-xs ${
              isDark
                ? "text-slate-600"
                : "text-slate-400"
            }`}
          >
            Academic Foundation · Technical Growth ·
            Continuous Learning
          </p>
        </div>
      </div>
    </section>
  );
};