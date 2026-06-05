"use client";

import { useState } from "react";

const faqs = [
  {
    question: "PT Kreatif Food Indonesia menjual produk apa saja?",
    answer: (
      <>
        <p>Kami fokus menyediakan kebutuhan ayam untuk usaha kuliner dan distribusi, yaitu:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Ayam frozen (karkas & potongan beku)</li>
          <li>Ayam fresh (potong hari)</li>
          <li>Karkas utuh siap olah</li>
          <li>Potongan premium: dada, paha, sayap, fillet</li>
        </ul>
      </>
    ),
  },
  {
    question: "Apakah PT Kreatif Food melayani pembelian dalam jumlah besar?",
    answer: (
      <>
        <p>Ya, kami fokus melayani kebutuhan skala usaha dan distribusi B2B.</p>
        <p className="mt-2">Cocok untuk:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Restoran & rumah makan</li>
          <li>Katering & cloud kitchen</li>
          <li>Warung makan & warteg</li>
          <li>Distributor & pedagang pasar</li>
          <li>Hotel & food service</li>
        </ul>
      </>
    ),
  },
  {
    question: "Bagaimana sistem cold chain PT Kreatif Food Indonesia?",
    answer: (
      <>
        <p>Kami menjaga kualitas produk melalui rantai dingin yang tidak terputus dari processing plant hingga ke tangan Anda.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Armada pengiriman berpendingin</li>
          <li>Suhu terkontrol sepanjang distribusi</li>
          <li>Produk higienis dan segar tiba di tujuan</li>
          <li>Standar kebersihan ketat setiap batch</li>
        </ul>
      </>
    ),
  },
  {
    question: "Apakah produk PT Kreatif Food sudah bersertifikat Halal?",
    answer: (
      <>
        <p>Ya, seluruh produk ayam kami memenuhi standar halal dan NKV (Nomor Kontrol Veteriner) yang ditetapkan pemerintah.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Bersertifikat halal resmi</li>
          <li>Proses penyembelihan sesuai syariat</li>
          <li>Pengawasan mutu ketat setiap proses</li>
        </ul>
      </>
    ),
  },
  {
    question: "Bagaimana sistem pembayaran di PT Kreatif Food Indonesia?",
    answer:
      "Pembayaran dapat dilakukan melalui transfer bank, virtual account, maupun sistem pembayaran sesuai kesepakatan kerja sama jangka panjang.",
  },
  {
    question: "Apakah PT Kreatif Food menerima kerja sama bisnis jangka panjang?",
    answer: (
      <>
        <p>Tentu. Kami membuka kerja sama untuk kebutuhan supply ayam rutin dan distribusi jangka panjang.</p>
        <p className="mt-2">
          Tim kami siap menjadi partner pasokan ayam terpercaya — stok stabil, jadwal pengiriman konsisten, dan kualitas terjaga setiap batch untuk bisnis kuliner Anda.
        </p>
      </>
    ),
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8 lg:px-10">
      <div className="section-heading mx-auto mb-12 flex w-full flex-col items-center justify-center text-center">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-title w-full text-center">
          Pertanyaan yang sering diajukan.
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`overflow-hidden rounded-[2rem] border border-[var(--color-leaf)]/10 p-6 md:p-8 shadow-[0_24px_60px_rgba(26,124,52,0.08)] backdrop-blur transition-all duration-300 ${
                isOpen ? "bg-white/90 shadow-lg" : "bg-white/60 hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
              >
                <h3 className={`text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] transition-colors ${isOpen ? "text-[var(--color-leaf)]" : ""}`}>
                  {faq.question}
                </h3>
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-[var(--color-leaf)] text-white shadow-md" : "bg-[var(--color-leaf)]/10 text-[var(--color-leaf)]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-4 pr-12 text-base leading-7 text-[var(--color-ink-soft)]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}