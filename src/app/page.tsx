import Image from "next/image";
import Navbar from "@/components/Navbar";
import FAQAccordion from "@/components/FAQAccordion";
import LocationSection from "@/components/LocationSection";
import MitraKami from "@/components/MitraKami";
import GabungMitra from "@/components/GabungMitra";
import Footer from "@/components/Footer";

const highlights = [
  {
    title: "Pengiriman Dingin Tepat Waktu",
    text: "Rantai dingin kami dirancang untuk menjaga kualitas ayam frozen dan fresh — dari cold storage langsung ke tangan Anda tanpa putus rantai suhu.",
  },
  {
    title: "Stok Melimpah, Tak Pernah Kosong",
    text: "Pasokan ayam kami bersumber dari jaringan peternak dan processing plant terpercaya — stok tersedia setiap hari untuk volume berapapun.",
  },
  {
    title: "Kualitas Terjamin Setiap Batch",
    text: "Setiap pengiriman melewati seleksi ketat: kebersihan, bobot, kesegaran, dan standar halal — sehingga Anda bisa fokus memasak tanpa khawatir kualitas.",
  },
];

const categories = [
  "Ayam Frozen",
  "Ayam Fresh",
  "Karkas Utuh",
  "Potongan Premium",
  "Pengiriman Cold Chain",
  "Stok Harian",
  "Kreatif Food Indonesia",
  "B2B Kuliner",
];

const stats = [
  { value: "24/7", label: "Cold chain & koordinasi pengiriman aktif" },
  { value: "Fresh", label: "Langsung dari processing plant bersih" },
  { value: "Halal", label: "Bersertifikat & terstandardisasi ketat" },
];

const steps = [
  {
    index: "01",
    title: "Tentukan Kebutuhan",
    text: "Pilih jenis produk — ayam frozen, ayam fresh, karkas utuh, atau potongan spesifik — sesuai menu dan volume operasional harian Anda.",
  },
  {
    index: "02",
    title: "Atur Jadwal Pengiriman",
    text: "Tim Kreatif Food membantu menentukan frekuensi, volume, dan slot pengiriman yang paling efisien untuk dapur atau outlet Anda.",
  },
  {
    index: "03",
    title: "Terima Produk Segar",
    text: "Ayam tiba dalam kondisi prima via armada cold chain — terjaga suhunya, bersih, dan siap langsung digunakan di dapur Anda.",
  },
];

