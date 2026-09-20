import Image from "next/image";
import Icon from "./Icons";
import { company } from "@/lib/company";

const sitemap = [
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang kami", href: "#tentang" },
      { label: "Visi & misi", href: "#visi-misi" },
      { label: "Legalitas & tata kelola", href: "#legalitas" },
      { label: "Karir", href: "/careers" },
    ],
  },
  {
    title: "Produk",
    links: [
      { label: "Produk utama", href: "#produk" },
      { label: "Sampingan bernilai tinggi", href: "#produk" },
      { label: "Sampingan industri", href: "#produk" },
      { label: "Kategori & bauran SKU", href: "#produk" },
    ],
  },
  {
    title: "Merek dagang",
    links: [
      { label: "AYAMKITA®", href: "#merek" },
      { label: "Prime Chicken®", href: "#merek" },
      { label: "KFI Poultry Premium®", href: "#merek" },
      { label: "Mitra Kreatif Food", href: "#mitra" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { label: "Kontak kami", href: "#kontak" },
      { label: "Pertanyaan umum", href: "#faq" },
      { label: "Kebijakan privasi", href: "#" },
      { label: "Syarat & ketentuan", href: "#" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
];

const standar = [
  { icon: "thermometer" as const, label: "Cold chain −18°C" },
  { icon: "sparkle" as const, label: "Higienis & halal" },
  { icon: "recycle" as const, label: "Zero waste processing" },
];

export default function Footer() {
  const { bogor, yogyakarta } = company.offices;

  return (
    <footer className="footer">
      <div className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.35fr] lg:gap-16">
          {/* Identitas */}
          <div>
            <div className="inline-flex rounded-[1.1rem] bg-white px-5 py-4">
              <Image
                src="/logo.png"
                alt={`${company.name} logo`}
                width={2400}
                height={718}
                loading="lazy"
                sizes="160px"
                className="h-auto w-[150px]"
              />
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              {company.positioning}. Pengolahan, distribusi, dan perdagangan ayam beku untuk
              HORECA, ritel, industri pangan, dan pasar ekspor.
            </p>
            <p className="mt-4 font-display text-sm italic text-[var(--kfi-teal-soft)]">
              “{company.tagline}”
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {standar.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/85"
                >
                  <Icon name={item.icon} className="h-4 w-4 text-[var(--kfi-teal-soft)]" />
                  {item.label}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="footer-card">
                <p className="footer-title">{bogor.label}</p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {bogor.lines[0]}
                  <br />
                  {bogor.lines[1]}
                </p>
              </div>
              <div className="footer-card">
                <p className="footer-title">{yogyakarta.label}</p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {yogyakarta.lines[0]}
                  <br />
                  {yogyakarta.lines[1]}
                </p>
              </div>
            </div>
          </div>

          {/* Navigasi */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {sitemap.map((column) => (
              <nav key={column.title} className="flex flex-col gap-5">
                <p className="footer-title">{column.title}</p>
                <div className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <a key={link.label} href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  ))}
                </div>
              </nav>
            ))}
          </div>
        </div>

        {/* Kontak cepat & kanal */}
        <div className="mt-14 grid gap-4 border-t border-white/10 pt-10 lg:grid-cols-3">
          <div className="footer-card">
            <p className="footer-title">Kontak cepat</p>
            <div className="mt-4 space-y-2">
              {company.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                  className="block text-base font-semibold text-white hover:text-[var(--kfi-teal-soft)]"
                >
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="mt-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--kfi-teal-soft)] hover:bg-white/15"
              >
                {company.email}
              </a>
            </div>
          </div>

          <div className="footer-card">
            <p className="footer-title">Ikuti kami</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[var(--kfi-teal)] hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-card">
            <p className="footer-title">Aplikasi mobile</p>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Aplikasi pemesanan sedang dikembangkan. Sementara ini, pesanan dilayani lewat
              WhatsApp dan email.
            </p>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--kfi-teal)] px-4 py-2 text-sm font-bold text-[#06231d]"
            >
              Pesan lewat WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Baris legal */}
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. {company.bidangUsaha}.
          </p>
          <p>
            Pengesahan Kemenkumham {company.legal.pengesahan} · Daftar Perseroan{" "}
            {company.legal.daftarPerseroan}
          </p>
        </div>
      </div>
    </footer>
  );
}