import type { CSSProperties } from "react";
import Icon from "./Icons";

const merek = [
  {
    nama: "Kreatif Food Indonesia",
    peran: "Merek korporasi",
    janji: "Fresh Quality, Trusted Nutrition",
    bar: "var(--kfi-deep)",
  },
  {
    nama: "AYAMKITA®",
    peran: "Merek utama — pasar nasional",
    janji: "Mudah diingat, bernuansa nasional, untuk pasar tradisional & modern",
    bar: "var(--kfi-teal)",
  },
  {
    nama: "PRIME CHICKEN®",
    peran: "Merek premium",
    janji: "Premium Poultry for Premium Taste",
    bar: "#1e8a72",
  },
  {
    nama: "KFI POULTRY PREMIUM®",
    peran: "Merek HORECA & industri",
    janji: "Professional Poultry Solution — hotel, resto, katering, industri",
    bar: "var(--kfi-forest)",
  },
];

export default function MerekDagang() {
  return (
    <section id="merek" className="band">
      <div className="shell">
        <p className="eyebrow">
          <span className="eyebrow-num">06</span>
          <span className="eyebrow-rule" />
          Branding
        </p>
        <h2 className="section-title">Arsitektur merek dagang</h2>
        <p className="lede">
          Satu perusahaan, empat merek dengan peran berbeda — masing-masing dirancang untuk
          segmen pasar yang spesifik.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {merek.map((item) => (
            <article
              key={item.nama}
              className="card card-bar"
              style={{ "--bar-color": item.bar } as CSSProperties}
            >
              <div className="flex items-start gap-5">
                <span className="icon-badge icon-badge-sm" style={{ background: item.bar }}>
                  <Icon name="tag" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--kfi-forest)]">
                    {item.nama}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--kfi-teal)]">
                    {item.peran}
                  </p>
                  <p className="mt-4 text-[0.97rem] italic leading-7 text-[var(--kfi-ink-soft)]">
                    “{item.janji}”
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}