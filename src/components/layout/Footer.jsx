"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Overseas Recruitment",
  "Visa & Documentation",
  "Travel Assistance",
  "Medical & Insurance",
  "Post Departure Support",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#071B49] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1.3fr]">
          {/* Company */}
          <div>
            <Link
              href="/"
              className="inline-flex rounded-xl bg-white px-4 py-3"
            >
              <Image
                src="/images/logo/logo.png"
                alt="SL International"
                width={170}
                height={90}
                className="h-auto w-[145px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              Connecting the right talent with the right opportunities
              worldwide. Building careers and creating opportunities through
              professional overseas manpower solutions.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <h2 className="text-lg">Follow us </h2>
              <br />
              <a
                href="https://www.instagram.com/slinternationaltravel/"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative inline-block text-sm font-bold uppercase tracking-[0.15em] text-white">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 rounded-full bg-[#F59E0B]" />
            </h3>

            <ul className="mt-7 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#16A9E8] opacity-0 transition-opacity group-hover:opacity-100" />

                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="relative inline-block text-sm font-bold uppercase tracking-[0.15em] text-white">
              Our Services
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 rounded-full bg-[#F59E0B]" />
            </h3>

            <ul className="mt-7 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="group flex items-start gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16A9E8]" />

                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="relative inline-block text-sm font-bold uppercase tracking-[0.15em] text-white">
              Get In Touch
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 rounded-full bg-[#F59E0B]" />
            </h3>

            <div className="mt-7 space-y-5">
              {/* Phone */}
              <a href="tel:+917702466534" className="group flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#16A9E8] transition-colors group-hover:bg-[#16A9E8] group-hover:text-white">
                  <FaPhoneAlt className="text-sm" />
                </span>

                <span>
                  <span className="block text-xs text-slate-400">Call Us</span>

                  <span className="mt-1 block text-sm font-medium text-slate-200 group-hover:text-white">
                    +91 77024 66534
                  </span>
                </span>
              </a>

              {/* Email */}
              <div className="group flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#16A9E8] transition-colors group-hover:bg-[#16A9E8] group-hover:text-white">
                  <FaEnvelope className="text-sm" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-slate-400">Email Us</span>

                  <span className="mt-1 flex flex-col items-start gap-1">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        "slinternationaltravel@gmail.com",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-sm font-medium text-slate-200 transition-colors hover:text-white"
                    >
                      slinternationaltravel@gmail.com
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        "hr.slintl@gmail.com",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-sm font-medium text-slate-200 transition-colors hover:text-white"
                    >
                      hr.slintl@gmail.com
                    </a>
                  </span>
                </span>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917702466534?text=Hello%20SL%20International,%20I%20would%20like%20to%20enquire%20about%20your%20overseas%20recruitment%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                  <FaWhatsapp className="text-base" />
                </span>

                <span>
                  <span className="block text-xs text-slate-400">WhatsApp</span>

                  <span className="mt-1 block text-sm font-medium text-slate-200 group-hover:text-white">
                    Chat With Us
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-14 grid gap-5 border-t border-white/10 pt-10 md:grid-cols-2">
          {/* Head Office */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1247B8] text-white">
                <FaMapMarkerAlt />
              </span>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  Head Office
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
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

          {/* Branch Office */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1247B8] text-white">
                <FaMapMarkerAlt />
              </span>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  Branch Office
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Door No. 3-3-2622/1, Lavanya Arcade,
                  <br />
                  2nd Floor, Opp. Chaitanya Public School,
                  <br />
                  Gayatri Nagar, Kotagally,
                  <br />
                  Nizamabad - 503001.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* License / Trust */}
        <div className="mt-8 rounded-2xl border border-blue-400/10 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-400/10 px-5 py-5">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#16A9E8]">
                Govt. of India Ministry of Overseas Indian Affairs
              </p>

              <p className="mt-1 text-sm text-slate-300">
                Licensed Overseas Manpower Consultants
              </p>
            </div>

            <p className="text-xs font-medium text-slate-400">
              Lic No. B-1066/TEL/PER/1000+/5/9420/2018
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-center text-xs text-slate-400 md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-300">
              SL International
            </span>
            . All rights reserved.
          </p>

          <DevelopedByStaffArc />

          {/* Back To Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-[#1247B8] hover:text-white md:mx-0"
          >
            <HiOutlineArrowUp className="text-lg" />
          </button>
        </div>
      </div>
    </footer>
  );
}
