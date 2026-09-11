"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";

export const Footer = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer
      className={`
        w-full border-t
        transition-colors duration-300
        ${
          isLight
            ? "border-[#101d35]/10 bg-[#f7f9fc]"
            : "border-white/[0.08] bg-[#080814]"
        }
      `}
    >
      <div className="mx-auto w-full max-w-[1280px] px-[5.5%]">

        {/* FOOTER CONTENT */}
        <div className="flex flex-col items-center py-12 text-center">

          {/* NAME */}
          <h3
            className={`
              text-[21px] font-semibold
              tracking-[-0.02em]
              transition-colors duration-300
              ${
                isLight
                  ? "text-[#101d35]"
                  : "text-white"
              }
            `}
          >
            KIRITHARAN 
          </h3>

          {/* CREDIT */}
          <p
            className={`
              mt-3 text-[14px] leading-6
              transition-colors duration-300
              ${
                isLight
                  ? "text-[#506481]"
                  : "text-[#94a3b8]"
              }
            `}
          >
            Designed & Built by Kírìthaṛañ
          </p>

          {/* COPYRIGHT */}
          <p
            className={`
              text-[14px] leading-6
              transition-colors duration-300
              ${
                isLight
                  ? "text-[#506481]"
                  : "text-[#94a3b8]"
              }
            `}
          >
            © 2026 All Rights Reserved
          </p>

          {/* BUILT WITH */}
          <p
            className={`
              mt-9 text-[10px] font-medium
              uppercase tracking-[0.28em]
              transition-colors duration-300
              ${
                isLight
                  ? "text-[#6f86a8]"
                  : "text-[#64748b]"
              }
            `}
          >
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>

        </div>
      </div>
    </footer>
  );
};