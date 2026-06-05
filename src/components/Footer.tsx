import Image from "next/image";

const footerBottomLinks = [
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Syarat Ketentuan", href: "#" },
  { label: "Karir", href: "/careers" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
];

const sitemap = [
  {
    title: "Produk",
    links: [
      { label: "Ayam Frozen", href: "#produk" },
      { label: "Ayam Fresh", href: "#produk" },
      { label: "Karkas Utuh", href: "#produk" },
      { label: "Potongan Premium", href: "#produk" },
    ],
  },
  {
    title: "Ekosistem",
    links: [
      { label: "Tentang Kami", href: "/" },
      { label: "Karir", href: "/careers" },
      { label: "Mitra Kreatif Food", href: "/#mitra" },
      { label: "Lokasi Distribusi", href: "/#lokasi" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { label: "Pusat Bantuan", href: "#" },
      { label: "Kontak Kami", href: "mailto:info@kreatiffood.id" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-leaf)]/10 bg-[linear-gradient(180deg,rgba(232,248,237,0.92),rgba(245,251,245,0.96))]">
      <div className="footer-orb footer-orb-left" />
      <div className="footer-orb footer-orb-right" />
      <div className="footer-grid" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="footer-panel">
          <div className="flex items-center gap-4">
            <div className="rounded-[1.5rem] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_20px_45px_rgba(26,124,52,0.08)]">
              <Image
                src="/logo.png"
                alt="PT Kreatif Food Indonesia logo"
                width={2400}
                height={718}
                loading="lazy"
                sizes="(max-width: 640px) 132px, 160px"
                className="h-auto w-[132px] sm:w-[160px]"
              />
            </div>
            <div className="max-w-sm">
              <p className="section-kicker">Supplier Ayam B2B</p>
              <p className="mt-3 text-base leading-7 text-[var(--color-ink-soft)]">
                Menyediakan pasokan ayam frozen dan fresh berkualitas langsung
                dari processing plant ke bisnis kuliner Anda.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6">
            <div className="footer-card">
              <p className="footer-card-title">Headquarter</p>
              <p className="mt-4 text-lg leading-8 text-[var(--color-ink)]">
                PT Kreatif Food Indonesia
                <br />
                Jl. Sholeh Iskandar No.106,
                <br />
                Kel. Cibadak, Kec. Tanah Sereal,
                <br />
                Kota Bogor, Jawa Barat 16166
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="footer-card">
              <p className="footer-card-title">Follow Us</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className="footer-social-pill"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-card">
              <p className="footer-card-title">Kontak Cepat</p>
              <div className="mt-4 space-y-4 text-[var(--color-ink)]">
                <p className="text-lg font-medium">0251-123 4567</p>
                <p className="text-lg font-medium">0251-123 4568</p>
                <a
                  href="mailto:info@kreatiffood.id"
                  className="inline-flex items-center rounded-full bg-[var(--color-leaf)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-leaf)] transition-transform duration-300 hover:-translate-y-1"
                >
                  info@kreatiffood.id
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="footer-panel footer-panel-cert">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="footer-nav-title">Certified Quality</p>
                <p className="mt-3 max-w-md text-sm leading-7 text-[var(--color-ink-soft)]">
                  Sistem cold chain dirancang untuk menjaga kesegaran, kebersihan,
                  dan keandalan pasokan ayam ke setiap mitra bisnis.
                </p>
              </div>
              <div className="footer-badge footer-badge-main">Fresh</div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="cert-card cert-card-halal">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-leaf)]">
                  Standard
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  Halal
                </p>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                  Proses penyembelihan sesuai syariat dengan pengawasan resmi.
                </p>
              </div>
              <div className="cert-card cert-card-nkv">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-orange-deep)]">
                  Verified
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  NKV
                </p>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                  Nomor Kontrol Veteriner — jaminan mutu dari rantai pasok ke meja makan.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-panel footer-panel-cert overflow-hidden relative group">
            <div className="relative z-10 w-full sm:w-2/3">
              <p className="footer-nav-title">Aplikasi Mobile • Sedang Tahap Pengembangan</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--color-ink-soft)]">
                Gunakan Aplikasi Kreatif Food di HP Anda. Download di App Store dan Playstore.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-ink)] px-4 py-2.5 text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 384 512" className="h-6 w-6 fill-current">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[0.65rem] opacity-80">Download on the</span>
                    <span className="text-sm font-semibold mt-0.5">App Store</span>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-ink)] px-4 py-2.5 text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 512 512" className="h-6 w-6">
                    <path
                      fill="currentColor"
                      d="M325.3 234.3L104.6 13l280.8 161.2c11.2 6.4 18.2 18.2 18.2 31.1s-7 24.7-18.2 31.1l-60.1 34.5zm-220.7-220c-4.4 2.5-7.1 7.2-7.1 12.3v395c0 5.1 2.7 9.8 7.1 12.3l213.6-122.9-213.6-296.7zM425.4 227L350.3 270l-21.7-37.4 96.8-55.6zM132.3 496.3l218-125.4 34.2-59.3-252.2 184.7z"
                    />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[0.65rem] opacity-80">GET IT ON</span>
                    <span className="text-sm font-semibold mt-0.5">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="absolute -bottom-16 -right-10 hidden h-[22rem] w-48 rotate-[15deg] overflow-hidden rounded-[2rem] border-[6px] border-[var(--color-ink)] bg-white shadow-xl transition-all duration-500 group-hover:rotate-0 sm:block">
              <div className="absolute inset-x-0 top-0 mx-auto h-5 w-24 rounded-b-xl bg-[var(--color-ink)]"></div>
              <div className="flex h-full w-full flex-col items-center bg-[linear-gradient(135deg,rgba(232,248,237,1),rgba(245,251,245,1))] px-4 pt-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-leaf)]/10 bg-white p-2 shadow-sm">
                  <Image src="/kreatif-food-logo.svg" alt="logo" width={32} height={32} />
                </div>
                <div className="mb-3 h-16 w-full rounded-lg border border-[var(--color-leaf)]/5 bg-white shadow-sm"></div>
                <div className="mb-3 h-20 w-full rounded-lg border border-[var(--color-leaf)]/5 bg-white shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
        <div className="footer-panel border-t-0 rounded-t-none pt-12 pb-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {sitemap.map((column) => (
              <div key={column.title} className="flex flex-col gap-6">
                <p className="footer-nav-title">{column.title}</p>
                <nav className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="footer-link text-sm hover:text-[var(--color-leaf)] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
            <div className="flex flex-col gap-6">
              <p className="footer-nav-title">Newsletter</p>
              <p className="text-sm leading-6 text-[var(--color-ink-soft)]">
                Dapatkan update terbaru mengenai ketersediaan stok dan promo pasokan ayam.
              </p>
              <div className="relative mt-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full rounded-full border border-gray-200 bg-white/50 px-5 py-3 text-sm focus:border-[var(--color-leaf)] focus:outline-none focus:ring-1 focus:ring-[var(--color-leaf)]"
                />
                <button className="absolute right-1.5 top-1.5 rounded-full bg-[var(--color-leaf)] p-2 text-white shadow-lg shadow-[var(--color-leaf)]/10 transition-transform duration-300 hover:scale-105 active:scale-95">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.493-7.493Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/60">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-[var(--color-ink-soft)] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 PT Kreatif Food Indonesia. Supplier Ayam Frozen & Fresh untuk Bisnis Kuliner.</p>
          <div className="flex flex-wrap gap-4 font-medium sm:gap-6">
            {footerBottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[var(--color-leaf)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}