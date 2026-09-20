"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "./Icons";
import { company, navLinks } from "@/lib/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"id" | "en">("id");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="sticky top-4 z-50 mt-4 shell">
      <header className="nav-shell">
        <a href="#top" className="flex-shrink-0" aria-label={company.name}>
          <Image
            src="/logo.png"
            alt={`${company.name} logo`}
            width={2500}
            height={718}
            priority
            sizes="(max-width: 640px) 104px, (max-width: 1024px) 126px, 150px"
            className="h-auto w-[104px] sm:w-[126px] lg:w-[150px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="pill">
            <Icon name="thermometer" className="h-4 w-4" />
            Cold chain −18°C
          </span>
          <a href="#kontak" className="btn btn-solid px-5 py-2.5 text-sm">
            Hubungi kami
          </a>
        </div>

        <button
          className="relative z-[60] -mr-1 p-2 text-[var(--kfi-forest)] lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          <span className="flex w-6 flex-col items-end gap-1.5">
            <span
              className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] bg-current transition-transform duration-300 ${
                isOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-4"
              }`}
            />
          </span>
        </button>
      </header>

      {/* Lapisan gelap di belakang panel menu */}
      <div
        className={`fixed inset-0 z-40 bg-[rgba(11,39,33,0.45)] backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Panel menu */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col bg-white px-6 py-8 shadow-2xl transition-transform duration-400 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Image
          src="/logo.png"
          alt={`${company.name} logo`}
          width={300}
          height={86}
          className="h-auto w-[132px]"
        />
        <p className="mt-5 text-sm leading-7 text-[var(--kfi-ink-soft)]">
          {company.positioning} — untuk HORECA, ritel, industri pangan, dan pasar ekspor.
        </p>

        <nav className="mt-8 flex flex-col divide-y divide-[var(--kfi-line)] border-y border-[var(--kfi-line)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-4 font-display text-lg font-semibold text-[var(--kfi-forest)]"
            >
              {link.label}
              <Icon name="check" className="h-4 w-4 text-[var(--kfi-teal)] opacity-0" />
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="pill">
            <Icon name="thermometer" className="h-4 w-4" />
            Cold chain −18°C
          </span>
          <span className="pill">
            <Icon name="sparkle" className="h-4 w-4" />
            Higienis &amp; halal
          </span>
        </div>

        <a
          href="#kontak"
          onClick={() => setIsOpen(false)}
          className="btn btn-solid mt-6 w-full"
        >
          Hubungi kami
        </a>

        <div className="mt-auto flex items-center gap-1 rounded-full border border-[var(--kfi-line)] p-1 self-start">
          {(["id", "en"] as const).map((code) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                lang === code
                  ? "bg-[var(--kfi-deep)] text-white"
                  : "text-[var(--kfi-ink-soft)]"
              }`}
            >
              {code === "id" ? "Indonesia" : "English"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}