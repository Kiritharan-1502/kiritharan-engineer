import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#a855f7]/20 py-12 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#a855f7]/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-mono text-xl font-bold tracking-tighter text-white mb-2">
              Janavi J
            </h3>
            <p className="text-[#94a3b8] text-sm">
              Designed & Built by Janavi J<br />
              © {currentYear} All Rights Reserved
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://linkedin.com/in/janavi-j" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass text-[#94a3b8] hover:text-[#c084fc] hover:border-[#c084fc]/50 transition-all">
              <FaLinkedin size={20} />
            </a>
              <a href="https://github.com/janavijk" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass text-[#94a3b8] hover:text-[#c084fc] hover:border-[#c084fc]/50 transition-all">
              <FaGithub size={20} />
            </a>
            <a href="mailto:janujk2811@gmail.com" className="p-2 rounded-full glass text-[#94a3b8] hover:text-[#c084fc] hover:border-[#c084fc]/50 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#94a3b8]/60 font-mono tracking-widest uppercase">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
