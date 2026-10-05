"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  FileCheck2,
  Handshake,
  Clock3,
  Globe2,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Govt. Licensed & Registered",
    description:
      "Operating as a government-licensed and registered overseas manpower consultancy.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Process",
    description:
      "Clear communication and structured assistance throughout the recruitment process.",
  },
  {
    icon: Globe2,
    title: "Genuine Opportunities",
    description:
      "Focused on connecting candidates with overseas employment opportunities through a structured recruitment process.",
  },
  {
    icon: Handshake,
    title: "Customer-Centric Approach",
    description:
      "Providing guidance and assistance based on the needs of candidates at every important stage.",
  },
  {
    icon: Clock3,
    title: "Timely Support & Guidance",
    description:
      "Continued assistance and guidance throughout key stages of the overseas employment journey.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Label */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#1247B8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8] sm:text-sm">
              Why Choose SL International
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            A Trusted Partner for Your{" "}
            <span className="text-[#1247B8]">Global Career Journey</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">
            We are committed to providing reliable assistance and structured
            support throughout the overseas employment journey — from
            recruitment and documentation to travel and post-departure guidance.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[28px] bg-slate-100 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src="/images/home/why-choose-us.jpg"
                  alt="Professional overseas employment support"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/80 via-[#071B49]/10 to-transparent" />

                {/* Bottom Image Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-sm">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                      SL International
                    </p>

                    <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Supporting Careers Beyond Borders
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/80">
                      Guidance and support designed to help candidates move
                      forward with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* License Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative mx-4 -mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_15px_40px_rgba(15,23,42,0.10)] sm:mx-8"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1247B8]">
                  <ShieldCheck size={23} strokeWidth={2} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    Govt. Licensed & Registered
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    Ministry of Overseas Indian Affairs
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-[#94A3B8]">
                    Lic No. B-1066/TEL/PER/1000+/5/9420/2018
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Reasons Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  variants={itemVariants}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(18,71,184,0.09)] sm:p-6"
                >
                  <div className="flex gap-4">
                    {/* Number */}
                    <div className="hidden shrink-0 pt-1 text-sm font-bold text-slate-300 sm:block">
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1247B8] transition-colors duration-300 group-hover:bg-[#1247B8] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-[#0F172A] sm:text-lg">
                          {reason.title}
                        </h3>

                        <div className="hidden h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-300 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-[#1247B8] sm:flex">
                          <ArrowRight size={15} />
                        </div>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[#64748B]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1247B8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092E78] hover:shadow-xl hover:shadow-blue-900/20"
              >
                Talk to Our Team
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-2xl border border-blue-100 bg-[#F5F9FF]"
        >
          <div className="grid divide-y divide-blue-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {/* Item 1 */}
            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1247B8] shadow-sm">
                <Check size={19} strokeWidth={2.5} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0F172A]">
                  Transparent Process
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Clear & structured assistance
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1247B8] shadow-sm">
                <Check size={19} strokeWidth={2.5} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0F172A]">
                  Candidate Support
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Guidance throughout the journey
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1247B8] shadow-sm">
                <Check size={19} strokeWidth={2.5} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0F172A]">
                  Global Opportunities
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Connecting talent across borders
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
