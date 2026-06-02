import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className }) => {
  return (
    <div className={cn("mb-16", className)}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block group">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] transition-all duration-500 group-hover:w-full"></span>
      </h2>
      {subtitle && <p className="text-xl text-[#94a3b8] max-w-2xl mt-6">{subtitle}</p>}
    </div>
  );
};
