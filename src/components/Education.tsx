"use client";

import {
  GraduationCap,
  CalendarDays,
  Building2,
} from "lucide-react";

const education = [
  {
    number: "01",
    degree: "Diploma",
    institution: "Lakshmi Ammal Polytechnic College",
    year: "2017",
  },
  {
    number: "02",
    degree: "Bachelor of Technology",
    institution: "Kalinga University",
    year: "2020",
  },
  {
    number: "03",
    degree: "Masters of Business Administration",
    institution: "Loyola College",
    year: "2025",
  },
];

export const Education = () => {
  return (
    <section
      id="education"
      className="
        relative
        bg-white
        px-6
        py-20
        md:px-12
        lg:px-16
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-14">
          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-[#101d35]
              md:text-5xl
            "
          >
            Education 
          </h2>

          <div
            className="
              mt-5
              h-[3px]
              w-[68px]
              bg-[#1769d5]
            "
          />
        </div>

        {/* =====================================================
            EDUCATION TIMELINE
        ===================================================== */}

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-[27px]
              top-0
              bottom-0
              hidden
              w-px
              bg-[#dbe5f2]
              md:block
            "
          />

          <div className="space-y-6">

            {education.map((item) => (
              <div
                key={item.number}
                className="
                  group
                  relative
                  flex
                  flex-col
                  gap-6
                  rounded-2xl
                  border
                  border-[#dfe7f1]
                  bg-white
                  p-6
                  shadow-[0_4px_20px_rgba(16,29,53,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#1769d5]
                  hover:shadow-[0_10px_30px_rgba(23,105,213,0.10)]
                  md:flex-row
                  md:items-center
                  md:p-7
                "
              >

                {/* =================================================
                    NUMBER / TIMELINE NODE
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    shrink-0
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-[56px]
                      w-[56px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#cfe0f8]
                      bg-[#f1f6fd]
                      text-[15px]
                      font-bold
                      text-[#1769d5]
                      transition-all
                      duration-300
                      group-hover:border-[#1769d5]
                      group-hover:bg-[#1769d5]
                      group-hover:text-white
                    "
                  >
                    {item.number}
                  </div>
                </div>

                {/* =================================================
                    DEGREE
                ================================================= */}

                <div className="min-w-0 flex-1">

                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-snug
                      text-[#101d35]
                      md:text-[22px]
                    "
                  >
                    {item.degree}
                  </h3>

                  <div
                    className="
                      mt-3
                      flex
                      flex-col
                      gap-2
                      text-sm
                      text-[#637796]
                      sm:flex-row
                      sm:items-center
                      sm:gap-5
                    "
                  >

                    {/* Institution */}

                    <div className="flex items-center gap-2">
                      <Building2
                        size={16}
                        strokeWidth={1.8}
                        className="text-[#1769d5]"
                      />

                      <span>
                        {item.institution}
                      </span>
                    </div>

                    {/* Year */}

                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={16}
                        strokeWidth={1.8}
                        className="text-[#1769d5]"
                      />

                      <span>{item.year}</span>
                    </div>

                  </div>
                </div>

                {/* =================================================
                    GRADUATION ICON
                ================================================= */}

                <div
                  className="
                    hidden
                    h-[54px]
                    w-[54px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#f1f6fd]
                    text-[#1769d5]
                    md:flex
                  "
                >
                  <GraduationCap
                    size={25}
                    strokeWidth={1.7}
                  />
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* =====================================================
            EDUCATION SUMMARY
        ===================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-[#dfe7f1]
            bg-[#f7faff]
            p-6
            md:flex-row
            md:items-center
            md:px-8
            md:py-7
          "
        >

          <div
            className="
              flex
              h-[52px]
              w-[52px]
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#1769d5]
              text-white
            "
          >
            <GraduationCap
              size={25}
              strokeWidth={1.8}
            />
          </div>

          <div>

            <h3
              className="
                text-lg
                font-bold
                text-[#101d35]
              "
            >
              Academic Journey
            </h3>

            <p
              className="
                mt-1.5
                text-sm
                leading-6
                text-[#637796]
                md:text-base
              "
            >
              A progression from technical education to
              engineering and management studies, building
              a strong foundation for my professional growth.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};