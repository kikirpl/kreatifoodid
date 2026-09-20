import Icon, { type IconName } from "./Icons";
import { company } from "@/lib/company";

const komitmen: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "shield",
    title: "Keamanan pangan",
    text: "Produk diproses dan disimpan pada suhu terkendali untuk menekan risiko kontaminasi.",
  },
  {
    icon: "sparkle",
    title: "Higienitas",
    text: "Standar kebersihan menyeluruh diterapkan di setiap tahap pengolahan.",
  },
  {
    icon: "check",
    title: "Kehalalan",
    text: "Produk diproses sesuai prinsip kehalalan untuk ketenangan konsumen.",
  },
];

export default function KomitmenMutu() {
  const { bogor, yogyakarta } = company.offices;

  return (
    <section id="kontak" className="band">
      <div className="shell">
        <p className="eyebrow">
          <span className="eyebrow-num">12</span>
          <span className="eyebrow-rule" />
          Mutu &amp; kontak
        </p>
        <h2 className="section-title">Komitmen mutu &amp; mari berkolaborasi</h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {komitmen.map((item, i) => (
            <article key={item.title} className="card card-mist">
              <span className={`icon-badge ${i === 1 ? "icon-badge-teal" : ""}`}>
                <Icon name={item.icon} />
              </span>
              <h3 className="card-title mt-5">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[var(--kfi-line)] bg-[var(--kfi-forest)] p-8 text-white sm:p-10">
          <p className="max-w-2xl text-lg leading-8 text-white/85">
            Untuk informasi produk, penawaran kerja sama, dan kemitraan distribusi, silakan
            menghubungi kami.
          </p>

          <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="footer-title">{bogor.label}</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                {bogor.lines[0]}
                <br />
                {bogor.lines[1]}
              </p>
            </div>
            <div>
              <p className="footer-title">{yogyakarta.label}</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                {yogyakarta.lines[0]}
                <br />
                {yogyakarta.lines[1]}
              </p>
            </div>
            <div>
              <p className="footer-title">Bidang usaha</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Pengolahan, distribusi &amp; perdagangan ayam beku (frozen food)
              </p>
            </div>
            <div>
              <p className="footer-title">Kontak</p>
              <div className="mt-3 space-y-2 text-sm text-white/75">
                <a href={`mailto:${company.email}`} className="block hover:text-white">
                  {company.email}
                </a>
                {company.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    className="block hover:text-white"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Chat lewat WhatsApp
            </a>
            <a href={`mailto:${company.email}`} className="btn btn-outline-light">
              Minta daftar produk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}