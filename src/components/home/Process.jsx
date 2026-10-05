"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Plane,
  UserRound,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: UserRound,
    title: "Initial Enquiry",
    description:
      "Connect with our team and discuss your overseas employment requirements and career interests.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Recruitment & Documentation",
    description:
      "Receive guidance through the recruitment process along with the required visa and documentation assistance.",
  },
  {
    number: "03",
    icon: Plane,
    title: "Travel Preparation",
    description:
      "Get support with medical, insurance and travel arrangements as you prepare for your overseas journey.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Post-Departure Support",
    description:
      "Our support continues with guidance and assistance after departure as you transition into your overseas journey.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FF] py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Label */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#1247B8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8] sm:text-sm">
              How We Support You
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            From Enquiry to{" "}
            <span className="text-[#1247B8]">Overseas Journey</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">
            Our support is designed to guide candidates through the important
            stages of the overseas employment journey, from the initial enquiry
            to post-departure assistance.
          </p>
        </motion.div>

        {/* Process */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          {/* Desktop Connecting Line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[42px] hidden h-px bg-blue-200 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(18,71,184,0.10)] sm:p-7">
                    {/* Number + Icon */}
                    <div className="relative mb-7 flex items-center justify-between">
                      {/* Icon */}
                      <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#1247B8] transition-all duration-300 group-hover:bg-[#1247B8] group-hover:text-white">
                        <Icon size={30} strokeWidth={1.7} />
                      </div>

                      {/* Step Number */}
                      <span className="text-4xl font-bold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#0F172A] sm:text-xl">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-[#64748B]">
                      {step.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-6 h-1 w-10 rounded-full bg-[#1247B8] transition-all duration-300 group-hover:w-16" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
