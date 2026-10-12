"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PhoneInput, {
  getCountryCallingCode,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

function CountrySelector({
  value,
  options,
  onChange,
  iconComponent: FlagIcon,
  ...selectProps
}) {
  const selectedCountry = options.find((option) => option.value === value);

  return (
    <div className="relative flex min-w-23 items-center gap-2 border-r border-slate-200 pr-3">
      <select
        {...selectProps}
        value={value || "ZZ"}
        onChange={(event) =>
          onChange(event.target.value === "ZZ" ? undefined : event.target.value)
        }
        className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
      >
        {options.map((option) => (
          <option
            key={option.divider ? "divider" : option.value || "ZZ"}
            value={option.divider ? "|" : option.value || "ZZ"}
            disabled={option.divider}
          >
            {option.label}
          </option>
        ))}
      </select>

      {value && selectedCountry && (
        <FlagIcon
          aria-hidden="true"
          country={value}
          label={selectedCountry.label}
        />
      )}
      <span className="whitespace-nowrap text-sm font-medium text-[#334155]">
        {value ? `+${getCountryCallingCode(value)}` : "Country"}
      </span>
      <ChevronDown
        aria-hidden="true"
        size={14}
        className="shrink-0 text-slate-500"
      />
    </div>
  );
}

export default function ContactPage() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!phone) {
      setPhoneError("Please enter your phone number.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setPhoneError("");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F5F9FF]">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 right-[-100px] h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Breadcrumb */}
            <div className="mb-5 flex items-center justify-center gap-2 text-sm text-slate-400">
              <span>Home</span>
              <span>/</span>
              <span className="font-medium text-[#1247B8]">Contact Us</span>
            </div>

            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#1247B8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              Let&apos;s Talk About Your{" "}
              <span className="text-[#1247B8]">Global Opportunities</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">
              Have a question about overseas recruitment, documentation, travel
              assistance or our services? Get in touch with the SL International
              team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* =====================================================
                LEFT — FORM
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] sm:p-8 lg:p-10"
            >
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                  Send Us A Message
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#0F172A] sm:text-3xl">
                  How Can We Help?
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  Fill out the form and our team will get back to you with the
                  relevant information.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#334155]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#1247B8] focus:bg-white focus:ring-4 focus:ring-blue-100/70"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#334155]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#1247B8] focus:bg-white focus:ring-4 focus:ring-blue-100/70"
                    />
                  </div>

                  <div className="min-w-0">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#334155]"
                    >
                      Phone Number
                    </label>

                    <div
                      className={`rounded-xl border bg-slate-50/50 px-4 py-3.5 transition-all focus-within:bg-white focus-within:ring-4 ${
                        phoneError
                          ? "border-red-300 focus-within:border-red-400 focus-within:ring-red-100/70"
                          : "border-slate-200 focus-within:border-[#1247B8] focus-within:ring-blue-100/70"
                      }`}
                    >
                      <PhoneInput
                        id="phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        defaultCountry="IN"
                        countrySelectComponent={CountrySelector}
                        value={phone || undefined}
                        onChange={(value) => {
                          setPhone(value || "");
                          if (phoneError) setPhoneError("");
                        }}
                        aria-invalid={Boolean(phoneError)}
                        aria-describedby={
                          phoneError ? "phone-error" : undefined
                        }
                        numberInputProps={{
                          className:
                            "min-w-0 w-full bg-transparent pl-3 text-sm text-[#0F172A] outline-none placeholder:text-slate-400 focus-visible:outline-none",
                          style: { outline: "none" },
                        }}
                      />
                    </div>

                    {phoneError && (
                      <p
                        id="phone-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {phoneError}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-[#334155]"
                  >
                    Service Interested In
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-[#475569] outline-none transition-all focus:border-[#1247B8] focus:bg-white focus:ring-4 focus:ring-blue-100/70"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="recruitment">Overseas Recruitment</option>

                    <option value="visa">Visa & Documentation</option>

                    <option value="travel">Travel Assistance</option>

                    <option value="medical">Medical & Insurance</option>

                    <option value="post-departure">
                      Post-Departure Support
                    </option>

                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#334155]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#1247B8] focus:bg-white focus:ring-4 focus:ring-blue-100/70"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1247B8] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#092E78] hover:shadow-xl hover:shadow-blue-900/15"
                >
                  Send Enquiry
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>
            </motion.div>

            {/* =====================================================
                RIGHT — CONTACT DETAILS
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col"
            >
              {/* Intro */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1247B8]">
                  Contact Information
                </p>

                <h2 className="mt-2 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
                  We&apos;re Here to{" "}
                  <span className="text-[#1247B8]">Help</span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-6 text-[#64748B] sm:text-base">
                  Reach out to us for enquiries regarding overseas recruitment
                  and our support services.
                </p>
              </div>

              {/* Contact cards */}
              <div className="mt-8 space-y-4">
                {/* Phone */}
                <a
                  href="tel:+917702466534"
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(18,71,184,0.08)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1247B8] transition-colors duration-300 group-hover:bg-[#1247B8] group-hover:text-white">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#0F172A]">
                      +91 77024 66534
                    </p>
                  </div>
                </a>

                {/* Email */}
                <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(18,71,184,0.08)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1247B8] transition-colors duration-300 group-hover:bg-[#1247B8] group-hover:text-white">
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        "slinternationaltravel@gmail.com",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block break-all text-sm font-bold text-[#0F172A] transition-colors hover:text-[#1247B8]"
                    >
                      slinternationaltravel@gmail.com
                    </a>

                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        "hr.slintl@gmail.com",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block break-all text-xs text-[#64748B] transition-colors hover:text-[#1247B8]"
                    >
                      hr.slintl@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917702466534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(18,71,184,0.08)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1247B8] transition-colors duration-300 group-hover:bg-[#1247B8] group-hover:text-white">
                    <FaWhatsapp size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#0F172A]">
                      Chat With Our Team
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      +91 77024 66534
                    </p>
                  </div>
                </a>
              </div>

              {/* Office */}
              <div className="mt-4 rounded-2xl border border-slate-200 bg-[#F5F9FF] p-5 sm:p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#1247B8] shadow-sm">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Head Office
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-[#0F172A]">
                      2-106/A, 2nd Floor,
                      <br />
                      Above Honda Showroom,
                      <br />
                      Dist: Jagtial, Metpally - 505325,
                      <br />
                      Telangana, India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1247B8]">
                  <Clock3 size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Business Hours
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                    Monday – Saturday
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Contact our team for assistance
                  </p>
                </div>
              </div>

              {/* Trust note */}
              <div className="mt-6 flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-[#1247B8]"
                />

                <p className="text-xs leading-5 text-[#64748B]">
                  SL International is a government-licensed and registered
                  overseas manpower consultancy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
