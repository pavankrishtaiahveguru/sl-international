"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ShieldCheck, Globe2 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Breadcrumb */}
            <div className="mb-7 flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="transition-colors hover:text-[#1247B8]">
                Home
              </Link>

              <span>/</span>

              <span className="font-medium text-[#1247B8]">About Us</span>
            </div>

            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#1247B8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                About SL International
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl xl:text-7xl">
              Connecting
              <span className="block text-[#1247B8]">Talent</span>
              With Global
              <span className="block">Opportunities.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-[#475569] sm:text-lg">
              SL International is an overseas manpower consultancy focused on
              connecting the right talent with international employment
              opportunities while providing guidance throughout the overseas
              employment journey.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1247B8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092E78]"
              >
                Talk to Our Team
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
              >
                Discover Our Story
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck size={18} className="text-[#1247B8]" />
                Licensed & Registered
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Globe2 size={18} className="text-[#1247B8]" />
                Global Opportunities
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Image frame */}
            <div className="relative overflow-hidden rounded-[32px] bg-slate-100 shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src="/images/about/about-hero.jpg"
                  alt="SL International overseas employment consultancy"
                  fill
                  loading="eager"
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/65 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                    SL International
                  </p>

                  <p className="mt-2 max-w-sm text-xl font-semibold leading-tight text-white sm:text-2xl">
                    Building careers. Connecting opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating license card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="absolute -bottom-7 left-5 max-w-[270px] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.13)] sm:left-8"
            >
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1247B8]">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    Govt. Licensed & Registered
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                    Ministry of Overseas Indian Affairs
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#our-story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 lg:flex"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
            Scroll to explore
          </span>

          <ArrowDown size={16} className="animate-bounce text-[#1247B8]" />
        </motion.a>
      </div>
    </section>
  );
}
