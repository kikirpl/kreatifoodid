"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"id" | "en">("id");

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 fade-up">
      <header className="flex items-center justify-between gap-4 rounded-[2rem] border border-white/60 bg-white/70 px-4 py-3 shadow-[0_18px_60px_rgba(26,124,52,0.08)] backdrop-blur md:px-6 transition-all">
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="PT Kreatif Food Indonesia logo"
            width={2500}
            height={718}
            priority
            sizes="(max-width: 640px) 104px, (max-width: 768px) 126px, 150px"
            className="h-auto w-[104px] shrink-0 sm:w-[126px] md:w-[150px]"
          />
        </div>

        <p className="hidden flex-1 text-center text-sm leading-6 text-[var(--color-ink-soft)] lg:block">
          Supplier ayam frozen & fresh berkualitas untuk restoran, katering, dan UMKM kuliner.
        </p>

        {/* Hamburger Menu Button */}
        <div className="flex-shrink-0">
          <button
            className="relative z-[60] p-2 text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isOpen ? "w-6 translate-y-[8px] rotate-45" : "w-6"}`} />
              <span className={`block h-[2px] bg-current transition-all duration-300 w-6 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-4"}`} />
            </div>
          </button>
        </div>

        {/* Desktop Menu items */}
        <div className="hidden w-full items-center gap-6 sm:w-auto sm:justify-end">
          <nav className="flex items-center gap-6 mr-2">
            <a href="#layanan" className="text-sm font-semibold text-gray-800 hover:text-[var(--color-leaf)] transition-colors">Layanan</a>
            <a href="#produk" className="text-sm font-semibold text-gray-800 hover:text-[var(--color-leaf)] transition-colors">Produk</a>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-0.5 bg-gray-100/80 p-1 rounded-full border border-gray-200/50 backdrop-blur-sm">
            <label className={`cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              lang === "id" ? "bg-white text-[var(--color-leaf)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "text-gray-500 hover:text-gray-800"
            }`}>
              <input
                type="radio"
                name="desktop-language"
                value="id"
                checked={lang === "id"}
                onChange={() => setLang("id")}
                className="hidden"
              />
              <span className="text-base leading-none">🇮🇩</span>
              <span>ID</span>
            </label>
            <label className={`cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              lang === "en" ? "bg-white text-[var(--color-leaf)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "text-gray-500 hover:text-gray-800"
            }`}>
              <input
                type="radio"
                name="desktop-language"
                value="en"
                checked={lang === "en"}
                onChange={() => setLang("en")}
                className="hidden"
              />
              <span className="text-base leading-none">🇬🇧</span>
              <span>EN</span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[var(--color-sun)]/15 px-4 py-2 text-sm font-semibold text-[var(--color-sun-deep)]">
              Cold Chain
            </span>
            <span className="rounded-full border border-[var(--color-leaf)]/15 px-4 py-2 text-sm font-medium text-[var(--color-leaf)]">
              Halal & NKV
            </span>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-[initial] top-0 left-0 w-screen h-screen z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel - Slide from right */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-4/5 max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out flex flex-col px-6 py-24 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none invisible"
        }`}
      >
        <Image
          src="/logo.png"
          alt="PT Kreatif Food Indonesia logo"
          width={150}
          height={45}
          className="mb-8"
        />
        <p className="mb-8 text-sm leading-6 text-[var(--color-ink-soft)]">
          Supplier ayam frozen & fresh berkualitas untuk restoran, katering, dan UMKM kuliner.
        </p>

        <nav className="flex flex-col gap-6 border-b border-gray-100 pb-8 mb-8">
          <a href="#layanan" onClick={() => setIsOpen(false)} className="text-xl font-semibold text-gray-800 hover:text-[var(--color-leaf)] transition-colors">Layanan</a>
          <a href="#produk" onClick={() => setIsOpen(false)} className="text-xl font-semibold text-gray-800 hover:text-[var(--color-leaf)] transition-colors">Produk</a>
        </nav>

        <div className="flex flex-col gap-4">
          {/* Language Switcher - Mobile */}
          <div className="flex items-center gap-0.5 bg-gray-100 p-1 rounded-full border border-gray-200 self-start mb-2">
            <label className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              lang === "id" ? "bg-white text-[var(--color-leaf)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "text-gray-500 hover:text-gray-800"
            }`}>
              <input
                type="radio"
                name="mobile-language"
                value="id"
                checked={lang === "id"}
                onChange={() => setLang("id")}
                className="hidden"
              />
              <span className="text-lg leading-none">🇮🇩</span>
              <span>Indonesia</span>
            </label>
            <label className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              lang === "en" ? "bg-white text-[var(--color-leaf)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "text-gray-500 hover:text-gray-800"
            }`}>
              <input
                type="radio"
                name="mobile-language"
                value="en"
                checked={lang === "en"}
                onChange={() => setLang("en")}
                className="hidden"
              />
              <span className="text-lg leading-none">🇬🇧</span>
              <span>English</span>
            </label>
          </div>

          <span className="inline-flex items-center justify-center rounded-full bg-[var(--color-sun)]/15 px-4 py-3 text-sm font-semibold text-[var(--color-sun-deep)]">
            Cold Chain Terjaga
          </span>
          <span className="inline-flex items-center justify-center rounded-full border border-[var(--color-leaf)]/15 px-4 py-3 text-sm font-medium text-[var(--color-leaf)]">
            Halal & NKV
          </span>
        </div>
      </div>
    </div>
  );
}