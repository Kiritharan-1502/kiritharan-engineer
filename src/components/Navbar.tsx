"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "TRAINING", href: "#training" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
];

export const Navbar = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "");

      setActiveSection(hash || "home");
    };

    // Set active section when page loads
    updateActiveSection();

    // Update when clicking navigation/hash changes
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener(
        "hashchange",
        updateActiveSection
      );
    };
  }, []);

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        border-b backdrop-blur-md
        transition-all duration-300
        ${
          isLight
            ? "border-[#101d35]/10 bg-white/65"
            : "border-white/[0.06] bg-[#080814]/20"
        }
      `}
    >
      <nav className="mx-auto flex h-[86px] w-full items-center px-[5.5%]">

        {/* LOGO */}
        <Link
          href="#home"
          className="flex shrink-0 items-center"
        >
          <span
            className={`
              text-[27px] font-bold tracking-[-0.04em]
              transition-colors duration-300
              ${
                isLight
                  ? "text-[#101d35]"
                  : "text-white"
              }
            `}
          >
            KK
          </span>

          <span
            className={`
              mx-3 h-[22px] w-px
              transition-colors duration-300
              ${
                isLight
                  ? "bg-[#101d35]/20"
                  : "bg-white/20"
              }
            `}
          />

          <span
            className={`
              text-[11px] font-semibold
              tracking-[0.25em]
              transition-colors duration-300
              ${
                isLight
                  ? "text-[#101d35]"
                  : "text-white"
              }
            `}
          >
            KIRITHARAN
          </span>
        </Link>

        {/* NAVIGATION */}
        <div className="ml-auto flex items-center gap-9">

          {navItems.map((item) => {
            const sectionName = item.href.replace("#", "");

            const isActive =
              activeSection === sectionName;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveSection(sectionName);
                }}
                className={`
                  relative flex h-[86px] items-center
                  text-[11px] font-medium
                  tracking-[0.22em]
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-[#3b82f6]"
                      : isLight
                        ? "text-[#101d35]"
                        : "text-white"
                  }
                `}
              >
                {item.label}

                {/* ACTIVE BLUE UNDERLINE */}
                {isActive && (
                  <span
                    className="
                      absolute bottom-[17px]
                      left-0 h-[2px] w-full
                      bg-[#3b82f6]
                    "
                  />
                )}
              </Link>
            );
          })}

          {/* LET'S TALK */}
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("contact");
            }}
            className={`
              ml-1 flex h-[56px] w-[164px]
              items-center justify-center
              gap-4 border
              text-[11px] font-medium
              tracking-[0.20em]
              transition-all duration-300
              ${
                isLight
                  ? "border-[#101d35]/15 text-[#101d35] hover:border-[#3b82f6] hover:text-[#3b82f6]"
                  : "border-white/20 text-white hover:border-[#3b82f6] hover:text-[#3b82f6]"
              }
            `}
          >
            <span>LET'S TALK</span>

            <span className="text-[18px] leading-none text-[#3b82f6]">
              →
            </span>
          </Link>

        </div>
      </nav>
    </header>
  );
};