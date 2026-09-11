"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`,
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=kiritharan15152@gmail.com` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(
      gmailUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact"
      className={`
        relative
        w-full
        overflow-hidden
        px-6
        py-24
        transition-colors
        duration-500
        md:px-10
        lg:px-16
        xl:px-20
        ${
          isDark
            ? "bg-[#080814] text-white"
            : "bg-white text-[#101d35]"
        }
      `}
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          right-[-180px]
          top-[80px]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[150px]
          ${
            isDark
              ? "bg-blue-600/[0.045]"
              : "bg-blue-500/[0.025]"
          }
        `}
      />

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          ${
            isDark
              ? "opacity-[0.025]"
              : "opacity-[0.018]"
          }
          [background-image:linear-gradient(rgba(59,130,246,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.35)_1px,transparent_1px)]
          [background-size:80px_80px]
        `}
      />

      <div className="relative mx-auto max-w-[1400px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {/* HEADING */}
          <motion.div
            className="group relative inline-block"
            initial="rest"
            whileHover="hover"
          >
            <h2
              className={`
                text-[clamp(2.8rem,4.2vw,4rem)]
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                transition-colors
                duration-300
                ${
                  isDark
                    ? "text-white"
                    : "text-[#101d35]"
                }
              `}
            >
              Let's{" "}
              <span className="text-[#3b82f6]">
                Connect.
              </span>
            </h2>

            {/* SMOOTH UNDERLINE */}
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
                  width: 58,
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

          {/* DESCRIPTION */}
          <p
            className={`
              mt-10
              max-w-2xl
              text-[17px]
              leading-[1.8]
              md:text-[18px]
              ${
                isDark
                  ? "text-slate-400"
                  : "text-[#506481]"
              }
            `}
          >
            I’m always open to connecting, learning,
            and exploring new ideas, technologies,
            and professional opportunities.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTACT AREA
        ===================================================== */}

        <div
          className="
            mt-14
            grid
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-16
          "
        >

          {/* =================================================
              CONTACT DETAILS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div
              className={`
                border-l
                ${
                  isDark
                    ? "border-white/[0.07]"
                    : "border-slate-200"
                }
              `}
            >

              {/* LOCATION */}
              <div
                className={`
                  group
                  relative
                  border-b
                  px-7
                  py-7
                  transition-all
                  duration-300
                  ${
                    isDark
                      ? "border-white/[0.07] hover:bg-white/[0.025]"
                      : "border-slate-200 hover:bg-blue-50/50"
                  }
                `}
              >
                <div className="flex items-start gap-5">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-500/20
                      bg-blue-500/[0.06]
                      text-blue-500
                      transition-all
                      duration-300
                      group-hover:border-blue-400/40
                      group-hover:bg-blue-500/[0.10]
                    "
                  >
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p
                      className={`
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.22em]
                        ${
                          isDark
                            ? "text-slate-500"
                            : "text-slate-400"
                        }
                      `}
                    >
                      Location
                    </p>

                    <p
                      className={`
                        mt-2
                        text-lg
                        font-medium
                        ${
                          isDark
                            ? "text-white"
                            : "text-[#101d35]"
                        }
                      `}
                    >
                      Chennai, India
                    </p>
                  </div>

                </div>
              </div>

              {/* EMAIL */}
              <a
                href="mailto:kiritharan15152@gmail.com"
                className={`
                  group
                  relative
                  block
                  border-b
                  px-7
                  py-7
                  transition-all
                  duration-300
                  ${
                    isDark
                      ? "border-white/[0.07] hover:bg-white/[0.025]"
                      : "border-slate-200 hover:bg-blue-50/50"
                  }
                `}
              >
                <div className="flex items-start gap-5">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-500/20
                      bg-blue-500/[0.06]
                      text-blue-500
                      transition-all
                      duration-300
                      group-hover:border-blue-400/40
                      group-hover:bg-blue-500/[0.10]
                    "
                  >
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">

                    <p
                      className={`
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.22em]
                        ${
                          isDark
                            ? "text-slate-500"
                            : "text-slate-400"
                        }
                      `}
                    >
                      Email
                    </p>

                    <p
                      className={`
                        mt-2
                        break-all
                        text-lg
                        font-medium
                        transition-colors
                        duration-300
                        ${
                          isDark
                            ? "text-white"
                            : "text-[#101d35]"
                        }
                        group-hover:text-blue-500
                      `}
                    >
                      kiritharan15152@gmail.com
                    </p>

                  </div>

                </div>
              </a>

              {/* AVAILABILITY */}
              <div className="px-7 py-7">

                <p
                  className={`
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    ${
                      isDark
                        ? "text-slate-500"
                        : "text-slate-400"
                    }
                  `}
                >
                  Availability
                </p>

                <div className="mt-3 flex items-center gap-3">

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-blue-400
                      shadow-[0_0_10px_rgba(59,130,246,0.7)]
                    "
                  />

                  <span
                    className={`
                      text-sm
                      ${
                        isDark
                          ? "text-slate-300"
                          : "text-[#506481]"
                      }
                    `}
                  >
                    Open to professional opportunities
                  </span>

                </div>

              </div>

            </div>
          </motion.div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >

            {/* =================================================
                BRIGHT BLUE / NOTION-STYLE FORM CARD
            ================================================= */}

            <div
              className={`
                relative
                overflow-hidden
                rounded-2xl
                border
                p-6
                transition-all
                duration-500
                md:p-8

                ${
                  isDark
                    ? `
                      border-blue-400/[0.30]
                      bg-[#101426]
                      shadow:
                      0_0_0_1px_rgba(59,130,246,0.06),
                      0_8px_30px_rgba(0,0,0,0.20),
                      inset_0_1px_0_rgba(147,197,253,0.10),
                      inset_0_0_24px_rgba(59,130,246,0.025)
                    `
                    : `
                      border-blue-200
                      bg-white
                      shadow-[0_8px_35px_rgba(37,99,235,0.08)]
                    `
                }
              `}
            >

              {/* =================================================
                  BLUE TOP EDGE
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-5
                  right-5
                  top-0
                  h-[2px]
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-blue-400/60
                  to-transparent
                "
              />

              {/* =================================================
                  BLUE LEFT EDGE
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-6
                  left-0
                  top-6
                  w-[2px]
                  rounded-full
                  bg-gradient-to-b
                  from-blue-400/45
                  via-blue-500/20
                  to-transparent
                "
              />

              {/* =================================================
                  BLUE RIGHT EDGE
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-6
                  right-0
                  top-6
                  w-[2px]
                  rounded-full
                  bg-gradient-to-b
                  from-blue-400/35
                  via-blue-500/15
                  to-transparent
                "
              />

              {/* =================================================
                  SUBTLE BLUE CORNER GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-48
                  w-48
                  rounded-full
                  bg-blue-500/[0.08]
                  blur-3xl
                "
              />

              {/* =================================================
                  FORM HEADER
              ================================================= */}

              <div className="relative mb-8">

                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-blue-400
                  "
                >
                  Send a Message
                </p>

                <h3
                  className={`
                    mt-3
                    text-2xl
                    font-semibold
                    tracking-[-0.03em]
                    ${
                      isDark
                        ? "text-white"
                        : "text-[#101d35]"
                    }
                  `}
                >
                  Start a Conversation.
                </h3>

              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="relative space-y-6"
              >

                {/* NAME */}
                <div>

                  <label
                    htmlFor="name"
                    className={`
                      mb-2
                      block
                      text-sm
                      font-medium
                      ${
                        isDark
                          ? "text-slate-300"
                          : "text-[#506481]"
                      }
                    `}
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className={`
                      w-full
                      rounded-xl
                      border
                      px-4
                      py-3.5
                      outline-none
                      transition-all
                      duration-300
                      focus:border-blue-400/70
                      focus:ring-1
                      focus:ring-blue-500/30
                      ${
                        isDark
                          ? `
                            border-blue-300/[0.12]
                            bg-[#0a0d1a]
                            text-white
                            placeholder:text-slate-600
                            focus:bg-[#0b0f1e]
                          `
                          : `
                            border-slate-200
                            bg-white
                            text-[#101d35]
                            placeholder:text-slate-400
                            focus:bg-blue-50/40
                          `
                      }
                    `}
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label
                    htmlFor="email"
                    className={`
                      mb-2
                      block
                      text-sm
                      font-medium
                      ${
                        isDark
                          ? "text-slate-300"
                          : "text-[#506481]"
                      }
                    `}
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className={`
                      w-full
                      rounded-xl
                      border
                      px-4
                      py-3.5
                      outline-none
                      transition-all
                      duration-300
                      focus:border-blue-400/70
                      focus:ring-1
                      focus:ring-blue-500/30
                      ${
                        isDark
                          ? `
                            border-blue-300/[0.12]
                            bg-[#0a0d1a]
                            text-white
                            placeholder:text-slate-600
                            focus:bg-[#0b0f1e]
                          `
                          : `
                            border-slate-200
                            bg-white
                            text-[#101d35]
                            placeholder:text-slate-400
                            focus:bg-blue-50/40
                          `
                      }
                    `}
                  />

                </div>

                {/* MESSAGE */}
                <div>

                  <label
                    htmlFor="message"
                    className={`
                      mb-2
                      block
                      text-sm
                      font-medium
                      ${
                        isDark
                          ? "text-slate-300"
                          : "text-[#506481]"
                      }
                    `}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message..."
                    className={`
                      w-full
                      resize-none
                      rounded-xl
                      border
                      px-4
                      py-3.5
                      outline-none
                      transition-all
                      duration-300
                      focus:border-blue-400/70
                      focus:ring-1
                      focus:ring-blue-500/30
                      ${
                        isDark
                          ? `
                            border-blue-300/[0.12]
                            bg-[#0a0d1a]
                            text-white
                            placeholder:text-slate-600
                            focus:bg-[#0b0f1e]
                          `
                          : `
                            border-slate-200
                            bg-white
                            text-[#101d35]
                            placeholder:text-slate-400
                            focus:bg-blue-50/40
                          `
                      }
                    `}
                  />

                </div>

                {/* =================================================
                    SEND BUTTON
                ================================================= */}

                <button
                  type="submit"
                  className="
                    group
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#3b82f6]
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-blue-500
                    hover:shadow-[0_10px_35px_rgba(59,130,246,0.28)]
                    active:scale-[0.99]
                  "
                >
                  Send Message

                  <Send
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>

              </form>

            </div>

          </motion.div>

        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className={`
            mt-14
            border-t
            pt-7
            ${
              isDark
                ? "border-white/[0.07]"
                : "border-slate-200"
            }
          `}
        />

      </div>
    </section>
  );
};