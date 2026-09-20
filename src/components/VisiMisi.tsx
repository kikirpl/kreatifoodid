import Icon from "./Icons";

const misi = [
  "Menyediakan produk unggas beku yang berkualitas, aman, dan halal.",
  "Mengembangkan inovasi produk berbasis kebutuhan pasar.",
  "Membangun jaringan distribusi yang luas dan berkelanjutan.",
  "Menerapkan prinsip efisiensi dan keberlanjutan dalam setiap proses bisnis.",
  "Menjadi mitra strategis bagi sektor HORECA, ritel, dan industri pangan nasional.",
];

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="band band-dark">
      <div className="shell">
        <p className="eyebrow">
          <span className="eyebrow-num">02</span>
          <span className="eyebrow-rule" />
          Arah strategis
        </p>
        <h2 className="section-title">Visi &amp; misi</h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="rounded-[1.5rem] border border-white/10 bg-[var(--kfi-forest-2)] p-8">
            <span className="icon-badge icon-badge-teal">
              <Icon name="target" />
            </span>
            <h3 className="mt-7 text-xl font-semibold text-[var(--kfi-teal-soft)]">Visi</h3>
            <p className="mt-4 text-lg leading-8 text-white/85">
              Menjadi perusahaan pangan unggas beku terpercaya yang menyediakan produk
              berkualitas tinggi serta memberikan nilai tambah bagi konsumen, mitra usaha, dan
              masyarakat.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--kfi-teal-soft)]">
              Misi
            </h3>
            <ol className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {misi.map((item, i) => (
                <li key={item} className="flex items-start gap-5 py-5">
                  <span
                    className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-sm font-bold ${
                      i % 2 === 0
                        ? "bg-[var(--kfi-deep)] text-white"
                        : "bg-[var(--kfi-teal)] text-[#06231d]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-[1.02rem] leading-7 text-white/85">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}