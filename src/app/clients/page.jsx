"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineBuildingOffice2,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const clients = [
  {
    name: "Client Company 01",
    // logo: "/images/clients/client-01.png",
    category: "International Employer",
  },
  {
    name: "Client Company 02",
    // logo: "/images/clients/client-02.png",
    category: "International Employer",
  },
  {
    name: "Client Company 03",
    // logo: "/images/clients/client-03.png",
    category: "International Employer",
  },
  {
    name: "Client Company 04",
    // logo: "/images/clients/client-04.png",
    category: "International Employer",
  },
  {
    name: "Client Company 05",
    // logo: "/images/clients/client-05.png",
    category: "International Employer",
  },
  {
    name: "Client Company 06",
    // logo: "/images/clients/client-06.png",
    category: "International Employer",
  },
  {
    name: "Client Company 07",
    // logo: "/images/clients/client-07.png",
    category: "International Employer",
  },
  {
    name: "Client Company 08",
    // logo: "/images/clients/client-08.png",
    category: "International Employer",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ClientsPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F5F9FF]">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#DCEEFF] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#E8F8FF] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16A9E8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                Our Clients
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-[#071B49] sm:text-5xl lg:text-6xl"
            >
              Building Connections With{" "}
              <span className="text-[#1247B8]">Trusted Employers</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg"
            >
              We work with employers and organizations to connect suitable
              talent with international employment opportunities through a
              structured recruitment process.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CLIENT INTRO
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A9E8]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                  Our Network
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071B49] sm:text-4xl">
                Connecting Talent With{" "}
                <span className="text-[#1247B8]">Global Employers</span>
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-base leading-8 text-[#475569]">
                Our client relationships are an important part of the overseas
                employment journey. We support the recruitment process by
                helping connect suitable candidates with organizations seeking
                skilled, semi-skilled and unskilled professionals.
              </p>

              <p className="mt-4 text-base leading-8 text-[#475569]">
                The organizations displayed below represent the clients and
                employer relationships you choose to showcase on the SL
                International website.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLIENT LOGOS
      ========================================================= */}
      <section className="bg-[#F5F9FF]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          {/* Section heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16A9E8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                Our Clients
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-[#071B49] sm:text-4xl">
              Organizations We Work With
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base">
              A selection of employers and organizations associated with our
              recruitment network.
            </p>
          </motion.div>

          {/* Client Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group"
              >
                <div className="flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white p-5 text-center shadow-[0_10px_35px_rgba(7,27,73,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BFD7F5] hover:shadow-[0_18px_45px_rgba(7,27,73,0.09)] sm:min-h-[210px] sm:p-6">
                  {/* Logo */}
                  <div className="relative flex h-24 w-full items-center justify-center sm:h-28">
                    {/* <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw"
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    /> */}
                  </div>

                  {/* Client Name */}
                  <h3 className="mt-4 text-sm font-bold text-[#0F172A] sm:text-base">
                    {client.name}
                  </h3>

                  {/* Category */}
                  <p className="mt-1 text-[11px] font-medium text-[#94A3B8]">
                    {client.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CLIENTS WORK WITH US
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A9E8]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                  Our Approach
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-[#071B49] sm:text-4xl">
                Supporting Stronger Employer Connections
              </h2>

              <p className="mt-5 text-base leading-8 text-[#475569]">
                We focus on clear communication, structured recruitment support
                and timely coordination throughout the employment process.
              </p>
            </motion.div>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Structured Recruitment",
                text: "A clear process for coordinating recruitment requirements and candidate support.",
              },
              {
                title: "Transparent Communication",
                text: "Clear communication helps employers and candidates stay informed throughout the process.",
              },
              {
                title: "End-to-End Support",
                text: "Support extends from recruitment and documentation through travel and post-departure guidance.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1247B8]/10 text-[#1247B8]">
                  <HiOutlineCheckCircle className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CLIENT ENQUIRY CTA
      ========================================================= */}
      <section className="bg-[#F5F9FF]">
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
              <HiOutlineBuildingOffice2 className="mx-auto text-4xl text-[#16A9E8]" />

              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                Looking to Connect With SL International?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Get in touch with our team to discuss recruitment requirements
                and employer collaboration.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1247B8] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5F9FF]"
              >
                Contact Us
                <HiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
