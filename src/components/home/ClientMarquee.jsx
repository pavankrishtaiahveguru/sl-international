"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------
   Destinations
------------------------------------------------------------------ */

const destinations = [
  { name: "UAE", flag: "/images/clients/flags/ae.svg" },
  { name: "Qatar", flag: "/images/clients/flags/qa.svg" },
  { name: "Oman", flag: "/images/clients/flags/om.svg" },
  { name: "Kingdom of Bahrain", flag: "/images/clients/flags/bh.svg" },
  { name: "Kingdom of Saudi Arabia", flag: "/images/clients/flags/sa.svg" },
  { name: "Kuwait", flag: "/images/clients/flags/kw.svg" },
  { name: "Russia", flag: "/images/clients/flags/ru.svg" },
];

/*
  Duplicate the destinations so the marquee can loop seamlessly.
*/
const marqueeDestinations = [...destinations, ...destinations];

export default function ClientMarquee() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
      aria-labelledby="destinations-heading"
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#16A9E8]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#1247B8]/5 blur-3xl"
      />

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8"
      >
        <div className="flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#16A9E8]" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
            International Destinations
          </span>
        </div>

        <h2
          id="destinations-heading"
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#071B49] sm:text-4xl lg:text-5xl"
        >
          Connecting Opportunities{" "}
          <span className="text-[#1247B8]">Across Borders</span>
        </h2>

        {/* Blue underline */}
        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-1 w-14 rounded-full bg-linear-to-r from-[#1247B8] to-[#16A9E8]"
        />

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
          SL International supports overseas employment journeys across trusted
          international destinations.
        </p>
      </motion.div>

      {/* FLAGS MARQUEE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="relative z-10 mt-12 sm:mt-14 lg:mt-16"
      >
        <div className="mx-auto max-w-[1600px] min-[2200px]:max-w-[2200px]">
          {/* Hover pauses the animation; reduced motion stops it and lets people scroll instead */}
          <div className="group/marquee marquee-viewport relative overflow-hidden motion-reduce:overflow-x-auto">
            <div className="marquee-track flex w-max items-center group-hover/marquee:[animation-play-state:paused] motion-reduce:[animation:none] motion-reduce:[transform:none]">
              {marqueeDestinations.map((destination, index) => {
                const isDuplicate = index >= destinations.length;

                return (
                  <div
                    key={`${destination.name}-${index}`}
                    aria-hidden={isDuplicate || undefined}
                    className={`flex h-24 w-48 shrink-0 items-center justify-center px-5 sm:h-28 sm:w-56 sm:px-6 lg:h-32 lg:w-64 lg:px-8 xl:h-36 xl:w-72 ${isDuplicate ? "motion-reduce:hidden" : ""}`}
                  >
                    <Image
                      src={destination.flag}
                      alt={isDuplicate ? "" : `${destination.name} flag`}
                      width={800}
                      height={533}
                      sizes="(max-width: 640px) 170px, (max-width: 1024px) 210px, (max-width: 1280px) 230px, 260px"
                      loading="eager"
                      className="h-auto max-h-16 w-full max-w-44 object-contain drop-shadow-[0_4px_12px_rgba(7,27,73,0.08)] sm:max-h-20 sm:max-w-48 lg:max-h-24 lg:max-w-56 xl:max-h-28 xl:max-w-60"
                    />
                  </div>
                );
              })}
            </div>

            {/* LEFT EDGE FADE */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#F8FAFC] to-transparent sm:w-24 lg:w-36 motion-reduce:hidden"
            />

            {/* RIGHT EDGE FADE */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#F8FAFC] to-transparent sm:w-24 lg:w-36 motion-reduce:hidden"
            />
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: 0.15 }}
        className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:mt-12"
      >
        <p className="text-sm font-semibold text-[#475569]">
          Explore Our Destinations
        </p>

        <Link
          href="/clients"
          className="group inline-flex items-center gap-2 rounded-full bg-[#1247B8] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1247B8]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092E78] hover:shadow-xl"
        >
          Know Our Destinations
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </section>
  );
}
