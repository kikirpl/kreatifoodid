"use client";

import Image from "next/image";

export default function GabungMitra() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="cta-panel group overflow-hidden">
        {/* Decorative elements */}
        <div className="cta-glow opacity-50 transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--color-sun)] animate-pulse" />
              Gabung Mitra Kreatif Food • Sedang Tahap Pengembangan
            </div>

            <h2 className="mt-8 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl text-balance">
              Jadilah Bagian dari <span className="text-[var(--color-cream-deep)]">Jaringan</span> Pasokan Ayam Terbaik.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Dapatkan akses prioritas stok ayam frozen & fresh, jadwal pengiriman yang konsisten,
              dan cold chain terjaga setiap hari. Kami sedang mempersiapkan sistem kemitraan
              terbaik untuk memastikan bisnis kuliner Anda tidak pernah kehabisan stok.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] border border-white/15 bg-white/10 p-8 text-center backdrop-blur-xl lg:min-w-[320px]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#2aa356"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">Hubungi Kami</p>
              <p className="mt-2 text-sm text-white/70">Ingin jadi mitra pertama?</p>
            </div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-2xl bg-[#25D366] px-6 py-4 text-center text-base font-bold text-white shadow-xl shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#20bd5a] active:scale-[0.98]"
            >
              Chat ke WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}