const productCategories = [
  {
    id: "frozen",
    label: "Frozen",
    title: "Ayam Frozen",
    desc: "Karkas & potongan ayam beku berkualitas tinggi — cocok untuk restoran, katering besar, dan cloud kitchen dengan kebutuhan volume tinggi.",
    chipClass: "bg-[#dff2e8] text-[#1a7c34]",
    image: "/frozen.png",
  },
  {
    id: "fresh",
    label: "Fresh",
    title: "Ayam Fresh",
    desc: "Ayam segar potong hari — pilihan utama untuk warung makan, rumah makan, dan usaha kuliner yang mengutamakan cita rasa dan kelezatan.",
    chipClass: "bg-[#fff0f0] text-[#d42b2b]",
    image: "/fresh.png",
  },
  {
    id: "karkas",
    label: "Karkas Utuh",
    title: "Karkas Utuh",
    desc: "Karkas ayam utuh siap olah — bersih, beratnya konsisten, dan tersedia dalam berbagai grade untuk kebutuhan memasak maupun pengolahan lebih lanjut.",
    chipClass: "bg-[#e8f5fe] text-[#1565c0]",
    image: "/karkas.png",
  },
  {
    id: "potongan",
    label: "Potongan",
    title: "Potongan Premium",
    desc: "Dada, paha, sayap, dan fillet — potongan presisi siap pakai untuk menu spesifik, meminimalisir food waste dan menghemat waktu prep di dapur.",
    chipClass: "bg-[#fff8e1] text-[#f57f17]",
    image: "/potongan.png",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="hero-grid" />
        <div className="hero-ring hero-ring-one" />
        <div className="hero-ring hero-ring-two" />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-7xl flex-col px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        <div className="relative z-10 grid flex-1 items-center gap-8 py-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-8">
          <div className="max-w-3xl">

            {/* Brand badge */}
            <div className="fade-up-delayed mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-leaf)]/15 bg-white/80 px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase text-[var(--color-leaf)] shadow-[0_14px_30px_rgba(26,124,52,0.08)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-leaf)] pulse-dot" />
              PT Kreatif Food Indonesia
            </div>

            <h1 className="fade-up mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-7xl">
              Supplier Ayam Frozen & Fresh
              <span className="block bg-gradient-to-r from-[var(--color-leaf)] via-[#2ea84a] to-[var(--color-sun)] bg-clip-text text-transparent">
                Terpercaya untuk Bisnis Kuliner Anda
              </span>
            </h1>

            <p className="fade-up mt-6 max-w-2xl text-lg leading-8 text-[var(--color-ink-soft)] sm:text-xl">
              PT Kreatif Food Indonesia menghadirkan pasokan ayam frozen dan ayam fresh berkualitas
              langsung dari processing plant terpercaya — stok stabil, cold chain terjaga,
              dan pengiriman tepat waktu untuk UMKM, restoran, dan katering.
            </p>

            {/* Product pills */}
            <div className="fade-up mt-6 flex flex-wrap gap-2">
              {["🧊 Ayam Frozen", "🐔 Ayam Fresh", "🔪 Potongan Premium", "📦 Karkas Utuh"].map((item) => (
                <span key={item} className="commodity-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="fade-up mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#layanan"
                className="cta-primary group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white sm:px-7 sm:py-4 sm:text-base"
              >
                Lihat Keunggulan Kami
              </a>
              <a
                href="#produk"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-leaf)]/15 bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--color-leaf)] shadow-[0_18px_40px_rgba(26,124,52,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:px-7 sm:py-4 sm:text-base"
              >
                Jelajahi Produk Kami
              </a>
            </div>

            <div className="fade-up mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-leaf)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Showcase panel */}
          <div className="relative min-h-[420px]">
            <div className="showcase-shell">
              <div className="showcase-panel showcase-panel-main float-slow">
                <p className="text-xs font-bold uppercase tracking-[0.34em] text-[var(--color-leaf)]">
                  Core Promise
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                  Ayam frozen & fresh siap pakai — langsung dari sumber, langsung ke dapur Anda.
                </h2>

                {/* Product mini list */}
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {[
                    { emoji: "🧊", label: "Frozen", sub: "Cold Chain Terjaga" },
                    { emoji: "🐔", label: "Fresh", sub: "Potong Hari Ini" },
                    { emoji: "🔪", label: "Potongan", sub: "Presisi & Bersih" },
                    { emoji: "📦", label: "Karkas", sub: "Utuh & Siap Olah" },
                  ].map((c) => (
                    <div key={c.label} className="commodity-mini-card">
                      <span className="text-xl">{c.emoji}</span>
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-ink)]">{c.label}</p>
                        <p className="text-xs text-[var(--color-ink-soft)]">{c.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.25rem] border border-[var(--color-leaf)]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(232,248,237,0.85))] p-4 shadow-[0_8px_20px_rgba(26,124,52,0.06)]"
                    >
                      <p className="text-sm font-semibold text-[var(--color-ink)]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-ink-soft)]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="showcase-panel showcase-panel-accent float-fast hidden sm:block">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">
                  PT Kreatif Food Indonesia
                </p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">
                  Dari cold storage langsung ke dapur bisnis Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="relative border-y border-[var(--color-leaf)]/10 bg-white/70 py-5 backdrop-blur">
        <div className="marquee-track">
          <div className="marquee-group">
            {[...categories, ...categories].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAYANAN / HIGHLIGHTS ── */}
      <section
        id="layanan"
        className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="section-heading">
          <p className="section-kicker">Kenapa memilih PT Kreatif Food Indonesia</p>
          <h2 className="section-title">
            Tiga keunggulan utama yang membuat pasokan ayam kami menjadi pilihan bisnis kuliner.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className={`feature-card feature-card-${index + 1}`}
            >
              <div className="feature-icon">{`0${index + 1}`}</div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-ink-soft)]">
                {item.text}
              </p>
              <div className="feature-line" />
            </article>
          ))}
        </div>
      </section>

      {/* ── PRODUK ── */}
      <section
        id="produk"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#e8f8ed_0%,#f5fbf5_55%,#fffbf0_100%)] py-20"
      >
        <div className="section-wash section-wash-left" />
        <div className="section-wash section-wash-right" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 mb-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">
              Produk Unggulan: Ayam Frozen & Ayam Fresh
            </p>
            <h2 className="section-title">
              Pasokan Ayam Berkualitas Langsung dari Processing Plant
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-ink-soft)]">
              Kreatif Food Indonesia fokus pada dua lini utama: ayam frozen untuk kebutuhan
              volume besar dan ayam fresh untuk cita rasa terbaik — semua dengan standar
              kebersihan ketat dan cold chain yang tidak terputus.
            </p>
          </div>
        </div>

        <div className="marquee-track py-4">
          <div
            className="marquee-group hover:[animation-play-state:paused]"
            style={{ animationDuration: "50s" }}
          >
            {[...productCategories, ...productCategories].map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="group relative h-[360px] w-[260px] shrink-0 overflow-hidden rounded-[28px] sm:h-[400px] sm:w-[280px]"
              >
                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white">
                  {/* CHIP */}
                  <span
                    className={`mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${item.chipClass}`}
                  >
                    {item.label}
                  </span>

                  {/* TITLE */}
                  <h3 className="max-w-[90%] text-[25px] font-bold leading-[1.1] tracking-[-0.04em] sm:text-[20px]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARA KERJA ── */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="section-heading">
          <p className="section-kicker">Cara kerja</p>
          <h2 className="section-title">
            Proses sederhana, pasokan ayam selalu terjaga tanpa gangguan.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.index} className="process-card">
              <span className="process-index">{step.index}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-ink-soft)]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA PANEL ── */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <div className="cta-panel">
          <div className="cta-glow" />
          <div className="relative z-10 max-w-3xl">
            <p className="section-kicker text-white/80">
              Siap bertumbuh bersama usaha Anda
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Ayam frozen & fresh berkualitas, cold chain terjaga, pengiriman tepat waktu — setiap hari tanpa jeda.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Jadikan Kreatif Food Indonesia sebagai mitra pasokan ayam Anda. Stok stabil,
              kualitas konsisten, dan tim yang memahami ritme operasional bisnis kuliner.
            </p>
          </div>
          <div className="relative z-10 mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-white px-7 py-4 text-base font-semibold text-[var(--color-leaf)] transition-transform duration-300 hover:-translate-y-1"
            >
              Konsultasikan Kebutuhan
            </a>
            <a
              href="#layanan"
              className="rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
            >
              Pelajari Layanan
            </a>
          </div>
        </div>
      </section>

      <LocationSection />
      <MitraKami />
      <GabungMitra />
      <FAQAccordion />
      <Footer />
    </main>
  );
}