import Icon, { type IconName } from "./Icons";

const keunggulan: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "leaf",
    title: "Produk segar & berkualitas",
    text: "Seleksi bahan baku ketat dan pembekuan cepat menjaga kesegaran serta nutrisi.",
  },
  {
    icon: "sparkle",
    title: "Proses higienis & halal",
    text: "Standar higienitas dan kehalalan diterapkan di setiap tahap produksi.",
  },
  {
    icon: "recycle",
    title: "Zero waste processing",
    text: "Pemanfaatan hampir 100% bagian ayam untuk memaksimalkan nilai tambah.",
  },
  {
    icon: "store",
    title: "Cakupan pasar luas",
    text: "Melayani HORECA, ritel modern, dan industri pengolahan pangan.",
  },
  {
    icon: "trending",
    title: "Potensi pengembangan",
    text: "Peluang ekspansi ke lini frozen bernilai tambah dan pasar ekspor.",
  },
  {
    icon: "truck",
    title: "Rantai pasok efisien",
    text: "Cold chain dan distribusi yang efisien serta berkelanjutan.",
  },
];

export default function KeunggulanKompetitif() {
  return (
    <section id="keunggulan" className="band band-mist">
      <div className="shell">
        <p className="eyebrow">
          <span className="eyebrow-num">07</span>
          <span className="eyebrow-rule" />
          Nilai lebih
        </p>
        <h2 className="section-title">Keunggulan kompetitif</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keunggulan.map((item, i) => (
            <article key={item.title} className="card">
              <span className={`icon-badge ${i % 2 === 1 ? "icon-badge-teal" : ""}`}>
                <Icon name={item.icon} />
              </span>
              <h3 className="card-title mt-5">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}