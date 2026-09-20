import Icon, { type IconName } from "./Icons";

const pillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "snowflake",
    title: "Rantai dingin tanpa putus",
    text: "Suhu terjaga dari pembekuan cepat, penyimpanan cold storage, sampai armada distribusi tiba di lokasi mitra.",
  },
  {
    icon: "recycle",
    title: "Zero waste processing",
    text: "Hampir seluruh bagian ayam diolah menjadi produk bernilai tambah — dari karkas, boneless, sampai tulang paha untuk kaldu.",
  },
  {
    icon: "store",
    title: "Empat segmen pasar",
    text: "HORECA, ritel modern, industri pengolahan pangan, dan pasar ekspor dilayani dengan spesifikasi yang berbeda-beda.",
  },
];

export default function TentangPerusahaan() {
  return (
    <section id="tentang" className="band">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-num">01</span>
            <span className="eyebrow-rule" />
            Profil
          </p>
          <h2 className="section-title">Tentang perusahaan</h2>

          <div className="mt-7 space-y-5 text-[1.02rem] leading-8 text-[var(--kfi-ink-soft)]">
            <p>
              PT Kreatif Food Indonesia bergerak di bidang pengolahan, distribusi, dan
              perdagangan produk unggas beku berkualitas tinggi — segar, higienis, dan halal.
            </p>
            <p>
              Melalui rantai dingin yang terjaga dari produksi hingga distribusi, kualitas dan
              keamanan pangan tetap konsisten sampai ke tangan konsumen.
            </p>
            <p>
              Dengan prinsip zero waste processing, hampir seluruh bagian ayam dimanfaatkan
              menjadi produk bernilai tambah bagi pasar HORECA, ritel, dan industri pangan
              nasional.
            </p>
          </div>

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {[
              { k: "Kedudukan", v: "Kota Bogor, Jawa Barat" },
              { k: "Unit operasional", v: "Seyegan, Sleman, D.I. Yogyakarta" },
              { k: "Lini usaha", v: "Ayam beku / frozen food" },
              { k: "Standar", v: "Higienis & halal" },
            ].map((item) => (
              <div key={item.k} className="border-t border-[var(--kfi-line)] pt-4">
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--kfi-teal)]">
                  {item.k}
                </dt>
                <dd className="mt-1.5 font-semibold text-[var(--kfi-forest)]">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-4">
          {pillars.map((item) => (
            <article key={item.title} className="card card-mist flex gap-5">
              <span className="icon-badge">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}