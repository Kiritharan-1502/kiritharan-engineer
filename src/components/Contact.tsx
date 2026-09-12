"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export const Contact = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const data = new FormData(
      e.currentTarget,
    );

    const name = String(
      data.get("name") || "",
    );

    const email = String(
      data.get("email") || "",
    );

    const message = String(
      data.get("message") || "",
    );

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`,
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=kiritharan15152@gmail.com&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const inputClass = `w-full rounded-xl border px-4 py-3.5 outline-none transition-all duration-300 focus:border-blue-400/70 focus:ring-1 focus:ring-blue-500/30 ${
    isDark
      ? "border-blue-300/[.12] bg-[#0a0d1a] text-white placeholder:text-slate-600"
      : "border-slate-200 bg-white text-[#101d35] placeholder:text-slate-400"
  }`;

  return (
    <section
      id="contact"
      className={`relative w-full overflow-hidden px-6 py-16 transition-colors duration-500 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20 ${
        isDark
          ? "bg-[#080814] text-white"
          : "bg-white text-[#101d35]"
      }`}
    >
      {/* Glow */}

      <div
        className={`pointer-events-none absolute right-[-180px] top-[80px] h-[500px] w-[500px] rounded-full blur-[150px] ${
          isDark
            ? "bg-blue-600/[.045]"
            : "bg-blue-500/[.025]"
        }`}
      />

      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADER */}

        <motion.div
          initial={false}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <motion.div
            initial="rest"
            whileHover="hover"
            className="group relative inline-block"
          >
            <h2
              className={`text-[clamp(2.8rem,4.2vw,4rem)] font-bold leading-[.95] tracking-[-.05em] ${
                isDark
                  ? "text-white"
                  : "text-[#101d35]"
              }`}
            >
              Let's{" "}
              <span className="text-[#3b82f6]">
                Connect.
              </span>
            </h2>

            <motion.span
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
              className="absolute -bottom-6 left-0 h-[4px] rounded-full bg-[#3b82f6]"
            />
          </motion.div>

          <p
            className={`mt-9 max-w-2xl text-[15px] leading-[1.8] sm:text-[17px] md:text-[18px] ${
              isDark
                ? "text-slate-400"
                : "text-[#506481]"
            }`}
          >
            I’m always open to connecting, learning,
            and exploring new ideas, technologies,
            and professional opportunities.
          </p>
        </motion.div>

        {/* CONTACT AREA */}

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">

          {/* CONTACT DETAILS */}

          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >
            <div
              className={`border-l ${
                isDark
                  ? "border-white/[.07]"
                  : "border-slate-200"
              }`}
            >

              {/* LOCATION */}

              <div
                className={`border-b px-5 py-6 sm:px-7 sm:py-7 ${
                  isDark
                    ? "border-white/[.07]"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-5">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[.06] text-blue-500">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p
                      className={`text-[10px] font-medium uppercase tracking-[.22em] ${
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      Location
                    </p>

                    <p
                      className={`mt-2 text-lg font-medium ${
                        isDark
                          ? "text-white"
                          : "text-[#101d35]"
                      }`}
                    >
                      Chennai, India
                    </p>
                  </div>
                </div>
              </div>

              {/* EMAIL */}

              <a
                href="mailto:kiritharan15152@gmail.com"
                className={`block border-b px-5 py-6 sm:px-7 sm:py-7 ${
                  isDark
                    ? "border-white/[.07]"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-5">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[.06] text-blue-500">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`text-[10px] font-medium uppercase tracking-[.22em] ${
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      Email
                    </p>

                    <p
                      className={`mt-2 break-all text-base font-medium sm:text-lg ${
                        isDark
                          ? "text-white"
                          : "text-[#101d35]"
                      }`}
                    >
                      kiritharan15152@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              {/* AVAILABILITY */}

              <div className="px-5 py-6 sm:px-7 sm:py-7">
                <p
                  className={`text-[10px] font-medium uppercase tracking-[.22em] ${
                    isDark
                      ? "text-slate-500"
                      : "text-slate-400"
                  }`}
                >
                  Availability
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,.7)]" />

                  <span
                    className={`text-sm ${
                      isDark
                        ? "text-slate-300"
                        : "text-[#506481]"
                    }`}
                  >
                    Open to professional opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className={`relative overflow-hidden rounded-[20px] border p-5 shadow-[0_20px_70px_rgba(0,0,0,.18)] sm:p-8 ${
              isDark
                ? "border-blue-400/[.30] bg-[#101426]"
                : "border-blue-500/20 bg-white"
            }`}
          >
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

            <div className="pointer-events-none absolute bottom-6 right-0 top-6 w-[2px] rounded-full bg-gradient-to-b from-blue-400/35 via-blue-500/15 to-transparent" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/[.08] blur-3xl" />

            <div className="relative mb-7">
              <p className="text-[10px] font-medium uppercase tracking-[.25em] text-blue-400">
                Send a Message
              </p>

              <h3
                className={`mt-3 text-2xl font-semibold tracking-[-.03em] ${
                  isDark
                    ? "text-white"
                    : "text-[#101d35]"
                }`}
              >
                Start a Conversation.
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative space-y-5 sm:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className={`mb-2 block text-sm font-medium ${
                    isDark
                      ? "text-slate-300"
                      : "text-[#506481]"
                  }`}
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`mb-2 block text-sm font-medium ${
                    isDark
                      ? "text-slate-300"
                      : "text-[#506481]"
                  }`}
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`mb-2 block text-sm font-medium ${
                    isDark
                      ? "text-slate-300"
                      : "text-[#506481]"
                  }`}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#3b82f6] text-sm font-semibold uppercase tracking-[.12em] text-white hover:bg-blue-500 hover:shadow-[0_10px_35px_rgba(59,130,246,.28)] active:scale-[.99]"
              >
                Send Message

                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>
        </div>

        <div
          className={`mt-10 border-t pt-7 sm:mt-14 ${
            isDark
              ? "border-white/[.07]"
              : "border-slate-200"
          }`}
        />
      </div>
    </section>
  );
};