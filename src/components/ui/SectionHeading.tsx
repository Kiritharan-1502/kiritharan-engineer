"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      variants={{
        hidden: {},
        visible: {},
      }}
      className={className}
    >
      {/* =====================================================
          HEADING
      ===================================================== */}

      <motion.h2
        variants={{
          hidden: {
            opacity: 0,
            y: 26,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="
          text-[2rem]
          font-bold
          leading-[1]
          tracking-[-0.045em]

          sm:text-[2.25rem]

          md:text-[2.5rem]

          lg:text-[2.75rem]
        "
      >
        {children}
      </motion.h2>

      {/* =====================================================
          BLUE UNDERLINE
          
          It appears AFTER the heading starts entering.
      ===================================================== */}

      <motion.div
        variants={{
          hidden: {
            width: 40,
            opacity: 0,
          },
          visible: {
            width: 100,
            opacity: 1,
            transition: {
              duration: 0.65,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="
          mt-3
          h-[3px]
          bg-blue-500
        "
      />
    </motion.div>
  );
}