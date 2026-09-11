"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { useTheme } from "@/components/ThemeProvider";

const renderBoldText = (
  text: string,
  isLight: boolean,
) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (
      part.startsWith("**") &&
      part.endsWith("**")
    ) {
      const boldText = part.slice(2, -2);

      return (
        <strong
          key={index}
          className={`font-semibold ${
            isLight
              ? "text-[#101d35]"
              : "text-slate-100"
          }`}
        >
          {boldText}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
};

export const Experience = () => {
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <section
      id="experience"
      className={`relative overflow-hidden py-28 transition-colors duration-500 ${
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

      <div className="relative mx-auto w-[89%] max-w-[1400px]">

        {/* Heading */}
        <div className="mb-20">
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="inline-block"
          >
            <h2
              className={`relative inline-block cursor-default text-[64px] font-semibold leading-[1.05] tracking-[-0.045em] ${
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
                className="absolute -bottom-4 left-0 h-[3px] bg-[#3b82f6]"
              />
            </h2>
          </motion.div>

          <p
            className={`mt-7 max-w-[720px] text-[17px] leading-[1.8] ${
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

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
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

          <div className="space-y-12">

            {experiences.map(
              (experience, index) => (
                <motion.article
                  key={experience.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="relative pl-0 md:pl-[96px]"
                >

                  {/* Timeline Number */}
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
                            ? "border-[#1768d5]/40 bg-[#1768d5] shadow-[0_0_25px_rgba(23,104,213,0.25)]"
                            : "border-blue-400/40 bg-[#2563eb] shadow-[0_0_30px_rgba(37,99,235,0.35)]"
                        }`}
                      >
                        {experience.number}
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`relative overflow-hidden rounded-[22px] border transition-all duration-500 ${
                      isLight
                        ? "border-[#1768d5]/15 bg-white shadow-[0_18px_60px_rgba(16,29,53,0.07)] hover:border-[#1768d5]/30 hover:shadow-[0_25px_75px_rgba(16,29,53,0.10)]"
                        : "border-blue-500/[0.23] bg-[#0d0d19] shadow-[0_18px_70px_rgba(0,0,0,0.28)] hover:border-blue-400/[0.38] hover:shadow-[0_25px_80px_rgba(37,99,235,0.10)]"
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
                    <div className="px-7 pb-7 pt-8 md:px-9 md:pt-9">

                      <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">

                        {/* Role + Company */}
                        <div className="flex items-start gap-5">

                          {/* Company Initial */}
                          <div
                            className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[13px] text-[23px] font-semibold text-white ${
                              isLight
                                ? "bg-[#1768d5] shadow-[0_8px_25px_rgba(23,104,213,0.18)]"
                                : "bg-[#2563eb] shadow-[0_8px_30px_rgba(37,99,235,0.25)]"
                            }`}
                          >
                            {experience.company.charAt(0)}
                          </div>

                          <div>

                            <div className="flex flex-wrap items-center gap-3">

                              <h3
                                className={`text-[25px] font-semibold leading-[1.3] tracking-[-0.025em] ${
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
                                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
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
                              className={`mt-2 text-[16px] font-medium ${
                                isLight
                                  ? "text-[#1768d5]"
                                  : "text-blue-400"
                              }`}
                            >
                              {experience.company}
                            </p>

                          </div>
                        </div>

                        {/* Date / Location */}
                        <div
                          className={`shrink-0 rounded-[10px] border px-4 py-3 lg:min-w-[235px] ${
                            isLight
                              ? "border-[#101d35]/10 bg-[#f7f9fc]"
                              : "border-white/[0.07] bg-[#0a0a14]"
                          }`}
                        >

                          {experience.current ? (
                            <p className="text-right font-mono text-[13px] font-semibold uppercase tracking-[0.08em] text">
                              2025
                            </p>
                          ) : (
                            <p
                              className={`text-right font-mono text-[13px] ${
                                isLight
                                  ? "text-[#506481]"
                                  : "text-slate-300"
                              }`}
                            >
                              {experience.period}
                            </p>
                          )}

                          <p
                            className={`mt-1 text-right font-mono text-[13px] ${
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
                      className={`mx-7 h-px md:mx-9 ${
                        isLight
                          ? "bg-[#101d35]/[0.08]"
                          : "bg-white/[0.07]"
                      }`}
                    />

                    {/* Responsibilities */}
                    <div className="px-7 py-8 md:px-9">

                      <ul className="space-y-5">

                        {experience.responsibilities.map(
                          (
                            responsibility,
                            responsibilityIndex,
                          ) => (
                            <motion.li
                              key={`${experience.number}-${responsibilityIndex}`}
                              initial={{
                                opacity: 0,
                                x: -8,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                                amount: 0.1,
                              }}
                              transition={{
                                duration: 0.35,
                                delay:
                                  responsibilityIndex *
                                  0.025,
                              }}
                              className="flex items-start gap-4"
                            >

                              {/* Bullet */}
                              <span
                                className={`mt-[5px] shrink-0 text-[20px] leading-none ${
                                  isLight
                                    ? "text-[#1768d5]"
                                    : "text-cyan-400"
                                }`}
                              >
                                ›
                              </span>

                              {/* Responsibility */}
                              <p
                                className={`text-[16px] leading-[1.75] ${
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

                            </motion.li>
                          ),
                        )}

                      </ul>
                    </div>

                    {/* Divider */}
                    <div
                      className={`mx-7 h-px md:mx-9 ${
                        isLight
                          ? "bg-[#101d35]/[0.08]"
                          : "bg-white/[0.07]"
                      }`}
                    />

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 px-7 py-6 md:px-9">

                      {experience.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className={`rounded-[6px] border px-3 py-1.5 font-mono text-[11px] transition-all duration-300 ${
                              isLight
                                ? "border-[#1768d5]/20 bg-[#1768d5]/[0.05] text-[#1768d5] hover:border-[#1768d5]/40 hover:bg-[#1768d5]/[0.08]"
                                : "border-blue-500/[0.25] bg-blue-500/[0.08] text-blue-300 hover:border-blue-400/[0.40] hover:bg-blue-500/[0.13]"
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
      </div>
    </section>
  );
};