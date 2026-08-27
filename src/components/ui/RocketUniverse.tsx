"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Sparkles,
  RotateCcw,
  X,
  Timer,
} from "lucide-react";

/* =========================================================
   TECHNOLOGY DATA
========================================================= */

const knowledgeTree = [
  {
    title: "Programming",
    color: "#c084fc",
    skills: ["Java", "C++", "Python", "C", "C#, TypeScript"],
    x: 17,
    y: 29,
  },
  {
    title: "Web Technologies",
    color: "#22d3ee",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    x: 50,
    y: 23,
  },
  {
    title: "Database",
    color: "#fbbf24",
    skills: ["SQL", "MySQL"],
    x: 83,
    y: 30,
  },
  {
    title: "Testing",
    color: "#86efac",
    skills: ["Selenium WebDriver"],
    x: 18,
    y: 61,
  },
  {
    title: "Cloud & Emerging Technologies",
    color: "#60a5fa",
    skills: ["AWS (Basic)", "Generative AI"],
    x: 50,
    y: 58,
  },
  {
    title: "Tools",
    color: "#67e8f9",
    skills: ["Eclipse", "Visual Studio", "VS Code", "Git", "GitHub"],
    x: 82,
    y: 61,
  },
  {
    title: "Service Management",
    color: "#f472b6",
    skills: [
      "ServiceNow",
      "Perceive",
      "Okta Administration",
      "SCCM",
      "Active Directory",
    ],
    x: 28,
    y: 83,
  },
  {
    title: "Soft Skills",
    color: "#a78bfa",
    skills: [
      "Problem-Solving",
      "Analytical Thinking",
      "Communication",
      "Team Leadership",
      "Prioritization",
      "Learning",
    ],
    x: 72,
    y: 83,
  },
];

/* =========================================================
   BACKGROUND STARS
========================================================= */

const backgroundStars = Array.from({ length: 135 }, (_, i) => ({
  left: (i * 43.7) % 100,
  top: (i * 67.3) % 100,
  delay: (i % 15) * 0.18,
  duration: 2 + (i % 4) * 0.6,
}));

/* =========================================================
   TWINKLING STAR
========================================================= */

