import Image from "next/image";
import Icon, { type IconName } from "./Icons";

type Produk = {
  nama: string;
  icon: IconName;
  spec: string;
  aplikasi: string;
};

const utama: Produk[] = [
  {
    nama: "Karkas ayam",
    icon: "drumstick",
    spec: "14 varian bobot, 0,4–1,7 kg",
    aplikasi:
      "Bahan baku rumah makan, restoran, hotel, dan katering — fleksibel untuk goreng, bakar, maupun ungkep.",
  },
  {
    nama: "Boneless paha",
    icon: "utensils",
    spec: "Tanpa tulang & kulit",
    aplikasi:
      "Steak, chicken teriyaki, dan sate; tekstur lembut dan juicy, praktis siap masak.",
  },
  {
    nama: "Boneless dada",
    icon: "heart",
    spec: "Tinggi protein, rendah lemak",
    aplikasi: "Bahan nugget, sosis, dan beragam produk makanan olahan.",
  },
  {
    nama: "Sayap ayam",
    icon: "wing",
    spec: "Permintaan tinggi resto & kafe",
    aplikasi: "Bahan utama chicken wings dan menu fast food.",
  },
];

const sampingan: Produk[] = [
  {
    nama: "Kulit ayam",
    icon: "leaf",
    spec: "Bahan kulit ayam crispy",
    aplikasi: "Makanan ringan dan bahan pengolahan pangan.",
  },
  {
    nama: "Hati ayam",
    icon: "heart",
    spec: "Kaya zat besi & vitamin",
    aplikasi: "Sate hati, sambal goreng, dan olahan bergizi lainnya.",
  },
  {
    nama: "Kerongkongan",
    icon: "factory",
    spec: "Sampingan industri",
    aplikasi: "Bahan makanan olahan serta baku pet food dan pakan ternak.",
  },
  {
    nama: "Tulang paha (TLP)",
    icon: "bone",
    spec: "Sampingan industri",
    aplikasi: "Bahan baku kaldu ayam, industri ekstrak rasa, dan pet food.",
  },
];

const kategori = [
  {
    title: "Produk utama",
    en: "Main product",
    items: ["Karkas ayam", "Boneless dada tanpa kulit", "Boneless paha tanpa kulit"],
    bg: "var(--kfi-deep)",
    icon: "crown" as const,
  },
  {
    title: "Sampingan bernilai tinggi",
    en: "High-value by-product",
    items: ["Sayap ayam", "Kulit ayam", "Hati ayam"],
    bg: "#1e8a72",
    icon: "award" as const,
  },
  {
    title: "Sampingan industri",
    en: "Industrial by-product",
    items: ["Kerongkongan", "Tulang paha (TLP)"],
    bg: "var(--kfi-teal)",
    icon: "trending" as const,
  },
];

const galeri = [
  { src: "/karkas.png", label: "Karkas ayam" },
  { src: "/potongan.png", label: "Boneless & potongan" },
  { src: "/frozen.png", label: "Penyimpanan beku −18°C" },
  { src: "/fresh.png", label: "Bahan baku terpilih" },
];

function ProdukCard({ item }: { item: Produk }) {
  return (
    <article className="card flex gap-5">
      <span className="icon-badge">
        <Icon name={item.icon} />
      </span>
      <div>
        <h4 className="card-title">{item.nama}</h4>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--kfi-teal)]">
          {item.spec}
        </p>
        <p className="card-text">{item.aplikasi}</p>
      </div>
    </article>
  );
}

export default function ProdukSection() {
  return (
    <section id="produk" className="band band-mist">
      <div className="shell">
        <p className="eyebrow">
          <span className="eyebrow-num">05</span>
          <span className="eyebrow-rule" />
          Portofolio
        </p>
        <h2 className="section-title">Delapan produk, satu ekor ayam terpakai penuh</h2>
        <p className="lede">
          Produk utama untuk dapur komersial, sampingan bernilai tinggi untuk menu harian, dan
          sampingan industri untuk kaldu, ekstrak rasa, serta pet food.
        </p>

        {/* Galeri foto */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galeri.map((foto) => (
            <div key={foto.src} className="product-tile h-56">
              <Image
                src={foto.src}
                alt={foto.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <span className="product-tile-veil" />
              <span className="absolute bottom-4 left-4 right-4 text-sm font-bold text-white">
                {foto.label}
              </span>
            </div>
          ))}
        </div>

        {/* Daftar produk & aplikasinya */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--kfi-teal)]">
              Produk utama &amp; bernilai tinggi
            </h3>
            <div className="mt-5 grid gap-4">
              {utama.map((item) => (
                <ProdukCard key={item.nama} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--kfi-teal)]">
              Sampingan bernilai &amp; industri
            </h3>
            <div className="mt-5 grid gap-4">
              {sampingan.map((item) => (
                <ProdukCard key={item.nama} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Kategori produk */}
        <div className="mt-20">
          <h3 className="section-title text-[clamp(1.5rem,2.4vw,2.1rem)]">Kategori produk</h3>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {kategori.map((kat) => (
              <article
                key={kat.title}
                className="overflow-hidden rounded-[1.25rem] border border-[var(--kfi-line)] bg-white"
              >
                <header
                  className="flex items-center gap-4 px-6 py-5 text-white"
                  style={{ background: kat.bg }}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15">
                    <Icon name={kat.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold">{kat.title}</p>
                    <p className="text-xs italic text-white/70">{kat.en}</p>
                  </div>
                </header>
                <ul className="space-y-3 px-6 py-6">
                  {kat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[0.95rem]">
                      <span
                        className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                        style={{ background: kat.bg }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-[var(--kfi-teal)]">
            Bauran SKU — total 8 produk
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="sku-bar" style={{ background: "var(--kfi-deep)" }}>
              Produk utama · 3
            </div>
            <div className="sku-bar" style={{ background: "#1e8a72" }}>
              Sampingan bernilai tinggi · 3
            </div>
            <div className="sku-bar" style={{ background: "var(--kfi-teal)", color: "#06231d" }}>
              Sampingan industri · 2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}