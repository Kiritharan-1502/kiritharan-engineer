"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GradientTextProps {
  text: string;
  className?: string;
  animate?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({ text, className, animate = true }) => {
  return (
    <motion.span
      className={cn("text-gradient inline-block", className)}
      animate={
        animate
          ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }
          : {}
      }
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundSize: "200% auto",
      }}
    >
      {text}
    </motion.span>
  );
};
