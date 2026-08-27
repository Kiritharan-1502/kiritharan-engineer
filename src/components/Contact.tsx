"use client";

import React from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { GlassCard } from "./ui/GlassCard";
import { GradientButton } from "./ui/GradientButton";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { GradientText } from "./animations/GradientText";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:shakthinandinij1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <GradientText text="Connect" />
            </h2>

            <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
              I’m always open to connecting, learning, and exploring new ideas,
              technologies, and opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Information */}
          <ScrollReveal direction="right">
            <div className="space-y-8">

              {/* Location */}
              <GlassCard className="p-8 flex items-center gap-6 group hover:border-[#22d3ee]/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#22d3ee]/10 flex items-center justify-center text-[#22d3ee] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                  <MapPin size={28} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Location
                  </h3>

                  <p className="text-[#94a3b8]">
                    Chennai, India
                  </p>
                </div>
              </GlassCard>

              {/* Email */}
              <a
                href="mailto:shakthinandinij1@gmail.com"
                className="block"
              >
                <GlassCard className="p-8 flex items-center gap-6 group hover:border-[#ec4899]/50 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#ec4899]/10 flex items-center justify-center text-[#ec4899] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all">
                    <Mail size={28} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>

                    <p className="text-[#94a3b8] break-all">
                      shakthinandinij1@gmail.com
                    </p>
                  </div>
                </GlassCard>
              </a>

              {/* GitHub */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/shakthi1215"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
                >
                  <FaGithub size={28} />
                </a>
              </div>

            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="left" delay={0.2}>
            <GlassCard className="p-8">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[#cbd5e1]"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#0a0a0f]/50 border border-[#a855f7]/20 rounded-xl px-4 py-3 text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[#cbd5e1]"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#0a0a0f]/50 border border-[#a855f7]/20 rounded-xl px-4 py-3 text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-[#cbd5e1]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-[#0a0a0f]/50 border border-[#a855f7]/20 rounded-xl px-4 py-3 text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none"
                    placeholder="Write your message..."
                  />
                </div>

                {/* Submit */}
                <GradientButton
                  type="submit"
                  className="w-full h-14"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </GradientButton>

              </form>

            </GlassCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};