"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2 } from "lucide-react";

export default function LicenseSection() {
  return (
    <section className="bg-[#F5F9FF] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[30px] bg-[#071B49] p-8 sm:p-10 lg:p-14"
        >
          {/* Background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1247B8]/30 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr]">
            {/* Icon */}
            <div className="flex h-24 w-24 items-center justify-center rounded-[24px] border border-white/10 bg-white/10 text-cyan-300">
              <ShieldCheck size={48} strokeWidth={1.3} />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                Government License
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Licensed & Registered Overseas Manpower Consultancy
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-100/75">
                Ministry of Overseas Indian Affairs
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
                <FileCheck2 size={16} className="text-cyan-300" />

                <span className="text-xs font-medium text-white/90 sm:text-sm">
                  Lic No. B-1066/TEL/PER/1000+/5/9420/2018
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
