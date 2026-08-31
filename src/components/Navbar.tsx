"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  Workflow,
  BriefcaseBusiness,
  GraduationCap,
  School,
  Wrench,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

/*
 * =========================================================
 * NAVIGATION LINKS
 * =========================================================
 */

const navLinks = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Skills",
    href: "#expertise",
    icon: Workflow,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    name: "Trainings",
    href: "#trainings",
    icon: GraduationCap,
  },
  {
    name: "Capabilities",
    href: "#capabilities",
    icon: Wrench,
  },
  {
    name: "Education",
    href: "#education",
    icon: School,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /*
   * =========================================================
   * ACTIVE SECTION DETECTION
   * =========================================================
   */

  useEffect(() => {
    const handleScroll = () => {
      const viewportPosition = window.innerHeight * 0.28;

      let currentSection = "home";

      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (
          rect.top <= viewportPosition &&
          rect.bottom >= viewportPosition
        ) {
          currentSection = id;
          break;
        }
      }

      /*
       * Keep Home active near the top.
       */

      if (window.scrollY < 120) {
        currentSection = "home";
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /*
   * =========================================================
   * SMOOTH NAVIGATION
   * =========================================================
   */

  const scrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);

    const target = document.querySelector(
      href
    ) as HTMLElement | null;

    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP SIDEBAR
      ===================================================== */}

      <aside
        className="
          fixed
          left-0
          top-0
          z-[60]
          hidden
          h-screen
          w-[126px]
          flex-col
          bg-[#061a33]
          md:flex
        "
      >

        {/* ===================================================
            LOGO
        =================================================== */}

        <div
          className="
            flex
            h-[118px]
            shrink-0
            items-center
            justify-center
            border-b
            border-white/[0.05]
          "
        >
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "#home")}
            aria-label="Go to Home"
            className="select-none"
          >
            <div
              className="
                text-[38px]
                font-bold
                leading-none
                tracking-[-5px]
              "
            >
              <span className="text-white">K</span>
              <span className="text-[#1769d5]">K</span>
            </div>
          </a>
        </div>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <nav className="flex flex-1 flex-col">
          {navLinks.map((link) => {
            const Icon = link.icon;

            const sectionId = link.href.replace("#", "");

            const isActive =
              activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) =>
                  scrollTo(e, link.href)
                }
                className={cn(
                  `
                    relative
                    flex
                    h-[76px]
                    w-full
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    gap-[7px]
                    text-center
                    transition-all
                    duration-200
                  `,
                  isActive
                    ? "bg-[#0b315a] text-white"
                    : "text-white/85 hover:bg-[#0a2949]"
                )}
              >

                {/* ACTIVE BLUE BAR */}

                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[3px]
                      bg-[#0874ed]
                    "
                  />
                )}

                {/* ICON */}

                <Icon
                  size={21}
                  strokeWidth={1.7}
                  className={cn(
                    "transition-colors duration-200",
                    isActive
                      ? "text-[#4b9cff]"
                      : "text-white/90"
                  )}
                />

                {/* LABEL */}

                <span
                  className="
                    text-[12px]
                    font-medium
                    leading-none
                    tracking-[0.1px]
                  "
                >
                  {link.name}
                </span>

              </a>
            );
          })}
        </nav>
      </aside>

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-[60]
          flex
          h-[68px]
          items-center
          justify-between
          bg-[#061a33]
          px-5
          shadow-sm
          md:hidden
        "
      >

        {/* MOBILE LOGO */}

        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          aria-label="Go to Home"
          className="
            text-[30px]
            font-bold
            leading-none
            tracking-[-4px]
          "
        >
          <span className="text-white">K</span>
          <span className="text-[#1769d5]">K</span>
        </a>

        {/* MENU BUTTON */}

        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          className="
            rounded-md
            p-2
            text-white
            transition-colors
            hover:bg-white/10
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              left-0
              right-0
              top-[68px]
              z-[55]
              border-t
              border-white/[0.06]
              bg-[#061a33]
              px-5
              py-3
              shadow-xl
              md:hidden
            "
          >
            {navLinks.map((link) => {
              const Icon = link.icon;

              const sectionId =
                link.href.replace("#", "");

              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    scrollTo(e, link.href)
                  }
                  className={cn(
                    `
                      flex
                      items-center
                      gap-4
                      border-b
                      border-white/[0.08]
                      py-3.5
                      text-sm
                      font-medium
                      transition-colors
                    `,
                    isActive
                      ? "text-[#4b9cff]"
                      : "text-white/90"
                  )}
                >
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                  />

                  <span>{link.name}</span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};