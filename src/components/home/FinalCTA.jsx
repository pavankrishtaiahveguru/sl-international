"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {FaWhatsapp} from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[30px] bg-[#071B49] px-6 py-12 shadow-[0_25px_70px_rgba(7,27,73,0.18)] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#1247B8]/30 blur-2xl" />

          {/* Content */}
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* Left */}
            <div className="max-w-2xl">
              {/* Label */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 sm:text-sm">
                  Start Your Journey
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Explore{" "}
                <span className="text-cyan-300">
                  Global Opportunities?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-xl text-base leading-7 text-blue-100/80 sm:text-lg">
                Connect with SL International for guidance on overseas
                recruitment, documentation, travel assistance and support
                throughout your employment journey.
              </p>

              {/* Trust Points */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Transparent Process",
                  "Reliable Guidance",
                  "End-to-End Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/90"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-cyan-300">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1247B8] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
              >
                Enquire Now

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="https://wa.me/918725236116"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                <FaWhatsapp size={18} />

                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}