"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { clientCountries } from "@/data/clientLogos";

const filterOptions = [
  { id: "all", label: "All Countries" },
  { id: "uae", label: "UAE" },
  { id: "qatar", label: "Qatar" },
  { id: "oman", label: "Oman" },
  { id: "bahrain", label: "Bahrain" },
  { id: "kuwait", label: "Kuwait" },
  { id: "russia", label: "Russia" },
  { id: "turkey", label: "Turkey" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const createExpandedMap = () =>
  Object.fromEntries(
    clientCountries.map((country) => [country.id, country.id === "uae"]),
  );

export default function ClientsPage() {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedCountries, setExpandedCountries] = useState(createExpandedMap);

  const visibleCountries =
    activeFilter === "all"
      ? clientCountries
      : clientCountries.filter((country) => country.id === activeFilter);

  const handleFilterChange = (countryId) => {
    setActiveFilter(countryId);

    if (countryId === "all") {
      setExpandedCountries(createExpandedMap());
      return;
    }

    setExpandedCountries((prev) => ({
      ...Object.fromEntries(
        clientCountries.map((country) => [country.id, false]),
      ),
      [countryId]: true,
    }));
  };

  const toggleCountry = (countryId) => {
    setExpandedCountries((prev) => ({
      ...prev,
      [countryId]: !prev[countryId],
    }));
  };

  return (
    <main className="overflow-x-hidden bg-white text-slate-900">
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-5 py-12 text-center sm:px-8 sm:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#1247B8] sm:w-10" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1247B8] sm:text-xs">
                Our Clients
              </span>
              <span className="h-px w-8 bg-[#1247B8] sm:w-10" />
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#071B49] sm:text-4xl lg:text-[2.8rem]">
              Trusted Partners Across Global Destinations
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#475569] sm:text-base">
              We collaborate with companies across international markets,
              connecting talented professionals with overseas employment
              opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filterOptions.map((option) => {
              const isActive = activeFilter === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleFilterChange(option.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A9E8] focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-[#1247B8] bg-[#1247B8] text-white shadow-sm"
                      : "border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#BFD7F5] hover:text-[#1247B8]"
                  }`}
                >
                  {option.id !== "all" &&
                    (() => {
                      const selectedCountry = clientCountries.find(
                        (country) => country.id === option.id,
                      );

                      if (!selectedCountry || !selectedCountry.flag) {
                        return (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[9px] font-bold text-slate-700">
                            {selectedCountry?.shortName
                              ?.slice(0, 2)
                              .toUpperCase() || "•"}
                          </span>
                        );
                      }

                      return (
                        <div className="relative h-5 w-5 overflow-hidden rounded-full border border-white/60 bg-slate-100">
                          <Image
                            src={selectedCountry.flag}
                            alt=""
                            fill
                            sizes="20px"
                            className="object-cover"
                          />
                        </div>
                      );
                    })()}
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] pb-14 pt-6 sm:pb-18 sm:pt-8 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-5">
            {visibleCountries.map((country) => {
              const isExpanded =
                activeFilter === "all" ? expandedCountries[country.id] : true;

              return (
                <motion.article
                  key={country.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={
                    prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
                >
                  <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`${country.id}-panel`}
                      onClick={() =>
                        activeFilter === "all"
                          ? toggleCountry(country.id)
                          : undefined
                      }
                      className={`flex flex-1 items-center justify-between gap-3 text-left ${
                        activeFilter === "all"
                          ? "cursor-pointer"
                          : "cursor-default"
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        {country.flag ? (
                          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-[#E2E8F0] bg-slate-100">
                            <Image
                              src={country.flag}
                              alt=""
                              fill
                              sizes="32px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-slate-100 text-[10px] font-bold text-slate-700">
                            {country.shortName.slice(0, 2).toUpperCase()}
                          </div>
                        )}

                        <div className="min-w-0">
                          <h2 className="truncate text-base font-semibold text-[#071B49] sm:text-lg">
                            {country.name}
                          </h2>
                          <p className="text-xs text-[#475569] sm:text-sm">
                            {country.logoCount}{" "}
                            {country.logoCount === 1 ? "company" : "companies"}
                          </p>
                        </div>
                      </div>

                      {activeFilter === "all" && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-semibold text-[#475569] sm:text-xs">
                          {isExpanded ? "Hide" : "Show"}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </span>
                      )}
                    </button>
                  </div>

                  {isExpanded && (
                    <div
                      id={`${country.id}-panel`}
                      className="border-t border-[#E2E8F0] bg-[#F8FAFC] p-3 sm:p-4"
                    >
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                        {country.logos.map((logo) => (
                          <div
                            key={logo.id}
                            className="group flex h-28 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#BFD7F5] hover:shadow-md"
                          >
                            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
                              <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={240}
                                height={120}
                                sizes="(max-width: 640px) 38vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, (max-width: 1280px) 16vw, 12vw"
                                className="max-h-[72px] w-auto max-w-[86%] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[2rem] bg-[#071B49] px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1247B8]/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#16A9E8]/20 blur-3xl"
            />

            <div className="relative">
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#16A9E8]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BFDCFF] sm:text-xs">
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

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1247B8] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5F9FF]"
                >
                  Enquire Now
                  <HiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/917702466534"
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
