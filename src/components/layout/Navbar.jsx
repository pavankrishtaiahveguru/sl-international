"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlinePhone,
  HiOutlineArrowRight,
} from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* =========================================================
          DESKTOP / MAIN NAVBAR
      ========================================================== */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-white"
        }`}
      >
        <div
          className="
            mx-auto flex h-[78px] w-full max-w-[1800px] items-center gap-4
            px-4
            sm:px-6
            lg:px-8
            xl:px-12
          "
        >
          {/* =====================================================
              BRAND / LOGO
          ====================================================== */}
          <Link
            href="/"
            aria-label="SL International Home"
            className="relative z-50 md:left-28 flex min-w-0 shrink items-center gap-3"
          >
            {/* Logo */}
            <div
              className="
                flex
                h-[clamp(48px,15vw,56px)]
                w-[clamp(48px,15vw,56px)]
                shrink-0
                items-center
                justify-center
              "
            >
              <Image
                src="/images/logo/logo.png"
                alt="SL International Logo"
                width={56}
                height={56}
                priority
                className="h-full w-full object-contain"
              />
            </div>

            {/* Brand Text */}
            <div className="flex min-w-0 flex-col leading-none">
              {/* Company Name */}
              <div className="relative inline-block self-start">
                <p
                  className="
                    whitespace-nowrap
                    text-[clamp(13px,3.8vw,14px)]
                    font-bold
                    tracking-[0.08em]
                    text-[#1247B8]
                    sm:text-lg
                    sm:tracking-[0.14em]
                  "
                >
                  SL INTERNATIONAL
                </p>

                {/* Company Name Underline */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-0.5
                    w-full
                    rounded-full
                    bg-[#1247B8]
                  "
                />
              </div>

              {/* Company Subtitle */}
              <p
                className="
                  mt-2
                  whitespace-nowrap
                  text-[clamp(7px,2vw,8px)]
                  font-semibold
                  tracking-[0.12em]
                  text-[#1247B8]
                  sm:mt-2.5
                  sm:text-[9px]
                  sm:tracking-[0.16em]
                "
              >
                OVERSEAS MANPOWER CONSULTANTS
              </p>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2.5 text-[14px] font-semibold transition-colors duration-200 ${
                    active
                      ? "text-[#1247B8]"
                      : "text-slate-600 hover:text-[#1247B8]"
                  }`}
                >
                  {link.name}

                  {/* Active / Hover underline */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-[#1247B8] transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}
          <div className="hidden shrink-0 lg:flex">
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#1247B8]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                shadow-blue-900/10
                transition-all
                duration-300
                hover:bg-[#092E78]
                hover:shadow-lg
                hover:shadow-blue-900/20
              "
            >
              <HiOutlinePhone className="text-lg" />

              <span>Enquire Now</span>

              <HiOutlineArrowRight
                className="
                  text-base
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              relative
              z-50
              ml-auto
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              text-slate-700
              transition-all
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-[#1247B8]
              lg:hidden
            "
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU OVERLAY
      ========================================================== */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <div
        className={`fixed top-0 right-0 z-40 h-dvh w-[88%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-24">
          {/* Mobile Navigation */}
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between border-b border-slate-100 py-4 text-base font-semibold transition-colors ${
                    active
                      ? "text-[#1247B8]"
                      : "text-slate-700 hover:text-[#1247B8]"
                  }`}
                >
                  <span>{link.name}</span>

                  {active && (
                    <span className="h-2 w-2 rounded-full bg-[#1247B8]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#1247B8]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-[#092E78]
              "
            >
              <HiOutlinePhone className="text-lg" />
              Enquire Now
              <HiOutlineArrowRight className="text-base" />
            </Link>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Connecting right talent with
              <br />
              right opportunities worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          NAVBAR SPACER
      ========================================================== */}
      <div className="h-[78px]" />
    </>
  );
}
