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
      <div className="w-full px-8 md:px-16 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm font-mono tracking-[0.25em] text-blue-700 mb-6">
              SENIOR ENGINEER
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#101d35] leading-[1.05]">
              Engineering Intelligent Solutions.
              <br />
              <span className="text-blue-700">
                Optimizing Performance.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-2xl">
              Senior Offline Robot Programmer with expertise in paint robot
              programming, automation, process optimization and production
              engineering within automotive manufacturing environments.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollTo("experience")}
                className="px-7 py-4 bg-[#101d35] text-white text-sm font-semibold tracking-wider hover:bg-blue-700 transition-colors"
              >
                EXPLORE MY WORK
              </button>

              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="px-7 py-4 border border-[#101d35] text-[#101d35] text-sm font-semibold tracking-wider hover:bg-[#101d35] hover:text-white transition-colors"
              >
                VIEW PROFILE
              </button>
            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-14">
              <p className="text-xs font-mono tracking-[0.2em] text-gray-400 mb-5">
                TECHNOLOGIES
              </p>

              <div className="flex flex-wrap gap-3">
                {["DÜRR", "ABB", "YASKAWA", "PLC"].map((technology) => (
                  <span
                    key={technology}
                    className="px-4 py-2 border border-gray-200 text-sm font-medium text-[#101d35] bg-gray-50"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[380px] h-[480px] border border-gray-200 bg-gray-50 flex items-center justify-center">
              <span className="text-sm font-mono text-gray-400">
                PHOTO
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;