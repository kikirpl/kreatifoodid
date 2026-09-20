import Navbar from "@/components/Navbar";
import TentangPerusahaan from "@/components/TentangPerusahaan";
import VisiMisi from "@/components/VisiMisi";
import BidangUsaha from "@/components/BidangUsaha";
import ModelBisnis from "@/components/ModelBisnis";
import ProdukSection from "@/components/ProdukSection";
import MerekDagang from "@/components/MerekDagang";
import KeunggulanKompetitif from "@/components/KeunggulanKompetitif";
import LegalitasKorporasi from "@/components/LegalitasKorporasi";
import LocationSection from "@/components/LocationSection";
import MitraKami from "@/components/MitraKami";
import GabungMitra from "@/components/GabungMitra";
import KomitmenMutu from "@/components/KomitmenMutu";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Icon, { type IconName } from "@/components/Icons";
import { company } from "@/lib/company";

const informasiRingkas: { icon: IconName; label: string; value: string }[] = [
  { icon: "pin", label: "Kedudukan", value: "Kota Bogor, Jawa Barat" },
  { icon: "snowflake", label: "Lini usaha", value: "Ayam beku / frozen food" },
  { icon: "store", label: "Pasar", value: "HORECA, ritel, industri, ekspor" },
  { icon: "recycle", label: "Prinsip", value: "Zero waste processing" },
  { icon: "sparkle", label: "Standar", value: "Higienis & halal" },
];

const marqueeItems = [
  "Karkas ayam",
  "Boneless dada",
  "Boneless paha",
  "Sayap ayam",
  "Kulit ayam",
  "Hati ayam",
  "Kerongkongan",
  "Tulang paha (TLP)",
  "Cold chain −18°C",
  "Zero waste processing",
  "HORECA",
  "Ritel modern",
  "Industri pangan",
  "Pasar ekspor",
];

export default function Home() {
  return (
    <main id="top" className="relative bg-[var(--kfi-forest)]">
      <Navbar />

      <section className="hero -mt-[5.5rem] pt-[5.5rem]">
        <span className="hero-arc" aria-hidden="true" />
        <span className="hero-arc-2" aria-hidden="true" />

        <div className="relative z-10 shell grid items-center gap-12 pb-20 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-16">
          <div className="fade-up">
            <p className="eyebrow">
              <span className="eyebrow-num">Company profile</span>
              <span className="eyebrow-rule" />
              {company.name}
            </p>

            <h1 className="hero-title mt-6">
              Frozen food ayam berkualitas, higienis, dan halal.
            </h1>

            <p className="hero-quote mt-5 text-lg">“{company.tagline}”</p>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-white/75">
              Kami mengolah, mendistribusikan, dan memperdagangkan produk unggas beku dengan
              rantai dingin yang terjaga dari produksi hingga sampai ke tangan konsumen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#produk" className="btn btn-light">
                Lihat produk
              </a>
              <a href="#kontak" className="btn btn-outline-light">
                Hubungi kami
              </a>
            </div>

            <p className="hero-tag mt-8">
              <Icon name="snowflake" className="h-4 w-4" />
              Bidang usaha · {company.bidangUsaha}
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="hero-fact">
                <p className="hero-fact-label">Kantor / domisili</p>
                <p className="hero-fact-value">Kota Bogor, Jawa Barat</p>
              </div>
              <div className="hero-fact">
                <p className="hero-fact-label">Unit operasional</p>
                <p className="hero-fact-value">Seyegan, Sleman, D.I. Yogyakarta</p>
              </div>
            </div>
          </div>

          <aside className="info-panel fade-up fade-up-2">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--kfi-teal-soft)]">
              Informasi ringkas
            </p>
            <div className="mt-4">
              {informasiRingkas.map((item) => (
                <div key={item.label} className="info-row">
                  <span className="icon-badge icon-badge-sm icon-badge-teal">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <p className="info-row-label">{item.label}</p>
                    <p className="info-row-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Pita kapabilitas */}
      <div className="border-y border-[var(--kfi-line)] bg-white py-5">
        <div className="marquee-track">
          <div className="marquee-group">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <TentangPerusahaan />
      <VisiMisi />
      <BidangUsaha />
      <ModelBisnis />
      <ProdukSection />
      <MerekDagang />
      <KeunggulanKompetitif />
      <LegalitasKorporasi />
      <LocationSection />
      <MitraKami />
      <GabungMitra />
      <KomitmenMutu />
      <FAQAccordion />
      <Footer />
    </main>
  );
}