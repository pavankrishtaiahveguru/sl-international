"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  Check,
  FileCheck2,
  Globe2,
  Handshake,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";

/* ------------------------------------------------------------------ */
/*  Shared building blocks                                             */
/* ------------------------------------------------------------------ */

const EASE = [0.21, 0.47, 0.32, 0.98];

function FadeIn({ children, delay = 0, className = "", y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span
        className={`h-px w-10 ${light ? "bg-cyan-300" : "bg-[#1247B8]"}`}
      />

      <span
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          light ? "text-cyan-300" : "text-[#1247B8]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/**
 * Reusable overlapping image composition.
 * Mobile  : primary image only, full width, normal flow.
 * Tablet+ : primary (portrait) + secondary overlapping toward bottom-right.
 */
function OverlapImages({ primary, secondary, primaryAlt, secondaryAlt }) {
  return (
    <div className="relative">
      {/* Mobile — primary image only */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(7,27,73,0.14)] sm:hidden">
        <Image
          src={primary}
          alt={primaryAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Tablet / Desktop — overlapping composition */}
      <div className="relative hidden sm:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="relative aspect-[3/4] w-[72%] overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(7,27,73,0.16)]"
        >
          <Image
            src={primary}
            alt={primaryAlt}
            fill
            sizes="(max-width: 1024px) 55vw, 38vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
          className="absolute -bottom-10 right-0 z-10 aspect-[4/5] w-[54%] overflow-hidden rounded-[24px] shadow-[0_25px_60px_rgba(7,27,73,0.24)] ring-8 ring-white"
        >
          <Image
            src={secondary}
            alt={secondaryAlt}
            fill
            sizes="(max-width: 1024px) 45vw, 28vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  1. About hero — Company Profile                                    */
/* ------------------------------------------------------------------ */

function AboutHero() {
  return (
    <section className="relative flex h-[240px] items-center justify-center overflow-hidden bg-[#071B49] sm:h-[300px] lg:h-[400px]">
      <Image
        src="/images/about/about-hero.jpg"
        alt="SL International — Overseas Manpower Consultants"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark subtle overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071B49]/85 via-[#071B49]/60 to-[#071B49]/85" />

      <FadeIn className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-blue-100/80 sm:text-sm">
          <Link
            href="/"
            className="transition-colors hover:text-cyan-300"
          >
            Home
          </Link>

          <span>/</span>

          <span className="font-semibold text-cyan-300">About Us</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Company Profile
        </h1>

        <p className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-blue-100/90 sm:text-base">
          SL International
          <span className="mx-3 text-cyan-300">•</span>
          Overseas Manpower Consultants
        </p>
      </FadeIn>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Welcome section                                                 */
/* ------------------------------------------------------------------ */

function WelcomeSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <FadeIn>
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#1247B8]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1247B8]">
              About SL International
            </span>

            <span className="h-px w-10 bg-[#1247B8]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Welcome to <span className="text-[#1247B8]">SL International</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-[#475569] sm:text-lg">
            SL International is an overseas manpower consultancy focused on
            connecting the right talent with the right opportunities worldwide.
            We support candidates across every stage of the overseas employment
            journey — from recruitment and visa documentation to travel,
            medical and insurance assistance, and continued guidance after
            departure.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Company overview                                                */
/* ------------------------------------------------------------------ */

function OverviewSection() {
  return (
    <section className="bg-[#F5F9FF] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Heading column */}
          <FadeIn>
            <Eyebrow>Company Overview</Eyebrow>

            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem]">
              Connecting Talent With{" "}
              <span className="text-[#1247B8]">
                Opportunities Worldwide
              </span>
            </h2>

            <div className="mt-8 h-1 w-14 rounded-full bg-[#1247B8]" />
          </FadeIn>

          {/* Text column */}
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-base leading-[1.85] text-[#475569] sm:text-lg sm:leading-[1.85]">
              <p className="text-lg font-medium leading-[1.75] text-[#334155] sm:text-xl">
                SL International is an overseas manpower consultancy dedicated
                to connecting skilled, semi-skilled and unskilled candidates
                with genuine international employment opportunities — and to
                supporting them through the journey that follows.
              </p>

              <p>
                Working overseas is a significant decision, and the path to it
                involves several important stages. From the first enquiry, we
                guide candidates through recruitment, documentation and visa
                assistance, travel preparation, and medical and insurance
                requirements — helping them move forward with clarity and
                confidence at every step.
              </p>

              <p>
                Our approach is transparent and customer-centric. We believe
                every candidate deserves honest guidance, a clearly explained
                process and dependable support — not only before departure, but
                afterwards as well.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Image + text section — supporting candidates                    */
/* ------------------------------------------------------------------ */

const journeyStages = [
  {
    title: "Initial Enquiry & Recruitment",
    text: "Understanding each candidate's profile and connecting it with suitable overseas opportunities.",
  },
  {
    title: "Documentation, Visa & Travel",
    text: "Hands-on assistance with documentation, visa processing, ticketing and travel preparation.",
  },
  {
    title: "Post-Departure Support",
    text: "Continued guidance after departure, so candidates never feel they are navigating alone.",
  },
];

function JourneySection() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Images — two overlapping on desktop, one on mobile */}
          <FadeIn>
            <OverlapImages
              primary="/images/about/right-people-2.png"
              secondary="/images/about/right-people-1.png"
              primaryAlt="Professional overseas employment consultation at SL International"
              secondaryAlt="Candidates preparing for international employment opportunities"
            />
          </FadeIn>

          {/* Text */}
          <div>
            <FadeIn>
              <Eyebrow>End-to-End Support</Eyebrow>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem]">
                Supporting Candidates Throughout Their{" "}
                <span className="text-[#1247B8]">Overseas Journey</span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-[1.85] text-[#475569] sm:text-lg">
                <p>
                  An overseas employment journey involves more than a job
                  offer. It is a sequence of important decisions — and it
                  deserves careful, honest support from the very first
                  conversation.
                </p>

                <p>
                  At SL International, we stay involved from the initial
                  enquiry through recruitment, documentation, visa guidance and
                  travel preparation — and our support continues even after a
                  candidate has departed, so they always have someone to turn
                  to.
                </p>
              </div>
            </FadeIn>

            {/* Stage rows — editorial, thin borders */}
            <div className="mt-10">
              {journeyStages.map((stage, index) => (
                <FadeIn key={stage.title} delay={index * 0.08}>
                  <div className="flex gap-5 border-t border-slate-200 py-5 last:border-b">
                    <span className="pt-0.5 text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-base font-bold text-[#0F172A] sm:text-lg">
                        {stage.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#64748B]">
                        {stage.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Professional solutions — editorial section                      */
/* ------------------------------------------------------------------ */

const solutionAreas = [
  "Overseas Recruitment",
  "Skilled, Semi-Skilled & Unskilled Staff",
  "Visa & Documentation",
  "Travel Assistance",
  "Medical & Insurance",
  "Post-Departure Support",
];

function SolutionsSection() {
  return (
    <section className="bg-[#F5F9FF] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <Eyebrow>What We Do</Eyebrow>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem]">
                Professional Overseas{" "}
                <span className="text-[#1247B8]">Recruitment Solutions</span>
              </h2>

              <p className="mt-6 text-base leading-[1.85] text-[#475569] sm:text-lg">
                SL International provides structured recruitment and mobility
                support across the full overseas employment process. Our role
                is to make each stage clear and manageable for candidates —
                with practical guidance, careful preparation and dependable
                follow-through.
              </p>
            </FadeIn>

            {/* Areas — simple divided list, not service cards */}
            <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {solutionAreas.map((area, index) => (
                <FadeIn key={area} delay={index * 0.06}>
                  <div className="flex items-center gap-4 border-t border-slate-200 py-4">
                    <span className="text-xs font-bold tracking-wider text-slate-300">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold text-[#334155]">
                      {area}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Large single image composition */}
          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <div className="relative">
              {/* Offset editorial frame */}
              <div className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-[28px] border-2 border-[#1247B8]/15 sm:block" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_25px_70px_rgba(7,27,73,0.16)]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="relative h-full w-full"
                >
                  <Image
                    src="/images/about/professional-overseas.png"
                    alt="SL International team guiding candidates through overseas recruitment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Caption band */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#071B49]/85 to-transparent p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                    SL International
                  </p>

                  <p className="mt-2 max-w-sm text-lg font-semibold leading-snug text-white sm:text-xl">
                    Structured guidance across every stage of the journey.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Vision                                                          */
/* ------------------------------------------------------------------ */

function VisionSection() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text — left */}
          <FadeIn>
            <Eyebrow>Our Vision</Eyebrow>

            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem]">
              A Trusted Partner on the{" "}
              <span className="text-[#1247B8]">Path Abroad</span>
            </h2>

            <p className="mt-6 text-lg font-medium leading-[1.8] text-[#334155] sm:text-xl">
              To be a trusted partner for individuals seeking genuine overseas
              employment opportunities, and to support candidates through a
              transparent, structured and responsible process.
            </p>

            <div className="mt-6 space-y-5 text-base leading-[1.85] text-[#475569] sm:text-lg">
              <p>
                Behind every placement is a person moving towards new
                possibilities — for their career, their family and their
                future. Our vision is to help people take that step with
                confidence, knowing the process behind it is honest and
                well-guided.
              </p>

              <p>
                We aim to connect talent with suitable opportunities, maintain
                transparency in everything we communicate, and build trust
                throughout the entire overseas journey.
              </p>
            </div>
          </FadeIn>

          {/* Images — right, two overlapping on desktop */}
          <FadeIn delay={0.1}>
            <OverlapImages
              primary="/images/about/our-vision-1.png"
              secondary="/images/about/our-vision-2.png"
              primaryAlt="SL International connecting talent with global opportunities"
              secondaryAlt="Travel preparation support for candidates"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Mission                                                         */
/* ------------------------------------------------------------------ */

const missionPoints = [
  "Provide structured overseas recruitment support",
  "Maintain professionalism and transparency at every stage",
  "Help candidates clearly understand the process",
  "Provide reliable documentation and visa guidance",
  "Support candidates with travel preparation",
  "Continue support after departure",
  "Keep a customer-centric approach in everything we do",
];

function MissionSection() {
  return (
    <section className="overflow-hidden bg-[#F5F9FF] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Images — left, two overlapping on desktop */}
          <FadeIn>
            <OverlapImages
              primary="/images/about/our-mission-1.png"
              secondary="/images/about/our-mission-2.png"
              primaryAlt="Overseas recruitment process at SL International"
              secondaryAlt="Medical and insurance assistance for overseas candidates"
            />
          </FadeIn>

          {/* Text — right */}
          <div>
            <FadeIn>
              <Eyebrow>Our Mission</Eyebrow>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem]">
                Guidance Candidates Can{" "}
                <span className="text-[#1247B8]">Rely On</span>
              </h2>

              <p className="mt-6 text-base leading-[1.85] text-[#475569] sm:text-lg">
                Our mission is to make the overseas employment journey clear,
                professional and dependable — with the candidate at the centre
                of the process from enquiry to arrival.
              </p>
            </FadeIn>

            <div className="mt-8 space-y-3.5">
              {missionPoints.map((point, index) => (
                <FadeIn key={point} delay={index * 0.05}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1247B8]">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <span className="text-sm font-medium leading-6 text-[#334155] sm:text-base">
                      {point}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. License / trust section                                         */
/* ------------------------------------------------------------------ */

function LicenseTrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#071B49] py-20 sm:py-24">
      {/* Subtle decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#1247B8]/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#1247B8]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
        <FadeIn>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[22px] border border-white/10 bg-white/10 text-cyan-300">
            <Landmark size={38} strokeWidth={1.4} />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-cyan-300/70" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Trust & Compliance
            </span>

            <span className="h-px w-10 bg-cyan-300/70" />
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Government Licensed &amp; Registered
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.8] text-blue-100/80 sm:text-lg">
            SL International operates as a Government of India licensed
            recruitment consultancy, registered with the Ministry of Overseas
            Indian Affairs.
          </p>

          {/* License details */}
          <div className="mx-auto mt-10 grid max-w-2xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            <div className="bg-[#071B49]/80 px-6 py-6">
              <ShieldCheck
                size={22}
                className="mx-auto text-cyan-300"
                strokeWidth={1.6}
              />

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white">
                Govt. of India
              </p>

              <p className="mt-1 text-[11px] leading-4 text-blue-100/70">
                Registered Consultancy
              </p>
            </div>

            <div className="bg-[#071B49]/80 px-6 py-6">
              <Globe2
                size={22}
                className="mx-auto text-cyan-300"
                strokeWidth={1.6}
              />

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white">
                Ministry
              </p>

              <p className="mt-1 text-[11px] leading-4 text-blue-100/70">
                Overseas Indian Affairs
              </p>
            </div>

            <div className="bg-[#071B49]/80 px-6 py-6">
              <Handshake
                size={22}
                className="mx-auto text-cyan-300"
                strokeWidth={1.6}
              />

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white">
                Candidate First
              </p>

              <p className="mt-1 text-[11px] leading-4 text-blue-100/70">
                Transparent Process
              </p>
            </div>
          </div>

          {/* License number */}
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-5 py-3">
            <FileCheck2 size={17} className="shrink-0 text-cyan-300" />

            <span className="text-xs font-semibold tracking-wide text-white/90 sm:text-sm">
              License No.: B-1066/TEL/PER/1000+/5/9420/2018
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <AboutHero />

        <WelcomeSection />

        <OverviewSection />

        <JourneySection />

        <SolutionsSection />

        <VisionSection />

        <MissionSection />

        <LicenseTrustSection />

        <FinalCTA />
      </main>
    </MotionConfig>
  );
}
