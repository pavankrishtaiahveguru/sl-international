"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const trustPoints = [
  { icon: HiOutlineShieldCheck, text: "Licensed & Registered" },
  { icon: HiOutlineGlobeAlt, text: "Transparent Process" },
  { icon: HiOutlineCheckCircle, text: "End-to-End Support" },
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
    <section className="relative isolate w-full overflow-hidden bg-[#F7FBFF]">
      {/* Responsive Background Images */}
      {/* Responsive Background Images */}
      <div className="absolute inset-0 -z-20">
        {/* Mobile */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/home/m-hero-bg.png"
            alt="Global overseas employment opportunities"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 1px"
            quality={90}
            className="object-cover object-top"
          />
          {/* readability overlay for text on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/10" />
        </div>

        {/* Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/home/hero-bg.png"
            alt="Global overseas employment opportunities featuring Dubai, a professional traveler, and an airplane"
            fill
            sizes="(min-width: 768px) 100vw, 1px"
            quality={90}
            className="object-cover object-[70%_center] xl:object-[68%_center] min-[1920px]:object-[65%_center]"
          />
        </div>
      </div>

      {/* Responsive hero container */}
      <div className="relative mx-auto flex min-h-[760px] w-full items-center px-5 pb-12 pt-12 sm:min-h-[720px] sm:px-8 md:min-h-[700px] md:px-10 lg:min-h-[min(760px,calc(100svh-78px))] lg:px-12 xl:min-h-[680px] xl:px-16 2xl:min-h-[720px] 2xl:px-20 min-[1920px]:min-h-[780px] min-[1920px]:px-24 min-[2560px]:min-h-[900px] min-[2560px]:px-[7vw] min-[3840px]:min-h-[1000px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
            },
          }}
          className="relative z-10 w-full max-w-[600px] md:max-w-[650px] lg:max-w-[690px] xl:max-w-[720px] 2xl:max-w-[780px] min-[1920px]:max-w-[850px] min-[2560px]:max-w-[1000px] min-[3840px]:max-w-[1100px]"
        >
          {/* Brand label */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#16A9E8]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1247B8] sm:text-xs lg:text-sm">
              SL International
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1247B8] sm:mt-3 sm:text-xs sm:tracking-[0.16em] lg:text-sm"
          >
            Overseas Manpower Consultants
          </motion.p>

          {/* Responsive headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-[620px] text-[clamp(2.35rem,1.55rem+3.2vw,5.75rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#071B49] sm:max-w-[680px] md:text-[clamp(3.1rem,2rem+3.1vw,5rem)] lg:max-w-[720px] xl:text-[clamp(3.5rem,2.3rem+2.4vw,5.25rem)] 2xl:max-w-[780px] min-[1920px]:max-w-[850px] min-[1920px]:text-[clamp(5rem,3.1vw,6.5rem)] min-[2560px]:max-w-[1000px] min-[2560px]:text-[clamp(6rem,3vw,7.5rem)] min-[3840px]:max-w-[1100px]"
          >
            Your Trusted Partner in{" "}
            <span className="text-[#1247B8]">Global Opportunities</span>
          </motion.h1>

          {/* Supporting description */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[540px] text-sm leading-6 text-[#334155] sm:text-base sm:leading-7 lg:mt-6 lg:max-w-[590px] lg:text-[17px] lg:leading-8 min-[1920px]:max-w-[680px] min-[1920px]:text-lg min-[2560px]:max-w-[760px] min-[2560px]:text-xl min-[2560px]:leading-9"
          >
            Connecting the right talent with the right opportunities worldwide.
            Building careers and supporting professionals throughout their
            overseas employment journey.
          </motion.p>

          {/* Calls to action */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-8"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1247B8] px-5 text-sm font-bold text-white shadow-lg shadow-[#1247B8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092E78] active:scale-[0.98] sm:px-6 lg:min-h-14 lg:px-7 min-[1920px]:text-base min-[2560px]:min-h-16 min-[2560px]:px-9"
            >
              Enquire Now
              <HiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="https://wa.me/918725236116"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D8E1EC] bg-white/95 px-5 text-sm font-bold text-[#071B49] shadow-md backdrop-blur-sm transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#F0FFF5] active:scale-[0.98] sm:px-6 lg:min-h-14 lg:px-7 min-[1920px]:text-base min-[2560px]:min-h-16 min-[2560px]:px-9"
            >
              <FaWhatsapp className="text-lg text-[#25D366]" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp}
            className="mt-7 grid grid-cols-1 gap-2.5 min-[380px]:grid-cols-3 min-[380px]:gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3 lg:gap-x-7 min-[1920px]:gap-x-8"
          >
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/75 px-3 py-2 shadow-sm backdrop-blur-md min-[380px]:flex-col min-[380px]:items-center min-[380px]:gap-1 min-[380px]:px-2 min-[380px]:py-2 sm:flex-row sm:gap-1.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:backdrop-blur-none"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1247B8]/10 text-[#1247B8] sm:h-auto sm:w-auto sm:rounded-none sm:bg-transparent">
                    <Icon className="text-base lg:text-lg" />
                  </span>
                  <span className="text-xs font-semibold leading-4 text-[#334155] sm:text-[11px] lg:text-xs min-[1920px]:text-sm">
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
