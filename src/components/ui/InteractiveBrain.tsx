"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Dynamically import the Force Graph component so it doesn't render on the server
const InteractiveBrainComponent = dynamic(
  () => import("./InteractiveBrainComponent"),
  { ssr: false }
);

export const InteractiveBrain = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[600px] lg:h-[800px] rounded-3xl glass flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#c084fc]/30 border-t-[#c084fc] rounded-full animate-spin mb-4"></div>
        <p className="text-[#a855f7] font-mono animate-pulse">Initializing Neural Graph...</p>
      </div>
    );
  }

  return <InteractiveBrainComponent />;
};
