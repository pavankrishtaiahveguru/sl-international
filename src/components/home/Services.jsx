"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Plane,
  HeartPulse,
  Headset,
  Check,
} from "lucide-react";

const services = [
  {
    number: "01",
    image: "/images/services/recruitment.png",
    icon: BriefcaseBusiness,
    title: "Overseas Recruitment",
    description:
      "Recruitment support for skilled, semi-skilled and unskilled professionals seeking international employment opportunities.",
    points: [
      "Skilled workforce recruitment",
      "Semi-skilled workforce recruitment",
      "Unskilled workforce recruitment",
    ],
  },
  {
    number: "02",
    image: "/images/services/visa-documentation.png",
    icon: FileText,
    title: "Visa & Documentation",
    description:
      "End-to-end assistance with visa and documentation requirements involved in the overseas employment process.",
    points: [
      "Visa assistance",
      "Documentation guidance",
      "Process coordination",
    ],
  },
  {
    number: "03",
    image: "/images/services/travel.png",
    icon: Plane,
    title: "Travel Assistance",
    description:
      "Practical travel support to help candidates prepare for their journey after completing the required recruitment formalities.",
    points: [
      "Flight ticketing support",
      "Travel guidance",
      "Departure preparation",
    ],
  },
  {
    number: "04",
    image: "/images/services/medical-insurance.png",
    icon: HeartPulse,
    title: "Medical & Insurance",
    description:
      "Support and guidance related to medical and insurance requirements associated with overseas employment.",
    points: ["Medical support", "Insurance assistance", "Requirement guidance"],
  },
  {
    number: "05",
    image: "/images/services/post-departure.png",
    icon: Headset,
    title: "Post-Departure Support",
    description:
      "Guidance and support that continues beyond the departure stage to help candidates navigate their transition.",
    points: [
      "Post-departure guidance",
      "Candidate support",
      "Ongoing assistance",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F5F9FF] py-16 sm:py-20 lg:py-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#16A9E8]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#1247B8]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A9E8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071B49] sm:text-4xl lg:text-5xl">
            Complete Support for Your{" "}
            <span className="text-[#1247B8]">Overseas Career Journey</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
            From recruitment and documentation to travel preparation, medical
            assistance and post-departure guidance, SL International supports
            candidates across key stages of the overseas employment process.
          </p>
        </motion.div>

        {/* =======================================================
            SERVICES
        ======================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            /*
             * Desktop layout:
             *
             * 01  02  03
             *    04  05
             *
             * The first three occupy 2 columns each.
             * The last two are centered visually.
             */

            const gridClass =
              index < 3
                ? "lg:col-span-2"
                : index === 3
                  ? "lg:col-start-2 lg:col-span-2"
                  : "lg:col-span-2";

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                className={`group overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1247B8]/20 hover:shadow-[0_20px_50px_rgba(7,27,73,0.09)] ${gridClass}`}
              >
                {/* IMAGE */}
                <div className="relative h-[150px] overflow-hidden sm:h-[165px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/55 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute right-4 top-4">
                    <span className="text-4xl font-black tracking-tight text-white/80">
                      {service.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#1247B8] shadow-lg">
                    <Icon size={20} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold leading-snug text-[#071B49]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {service.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-2.5">
                        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#EAF6FF] text-[#1247B8]">
                          <Check size={10} strokeWidth={3} />
                        </span>

                        <span className="text-xs font-medium text-[#475569] sm:text-sm">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1247B8] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1247B8]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092E78]"
          >
            Enquire About Our Services
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
