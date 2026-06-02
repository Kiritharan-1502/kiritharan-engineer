import React from "react";
import { cn } from "@/lib/utils";

interface SkillPillProps {
  skill: string;
  className?: string;
}

export const SkillPill: React.FC<SkillPillProps> = ({ skill, className }) => {
  return (
    <span
      className={cn(
        "px-4 py-2 text-sm font-medium font-mono rounded-full glass border-[#a855f7]/30 text-[#e2e8f0] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:border-[#a855f7] hover:text-white cursor-default",
        className
      )}
    >
      {skill}
    </span>
  );
};
