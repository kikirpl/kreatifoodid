import Icon, { type IconName } from "./Icons";

const karakteristik: { icon: IconName; text: string }[] = [
  { icon: "thermometer", text: "Suhu simpan ideal sekitar −18°C" },
  { icon: "hourglass", text: "Masa simpan jauh lebih panjang" },
  { icon: "leaf", text: "Mutu & nilai gizi tetap terjaga" },
  { icon: "check", text: "Praktis, higienis, dan siap masak" },
];

const alur: { icon: IconName; label: string; note: string }[] = [
  { icon: "drumstick", label: "Bahan baku terpilih", note: "Seleksi ketat" },
  { icon: "scissors", label: "Pemotongan & pemorsian", note: "Sesuai spesifikasi" },
  { icon: "snowflake", label: "Pembekuan cepat", note: "Quick / blast freezing" },
  { icon: "warehouse", label: "Penyimpanan", note: "Cold storage −18°C" },
  { icon: "truck", label: "Distribusi", note: "Armada cold chain" },
];

const manfaat: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "hourglass",
    title: "Masa simpan panjang",
    text: "Pembekuan memperpanjang umur produk dan menekan pemborosan pangan.",
  },
  {
    icon: "leaf",
    title: "Nutrisi terjaga",
    text: "Quick freezing mengunci kesegaran dan kandungan gizi daging ayam.",
  },
  {
    icon: "shield",
    title: "Lebih higienis & aman",
    text: "Suhu rendah menekan pertumbuhan bakteri sehingga produk lebih aman dikonsumsi.",
  },
  {
    icon: "globe",
    title: "Jangkauan luas",
    text: "Produk dapat dikirim lintas wilayah hingga menjangkau pasar ekspor.",
  },
  {
    icon: "utensils",
    title: "Praktis & siap masak",
    text: "Memudahkan penyimpanan, pemorsian, dan perencanaan menu mitra usaha.",
  },
  {
    icon: "trending",
    title: "Stok & harga stabil",
    text: "Stok dapat dikelola sehingga pasokan dan harga relatif lebih stabil.",
  },
];

export default function BidangUsaha() {
  return (
    <section id="bidang-usaha" className="band band-mist">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-num">03</span>
              <span className="eyebrow-rule" />
              Definisi usaha
            </p>
            <h2 className="section-title">Bidang usaha: frozen food</h2>
            <p className="lede">
              Pengolahan produk ayam yang dibekukan secara cepat pada suhu sangat rendah, lalu
              disimpan dan didistribusikan dalam kondisi beku melalui rantai dingin — mengunci
              kesegaran, mutu, dan nilai gizi sejak awal hingga sampai ke konsumen.
            </p>
          </div>

          <ul className="grid gap-3">
            {karakteristik.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-4 rounded-[1rem] border border-[var(--kfi-line)] bg-white px-4 py-3"
              >
                <span className="icon-badge icon-badge-sm icon-badge-teal">
                  <Icon name={item.icon} />
                </span>
                <span className="text-sm font-semibold text-[var(--kfi-forest)]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Alur proses */}
        <div className="mt-16">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--kfi-teal)]">
            Alur proses frozen food
          </h3>
          <ol className="flow mt-6">
            {alur.map((step) => (
              <li key={step.label} className="flow-step">
                <span className="icon-badge mx-auto">
                  <Icon name={step.icon} />
                </span>
                <p className="flow-step-label">{step.label}</p>
                <p className="flow-step-note">{step.note}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Manfaat */}
        <div className="mt-20">
          <h3 className="section-title text-[clamp(1.5rem,2.4vw,2.1rem)]">
            Mengapa model beku menguntungkan mitra
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {manfaat.map((item) => (
              <article key={item.title} className="card">
                <span className="icon-badge">
                  <Icon name={item.icon} />
                </span>
                <h4 className="card-title mt-5">{item.title}</h4>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}