"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Globe2 } from "lucide-react";

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Trust",
    text: "We believe clear communication and a transparent process are essential when preparing candidates for overseas employment.",
  },
  {
    number: "02",
    icon: Users,
    title: "People",
    text: "Our approach is centered around understanding candidate needs and providing practical guidance throughout the journey.",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Opportunity",
    text: "We connect talent with international employment opportunities while supporting candidates through important stages of the process.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#1247B8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
              Our Approach
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Built Around{" "}
            <span className="text-[#1247B8]">Trust, People & Opportunity</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">
            Every overseas employment journey involves important decisions. Our
            approach is focused on providing structured assistance and clear
            guidance at each stage.
          </p>
        </motion.div>

        {/* Values */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group relative bg-white p-7 transition-colors duration-300 hover:bg-[#F5F9FF] sm:p-9 lg:p-10"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-slate-300">
                    {value.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1247B8] transition-all duration-300 group-hover:bg-[#1247B8] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                </div>

                <h3 className="mt-12 text-2xl font-bold text-[#0F172A]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#64748B]">
                  {value.text}
                </p>

                <div className="mt-7 h-1 w-8 rounded-full bg-[#1247B8] transition-all duration-300 group-hover:w-14" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
