import React from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: React.ReactNode;
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "solid", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-full group",
          variant === "solid"
            ? "text-white bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#ec4899] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105"
            : "text-[#f8fafc] bg-transparent border-2 border-[#a855f7] hover:bg-[#a855f7]/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";
