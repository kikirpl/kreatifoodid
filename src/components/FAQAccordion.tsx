"use client";

import { useState, type ReactNode } from "react";
import Icon from "./Icons";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Produk apa saja yang tersedia di PT Kreatif Food Indonesia?",
    answer: (
      <>
        <p>
          Ada delapan produk ayam beku yang dikelompokkan ke dalam tiga kategori:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Produk utama: karkas ayam, boneless dada tanpa kulit, boneless paha tanpa kulit</li>
          <li>Sampingan bernilai tinggi: sayap ayam, kulit ayam, hati ayam</li>
          <li>Sampingan industri: kerongkongan dan tulang paha (TLP)</li>
        </ul>
        <p className="mt-3">
          Karkas tersedia dalam 14 varian bobot, mulai 0,4 kg sampai 1,7 kg.
        </p>
      </>
    ),
  },
  {
    question: "Siapa saja yang dilayani?",
    answer: (
      <>
        <p>Pasokan kami disiapkan untuk empat segmen:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>HORECA — hotel, restoran, rumah makan, dan katering</li>
          <li>Ritel modern dan toko frozen food</li>
          <li>Industri pengolahan pangan — nugget, sosis, kaldu, ekstrak rasa, pet food</li>
          <li>Pasar ekspor serta kebutuhan rumah tangga melalui jaringan dagang</li>
        </ul>
      </>
    ),
  },
  {
    question: "Bagaimana rantai dingin dijaga sampai ke lokasi mitra?",
    answer: (
      <>
        <p>
          Produk melewati lima tahap yang seluruhnya terkendali suhunya: seleksi bahan baku,
          pemotongan dan pemorsian, pembekuan cepat, penyimpanan cold storage, lalu distribusi
          dengan armada berpendingin.
        </p>
        <p className="mt-3">Suhu simpan ideal dijaga di sekitar −18°C sepanjang proses.</p>
      </>
    ),
  },
  {
    question: "Apakah produknya higienis dan halal?",
    answer: (
      <p>
        Ya. Standar higienitas dan prinsip kehalalan diterapkan di setiap tahap pengolahan,
        dan produk diproses serta disimpan pada suhu terkendali untuk menekan risiko
        kontaminasi. Dokumen pendukung mutu dapat kami kirimkan atas permintaan mitra.
      </p>
    ),
  },
  {
    question: "Apa yang dimaksud zero waste processing?",
    answer: (
      <p>
        Hampir 100% bagian ayam dimanfaatkan. Selain produk utama, bagian seperti kulit, hati,
        kerongkongan, dan tulang paha diolah menjadi produk bernilai tambah untuk makanan
        olahan, kaldu, industri ekstrak rasa, serta pet food — sehingga limbah ditekan dan nilai
        per ekor naik.
      </p>
    ),
  },
  {
    question: "Apa beda merek AYAMKITA, Prime Chicken, dan KFI Poultry Premium?",
    answer: (
      <>
        <p>Ketiganya melayani segmen yang berbeda:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>AYAMKITA® — merek utama untuk pasar tradisional dan modern</li>
          <li>Prime Chicken® — lini premium</li>
          <li>KFI Poultry Premium® — khusus HORECA dan industri</li>
        </ul>
      </>
    ),
  },
  {
    question: "Bagaimana cara memulai kerja sama?",
    answer: (
      <p>
        Hubungi tim kami melalui WhatsApp atau email dengan menyebutkan jenis produk, perkiraan
        volume, frekuensi pengiriman, dan lokasi. Kami akan menyiapkan penawaran, jadwal
        pasokan, serta skema pembayaran sesuai kesepakatan kerja sama.
      </p>
    ),
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="band band-mist">
      <div className="shell mx-auto max-w-4xl">
        <p className="eyebrow">
          <span className="eyebrow-num">13</span>
          <span className="eyebrow-rule" />
          FAQ
        </p>
        <h2 className="section-title">Pertanyaan yang sering diajukan</h2>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="faq-item" data-open={isOpen}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    {faq.question}
                    <span className="faq-toggle" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m19 9-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="faq-answer">{faq.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-[1.25rem] border border-[var(--kfi-line)] bg-white p-6">
          <span className="icon-badge icon-badge-sm">
            <Icon name="handshake" />
          </span>
          <p className="text-sm text-[var(--kfi-ink-soft)]">
            Pertanyaan Anda belum terjawab?
          </p>
          <a href="#kontak" className="btn btn-solid ml-auto px-5 py-2.5 text-sm">
            Hubungi tim kami
          </a>
        </div>
      </div>
    </section>
  );
}