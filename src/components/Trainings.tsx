"use client";

import { motion } from "framer-motion";
import { trainings } from "@/data/trainings";
import { useTheme } from "@/components/ThemeProvider";

const renderBoldText = (
  text: string,
  isLight: boolean,
) =>
  text
    .split(/(\*\*.*?\*\*)/g)
    .map((part, index) =>
      part.startsWith("**") &&
      part.endsWith("**") ? (
        <strong
          key={index}
          className={
            isLight
              ? "font-semibold text-[#101d35]"
              : "font-semibold text-slate-100"
          }
        >
          {part.slice(2, -2)}
        </strong>
      ) : (
        <span key={index}>{part}</span>
      ),
    );

export const Trainings = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const isLight = theme === "light";

  return (
    <section
      id="training"
      className={`relative w-full overflow-hidden px-6 py-16 transition-colors duration-500 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-28 ${
        isDark
          ? "bg-[#080814] text-white"
          : "bg-white text-[#101d35]"
      }`}
    >
      {/* Background Glow */}

      <div
        className={`pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] ${
          isDark
            ? "bg-blue-600/[.035]"
            : "bg-blue-500/[.025]"
        }`}
      />

      <div className="relative mx-auto max-w-[1250px]">

        {/* HEADING */}

        <motion.div
          initial="rest"
          whileHover="hover"
          className="group relative inline-block"
        >
          <h2
            className={`text-[clamp(2.8rem,4.2vw,4rem)] font-bold leading-[.95] tracking-[-.05em] ${
              isLight
                ? "text-[#101d35]"
                : "text-white"
            }`}
          >
            Technical{" "}
            <span className="text-[#3b82f6]">
              Training.
            </span>
          </h2>

          <motion.span
            variants={{
              rest: {
                width: 60,
              },
              hover: {
                width: "100%",
              },
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -bottom-6 left-0 h-[4px] rounded-full bg-[#3b82f6]"
          />
        </motion.div>

        {/* DESCRIPTION */}

        <p
          className={`mt-9 max-w-3xl text-[15px] leading-[1.8] sm:text-[17px] sm:leading-[1.85] ${
            isDark
              ? "text-slate-400"
              : "text-[#506481]"
          }`}
        >
          Specialized training across industrial robotic
          platforms, strengthening practical expertise in
          robot programming, paint applications,
          troubleshooting, and automotive production
          systems.
        </p>

        {/* TRAINING TIMELINE */}

        <div className="relative mt-12 sm:mt-16 lg:mt-20">

          <div className="absolute bottom-4 left-[27px] top-4 hidden w-px bg-gradient-to-b from-blue-500/70 via-blue-500/25 to-transparent md:block md:left-[39px]" />

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">

            {trainings.map((training) => (
              <motion.article
                key={training.number}
                initial={false}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                className="relative"
              >

                {/* NUMBER */}

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border text-sm font-semibold tracking-wider md:h-20 md:w-20 md:text-base ${
                    isDark
                      ? "border-blue-500/40 bg-[#080814] text-blue-400"
                      : "border-blue-500/30 bg-white text-blue-500"
                  }`}
                >
                  {training.number}
                </motion.div>

                {/* CONTENT */}

                <div className="ml-[72px] mt-[-56px] sm:ml-[82px] md:ml-[120px] md:mt-[-80px]">

                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    className="group"
                  >

                    {/* TOP ROW */}

                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-blue-500 sm:text-xs">
                          {training.company}
                        </p>

                        <h3
                          className={`mt-3 text-[clamp(1.7rem,3vw,2.6rem)] font-semibold leading-tight tracking-[-.03em] ${
                            isDark
                              ? "text-white"
                              : "text-[#101d35]"
                          }`}
                        >
                          {training.title}
                        </h3>
                      </div>

                      {/* LOCATION */}

                      <div
                        className={`flex w-fit shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm ${
                          isDark
                            ? "border-white/[.08] bg-white/[.025] text-slate-400"
                            : "border-slate-200 bg-slate-50 text-[#64748b]"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                        {training.location}
                      </div>
                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className={`mt-6 max-w-[950px] text-[14px] leading-[1.8] sm:mt-7 sm:text-[16px] sm:leading-[1.85] ${
                        isDark
                          ? "text-slate-400"
                          : "text-[#64748b]"
                      }`}
                    >
                      {training.description}
                    </p>

                    {/* LOWER CONTENT */}

                    <div className="mt-7 grid gap-7 md:grid-cols-[1fr_auto] md:gap-8">

                      {/* LEARNINGS */}

                      <div>
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[.2em] ${
                            isDark
                              ? "text-slate-600"
                              : "text-slate-400"
                          }`}
                        >
                          Key Learnings
                        </p>

                        <div className="mt-4 space-y-3 sm:space-y-4">
                          {training.learned.map(
                            (learning) => (
                              <div
                                key={learning}
                                className={`flex items-start gap-3 text-[14px] leading-[1.7] sm:text-[16px] ${
                                  isDark
                                    ? "text-slate-300"
                                    : "text-[#506481]"
                                }`}
                              >
                                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                                <span>
                                  {renderBoldText(
                                    learning,
                                    isLight,
                                  )}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* FOCUS */}

                      <div className="md:min-w-[280px]">
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[.2em] ${
                            isDark
                              ? "text-slate-600"
                              : "text-slate-400"
                          }`}
                        >
                          Training Focus
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {training.focus.map(
                            (item) => (
                              <span
                                key={item}
                                className="rounded-md border border-blue-500/20 bg-blue-500/[.06] px-3 py-1.5 text-xs font-medium text-blue-500"
                              >
                                {item}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    {/* DIVIDER */}

                    <div
                      className={`mt-10 h-px w-full bg-gradient-to-r from-blue-500/20 via-white/[.05] to-transparent ${
                        isDark
                          ? ""
                          : "opacity-60"
                      }`}
                    />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* FOOTER */}

        <div
          className={`mt-16 border-t pt-7 sm:mt-20 ${
            isDark
              ? "border-white/[.07]"
              : "border-slate-200"
          }`}
        >
          <p
            className={`text-[10px] uppercase tracking-[.18em] sm:text-sm ${
              isDark
                ? "text-slate-600"
                : "text-slate-400"
            }`}
          >
            Robotics • Automation • Automotive
            Manufacturing
          </p>
        </div>
      </div>
    </section>
  );
};