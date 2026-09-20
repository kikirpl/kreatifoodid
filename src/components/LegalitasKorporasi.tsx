import Icon, { type IconName } from "./Icons";
import { company } from "@/lib/company";

const legalitas: { icon: IconName; title: string; value: string; note: string }[] = [
  {
    icon: "file",
    title: "Akta pendirian",
    value: "No. 16 — 30 Sep 2024",
    note: company.legal.notarisPendirian,
  },
  {
    icon: "stamp",
    title: "Pengesahan Kemenkumham",
    value: company.legal.pengesahan,
    note: company.legal.pengesahanDate,
  },
  {
    icon: "scale",
    title: "Jenis perseroan",
    value: company.legal.jenisPerseroan,
    note: `Daftar Perseroan ${company.legal.daftarPerseroan}`,
  },
  {
    icon: "building",
    title: "Akta perubahan (PKR)",
    value: "No. 08 — 26 Mei 2026",
    note: company.legal.notarisPerubahan,
  },
];

const linimasa = [
  { date: "30 Sep 2024", title: "Akta pendirian No. 16", note: "Notaris M. Kamaludin Purnomo, S.H." },
  { date: "1 Okt 2024", title: "Pengesahan Kemenkumham", note: "AHU-0076839.AH.01.01" },
  { date: "18 Mei 2026", title: "RUPS luar biasa", note: "Penyesuaian struktur & permodalan" },
  { date: "26 Mei 2026", title: "Akta perubahan No. 08", note: "Notaris Nadiya Najmi, S.H., M.Kn" },
];

const pemegangSaham = [
  { nama: "Teddy Zakaria", jabatan: "Komisaris", lembar: "4.320 lembar", nilai: "Rp 4,32 M", persen: "90%", warna: "var(--kfi-deep)" },
  { nama: "Reksa Aulia", jabatan: "Direktur", lembar: "480 lembar", nilai: "Rp 480 jt", persen: "10%", warna: "var(--kfi-teal)" },
];

export default function LegalitasKorporasi() {
  return (
    <section id="legalitas" className="band band-dark">
      <div className="shell">
        <p className="eyebrow">
          <span className="eyebrow-num">08</span>
          <span className="eyebrow-rule" />
          Legalitas &amp; tata kelola
        </p>
        <h2 className="section-title">Badan usaha yang tercatat dan terstruktur</h2>

        {/* Kartu legalitas */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {legalitas.map((item, i) => (
            <article key={item.title} className="card card-dark">
              <span className={`icon-badge ${i % 2 === 1 ? "icon-badge-teal" : ""}`}>
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-5 text-sm font-bold text-white">{item.title}</h3>
              <p className="mt-3 font-display text-base font-semibold text-[var(--kfi-teal-soft)]">
                {item.value}
              </p>
              <p className="mt-2 text-xs leading-6 text-white/60">{item.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Linimasa */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--kfi-teal-soft)]">
              Linimasa korporasi
            </h3>
            <ol className="timeline mt-7">
              {linimasa.map((item) => (
                <li key={item.date} className="timeline-item">
                  <p className="timeline-date">{item.date}</p>
                  <p className="timeline-title">{item.title}</p>
                  <p className="timeline-note">{item.note}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Pengurus & permodalan */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--kfi-teal-soft)]">
              Pengurus &amp; pemegang saham
            </h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="card card-dark">
                <span className="icon-badge icon-badge-sm icon-badge-teal">
                  <Icon name="user" />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Direktur
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">Reksa Aulia</p>
              </div>
              <div className="card card-dark">
                <span className="icon-badge icon-badge-sm">
                  <Icon name="user-shield" />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Komisaris
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">Teddy Zakaria</p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-[var(--kfi-forest-2)] p-6">
              <div className="flex items-start gap-4">
                <span className="icon-badge icon-badge-sm icon-badge-teal">
                  <Icon name="coins" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Modal ditempatkan &amp; disetor
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold text-white">
                    {company.legal.modal}
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    {company.legal.lembarSaham} — naik 9,6× dari modal pendirian Rp 500 juta (2024).
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-center">
                <div className="donut" role="img" aria-label="Komposisi pemegang saham: 90 persen Teddy Zakaria, 10 persen Reksa Aulia" />
                <div className="w-full space-y-3">
                  {pemegangSaham.map((p) => (
                    <div
                      key={p.nama}
                      className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="donut-swatch"
                          style={{ background: p.warna }}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">{p.nama}</p>
                          <p className="text-xs text-white/55">
                            {p.jabatan} · {p.lembar}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[var(--kfi-teal-soft)]">{p.persen}</p>
                        <p className="text-xs text-white/55">{p.nilai}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between rounded-xl bg-[var(--kfi-teal)] px-4 py-3 text-[#06231d]">
                    <p className="text-sm font-bold">Total</p>
                    <p className="text-sm font-bold">4.800 lembar · Rp 4,8 M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}