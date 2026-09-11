"use client";

import { motion } from "framer-motion";
import { trainings } from "@/data/trainings";
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
          className={
            isLight
              ? "font-semibold text-[#101d35]"
              : "font-semibold text-slate-100"
          }
        >
          {boldText}
        </strong>
      );
    }

    return (
      <span key={index}>
        {part}
      </span>
    );
  });
};

export const Trainings = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const isLight = theme === "light";

  return (
    <section
      id="training"
      className={`
        relative
        w-full
        overflow-hidden
        px-6
        py-28
        transition-colors
        duration-500
        md:px-10
        lg:px-16
        ${
          isDark
            ? "bg-[#080814] text-white"
            : "bg-white text-[#101d35]"
        }
      `}
    >
      {/* Background Glow */}
      <div
        className={`
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[150px]
          ${
            isDark
              ? "bg-blue-600/[0.035]"
              : "bg-blue-500/[0.025]"
          }
        `}
      />

      <div className="relative mx-auto max-w-[1250px]">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          className="group relative inline-block"
          initial="rest"
          whileHover="hover"
        >
          <h2
            className={`
              text-[64px]
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              transition-colors
              duration-300
              ${
                isLight
                  ? "text-[#101d35]"
                  : "text-white"
              }
            `}
          >
            Technical{" "}
            <span className="text-[#3b82f6]">
              Training.
            </span>
          </h2>

          <motion.span
            className="
              absolute
              -bottom-7
              left-0
              h-[4px]
              rounded-full
              bg-[#3b82f6]
            "
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
          />
        </motion.div>

        {/* Description */}
        <p
          className={`
            mt-7
            max-w-3xl
            text-[17px]
            leading-[1.85]
            sm:text-[18px]
            ${
              isDark
                ? "text-slate-400"
                : "text-[#506481]"
            }
          `}
        >
          Specialized training across industrial robotic
          platforms, strengthening practical expertise in
          robot programming, paint applications,
          troubleshooting, and automotive production
          systems.
        </p>

        {/* =====================================================
            TRAINING TIMELINE
        ===================================================== */}

        <div className="relative mt-20">

          {/* Timeline */}
          <div
            className="
              absolute
              left-[27px]
              top-4
              bottom-4
              hidden
              w-px
              bg-gradient-to-b
              from-blue-500/70
              via-blue-500/25
              to-transparent
              md:block
              md:left-[39px]
            "
          />

          <div className="space-y-20">

            {trainings.map(
              (training, index) => (
                <motion.article
                  key={training.number}
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >

                  {/* Timeline Number */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className={`
                      relative
                      z-10
                      flex
                      h-[56px]
                      w-[56px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-sm
                      font-semibold
                      tracking-wider
                      md:h-[80px]
                      md:w-[80px]
                      md:text-base
                      ${
                        isDark
                          ? "border-blue-500/40 bg-[#080814] text-blue-400"
                          : "border-blue-500/30 bg-white text-blue-500"
                      }
                    `}
                  >
                    {training.number}
                  </motion.div>

                  {/* Content */}
                  <div className="ml-[82px] mt-[-56px] md:ml-[120px] md:mt-[-80px]">

                    <motion.div
                      whileHover={{
                        x: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                      }}
                      className="group cursor-default"
                    >

                      {/* Top Row */}
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                        {/* Company + Title */}
                        <div>

                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">
                            {training.company}
                          </p>

                          <h3
                            className={`
                              mt-3
                              text-[clamp(1.7rem,3vw,2.6rem)]
                              font-semibold
                              leading-tight
                              tracking-[-0.03em]
                              transition-colors
                              duration-300
                              ${
                                isDark
                                  ? "text-white group-hover:text-blue-50"
                                  : "text-[#101d35] group-hover:text-blue-700"
                              }
                            `}
                          >
                            {training.title}
                          </h3>

                        </div>

                        {/* Location */}
                        <div
                          className={`
                            flex
                            w-fit
                            shrink-0
                            items-center
                            gap-2
                            rounded-full
                            border
                            px-4
                            py-2
                            text-sm
                            transition-all
                            duration-300
                            group-hover:border-blue-500/25
                            ${
                              isDark
                                ? "border-white/[0.08] bg-white/[0.025] text-slate-400"
                                : "border-slate-200 bg-slate-50 text-[#64748b]"
                            }
                          `}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                          {training.location}
                        </div>

                      </div>

                      {/* Description */}
                      <p
                        className={`
                          mt-7
                          max-w-[950px]
                          text-[16px]
                          leading-[1.85]
                          transition-colors
                          duration-300
                          sm:text-[17px]
                          ${
                            isDark
                              ? "text-slate-400 group-hover:text-slate-300"
                              : "text-[#64748b] group-hover:text-[#506481]"
                          }
                        `}
                      >
                        {training.description}
                      </p>

                      {/* Lower Content */}
                      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto]">

                        {/* Key Learnings */}
                        <div>

                          <p
                            className={`
                              text-xs
                              font-semibold
                              uppercase
                              tracking-[0.2em]
                              ${
                                isDark
                                  ? "text-slate-600"
                                  : "text-slate-400"
                              }
                            `}
                          >
                            Key Learnings
                          </p>

                          <div className="mt-4 space-y-4">

                            {training.learned.map(
                              (learning) => (
                                <div
                                  key={learning}
                                  className={`
                                    flex
                                    items-start
                                    gap-3
                                    text-[16px]
                                    leading-[1.7]
                                    ${
                                      isDark
                                        ? "text-slate-300"
                                        : "text-[#506481]"
                                    }
                                  `}
                                >
                                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

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

                        {/* Training Focus */}
                        <div className="md:min-w-[280px]">

                          <p
                            className={`
                              text-xs
                              font-semibold
                              uppercase
                              tracking-[0.2em]
                              ${
                                isDark
                                  ? "text-slate-600"
                                  : "text-slate-400"
                              }
                            `}
                          >
                            Training Focus
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">

                            {training.focus.map(
                              (item) => (
                                <span
                                  key={item}
                                  className="
                                    rounded-md
                                    border
                                    border-blue-500/20
                                    bg-blue-500/[0.06]
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-medium
                                    text-blue-500
                                    transition-all
                                    duration-300
                                    group-hover:border-blue-400/30
                                    group-hover:bg-blue-500/[0.10]
                                  "
                                >
                                  {item}
                                </span>
                              ),
                            )}

                          </div>
                        </div>

                      </div>

                      {/* Divider */}
                      {index !==
                        trainings.length - 1 && (
                        <div
                          className={`
                            mt-12
                            h-px
                            w-full
                            bg-gradient-to-r
                            from-blue-500/20
                            to-transparent
                            ${
                              isDark
                                ? "via-white/[0.05]"
                                : "via-slate-200"
                            }
                          `}
                        />
                      )}

                    </motion.div>
                  </div>

                </motion.article>
              ),
            )}

          </div>
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className={`
            mt-24
            flex
            flex-col
            gap-5
            border-t
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
            ${
              isDark
                ? "border-white/[0.07]"
                : "border-slate-200"
            }
          `}
        >

          <p
            className={`
              text-sm
              uppercase
              tracking-[0.2em]
              ${
                isDark
                  ? "text-slate-600"
                  : "text-slate-400"
              }
            `}
          >
            Robotics • Automation • Automotive Manufacturing
          </p>

          <div
            className={`
              flex
              items-center
              gap-3
              text-sm
              ${
                isDark
                  ? "text-slate-400"
                  : "text-[#64748b]"
              }
            `}
          >
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            3 Robotic Platforms
          </div>

        </motion.div>

      </div>
    </section>
  );
};