const TwinkleStar = ({
  left,
  top,
  delay,
  duration,
  bright = false,
}: {
  left: number;
  top: number;
  delay: number;
  duration: number;
  bright?: boolean;
}) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${left}%`, top: `${top}%` }}
      animate={{
        opacity: bright
          ? [0.35, 0.9, 0.45, 0.9, 0.35]
          : [0.15, 0.63, 0.2, 0.72, 0.15],
        scale: bright
          ? [0.75, 1.2, 0.8, 1.15, 0.75]
          : [0.8, 1, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {bright ? (
        <div className="relative w-6 h-6">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-6 w-[1px] bg-white/65" />

          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-6 h-[1px] bg-white/65" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.6)]" />
        </div>
      ) : (
        <div className="w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_5px_1px_rgba(255,255,255,0.45)]" />
      )}
    </motion.div>
  );
};

/* =========================================================
   REALISTIC ROCKET
========================================================= */

const RealisticRocket = ({
  small = false,
}: {
  small?: boolean;
}) => {
  return (
    <div
      className={`relative ${
        small
          ? "w-[70px] h-[150px]"
          : "w-[115px] h-[270px]"
      }`}
    >
      {/* Huge exhaust glow */}

      <motion.div
        animate={{
          scale: [0.8, 1.15, 0.9, 1.1],
          opacity: [0.35, 0.7, 0.4, 0.65],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-100px]
          left-1/2
          -translate-x-1/2
          w-32
          h-44
          rounded-full
          bg-orange-500/30
          blur-3xl
        "
      />

      {/* Main flame */}

      <motion.div
        animate={{
          height: [65, 100, 75, 110],
          scaleX: [0.9, 1.15, 0.85, 1],
        }}
        transition={{
          duration: 0.22,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-105px]
          left-1/2
          -translate-x-1/2
          w-9
          rounded-b-full
          bg-gradient-to-b
          from-white
          via-yellow-300
          via-orange-500
          to-transparent
          blur-[2px]
        "
      />

      {/* Inner flame */}

      <motion.div
        animate={{
          height: [35, 58, 42, 65],
        }}
        transition={{
          duration: 0.16,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-62px]
          left-1/2
          -translate-x-1/2
          w-3
          rounded-b-full
          bg-white
          blur-[1px]
        "
      />

      {/* Rocket body */}

      <div
        className={`
          absolute
          left-1/2
          -translate-x-1/2
          top-[35px]
          ${
            small
              ? "w-[42px] h-[105px]"
              : "w-[66px] h-[185px]"
          }
          rounded-t-[50%]
          rounded-b-[28%]
          bg-gradient-to-r
          from-slate-500
          via-white
          to-slate-400
          border
          border-white/50
          shadow-[0_0_40px_rgba(255,255,255,0.3)]
        `}
      >
        {/* Nose cone */}

        <div
          className={`
            absolute
            ${
              small
                ? "-top-[23px] border-l-[21px] border-r-[21px] border-b-[28px]"
                : "-top-[35px] border-l-[33px] border-r-[33px] border-b-[42px]"
            }
            left-1/2
            -translate-x-1/2
            w-0
            h-0
            border-l-transparent
            border-r-transparent
            border-b-slate-200
          `}
        />

        {/* Window */}

        <div
          className={`
            absolute
            ${
              small
                ? "top-[30px] w-[27px] h-[27px] border-[3px]"
                : "top-[48px] w-[39px] h-[39px] border-[5px]"
            }
            left-1/2
            -translate-x-1/2
            rounded-full
            border-slate-500
            bg-gradient-to-br
            from-cyan-300
            via-blue-600
            to-slate-950
            shadow-[0_0_22px_rgba(34,211,238,0.75)]
          `}
        />

        {/* Metallic stripe */}

        <div
          className={`
            absolute
            ${
              small ? "top-[65px] h-[3px]" : "top-[105px] h-[5px]"
            }
            left-0
            right-0
            bg-gradient-to-r
            from-purple-600
            via-pink-500
            to-cyan-400
          `}
        />

        {/* Left fin */}

        <div
          className={`
            absolute
            ${
              small
                ? "-left-[19px] bottom-[7px] w-[25px] h-[42px]"
                : "-left-[32px] bottom-[9px] w-[42px] h-[68px]"
            }
            bg-gradient-to-br
            from-slate-400
            to-slate-700
            rounded-bl-3xl
            -skew-x-12
          `}
        />

        {/* Right fin */}

        <div
          className={`
            absolute
            ${
              small
                ? "-right-[19px] bottom-[7px] w-[25px] h-[42px]"
                : "-right-[32px] bottom-[9px] w-[42px] h-[68px]"
            }
            bg-gradient-to-bl
            from-slate-400
            to-slate-700
            rounded-br-3xl
            skew-x-12
          `}
        />

        {/* Small engine */}

        <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-2 h-5 rounded-b-full bg-slate-700" />
          <div className="w-2 h-5 rounded-b-full bg-slate-700" />
          <div className="w-2 h-5 rounded-b-full bg-slate-700" />
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   REALISTIC UFO
========================================================= */

const UFO = ({
  delay,
  top,
  duration,
  reverse = false,
  alien = false,
}: {
  delay: number;
  top: number;
  duration: number;
  reverse?: boolean;
  alien?: boolean;
}) => {
  return (
    <motion.div
      initial={{
        x: reverse ? "110vw" : "-15vw",
        y: 0,
        opacity: 0,
        rotate: reverse ? -2 : 2,
      }}
      animate={{
        x: reverse
          ? ["110vw", "75vw", "35vw", "-20vw"]
          : ["-15vw", "25vw", "65vw", "115vw"],

        y: [0, -18, 8, -12, 0],

        rotate: reverse
          ? [-2, 3, -4, 2]
          : [2, -3, 4, -2],

        opacity: [0, 1, 1, 0.9, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 12,
        ease: "easeInOut",
      }}
      className="
        absolute
        z-30
        pointer-events-none
      "
      style={{
        top: `${top}%`,
      }}
    >
      {/* UFO LIGHT BEAM */}

      <motion.div
        animate={{
          opacity: [0.08, 0.25, 0.1, 0.22, 0.08],
          scaleY: [0.9, 1.15, 0.95, 1.1, 0.9],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[42px]
          -translate-x-1/2
          w-[80px]
          h-[70px]
          bg-gradient-to-b
          from-cyan-300/30
          via-cyan-300/10
          to-transparent
          blur-md
          [clip-path:polygon(35%_0,65%_0,100%_100%,0_100%)]
        "
      />

      {/* ALIEN - SECOND UFO */}

      {alien && (
        <motion.div
          animate={{
            y: [0, -2, 0, 2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            z-30
            left-1/2
            top-[-8px]
            -translate-x-1/2
          "
        >
          {/* Alien head */}

          <div
            className="
              relative
              w-[32px]
              h-[29px]
              rounded-[50%]
              bg-gradient-to-b
              from-[#b7ff72]
              via-[#65a30d]
              to-[#365314]
              border
              border-lime-200/50
              shadow-[0_0_20px_rgba(132,204,22,0.7)]
            "
          >
            {/* Left eye */}

            <div
              className="
                absolute
                left-[5px]
                top-[8px]
                w-[7px]
                h-[11px]
                rounded-[50%]
                bg-[#020617]
                rotate-[10deg]
                shadow-[0_0_5px_rgba(0,0,0,0.9)]
              "
            />

            {/* Right eye */}

            <div
              className="
                absolute
                right-[5px]
                top-[8px]
                w-[7px]
                h-[11px]
                rounded-[50%]
                bg-[#020617]
                -rotate-[10deg]
                shadow-[0_0_5px_rgba(0,0,0,0.9)]
              "
            />

            {/* Smile */}

            <div
              className="
                absolute
                left-1/2
                bottom-[4px]
                -translate-x-1/2
                w-[8px]
                h-[3px]
                border-b
                border-black/70
                rounded-full
              "
            />
          </div>

          {/* Alien body */}

          <div
            className="
              absolute
              left-1/2
              top-[25px]
              -translate-x-1/2
              w-[22px]
              h-[13px]
              rounded-t-[50%]
              bg-gradient-to-b
              from-lime-500
              to-green-800
            "
          />
        </motion.div>
      )}

      {/* UFO */}

      <div
        className="
          relative
          w-[100px]
          h-[62px]
        "
      >
        {/* Outer glow */}

        <motion.div
          animate={{
            opacity: [0.25, 0.55, 0.3, 0.5, 0.25],
            scale: [0.9, 1.05, 0.95, 1.05, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[100px]
            h-[35px]
            rounded-full
            bg-cyan-400/20
            blur-xl
          "
        />

        {/* UFO DOME */}

        <div
          className="
            absolute
            left-1/2
            top-[2px]
            -translate-x-1/2
            w-[39px]
            h-[25px]
            rounded-t-[50%]
            rounded-b-[35%]
            bg-gradient-to-b
            from-white/80
            via-cyan-200/50
            to-blue-500/30
            border
            border-cyan-100/60
            shadow-[inset_0_0_12px_rgba(255,255,255,0.5)]
          "
        />

        {/* Dome reflection */}

        <div
          className="
            absolute
            left-[38%]
            top-[5px]
            w-[7px]
            h-[12px]
            rounded-full
            bg-white/70
            blur-[2px]
          "
        />

        {/* UFO MAIN BODY */}

        <div
          className="
            absolute
            left-1/2
            top-[21px]
            -translate-x-1/2
            w-[100px]
            h-[30px]
            rounded-[50%]
            bg-gradient-to-b
            from-slate-200
            via-slate-500
            to-slate-900
            border
            border-slate-300/70
            shadow-[0_5px_20px_rgba(0,0,0,0.8)]
          "
        />

        {/* Metallic highlight */}

        <div
          className="
            absolute
            left-1/2
            top-[23px]
            -translate-x-1/2
            w-[65px]
            h-[5px]
            rounded-full
            bg-white/30
            blur-[2px]
          "
        />

        {/* UFO LIGHTS */}

        <motion.div
          animate={{
            opacity: [0.3, 1, 0.4, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            absolute
            left-[19px]
            top-[45px]
            w-[6px]
            h-[6px]
            rounded-full
            bg-pink-400
            shadow-[0_0_10px_3px_rgba(244,114,182,0.8)]
          "
        />

        <motion.div
          animate={{
            opacity: [1, 0.3, 1, 0.4, 1],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-[47px]
            -translate-x-1/2
            w-[6px]
            h-[6px]
            rounded-full
            bg-cyan-300
            shadow-[0_0_10px_3px_rgba(34,211,238,0.8)]
          "
        />

        <motion.div
          animate={{
            opacity: [0.4, 1, 0.3, 1, 0.4],
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
          }}
          className="
            absolute
            right-[19px]
            top-[45px]
            w-[6px]
            h-[6px]
            rounded-full
            bg-purple-400
            shadow-[0_0_10px_3px_rgba(192,132,252,0.8)]
          "
        />
      </div>

      {/* ALIEN MESSAGE */}

      {alien && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.9],
          }}
          transition={{
            delay: 3,
            duration: 6,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[78px]
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            rounded-full
            border
            border-green-400/40
            bg-black/75
            px-3
            py-1.5
            text-[10px]
            text-green-300
            backdrop-blur-md
            shadow-[0_0_20px_rgba(34,197,94,0.2)]
          "
        >
          👽 Bye, Explorer! See you soon.
        </motion.div>
      )}
    </motion.div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export const RocketUniverse = () => {
  const [launched, setLaunched] = useState(false);
  const [returning, setReturning] = useState(false);
  const [goodbye, setGoodbye] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<(typeof knowledgeTree)[number] | null>(null);

  /* =======================================================
     30 SECOND EXPLORATION TIMER
  ======================================================= */

  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (!launched || returning) return;

    setTimeLeft(30);

    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);

          setGoodbye(true);

          setTimeout(() => {
            setReturning(true);
            setGoodbye(false);
          }, 10000);

          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [launched, returning]);

  /* =======================================================
     RETURN ROCKET AFTER GOODBYE
  ======================================================= */

  useEffect(() => {
    if (!returning) return;

    const timeout = setTimeout(() => {
      setLaunched(false);
      setReturning(false);
      setGoodbye(false);
      setSelectedCategory(null);
      setTimeLeft(30);
    }, 4500);

    return () => clearTimeout(timeout);
  }, [returning]);

  /* =======================================================
     LAUNCH
  ======================================================= */

  const launchRocket = () => {
    setSelectedCategory(null);
    setReturning(false);
    setGoodbye(false);
    setTimeLeft(30);
    setLaunched(true);
  };

  /* =======================================================
     RESET
  ======================================================= */

  const resetMission = () => {
    setSelectedCategory(null);
    setReturning(false);
    setGoodbye(false);
    setLaunched(false);
    setTimeLeft(30);
  };

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (timeLeft % 60)
    .toString()
    .padStart(2, "0");

  return (
    <section className="relative w-full">
      <div
        className="
          relative
          min-h-[720px]
          md:min-h-[820px]
          overflow-hidden
          rounded-[32px]
          border
          border-purple-500/30
          bg-[#010208]
          shadow-[0_0_100px_rgba(124,58,237,0.2)]
        "
      >
        {/* =================================================
            SPACE BACKGROUND
        ================================================= */}

        <div className="absolute inset-0 overflow-hidden">

          {/* Nebula */}

          <div className="absolute left-[10%] top-[10%] w-[500px] h-[400px] rounded-full bg-purple-700/10 blur-[130px]" />

          <div className="absolute right-[5%] bottom-[5%] w-[500px] h-[400px] rounded-full bg-blue-700/10 blur-[130px]" />

          <div className="absolute left-[40%] top-[40%] w-[300px] h-[300px] rounded-full bg-pink-600/5 blur-[100px]" />

          {/* Stars */}

          {backgroundStars.map((star, index) => (
            <TwinkleStar
              key={index}
              left={star.left}
              top={star.top}
              delay={star.delay}
              duration={star.duration}
              bright={index % 24 === 0}
            />
          ))}
        </div>

        {/* =================================================
            UFOs
        ================================================= */}

        {launched && (
          <>
            <UFO
              delay={8}
              top={17}
              duration={24}
            />

            <UFO
              delay={25}
              top={42}
              duration={30}
              reverse
              alien
            />

            <UFO
              delay={48}
              top={72}
              duration={27}
            />

            <UFO
              delay={76}
              top={30}
              duration={35}
              reverse
            />
          </>
        )}

        <AnimatePresence mode="wait">

          {/* =================================================
              EARTH / LAUNCH SCREEN
          ================================================= */}

          {!launched ? (
            <motion.div
              key="earth-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                relative
                z-10
                min-h-[720px]
                md:min-h-[820px]
              "
            >
              {/* Mission */}

              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="
                  absolute
                  top-12
                  left-8
                  md:left-12
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-purple-300
                    font-mono
                    tracking-[0.25em]
                    text-sm
                    uppercase
                  "
                >
                  <Sparkles size={17} />
                  Mission: Explore
                </div>

                <h2
                  className="
                    mt-5
                    text-4xl
                    md:text-6xl
                    font-bold
                    text-white
                  "
                >
                  Explore My{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-pink-400
                      via-purple-400
                      to-blue-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Universe
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    text-[#cbd5e1]
                    text-base
                    md:text-lg
                    leading-8
                    max-w-lg
                  "
                >
                  Every great journey begins with a single launch.
                  <br />
                  Let's blast off and explore the universe
                  <br />
                  of knowledge, ideas and endless possibilities.
                </p>

                <motion.button
                  onClick={launchRocket}
                  whileHover={{
                    scale: 1.04,
                    boxShadow:
                      "0 0 40px rgba(236,72,153,0.5)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    mt-9
                    flex
                    items-center
                    gap-4
                    px-8
                    h-14
                    rounded-xl
                    border
                    border-pink-400/70
                    bg-black/50
                    backdrop-blur-md
                    text-white
                    font-semibold
                    text-lg
                  "
                >
                  <Rocket size={22} />
                  LAUNCH ROCKET
                </motion.button>

                <p
                  className="
                    mt-5
                    text-sm
                    text-slate-500
                  "
                >
                  Click the button to launch the rocket
                  <br />
                  and start the journey!
                </p>
              </motion.div>

              {/* =================================================
                  EARTH
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-[-360px]
                  left-1/2
                  -translate-x-1/2
                  w-[1200px]
                  md:w-[1700px]
                  h-[520px]
                  md:h-[650px]
                  rounded-[50%]
                  bg-gradient-to-b
                  from-blue-500/60
                  via-blue-900/45
                  to-black
                  border-t-[5px]
                  border-blue-300/80
                  shadow-[0_-10px_120px_rgba(59,130,246,0.8)]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[50%]
                    bg-[radial-gradient(circle_at_50%_0%,rgba(147,197,253,0.45),transparent_45%)]
                  "
                />
              </div>

              {/* =================================================
                  ROCKET
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                }}
                className="
                  absolute
                  left-[63%]
                  bottom-[250px]
                  md:bottom-[285px]
                  -translate-x-1/2
                "
              >
                <motion.div
                  animate={{
                    y: [-7, 7, -7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <RealisticRocket />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (

            /* =================================================
               SPACE / TECHNOLOGY UNIVERSE
            ================================================= */

            <motion.div
              key="space"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                relative
                z-10
                min-h-[720px]
                md:min-h-[820px]
              "
            >

              {/* =================================================
                  ROCKET LAUNCH ANIMATION
              ================================================= */}

              {!returning && (
                <motion.div
                  initial={{
                    left: "63%",
                    bottom: "18%",
                    scale: 1,
                    opacity: 1,
                  }}
                  animate={{
                    left: "58%",
                    bottom: "110%",
                    scale: 0.15,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeIn",
                  }}
                  className="
                    absolute
                    z-[60]
                  "
                >
                  <RealisticRocket />
                </motion.div>
              )}

              {/* =================================================
                  ROCKET RETURNING
              ================================================= */}

              {returning && (
                <motion.div
                  initial={{
                    left: "58%",
                    top: "-20%",
                    scale: 0.15,
                    opacity: 0,
                  }}
                  animate={{
                    left: "63%",
                    top: "55%",
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeIn",
                  }}
                  className="
                    absolute
                    z-[60]
                  "
                >
                  <RealisticRocket />
                </motion.div>
              )}

              {/* =================================================
                  ALIEN GOODBYE — FINAL 10 SECONDS
              ================================================= */}

              <AnimatePresence>
                {goodbye && !returning && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 10,
                    }}
                    animate={{
                      opacity: [0, 1, 1, 0.9],
                      scale: [0.8, 1, 1, 1],
                      y: [10, 0, 0, -3],
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: -10,
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      top-[20%]
                      left-1/2
                      -translate-x-1/2
                      z-[80]
                      flex
                      flex-col
                      items-center
                      pointer-events-none
                    "
                  >
                    {/* Large Alien */}

                    <motion.div
                      animate={{
                        y: [-3, 3, -3],
                        rotate: [-2, 2, -2],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        relative
                        w-20
                        h-16
                        md:w-24
                        md:h-20
                        rounded-[50%]
                        bg-gradient-to-b
                        from-lime-200
                        via-lime-400
                        to-green-800
                        border-2
                        border-lime-200/80
                        shadow-[0_0_35px_8px_rgba(132,204,22,0.45)]
                      "
                    >
                      {/* Eyes */}

                      <div
                        className="
                          absolute
                          left-3
                          top-4
                          w-4
                          h-7
                          md:w-5
                          md:h-8
                          rounded-[50%]
                          bg-black
                          rotate-[8deg]
                        "
                      />

                      <div
                        className="
                          absolute
                          right-3
                          top-4
                          w-4
                          h-7
                          md:w-5
                          md:h-8
                          rounded-[50%]
                          bg-black
                          -rotate-[8deg]
                        "
                      />

                      {/* Smile */}

                      <div
                        className="
                          absolute
                          left-1/2
                          bottom-2
                          -translate-x-1/2
                          w-7
                          h-3
                          md:w-8
                          md:h-3
                          border-b-2
                          border-black/70
                          rounded-full
                        "
                      />
                    </motion.div>

                    {/* Message */}

                    <div
                      className="
                        mt-4
                        px-5
                        py-2.5
                        rounded-full
                        border
                        border-lime-400/40
                        bg-black/80
                        backdrop-blur-md
                        text-lime-300
                        text-sm
                        md:text-base
                        font-mono
                        font-semibold
                        whitespace-nowrap
                        shadow-[0_0_25px_rgba(132,204,22,0.2)]
                      "
                    >
                      👽 Bye, Explorer! I'll see you again with updates.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================================
                  STATUS
              ================================================= */}

              <div
                className="
                  absolute
                  top-8
                  left-1/2
                  -translate-x-1/2
                  text-center
                  z-40
                  w-full
                "
              >
                <div
                  className="
                    font-mono
                    tracking-[0.3em]
                    text-sm
                    text-white
                  "
                >
                  STATUS:{" "}
                  <span className="text-emerald-400">
                    {returning ? "RETURNING" : "IN SPACE"}
                  </span>
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-500
                  "
                >
                  Explore the stars of knowledge
                </p>
              </div>

              {/* =================================================
                  EXIT UNIVERSE
              ================================================= */}

              <button
                onClick={resetMission}
                className="
                  absolute
                  top-7
                  left-6
                  z-50
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  border
                  border-slate-600/60
                  bg-black/50
                  backdrop-blur-md
                  text-slate-300
                  text-sm
                  hover:text-white
                  hover:border-purple-400/70
                  transition-all
                "
              >
                <RotateCcw size={15} />
                Exit Universe
              </button>

              {/* =================================================
                  TIMER
              ================================================= */}

              {!returning && (
                <div
                  className="
                    absolute
                    top-7
                    right-6
                    z-50
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    border
                    border-purple-400/20
                    bg-black/40
                    backdrop-blur-md
                    text-slate-400
                    text-xs
                    font-mono
                  "
                >
                  <Timer
                    size={14}
                    className="text-purple-400"
                  />

                  RETURN IN{" "}

                  <span className="text-purple-300">
                    {minutes}:{seconds}
                  </span>
                </div>
              )}

              {/* =================================================
                  TECHNOLOGY TREE
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  px-4
                  md:px-8
                "
              >
                {knowledgeTree.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 2 + index * 0.15,
                      duration: 0.6,
                      type: "spring",
                    }}
                    className="
                      absolute
                      -translate-x-1/2
                      -translate-y-1/2
                      text-center
                      cursor-pointer
                      group
                    "
                    style={{
                      left: `${category.x}%`,
                      top: `${category.y}%`,
                    }}
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                  >
                    {/* =================================================
                        BRIGHT MAIN STAR
                    ================================================= */}

                    <motion.div
                      animate={{
                        opacity: [0.5, 0.9, 0.6, 0.9, 0.5],
                        scale: [0.85, 1.1, 0.9, 1.05, 0.85],
                      }}
                      transition={{
                        duration: 2.5 + index * 0.25,
                        repeat: Infinity,
                      }}
                      className="
                        relative
                        mx-auto
                        w-8
                        h-8
                      "
                    >
                      {/* Cross flare */}

                      <span
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          h-12
                          w-[1px]
                          bg-white/80
                        "
                      />

                      <span
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          w-12
                          h-[1px]
                          bg-white/80
                        "
                      />

                      {/* Glow */}

                      <span
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          w-5
                          h-5
                          rounded-full
                          bg-white
                        "
                        style={{
                          boxShadow: `
                            0 0 12px 4px ${category.color},
                            0 0 35px 8px ${category.color}55
                          `,
                        }}
                      />
                    </motion.div>

                    {/* =================================================
                        CATEGORY NAME
                    ================================================= */}

                    <div
                      className="
                        mt-3
                        whitespace-nowrap
                        text-xs
                        md:text-sm
                        font-semibold
                        transition-all
                        group-hover:scale-105
                      "
                      style={{
                        color: category.color,
                        textShadow: `
                          0 0 10px ${category.color},
                          0 0 20px ${category.color}66
                        `,
                      }}
                    >
                      {category.title}
                    </div>

                    {/* =================================================
                        SKILL BRANCH
                    ================================================= */}

                    <div
                      className="
                        mt-3
                        flex
                        flex-col
                        items-center
                        gap-1
                      "
                    >
                      {category.skills.map(
                        (skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 0.82,
                              y: 0,
                            }}
                            transition={{
                              delay:
                                2.5 +
                                index * 0.12 +
                                skillIndex * 0.06,
                            }}
                            className="
                              text-[10px]
                              md:text-xs
                              text-slate-300
                              whitespace-nowrap
                              transition-all
                              hover:text-white
                            "
                          >
                            {skill}
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* =================================================
                  SELECTED CATEGORY POPUP
              ================================================= */}

              <AnimatePresence>
                {selectedCategory && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 20,
                      scale: 0.95,
                    }}
                    className="
                      absolute
                      bottom-16
                      left-1/2
                      -translate-x-1/2
                      w-[calc(100%-32px)]
                      max-w-md
                      p-6
                      rounded-2xl
                      border
                      border-purple-400/40
                      bg-[#03040b]/90
                      backdrop-blur-xl
                      shadow-[0_0_50px_rgba(124,58,237,0.3)]
                      z-[70]
                    "
                  >
                    {/* Close */}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(null);
                      }}
                      className="
                        absolute
                        right-4
                        top-4
                        text-slate-500
                        hover:text-white
                        transition-colors
                      "
                    >
                      <X size={18} />
                    </button>

                    {/* Category */}

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-white
                        pr-8
                      "
                    >
                      {selectedCategory.title}
                    </h3>

                    {/* Skills */}

                    <div
                      className="
                        mt-4
                        grid
                        grid-cols-2
                        gap-x-5
                        gap-y-2
                      "
                    >
                      {selectedCategory.skills.map(
                        (skill) => (
                          <div
                            key={skill}
                            className="
                              flex
                              items-center
                              gap-2
                              text-sm
                              text-slate-300
                            "
                          >
                            <span
                              className="
                                w-1.5
                                h-1.5
                                rounded-full
                                flex-shrink-0
                              "
                              style={{
                                backgroundColor:
                                  selectedCategory.color,
                                boxShadow:
                                  `0 0 8px ${selectedCategory.color}`,
                              }}
                            />

                            {skill}
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================================
                  BOTTOM LABEL
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-6
                  left-1/2
                  -translate-x-1/2
                  z-30
                  text-center
                  text-xs
                  font-mono
                  tracking-[0.3em]
                  uppercase
                  text-slate-600
                  whitespace-nowrap
                "
              >
                Shakthi's Technology Universe
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RocketUniverse;