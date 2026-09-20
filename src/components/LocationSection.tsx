import Icon from "./Icons";
import { company } from "@/lib/company";

const jangkauan = [
  "Jabodetabek",
  "Jawa Barat",
  "Jawa Tengah",
  "D.I. Yogyakarta",
  "Jawa Timur",
  "Pasar ekspor",
];

export default function LocationSection() {
  const { bogor, yogyakarta } = company.offices;

  return (
    <section id="lokasi" className="band">
      <div className="shell">
        <p className="eyebrow">
          <span className="eyebrow-num">09</span>
          <span className="eyebrow-rule" />
          Lokasi &amp; operasional
        </p>
        <h2 className="section-title">Dua titik operasi, satu rantai dingin</h2>
        <p className="lede">
          Kantor di Kota Bogor menangani administrasi, kemitraan, dan perdagangan. Unit
          operasional di Seyegan, Sleman menangani pengolahan dan penyiapan produk beku.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {[
            { data: bogor, icon: "pin" as const, badge: "Kantor / domisili" },
            { data: yogyakarta, icon: "snowflake" as const, badge: "Unit operasional" },
          ].map(({ data, icon, badge }) => (
            <a
              key={data.city}
              href={data.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex gap-5"
            >
              <span className={`icon-badge ${icon === "snowflake" ? "icon-badge-teal" : ""}`}>
                <Icon name={icon} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--kfi-teal)]">
                  {badge}
                </p>
                <h3 className="card-title mt-2">{data.city}</h3>
                <p className="card-text">
                  {data.lines[0]}
                  <br />
                  {data.lines[1]}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--kfi-deep)]">
                  Buka di Google Maps
                  <Icon name="pin" className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Koridor distribusi */}
        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[var(--kfi-line)] bg-[var(--kfi-mist)] p-8 sm:p-10">
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--kfi-teal)]">
            Koridor distribusi
          </h3>

          <div className="mt-8 overflow-x-auto">
            <svg
              viewBox="0 0 900 150"
              className="h-auto w-full min-w-[620px]"
              role="img"
              aria-label="Koridor distribusi dari Bogor ke Sleman melalui Jawa Barat dan Jawa Tengah"
            >
              <line
                x1="60"
                y1="70"
                x2="840"
                y2="70"
                stroke="#3aae94"
                strokeWidth="2"
                strokeDasharray="8 8"
                opacity="0.6"
              />
              {[
                { x: 60, label: "Bogor", sub: "Kantor pusat", big: true },
                { x: 255, label: "Jabodetabek", sub: "HORECA & ritel" },
                { x: 450, label: "Jawa Barat", sub: "Distribusi" },
                { x: 645, label: "Jawa Tengah", sub: "Distribusi" },
                { x: 840, label: "Sleman", sub: "Unit operasional", big: true },
              ].map((node) => (
                <g key={node.label}>
                  <circle
                    cx={node.x}
                    cy={70}
                    r={node.big ? 11 : 7}
                    fill={node.big ? "#0c5646" : "#3aae94"}
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <text
                    x={node.x}
                    y={38}
                    textAnchor="middle"
                    fill="#0b2721"
                    fontSize="16"
                    fontWeight="700"
                  >
                    {node.label}
                  </text>
                  <text
                    x={node.x}
                    y={104}
                    textAnchor="middle"
                    fill="#55706a"
                    fontSize="12"
                  >
                    {node.sub}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {jangkauan.map((area) => (
              <span key={area} className="pill">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}