"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="
        scroll-mt-0
        w-full
        bg-white
        px-6
        py-16
        text-[#101d35]
        md:px-10
        md:py-18
        lg:px-12
        xl:px-14
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <h2
            className="
              text-[40px]
              font-bold
              leading-[1.1]
              tracking-[-0.035em]
              text-[#101d35]
              md:text-[46px]
              lg:text-[48px]
            "
          >
            About Me
          </h2>

          <div
            className="
              mt-4
              h-[3px]
              w-16
              bg-[#1768d5]
            "
          />
        </motion.div>

        {/* =====================================================
            ABOUT CONTENT
        ===================================================== */}

        <div
          className="
            mt-10
            w-full
            max-w-[1180px]
          "
        >

          {/* INTRODUCTION */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="
              text-[16px]
              leading-[1.8]
              text-[#43516b]
              md:text-[18px]
              md:leading-[1.8]
            "
          >
            Senior Offline Robot Programmer with 9+ years of experience in
            paint robot programming and industrial robot programming, including
            offline programming, robotic paint application systems, site
            commissioning, application prove-out, customer technical support,
            and process optimization within automotive manufacturing
            environments.
          </motion.p>

          {/* ROBOT SYSTEMS */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="
              mt-6
              text-[16px]
              leading-[1.8]
              text-[#52627d]
              md:text-[18px]
              md:leading-[1.8]
            "
          >
            Experienced in ABB, Yaskawa, and Dürr robotic systems with
            hands-on expertise in commissioning, troubleshooting, robot path
            optimization, defect elimination, and global technical support.
            I have also completed advanced Germany training for Dürr robot
            systems.
          </motion.p>

          {/* PAINT PROCESS */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="
              mt-6
              text-[16px]
              leading-[1.8]
              text-[#52627d]
              md:text-[18px]
              md:leading-[1.8]
            "
          >
            My experience covers paint application processes including sealer,
            primer, base coat, clear coat, dual-tone applications, process
            validation, robot path optimization, cycle-time improvement, and
            production line performance enhancement.
          </motion.p>

          {/* COLLABORATION */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="
              mt-6
              text-[16px]
              leading-[1.8]
              text-[#52627d]
              md:text-[18px]
              md:leading-[1.8]
            "
          >
            I work closely with production, maintenance, quality, process
            engineering, automation teams, and vendors to troubleshoot
            problems, improve processes, support commissioning, and deliver
            reliable production solutions.
             I work closely with production, maintenance, quality, process
            engineering, automation teams, and vendors to troubleshoot
            problems, improve processes, support commissioning, and deliver
            reliable production solutions.
             I work closely with production, maintenance, quality, process
            engineering, automation teams, and vendors to troubleshoot
            problems, improve processes, support commissioning, and deliver
            reliable production solutions.
             I work closely with production, maintenance, quality, process
            engineering, automation teams, and vendors to troubleshoot
            problems, improve processes, support commissioning, and deliver
            reliable production solutions.
             I work closely with production, maintenance, quality, process
            engineering, automation teams, and vendors to troubleshoot
            problems, improve processes, support commissioning, and deliver
            reliable production solutions.
             I work closely with production, maintenance, quality, process
            engineering, automation teams, and vendors to troubleshoot
            problems, improve processes, support commissioning, and deliver
            reliable production solutions.
          
          </motion.p>

        </div>
      </div>
    </section>
  );
};