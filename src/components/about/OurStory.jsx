"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const supportItems = [
  "Overseas recruitment for skilled, semi-skilled and unskilled staff",
  "Visa and documentation assistance",
  "Flight ticketing and travel support",
  "Medical and insurance assistance",
  "Post-departure guidance and support",
];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[#F5F9FF] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[30px]">
              <motion.div
                whileInView={{ scale: [1.05, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/3]"
              >
                <Image
                  src="/images/about/about-story.jpg"
                  alt="Professional overseas employment consultation"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-5 -right-5 -z-0 h-32 w-32 rounded-2xl border-2 border-[#1247B8]/15 sm:h-40 sm:w-40" />

            {/* Small floating element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 left-5 rounded-2xl bg-[#071B49] px-5 py-4 text-white shadow-xl sm:left-8"
            >
              <p className="text-xs uppercase tracking-wider text-blue-200">
                Our Focus
              </p>

              <p className="mt-1 text-base font-bold">
                Talent • Trust • Opportunity
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1247B8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Helping People Move{" "}
              <span className="text-[#1247B8]">Towards New Possibilities</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-7 text-[#475569]">
              <p>
                SL International operates as an overseas manpower consultancy
                connecting candidates with international employment
                opportunities.
              </p>

              <p>
                Our approach goes beyond recruitment. We provide assistance
                across important stages of the overseas employment process,
                helping candidates navigate documentation, travel preparation
                and post-departure requirements.
              </p>
            </div>

            {/* Support list */}
            <div className="mt-8 space-y-3">
              {supportItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1247B8]">
                    <Check size={13} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-medium leading-6 text-[#334155]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom link */}
            <div className="mt-9">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#1247B8]"
              >
                Connect With Our Team
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
