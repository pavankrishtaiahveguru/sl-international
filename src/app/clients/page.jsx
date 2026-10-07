"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

/*  Destinations   */

const destinations = [
  { name: "Qatar", flag: "/images/clients/flags/qa.svg" },
  { name: "UAE", flag: "/images/clients/flags/ae.svg" },
  { name: "Oman", flag: "/images/clients/flags/om.svg" },
  { name: "Kingdom of Bahrain", flag: "/images/clients/flags/bh.svg" },
  { name: "Kingdom of Saudi Arabia", flag: "/images/clients/flags/sa.svg" },
  { name: "Kuwait", flag: "/images/clients/flags/kw.svg" },
  { name: "Russia", flag: "/images/clients/flags/ru.svg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ClientsPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#1247B8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                International Destinations
              </span>

              <span className="h-px w-10 bg-[#1247B8]" />
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071B49] sm:text-4xl">
              International Opportunities,{" "}
              <span className="text-[#1247B8]">Connected With Care</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#475569]">
              SL International supports candidates through the overseas
              employment journey, helping them navigate recruitment,
              documentation, travel preparation and post-departure support.
            </p>
          </motion.div>
        </div>
      </section>

      {/*   COUNTRY GRID */}
      <section className="bg-[#F5F9FF] pb-20 pt-2 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/*
            Flex-wrap + justify-center: full rows fill the line exactly like a
            4/3/2-column grid, while an incomplete last row centers itself —
            no placeholder cards needed.
          */}
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
            {destinations.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
                whileHover={{ y: -5 }}
                className="group w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_35px_rgba(7,27,73,0.05)] transition-all duration-300 hover:border-[#BFD7F5] hover:shadow-[0_18px_45px_rgba(7,27,73,0.1)]">
                  {/* Flag — fixed display area so every card is the same height */}
                  <div className="flex h-36 w-full shrink-0 items-center justify-center bg-white p-3 sm:h-40 sm:p-4 lg:h-44">
                    <Image
                      src={country.flag}
                      alt={`${country.name} flag`}
                      width={800}
                      height={533}
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Name area — fixed height for every card */}
                  <div className="flex h-24 items-center justify-center border-t border-[#E2E8F0] bg-[#F5F9FF] px-4 text-center">
                    <h3 className="text-sm font-bold leading-6 text-[#0F172A] sm:text-base lg:text-lg">
                      {country.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*   BOTTOM CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[2rem] bg-[#071B49] px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16"
          >
            {/* Decorative circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1247B8]/30 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#16A9E8]/20 blur-3xl"
            />

            <div className="relative">
              {/* Eyebrow */}
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#16A9E8]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#BFDCFF]">
                  Start Your Journey
                </span>
              </div>

              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                Looking for{" "}
                <span className="text-[#8FCBFF]">Overseas Opportunities?</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Get in touch with SL International to learn more about our
                overseas recruitment and support services.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1247B8] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5F9FF]"
                >
                  Enquire Now
                  <HiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/918725236116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
