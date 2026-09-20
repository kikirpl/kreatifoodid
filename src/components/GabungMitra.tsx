import Icon from "./Icons";
import { company } from "@/lib/company";

const segmen = [
  { icon: "utensils" as const, label: "HORECA", note: "Hotel, restoran, katering" },
  { icon: "store" as const, label: "Ritel modern", note: "Supermarket & frozen shop" },
  { icon: "factory" as const, label: "Industri pangan", note: "Nugget, sosis, kaldu" },
  { icon: "globe" as const, label: "Pasar ekspor", note: "Pengiriman lintas wilayah" },
];

export default function GabungMitra() {
  return (
    <section className="band band-dark">
      <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-num">11</span>
            <span className="eyebrow-rule" />
            Kemitraan
          </p>
          <h2 className="section-title">Jadi mitra distribusi ayam beku KFI</h2>
          <p className="lede">
            Kami membuka kerja sama pasokan rutin dan kemitraan distribusi: spesifikasi produk
            yang bisa disesuaikan, jadwal pengiriman yang disepakati, dan rantai dingin yang
            terjaga sampai lokasi Anda.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {segmen.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="icon-badge icon-badge-sm icon-badge-teal">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{item.label}</p>
                  <p className="text-xs text-white/60">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/12 bg-[var(--kfi-forest-2)] p-8">
          <span className="icon-badge icon-badge-teal">
            <Icon name="handshake" />
          </span>
          <h3 className="mt-6 font-display text-xl font-semibold text-white">
            Mulai pembicaraan kerja sama
          </h3>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Sampaikan kebutuhan produk, volume, dan lokasi pengiriman Anda. Tim kami akan
            menyiapkan penawaran beserta jadwal pasokannya.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light w-full"
            >
              Chat lewat WhatsApp
            </a>
            <a href={`mailto:${company.email}`} className="btn btn-outline-light w-full">
              Kirim email penawaran
            </a>
          </div>

          <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-white/55">
            Program kemitraan resmi sedang disiapkan. Sementara ini, permintaan masuk dilayani
            langsung oleh tim penjualan.
          </p>
        </div>
      </div>
    </section>
  );
}