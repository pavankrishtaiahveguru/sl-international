"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const trustPoints = [
  { icon: HiOutlineShieldCheck, text: "Licensed & Registered" },
  { icon: HiOutlineGlobeAlt, text: "Transparent Process" },
  { icon: HiOutlineUserGroup, text: "End-to-End Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#EAF4FF]">
      {/* ================= Background images ================= */}
      <div className="absolute inset-0 -z-20">
        {/* Mobile background (tall image: globe + traveller + skyline) */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/home/m-hero-bg.png"
            alt="Global overseas employment opportunities"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 1px"
            quality={90}
            className="object-cover object-center"
          />
        </div>

        {/* Desktop background (wide image: globe + landmarks on the right) */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/home/hero-bg.png"
            alt="Global overseas employment opportunities featuring world landmarks and a globe"
            fill
            priority
            sizes="(min-width: 768px) 100vw, 1px"
            quality={90}
            className="object-cover object-[72%_center] xl:object-[70%_center] min-[1920px]:object-[68%_center]"
          />
        </div>
      </div>

      {/* ================= Content ================= */}
      <div className="relative mx-auto flex min-h-svh w-full max-w-[2200px] px-5 pb-7 pt-8 sm:min-h-svh sm:px-6 md:min-h-[600px] md:items-center md:py-14 lg:min-h-[640px] lg:px-14 xl:min-h-[680px] xl:px-20 min-[1920px]:min-h-[760px] min-[1920px]:px-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
            },
          }}
          className="relative z-10 flex w-full flex-col justify-start gap-7 md:block md:max-w-[560px] lg:max-w-[600px] xl:max-w-[640px] min-[1920px]:max-w-[760px]"
        >
          {/* ---------- TOP: brand + headline + description ---------- */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-[2px] w-8 shrink-0 bg-[#1D4ED8] md:w-7" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2A5C] sm:text-sm">
                SL International
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-3 text-[clamp(1.9rem,8.2vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#071B49] md:mt-6 md:text-[clamp(2.6rem,4.2vw,3.6rem)] xl:text-[clamp(3.2rem,3.6vw,4.2rem)] min-[1920px]:text-[clamp(4.2rem,3.4vw,5.5rem)]"
            >
              <span className="block">Global Careers</span>
              <span className="block text-[#1D4ED8]">Without Boundaries</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[330px] text-[15px] leading-6 text-[#1E293B] sm:max-w-[420px] sm:text-base sm:leading-7 md:mt-5 md:max-w-[480px] lg:text-[17px] min-[1920px]:max-w-[600px] min-[1920px]:text-xl min-[1920px]:leading-9"
            >
              Connecting the right talent with the right opportunities
              worldwide. Building careers and supporting professionals
              throughout their overseas employment journey.
            </motion.p>
          </div>

          {/* ---------- BOTTOM on mobile: CTAs + trust points ---------- */}
          <div className="md:mt-0">
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-8"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#1565E8] px-8 text-base font-semibold text-white shadow-lg shadow-[#1565E8]/25 transition-colors duration-300 hover:bg-[#0F4FC0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1565E8] sm:min-h-[52px] sm:min-w-[170px] min-[1920px]:min-h-[60px] min-[1920px]:text-lg"
              >
                Enquire Now
                <HiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/917702466534"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-8 text-base font-bold text-[#071B49] shadow-md transition-colors duration-300 hover:border-[#25D366]/50 hover:bg-[#F0FFF5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:min-h-[52px] min-[1920px]:min-h-[60px] min-[1920px]:text-lg"
              >
                <FaWhatsapp className="text-2xl text-[#25D366]" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Individual glass trust cards */}
            <motion.ul
              variants={fadeUp}
              className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3 md:mt-9 md:gap-4 lg:gap-5"
            >
              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.text}
                    className="flex min-h-[76px] items-center gap-3 rounded-2xl border border-white/35 bg-white/30 px-4 py-3 shadow-[0_6px_24px_rgba(7,27,73,0.12)] backdrop-blur-4xl transition-all duration-300 hover:bg-white/30 sm:min-h-[84px] sm:gap-2.5 sm:px-3 md:gap-3 md:px-4 lg:min-h-[92px] lg:gap-4 lg:px-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/35 text-[#1565E8] sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12">
                      <Icon className="text-xl sm:text-lg md:text-xl lg:text-2xl" />
                    </span>

                    <span className="text-sm font-semibold leading-5 text-[#071B49] sm:text-xs md:text-sm lg:text-base">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
