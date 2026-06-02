"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optional: simple parallax or dynamic movement logic could be added here
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-[-1] pointer-events-none bg-gradient-mesh grain-overlay",
        className
      )}
    >
      <div className="absolute inset-0 opacity-30 animate-pulse-slow">
        {/* We can add SVG particles or floating elements here later if desired */}
      </div>
    </div>
  );
};
