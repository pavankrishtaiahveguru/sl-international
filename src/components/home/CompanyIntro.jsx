"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  UsersRound,
  FileCheck2,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const supportPoints = [
  "Skilled, semi-skilled and unskilled recruitment",
  "Structured recruitment and documentation assistance",
  "Visa, travel, medical and insurance support",
  "Guidance throughout the overseas employment journey",
];

const benefits = [
  {
    icon: UsersRound,
    title: "Professional Recruitment",
    description:
      "Focused on understanding employer requirements and identifying suitable candidates across different skill categories.",
  },
  {
    icon: FileCheck2,
    title: "Structured Support",
    description:
      "Clear assistance across recruitment, documentation, travel preparation and other important stages.",
  },
  {
    icon: Globe2,
    title: "International Opportunities",
    description:
      "Supporting candidates as they explore employment opportunities beyond their local market.",
  },
];

export default function CompanyIntro() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#16A9E8]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#1247B8]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A9E8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
              About SL International
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071B49] sm:text-4xl lg:text-5xl">
            Connecting the Right People With{" "}
            <span className="text-[#1247B8]">the Right Opportunities</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            SL International is an overseas manpower consultancy committed to
            connecting qualified professionals with international employment
            opportunities through a structured and professional recruitment
            process.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* =====================================================
              LEFT — IMAGE
          ====================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative"
          >
            {/* Main Image */}

            <div className="relative overflow-hidden rounded-[2rem] bg-[#EAF4FF] p-2 sm:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/home/about.png"
                  alt="SL International overseas manpower recruitment and professional support"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />

                {/* Image Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/75 via-[#071B49]/10 to-transparent" />

                {/* Image Content */}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7DD3FC]">
                    SL International
                  </p>

                  <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Building Careers.
                    <br />
                    Supporting New Possibilities.
                  </h3>
                </div>
              </div>
            </div>

            {/* =================================================
                LICENSE INFORMATION
            ================================================= */}

            <div className="relative z-10 mx-4 -mt-6 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_15px_40px_rgba(7,27,73,0.10)] sm:mx-8 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1247B8]/10 text-[#1247B8]">
                  <ShieldCheck size={21} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1247B8]">
                    Government Licensed & Registered
                  </p>

                  <p className="mt-1 text-xs font-semibold text-[#071B49]">
                    Ministry of Overseas Indian Affairs
                  </p>

                  <p className="mt-0.5 truncate text-[10px] text-[#64748B]">
                    Lic No. B-1066/TEL/PER/1000+/5/9420/2018
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A9E8]">
              Our Approach
            </span>

            <h3 className="mt-3 text-3xl font-extrabold leading-tight text-[#071B49] sm:text-4xl">
              The Right People for the{" "}
              <span className="text-[#1247B8]">Right Opportunities</span>
            </h3>

            <p className="mt-5 text-base leading-7 text-[#475569]">
              SL International focuses on understanding the requirements of
              employers and the aspirations of candidates. Our approach is
              centered on identifying suitable talent across different skill
              categories while maintaining a clear and professional recruitment
              process.
            </p>

            <p className="mt-4 text-base leading-7 text-[#475569]">
              We support candidates through important stages of the overseas
              employment journey, helping them move forward with greater clarity
              and confidence from recruitment and documentation to travel
              preparation and post-departure guidance.
            </p>

            {/* =================================================
                SUPPORT POINTS
            ================================================= */}

            <div className="mt-7 space-y-3">
              {supportPoints.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1247B8]/10 text-[#1247B8]">
                    <CheckCircle2 size={14} />
                  </div>

                  <span className="text-sm font-medium leading-6 text-[#334155]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1247B8] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1247B8]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092E78]"
              >
                Learn More About Us
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BENEFITS
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1247B8]/20 hover:bg-white hover:shadow-[0_15px_40px_rgba(7,27,73,0.07)] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1247B8]/10 text-[#1247B8] transition-colors duration-300 group-hover:bg-[#1247B8] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#071B49] sm:text-lg">
                      {benefit.title}
                    </h4>

                    <p className="mt-1.5 text-sm leading-6 text-[#64748B]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
