"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

export const AnimatedBackground: React.FC<
  AnimatedBackgroundProps
> = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Soft engineering atmosphere */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />

      {/* =====================================================
          MOVING CIRCUIT LINES
      ===================================================== */}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.28]"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
      >
        {/* LEFT */}
        <g className="circuit-move">
          <circle
            cx="90"
            cy="180"
            r="170"
            fill="none"
            stroke="rgba(59,130,246,0.45)"
            strokeWidth="1"
          />

          <circle
            cx="90"
            cy="180"
            r="130"
            fill="none"
            stroke="rgba(59,130,246,0.25)"
            strokeWidth="1"
          />

          <path
            d="M0 500 H180 L240 440 H400"
            fill="none"
            stroke="rgba(59,130,246,0.5)"
            strokeWidth="1"
          />

          <path
            d="M0 760 H220 L280 700 H470"
            fill="none"
            stroke="rgba(59,130,246,0.45)"
            strokeWidth="1"
          />
        </g>

        {/* RIGHT */}
        <g className="circuit-move-slow">
          <path
            d="M900 90 H1100 L1160 150 H1370 L1430 90 H1600"
            fill="none"
            stroke="rgba(59,130,246,0.55)"
            strokeWidth="1"
          />

          <path
            d="M1080 180 H1210 L1270 240 H1450"
            fill="none"
            stroke="rgba(96,165,250,0.4)"
            strokeWidth="1"
          />

          <path
            d="M1260 390 H1430 L1490 330 H1600"
            fill="none"
            stroke="rgba(59,130,246,0.45)"
            strokeWidth="1"
          />

          <path
            d="M1040 760 H1240 L1300 700 H1500 L1560 640 H1600"
            fill="none"
            stroke="rgba(59,130,246,0.5)"
            strokeWidth="1"
          />
        </g>

        {/* LOWER / MIDDLE */}
        <g className="circuit-move">
          <path
            d="M250 850 H410 L470 790 H650"
            fill="none"
            stroke="rgba(96,165,250,0.35)"
            strokeWidth="1"
          />

          <path
            d="M760 870 H900 L960 810 H1100"
            fill="none"
            stroke="rgba(59,130,246,0.3)"
            strokeWidth="1"
          />
        </g>

        {/* CONNECTION NODES */}
        <g className="node-pulse">
          <circle
            cx="1100"
            cy="90"
            r="4"
            fill="rgba(59,130,246,0.7)"
          />

          <circle
            cx="1160"
            cy="150"
            r="4"
            fill="rgba(96,165,250,0.65)"
          />

          <circle
            cx="240"
            cy="440"
            r="4"
            fill="rgba(59,130,246,0.65)"
          />

          <circle
            cx="280"
            cy="700"
            r="4"
            fill="rgba(96,165,250,0.6)"
          />

          <circle
            cx="1300"
            cy="700"
            r="4"
            fill="rgba(59,130,246,0.65)"
          />
        </g>
      </svg>

      {/* Very subtle blue light */}
      <div
        className="
          absolute
          left-[-150px]
          top-[80px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/[0.045]
          blur-[120px]
          glow-move
        "
      />

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/[0.035]
          blur-[130px]
          glow-move-reverse
        "
      />
    </div>
  );
};