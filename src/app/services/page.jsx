"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  FileCheck2,
  Plane,
  HeartPulse,
  Headphones,
  Phone,
} from "lucide-react";

const services = [
  {
    number: "01",
    eyebrow: "RECRUITMENT SUPPORT",
    title: "Overseas Recruitment",
    subtitle: "Connecting the right talent with international opportunities.",
    description:
      "Our recruitment support covers skilled, semi-skilled and unskilled professionals looking for overseas employment opportunities. We help coordinate the recruitment journey while keeping the process clear and structured.",
    image: "/images/services/recruitment.png",
    points: [
      "Skilled workforce recruitment",
      "Semi-skilled workforce recruitment",
      "Unskilled workforce recruitment",
      "Candidate coordination",
    ],
    icon: ShieldCheck,
  },
  {
    number: "02",
    eyebrow: "DOCUMENTATION",
    title: "Visa & Documentation",
    subtitle: "Guidance through the documentation process.",
    description:
      "Overseas employment involves important documentation and visa requirements. We provide guidance and coordination to help candidates understand the required formalities and move through the process with greater clarity.",
    image: "/images/services/visa-documentation.png",
    points: [
      "Visa assistance",
      "Documentation guidance",
      "Process coordination",
      "Requirement guidance",
    ],
    icon: FileCheck2,
  },
  {
    number: "03",
    eyebrow: "TRAVEL PREPARATION",
    title: "Travel Assistance",
    subtitle: "Helping candidates prepare for their journey.",
    description:
      "Once the required recruitment and documentation formalities are completed, we provide practical travel assistance to help candidates prepare for their overseas journey.",
    image: "/images/services/travel.png",
    points: [
      "Flight ticketing support",
      "Travel guidance",
      "Departure preparation",
      "Journey coordination",
    ],
    icon: Plane,
  },
  {
    number: "04",
    eyebrow: "HEALTH & INSURANCE",
    title: "Medical & Insurance",
    subtitle: "Support for important pre-departure requirements.",
    description:
      "Medical and insurance requirements are an important part of the overseas employment journey. We provide guidance and coordination related to these requirements before departure.",
    image: "/images/services/medical-insurance.png",
    points: [
      "Medical support",
      "Insurance assistance",
      "Requirement guidance",
      "Pre-departure coordination",
    ],
    icon: HeartPulse,
  },
  {
    number: "05",
    eyebrow: "AFTER DEPARTURE",
    title: "Post-Departure Support",
    subtitle: "Guidance that continues beyond departure.",
    description:
      "Our support does not simply end when a candidate leaves India. We provide post-departure guidance and assistance to help candidates navigate the transition into their overseas employment journey.",
    image: "/images/services/post-departure.png",
    points: [
      "Post-departure guidance",
      "Candidate support",
      "Ongoing assistance",
      "Transition guidance",
    ],
    icon: Headphones,
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Initial Enquiry",
    text: "Understand your requirements and discuss the overseas employment journey.",
  },
  {
    number: "02",
    title: "Recruitment",
    text: "Coordinate the recruitment process based on the relevant opportunity and requirements.",
  },
  {
    number: "03",
    title: "Documentation",
    text: "Provide guidance around visa and documentation formalities.",
  },
  {
    number: "04",
    title: "Travel Preparation",
    text: "Support candidates with medical, insurance and travel-related preparation.",
  },
  {
    number: "05",
    title: "Departure",
    text: "Help candidates prepare for their overseas journey.",
  },
  {
    number: "06",
    title: "Post-Departure",
    text: "Continue providing guidance and support after departure.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f5f9ff]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#16a9e8]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#1247b8]/10 blur-3xl" />

        <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-20">
          {/* Hero content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1247b8]/10 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1247b8] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16a9e8]" />
                Our Services
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#071b49] sm:text-5xl lg:text-[58px]"
            >
              Support Beyond
              <span className="block text-[#1247b8]">Recruitment.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
            >
              From recruitment and documentation to travel preparation and
              post-departure guidance, SL International supports candidates
              throughout their overseas employment journey.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1247b8] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1247b8]/20 transition hover:bg-[#092e78]"
              >
                Enquire Now
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="https://wa.me/918725236116"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#1247b8] transition hover:border-[#1247b8] hover:bg-[#1247b8]/5"
              >
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              variants={fadeUp}
              className="mt-9 grid max-w-xl grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-3"
            >
              {[
                "Licensed & Registered",
                "Transparent Process",
                "End-to-End Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1247b8]/10 text-[#1247b8]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-slate-200 shadow-2xl shadow-[#071b49]/10 sm:rounded-[34px] lg:aspect-[1.08/1]">
              <Image
                src="/images/home/hero-bg.png"
                alt="Global overseas employment opportunities"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-[72%_center]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071b49]/35 via-transparent to-transparent" />

              {/* Floating info */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1247b8]">
                  Global Opportunities
                </p>
                <p className="mt-1 text-sm font-semibold text-[#071b49]">
                  Guidance throughout your overseas journey
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY INTRO
      ========================================================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1247b8]">
              The Complete Journey
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#071b49] sm:text-4xl lg:text-5xl">
              More Than a Recruitment Service
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              An overseas employment journey involves several important stages.
              Our role is to provide structured assistance and guidance across
              those stages.
            </p>
          </motion.div>

          {/* Journey mini cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                number: "01",
                title: "Discover",
                text: "Understand the opportunity and recruitment requirements.",
              },
              {
                number: "02",
                title: "Prepare",
                text: "Complete documentation and other required formalities.",
              },
              {
                number: "03",
                title: "Travel",
                text: "Prepare for your overseas journey and departure.",
              },
              {
                number: "04",
                title: "Continue",
                text: "Receive guidance and support after departure.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1247b8]/20 hover:shadow-lg"
              >
                <span className="text-3xl font-bold text-[#1247b8]/20">
                  {item.number}
                </span>

                <h3 className="mt-3 text-lg font-bold text-[#071b49]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SERVICE SECTIONS
      ========================================================= */}
      <section className="bg-[#f5f9ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reversed = index % 2 !== 0;

            return (
              <motion.article
                key={service.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className={`grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-20 lg:py-20 ${
                  index !== services.length - 1
                    ? "border-b border-slate-200/80"
                    : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  variants={fadeUp}
                  className={`relative ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-slate-200 shadow-xl shadow-[#071b49]/8 sm:rounded-[30px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} - SL International`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071b49]/35 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-lg font-bold text-[#1247b8] shadow-lg backdrop-blur-sm sm:left-6 sm:top-6 sm:h-14 sm:w-14">
                      {service.number}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={fadeUp}
                  className={`${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1247b8]/10 text-[#1247b8]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <span className="text-[11px] font-bold tracking-[0.16em] text-[#1247b8]">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#071b49] sm:text-4xl lg:text-[42px]">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-lg font-medium leading-7 text-[#1247b8]">
                    {service.subtitle}
                  </p>

                  <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1247b8] text-white">
                          <Check size={12} strokeWidth={3} />
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#1247b8]"
                  >
                    Enquire About This Service
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1247b8]">
              How We Support You
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#071b49] sm:text-4xl lg:text-5xl">
              A Structured Journey From Enquiry to Departure
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Each stage is connected to the next, helping candidates understand
              what comes next throughout the overseas employment journey.
            </p>
          </motion.div>

          {/* Desktop process */}
          <div className="relative mt-16 hidden lg:block">
            <div className="absolute left-[8%] right-[8%] top-8 h-px bg-[#1247b8]/15" />

            <div className="grid grid-cols-6 gap-6">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.06 }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#1247b8] text-sm font-bold text-white shadow-lg shadow-[#1247b8]/20">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-base font-bold text-[#071b49]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet process */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="relative rounded-2xl border border-slate-200 bg-[#f8fbff] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1247b8] text-xs font-bold text-white">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-bold text-[#071b49]">{step.title}</h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LICENSE / TRUST
      ========================================================= */}
      <section className="px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#071b49] px-6 py-10 sm:px-10 lg:px-14 lg:py-12"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#16a9e8]">
                  <ShieldCheck size={22} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#16a9e8]">
                  Licensed & Registered
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                Government Licensed & Registered
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                SL International operates with the following licence information
                stated in the company brochure.
              </p>

              <div className="mt-6 inline-flex max-w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="break-all text-xs font-medium text-white sm:text-sm">
                  Lic No. B-1066/TEL/PER/1000+/5/9420/2018
                </span>
              </div>
            </div>

            <div className="lg:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                Ministry
              </p>

              <p className="mt-2 max-w-xs text-sm leading-6 text-white/80 lg:ml-auto">
                Govt. of India
                <br />
                Ministry of Overseas Indian Affairs
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#1247b8] px-6 py-12 sm:px-10 lg:px-16 lg:py-14"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                Start Your Journey
              </span>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Ready to Take the Next Step?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                Speak with the SL International team about your overseas
                employment requirements and understand the next steps.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1247b8] transition hover:bg-slate-100"
              >
                Enquire Now
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+918725236116"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={16} />
                Call Our Team
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
