"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
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
          className={`font-semibold ${
            isLight
              ? "text-[#101d35]"
              : "text-slate-100"
          }`}
        >
          {part.slice(2, -2)}
        </strong>
      ) : (
        <span key={index}>{part}</span>
      ),
    );

export const Experience = () => {
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <section
      id="experience"
      className={`relative overflow-hidden py-16 transition-colors duration-500 sm:py-20 lg:py-28 ${
        isLight
          ? "bg-[#f7f9fc]"
          : "bg-[#080814]"
      }`}
    >
      {/* Background Glow */}

      <div
        className={`pointer-events-none absolute left-1/2 top-32 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[150px] ${
          isLight
            ? "bg-blue-500/[0.03]"
            : "bg-blue-600/[0.04]"
        }`}
      />

      <div className="relative mx-auto w-[92%] max-w-[1400px] sm:w-[89%]">

        {/* HEADING */}

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial="rest"
            whileHover="hover"
            className="inline-block"
          >
            <h2
              className={`relative inline-block cursor-default text-[clamp(2.8rem,4.2vw,4rem)] font-bold leading-[0.95] tracking-[-0.05em] ${
                isLight
                  ? "text-[#101d35]"
                  : "text-white"
              }`}
            >
              Experience.

              <motion.span
                variants={{
                  rest: {
                    width: "58px",
                  },
                  hover: {
                    width: "100%",
                  },
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-5 left-0 h-[3px] bg-[#3b82f6]"
              />
            </h2>
          </motion.div>

          <p
            className={`mt-8 max-w-[720px] text-[15px] leading-[1.8] sm:text-[17px] ${
              isLight
                ? "text-[#506481]"
                : "text-slate-400"
            }`}
          >
            A career built around industrial robotics,
            automated painting systems, production
            engineering, commissioning, and continuous
            process improvement.
          </p>
        </div>

        {/* TIMELINE */}

        <div className="relative">

          <div
            className={`absolute left-[30px] top-0 hidden w-px md:block ${
              isLight
                ? "bg-[#1768d5]/15"
                : "bg-blue-500/[0.20]"
            }`}
            style={{
              height: "calc(100% - 20px)",
            }}
          />

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">

            {experiences.map(
              (experience, index) => (
                <motion.article
                  key={experience.number}
                  initial={false}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.03,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="relative pl-0 md:pl-[96px]"
                >

                  {/* TIMELINE NUMBER */}

                  <div className="absolute left-0 top-[38px] hidden md:block">
                    <div
                      className={`flex h-[62px] w-[62px] items-center justify-center rounded-full ${
                        isLight
                          ? "bg-[#1768d5]/[0.10]"
                          : "bg-blue-500/[0.10]"
                      }`}
                    >
                      <div
                        className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border text-[12px] font-semibold tracking-[0.08em] text-white ${
                          isLight
                            ? "border-[#1768d5]/40 bg-[#1768d5] shadow-[0_0_25px_rgba(23,104,213,.25)]"
                            : "border-blue-400/40 bg-[#2563eb] shadow-[0_0_30px_rgba(37,99,235,.35)]"
                        }`}
                      >
                        {experience.number}
                      </div>
                    </div>
                  </div>

                  {/* CARD */}

                  <div
                    className={`relative overflow-hidden rounded-[18px] border transition-all duration-500 sm:rounded-[22px] ${
                      isLight
                        ? "border-[#1768d5]/15 bg-white shadow-[0_18px_60px_rgba(16,29,53,.07)] hover:border-[#1768d5]/30"
                        : "border-blue-500/[.23] bg-[#0d0d19] shadow-[0_18px_70px_rgba(0,0,0,.28)] hover:border-blue-400/[.38]"
                    }`}
                  >

                    {/* Top Highlight */}

                    <div
                      className={`absolute left-0 right-0 top-0 h-px ${
                        isLight
                          ? "bg-gradient-to-r from-transparent via-[#1768d5]/40 to-transparent"
                          : "bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
                      }`}
                    />

                    {/* Header */}

                    <div className="px-5 pb-6 pt-6 sm:px-7 sm:pb-7 sm:pt-8 md:px-9 md:pt-9">

                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                        {/* Role + Company */}

                        <div className="flex items-start gap-4 sm:gap-5">

                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] text-xl font-semibold text-white sm:h-14 sm:w-14 sm:text-[23px] ${
                              isLight
                                ? "bg-[#1768d5]"
                                : "bg-[#2563eb]"
                            }`}
                          >
                            {experience.company.charAt(0)}
                          </div>

                          <div className="min-w-0">

                            <div className="flex flex-wrap items-center gap-3">

                              <h3
                                className={`text-[21px] font-semibold leading-[1.3] tracking-[-0.025em] sm:text-[25px] ${
                                  isLight
                                    ? "text-[#101d35]"
                                    : "text-white"
                                }`}
                              >
                                {experience.role}
                              </h3>

                              {/* CURRENT */}

                              {experience.current && (
                                <span
                                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] ${
                                    isLight
                                      ? "border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-600"
                                      : "border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-400"
                                  }`}
                                >
                                  <span
                                    className={`h-1.5 w-1.5 rounded-full ${
                                      isLight
                                        ? "bg-emerald-600"
                                        : "bg-emerald-400"
                                    }`}
                                  />

                                  Current
                                </span>
                              )}

                            </div>

                            <p
                              className={`mt-2 text-[15px] font-medium sm:text-[16px] ${
                                isLight
                                  ? "text-[#1768d5]"
                                  : "text-blue-400"
                              }`}
                            >
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        {/* DATE / LOCATION */}

                        <div
                          className={`w-full rounded-[10px] border px-4 py-3 lg:w-auto lg:min-w-[235px] ${
                            isLight
                              ? "border-[#101d35]/10 bg-[#f7f9fc]"
                              : "border-white/[.07] bg-[#0a0a14]"
                          }`}
                        >
                          <p
                            className={`text-left font-mono text-[12px] font-semibold uppercase tracking-[0.08em] lg:text-right ${
                              isLight
                                ? "text-[#506481]"
                                : "text-slate-300"
                            }`}
                          >
                            {experience.current
                              ? "2025"
                              : experience.period}
                          </p>

                          <p
                            className={`mt-1 text-left font-mono text-[12px] lg:text-right ${
                              isLight
                                ? "text-[#6f86a8]"
                                : "text-slate-500"
                            }`}
                          >
                            {experience.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}

                    <div
                      className={`mx-5 h-px sm:mx-7 md:mx-9 ${
                        isLight
                          ? "bg-[#101d35]/[.08]"
                          : "bg-white/[.07]"
                      }`}
                    />

                    {/* RESPONSIBILITIES */}

                    <div className="px-5 py-6 sm:px-7 sm:py-8 md:px-9">
                      <ul className="space-y-4 sm:space-y-5">

                        {experience.responsibilities.map(
                          (
                            responsibility,
                            responsibilityIndex,
                          ) => (
                            <li
                              key={`${experience.number}-${responsibilityIndex}`}
                              className="flex items-start gap-3 sm:gap-4"
                            >
                              <span
                                className={`mt-[4px] shrink-0 text-[20px] leading-none ${
                                  isLight
                                    ? "text-[#1768d5]"
                                    : "text-cyan-400"
                                }`}
                              >
                                ›
                              </span>

                              <p
                                className={`text-[14px] leading-[1.75] sm:text-[16px] ${
                                  isLight
                                    ? "text-[#506481]"
                                    : "text-slate-300"
                                }`}
                              >
                                {renderBoldText(
                                  responsibility,
                                  isLight,
                                )}
                              </p>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Divider */}

                    <div
                      className={`mx-5 h-px sm:mx-7 md:mx-9 ${
                        isLight
                          ? "bg-[#101d35]/[.08]"
                          : "bg-white/[.07]"
                      }`}
                    />

                    {/* TECHNOLOGIES */}

                    <div className="flex flex-wrap gap-2 px-5 py-5 sm:px-7 sm:py-6 md:px-9">
                      {experience.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className={`rounded-[6px] border px-2.5 py-1.5 font-mono text-[10px] sm:px-3 sm:text-[11px] ${
                              isLight
                                ? "border-[#1768d5]/20 bg-[#1768d5]/[.05] text-[#1768d5]"
                                : "border-blue-500/[.25] bg-blue-500/[.08] text-blue-300"
                            }`}
                          >
                            {technology}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </div>

        {/* FOOTER LINE */}

        <div
          className={`mt-14 flex flex-col gap-5 border-t pt-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between ${
            isLight
              ? "border-[#101d35]/[.08]"
              : "border-white/[.07]"
          }`}
        >
          <p
            className={`text-[10px] uppercase tracking-[0.18em] sm:text-sm ${
              isLight
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            Robotics • Automation • Automotive
            Manufacturing
          </p>

          <div
            className={`flex items-center gap-3 text-sm ${
              isLight
                ? "text-[#64748b]"
                : "text-slate-400"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            3 Robotic Platforms
          </div>
        </div>
      </div>
    </section>
  );
};