"use client";

export const Hero = () => {
  const scrollTo = (sectionId: string) => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-white flex items-center"
    >
      <div className="w-full px-8 md:px-12 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            {/* EXPERIENCE LABEL */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-blue-600"></span>

              <p className="text-sm font-semibold tracking-wide text-blue-600">
                9+ YEARS OF EXPERIENCE
              </p>
            </div>

            {/* MAIN HEADING */}
            <h1 className="text-5xl md:text-6xl xl:text-[64px] font-bold leading-[1.08] tracking-tight text-[#101d35]">
              Engineering Intelligent
              <br />
              Solutions. Optimizing
              <br />
              Performance.
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-2xl text-base md:text-lg leading-7 text-[#53627d]">
              Senior Offline Robot Programmer with expertise in paint robot
              programming, automation, process optimization and production
              engineering within automotive manufacturing environments.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button
                type="button"
                onClick={() => scrollTo("experience")}
                className="group flex items-center gap-5 bg-[#101d35] px-6 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-blue-600"
              >
                EXPLORE MY WORK

                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="flex items-center gap-4 border border-[#101d35] px-7 py-4 text-sm font-semibold tracking-wide text-[#101d35] transition-all hover:bg-[#101d35] hover:text-white"
              >
                VIEW PROFILE

                <span>♙</span>
              </button>

            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-9">

              <p className="mb-4 text-xs font-medium tracking-[0.18em] text-[#8b96aa]">
                TECHNOLOGIES I WORK WITH
              </p>

              <div className="flex flex-wrap items-center gap-8">

                <span className="text-2xl font-black tracking-tight text-[#1769d1]">
                  DÜRR
                </span>

                <span className="text-2xl font-black tracking-tight text-[#e32620]">
                  ABB
                </span>

                <span className="text-2xl font-black tracking-tight text-[#1769d1]">
                  YASKAWA
                </span>

                <span className="flex items-center gap-2 text-xl font-semibold text-[#53627d]">
                  <span className="flex h-8 w-8 items-center justify-center border-2 border-[#53627d] rounded-md text-sm">
                    ⚙
                  </span>
                  PLC
                </span>

              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden lg:flex justify-center">

            <div className="relative w-full max-w-[580px] h-[470px] bg-[#f5f7fa] overflow-hidden">

              {/* BLUE BORDER */}
              <div className="absolute left-0 top-0 h-full w-[110px] border-l border-t border-b border-blue-300"></div>

              {/* ENGINEERING LINE GRAPHIC */}
              <div className="absolute left-3 top-28 h-56 w-24">

                <div className="absolute left-8 top-0 h-16 w-px bg-blue-200"></div>

                <div className="absolute left-8 top-16 h-px w-12 rotate-[140deg] bg-blue-200 origin-left"></div>

                <div className="absolute left-8 top-16 h-14 w-px bg-blue-200"></div>

                <div className="absolute left-8 top-30 h-px w-12 rotate-[-140deg] bg-blue-200 origin-left"></div>

                <div className="absolute left-8 top-44 h-16 w-px bg-blue-200"></div>

                <div className="absolute left-0 top-14 h-14 w-14 rounded-full border border-blue-200"></div>

                <div className="absolute left-0 top-28 h-14 w-14 rounded-full border border-blue-200"></div>

              </div>

              {/* DOT GRID */}
              <div className="absolute right-7 top-5 grid grid-cols-6 gap-3">
                {Array.from({ length: 36 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1 w-1 rounded-full bg-blue-400"
                  />
                ))}
              </div>

              {/* PHOTO PLACEHOLDER */}
              <div className="absolute inset-y-0 right-0 w-[82%] flex items-center justify-center">
                <span className="text-xs font-medium tracking-[0.2em] text-[#a0a8b7]">
                  PHOTO
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;