"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const trustPoints = [
  {
    icon: HiOutlineShieldCheck,
    text: "Licensed & Registered",
  },
  {
    icon: HiOutlineGlobeAlt,
    text: "Transparent Process",
  },
  {
    icon: HiOutlineCheckCircle,
    text: "End-to-End Support",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F7FBFF]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/home/hero-bg.png"
          alt="Global overseas employment opportunities"
          fill
          priority
          sizes="100vw"
          className="scale-[1.04] object-cover object-[72%_center] sm:object-[68%_center] lg:object-[72%_center]"
        />
      </div>

      {/* Desktop readability overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-linear-to-r from-white/92 via-white/72 to-white/30 lg:block" />

      {/* Mobile / Tablet readability overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-white/96 via-white/70 to-white/20 lg:hidden" />

      {/* Main Content */}
      <div className="relative mx-auto flex min-h-[620px] w-full max-w-[1800px] items-center px-4 pb-12 pt-12 sm:min-h-[680px] sm:px-6 sm:pb-14 sm:pt-14 lg:min-h-[620px] lg:px-8 xl:min-h-[660px] xl:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="relative z-10 w-full max-w-[620px] lg:max-w-[560px]"
        >
          {/* Company Name */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A9E8]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1247B8] sm:text-xs">
              SL International
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1247B8] sm:mt-3 sm:text-xs sm:tracking-[0.16em]"
          >
            Overseas Manpower Consultants
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#071B49] xl:text-[4.2rem]"
          >
            Your Trusted Partner
            <br className="hidden sm:block" /> in{" "}
            <span className="text-[#1247B8]">Global Opportunities</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[540px] text-sm leading-6 text-[#475569] sm:text-[15px] sm:leading-7 lg:text-[15px]"
          >
            Connecting the right talent with the right opportunities worldwide.
            Building careers and supporting professionals throughout their
            overseas employment journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:items-center"
          >
            {/* Enquire Now */}
            <Link
              href="/contact"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#1247B8] px-4 text-xs font-bold text-white shadow-lg shadow-[#1247B8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092E78] active:scale-[0.98] sm:px-6 sm:text-sm"
            >
              Enquire Now
              <HiOutlineArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1 sm:text-lg" />
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918725236116"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-[#D8E1EC] bg-white/95 px-4 text-xs font-bold text-[#071B49] shadow-md backdrop-blur-sm transition-all duration-300 hover:border-[#25D366]/30 hover:bg-[#F0FFF5] active:scale-[0.98] sm:px-6 sm:text-sm"
            >
              <FaWhatsapp className="text-base text-[#25D366] sm:text-lg" />

              <span className="sm:hidden">WhatsApp</span>
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            variants={fadeUp}
            className="mt-7 grid grid-cols-3 gap-2 border-t border-white/50 pt-4 sm:flex sm:items-center sm:gap-6 sm:border-0 sm:pt-0 lg:gap-6"
          >
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex flex-col items-center rounded-2xl border border-white/70 bg-[#F5F9FF]/75 px-2 py-2.5 text-center shadow-[0_8px_25px_rgba(7,27,73,0.08)] backdrop-blur-md sm:flex-row sm:items-center sm:gap-1.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:backdrop-blur-none"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1247B8]/10 text-[#1247B8] sm:h-auto sm:w-auto sm:rounded-none sm:bg-transparent">
                    <Icon className="text-base" />
                  </div>

                  <span className="mt-2 text-[10px] font-semibold leading-4 text-[#0F172A] sm:mt-0 sm:text-[11px] sm:text-[#475569]">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
