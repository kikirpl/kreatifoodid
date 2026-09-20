import Icon, { type IconName } from "./Icons";

const lini: { no: string; icon: IconName; title: string; text: string }[] = [
  {
    no: "01",
    icon: "factory",
    title: "Pengolahan",
    text: "Pemotongan, pemorsian, dan pembekuan cepat untuk menjaga kualitas serta kesegaran produk.",
  },
  {
    no: "02",
    icon: "truck",
    title: "Distribusi",
    text: "Penyaluran melalui rantai dingin yang menjaga suhu produk tetap terkendali hingga ke pelanggan.",
  },
  {
    no: "03",
    icon: "handshake",
    title: "Perdagangan",
    text: "Pemasaran ayam beku ke segmen rumah tangga, HORECA, ritel modern, industri, dan pasar ekspor.",
  },
];

export default function ModelBisnis() {
  return (
    <section id="model-bisnis" className="band">
      <div className="shell">
        <p className="eyebrow">
          <span className="eyebrow-num">04</span>
          <span className="eyebrow-rule" />
          Model bisnis
        </p>
        <h2 className="section-title">Tiga lini usaha terintegrasi</h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {lini.map((item, i) => (
            <article key={item.no} className="card overflow-hidden pt-8">
              <span
                className="absolute inset-x-0 top-0 h-1.5"
                style={{
                  background: i === 1 ? "var(--kfi-teal)" : "var(--kfi-deep)",
                }}
              />
              <div className="flex items-start justify-between gap-4">
                <span className={`icon-badge ${i === 1 ? "icon-badge-teal" : ""}`}>
                  <Icon name={item.icon} />
                </span>
                <span className="font-display text-4xl font-semibold tracking-[-0.06em] text-[var(--kfi-mist)]">
                  {item.no}
                </span>
              </div>
              <h3 className="card-title mt-6 text-xl">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-4 rounded-[1.25rem] bg-[var(--kfi-mist)] p-6">
          <span className="icon-badge icon-badge-sm icon-badge-light">
            <Icon name="snowflake" />
          </span>
          <p className="text-[0.97rem] leading-7 text-[var(--kfi-ink-soft)]">
            <strong className="font-bold text-[var(--kfi-forest)]">Keunggulan model beku:</strong>{" "}
            memperpanjang masa simpan, menjaga nutrisi, memperluas jangkauan distribusi lintas
            wilayah, dan mendukung perencanaan stok mitra yang lebih efisien.
          </p>
        </div>
      </div>
    </section>
  );
}