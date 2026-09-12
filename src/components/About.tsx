"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export const About = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const paragraphClass = `text-[16px] leading-[1.8] sm:text-[17px] lg:text-[19px] ${
    isDark
      ? "text-slate-300"
      : "text-[#506481]"
  }`;

  const strongClass = `font-semibold ${
    isDark
      ? "text-white"
      : "text-[#101d35]"
  }`;

  return (
    <section
      id="about"
      className={`relative w-full overflow-hidden transition-colors duration-500 ${
        isDark
          ? "bg-[#080814] text-white"
          : "bg-white text-[#101d35]"
      }`}
    >
      {/* Background Glow */}

      <div
        className={`pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[140px] ${
          isDark
            ? "bg-blue-600/[0.035]"
            : "bg-blue-500/[0.025]"
        }`}
      />

      <div className="relative mx-auto w-full max-w-[1550px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28 xl:px-[7.8vw]">

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
            className={`text-[clamp(2.8rem,4.2vw,4rem)] font-bold leading-[0.95] tracking-[-0.05em] ${
              isDark
                ? "text-white"
                : "text-[#101d35]"
            }`}
          >
            About{" "}
            <span className="text-[#3b82f6]">
              Me.
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

        {/* ABOUT CONTENT */}

        <motion.div
          initial={false}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className={`mt-10 max-w-[1240px] border-l-2 pl-5 sm:mt-12 sm:pl-8 lg:pl-12 ${
            isDark
              ? "border-blue-500/20"
              : "border-[#075baa]/15"
          }`}
        >
          <p className={paragraphClass}>
            I am a{" "}
            <strong className={strongClass}>
              Senior Offline Robot Programmer / Senior Engineer
            </strong>{" "}
            with over{" "}
            <strong className={strongClass}>
              9 years of experience
            </strong>{" "}
            in industrial robot programming, robotic
            paint application systems, automotive
            manufacturing, commissioning,
            troubleshooting, and process optimization.
            I have hands-on expertise with{" "}
            <strong className={strongClass}>
              ABB, Yaskawa, and Dürr
            </strong>{" "}
            robotic systems, supporting robot programming,
            offline programming, application prove-out,
            production start-up, customer technical
            support, and continuous improvement.
          </p>

          <p
            className={`${paragraphClass} mt-6`}
          >
            My technical expertise covers automotive paint
            applications including{" "}
            <strong className={strongClass}>
              sealer, primer, base coat, clear coat,
              dual-tone applications, bumper and
              plastic-part painting
            </strong>
            , along with paint-process validation and
            quality improvement. I have experience in{" "}
            <strong className={strongClass}>
              robot path teaching and optimization,
              program modification, cycle-time reduction,
              collision avoidance, pattern testing,
              paint transfer efficiency analysis,
              defect elimination, and root-cause analysis
            </strong>
            .
          </p>

          <p
            className={`${paragraphClass} mt-6`}
          >
            I am proficient in{" "}
            <strong className={strongClass}>
              DXQ 3D OnSite, RobotStudio, Robview, FFFTP,
              and MotoSim
            </strong>
            , with practical experience in offline
            programming, simulation, robot-path
            development, debugging, and production
            optimization. I also have knowledge of{" "}
            <strong className={strongClass}>
              atomizers, bell applicators, dosing systems,
              colour-change systems, conveyor synchronization,
              PLC signal interfacing, RFID, sensors, and
              automated paint-shop systems
            </strong>
            .
          </p>

          <p
            className={`${paragraphClass} mt-6`}
          >
            I have successfully supported{" "}
            <strong className={strongClass}>
              new model launches, line modifications,
              commissioning, process trials, debugging,
              and production stabilization
            </strong>
            , while coordinating with production,
            maintenance, quality, process engineering,
            automation teams, suppliers, and vendors.
          </p>

          <p
            className={`${paragraphClass} mt-6`}
          >
            I have also completed{" "}
            <strong className={strongClass}>
              ABB and Yaskawa robot training in India and
              advanced Dürr robot systems training in Germany
            </strong>
            , providing valuable international technical
            exposure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};