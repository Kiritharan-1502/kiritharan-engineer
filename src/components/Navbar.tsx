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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "");

      setActiveSection(hash || "home");
    };

    updateActiveSection();

    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavigation = (sectionName: string) => {
    setActiveSection(sectionName);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed left-0 top-0 z-[100] w-full
          border-b backdrop-blur-xl
          transition-all duration-300
          ${
            isLight
              ? "border-[#101d35]/10 bg-white/75"
              : "border-white/[0.06] bg-[#080814]/75"
          }
        `}
      >
        <nav
          className="
            mx-auto flex h-[68px] w-full
            items-center
            px-5
            sm:px-7
            md:h-[78px]
            md:px-10
            lg:h-[86px]
            lg:px-[5.5%]
          "
        >
          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            href="#home"
            onClick={() => handleNavigation("home")}
            className="flex shrink-0 items-center"
          >
            <span
              className={`
                text-[22px]
                font-bold
                tracking-[-0.04em]
                sm:text-[24px]
                lg:text-[27px]
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
                mx-2
                h-[18px]
                w-px
                sm:mx-3
                sm:h-[22px]
                ${
                  isLight
                    ? "bg-[#101d35]/20"
                    : "bg-white/20"
                }
              `}
            />

            <span
              className={`
                text-[9px]
                font-semibold
                tracking-[0.22em]
                sm:text-[10px]
                lg:text-[11px]
                lg:tracking-[0.25em]
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

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <div className="ml-auto hidden items-center gap-7 lg:flex xl:gap-9">
            {navItems.map((item) => {
              const sectionName = item.href.replace("#", "");

              const isActive =
                activeSection === sectionName;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    handleNavigation(sectionName)
                  }
                  className={`
                    relative flex h-[86px]
                    items-center
                    whitespace-nowrap
                    text-[11px]
                    font-medium
                    tracking-[0.22em]
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

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-[17px]
                        left-0
                        h-[2px]
                        w-full
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
              onClick={() => handleNavigation("contact")}
              className={`
                ml-1
                flex
                h-[56px]
                w-[164px]
                shrink-0
                items-center
                justify-center
                gap-4
                border
                text-[11px]
                font-medium
                tracking-[0.20em]
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

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            className={`
              ml-auto
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              lg:hidden
              ${
                isLight
                  ? "border-[#101d35]/15 text-[#101d35]"
                  : "border-white/15 text-white"
              }
            `}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`
                  absolute
                  left-0
                  top-0
                  h-[1px]
                  w-full
                  bg-current
                  transition-transform
                  duration-300
                  ${
                    mobileMenuOpen
                      ? "translate-y-[7px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  top-[7px]
                  h-[1px]
                  w-full
                  bg-current
                  transition-opacity
                  duration-300
                  ${
                    mobileMenuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  top-[14px]
                  h-[1px]
                  w-full
                  bg-current
                  transition-transform
                  duration-300
                  ${
                    mobileMenuOpen
                      ? "translate-y-[-7px] -rotate-45"
                      : ""
                  }
                `}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* =========================================================
          MOBILE MENU
          ========================================================= */}

      <div
        className={`
          fixed
          inset-x-0
          top-[68px]
          z-[95]
          overflow-hidden
          border-b
          backdrop-blur-xl
          transition-all
          duration-300
          lg:hidden
          sm:top-[68px]
          ${
            mobileMenuOpen
              ? "pointer-events-auto max-h-[calc(100svh-68px)] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
          ${
            isLight
              ? "border-[#101d35]/10 bg-white/95"
              : "border-white/[0.08] bg-[#080814]/95"
          }
        `}
      >
        <div className="px-5 pb-6 pt-3 sm:px-7">
          {navItems.map((item, index) => {
            const sectionName = item.href.replace("#", "");
            const isActive =
              activeSection === sectionName;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() =>
                  handleNavigation(sectionName)
                }
                className={`
                  flex
                  min-h-[54px]
                  items-center
                  justify-between
                  border-b
                  text-[11px]
                  font-medium
                  tracking-[0.22em]
                  ${
                    isLight
                      ? "border-[#101d35]/10"
                      : "border-white/[0.07]"
                  }
                  ${
                    isActive
                      ? "text-[#3b82f6]"
                      : isLight
                        ? "text-[#101d35]"
                        : "text-white"
                  }
                `}
              >
                <span>
                  <span className="mr-4 text-[9px] text-[#3b82f6]/60">
                    0{index + 1}
                  </span>

                  {item.label}
                </span>

                {isActive && (
                  <span className="h-[2px] w-8 bg-[#3b82f6]" />
                )}
              </Link>
            );
          })}

          <Link
            href="#contact"
            onClick={() => handleNavigation("contact")}
            className={`
              mt-5
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-4
              border
              text-[10px]
              font-medium
              tracking-[0.22em]
              ${
                isLight
                  ? "border-[#101d35]/15 text-[#101d35]"
                  : "border-white/15 text-white"
              }
            `}
          >
            <span>LET'S TALK</span>

            <span className="text-lg text-[#3b82f6]">
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};