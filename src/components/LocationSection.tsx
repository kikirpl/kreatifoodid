import Image from "next/image";

const locations = [
  { name: "Bogor", top: "60.5%", left: "30.5%", labelTop: "57.5%", labelLeft: "28.5%", delay: "0s" },
  { name: "Jakarta", top: "59%", left: "30%", labelTop: "56.5%", labelLeft: "32%", delay: "0.2s" },
  { name: "Depok", top: "60%", left: "30.2%", labelTop: "62%", labelLeft: "32.5%", delay: "0.4s" },
  { name: "Tangerang", top: "59.5%", left: "29.2%", labelTop: "61%", labelLeft: "27%", delay: "0.6s" },
  { name: "Bekasi", top: "59.5%", left: "30.8%", labelTop: "57.5%", labelLeft: "33.5%", delay: "0.8s" },
];

export default function LocationSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="section-kicker">Lokasi & Operasional</p>
        <h2 className="section-title text-balance mt-4">
          Berbasis di <span className="bg-gradient-to-r from-[var(--color-leaf)] to-[var(--color-sun)] bg-clip-text text-transparent">Bogor</span>, Melayani Jabodetabek
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-ink-soft)] text-balance">
          Beroperasi dari Jl. Sholeh Iskandar, Kota Bogor — posisi strategis untuk pengiriman
          cold chain cepat ke seluruh wilayah Jabodetabek.
        </p>
-6.545750643347208, 106.77368202762577
        {/* Address card */}
       <a
          href="https://maps.google.com/?q=-6.545788093196256, 106.77365935268824"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-[var(--color-leaf)]/15 bg-white/80 px-5 py-3 shadow-[0_8px_24px_rgba(26,124,52,0.08)] backdrop-blur transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer">
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-leaf)]/10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-leaf)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  </span>

  <p className="text-sm font-medium text-[var(--color-ink)]">
    Jl. Sholeh Iskandar No.106, Kel. Cibadak, Kec. Tanah Sereal,
    Kota Bogor, Jawa Barat 16166
  </p>
</a>
</div>
      <div className="relative mt-12 mx-auto w-full max-w-5xl h-[340px] sm:h-[420px] md:h-[500px] bg-gradient-to-b from-[#e8f8ed] to-white rounded-[2rem] border border-[var(--color-leaf)]/10 overflow-hidden shadow-[0_20px_50px_rgba(26,124,52,0.05)]">

        {/* Java Map Viewport (Cropped from Indonesia Map) */}
        <div
          className="absolute top-1/2 left-1/2 w-[400%] sm:w-[350%] md:w-[300%] aspect-square opacity-60"
          style={{ transform: "translate(-34%, -62%)" }}
        >
          <Image src="/id.svg" alt="Peta Jawa" fill className="object-contain" priority />

          {/* Pointer Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {locations.map((loc, idx) => (
              <line
                key={`line-${idx}`}
                x1={loc.left}
                y1={loc.top}
                x2={loc.labelLeft}
                y2={loc.labelTop}
                stroke="var(--color-leaf)"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
            ))}
          </svg>

          {/* Dots & Labels */}
          {locations.map((loc, idx) => (
            <div key={`container-${idx}`}>
              {/* Dot */}
              <div
                className="absolute z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{ top: loc.top, left: loc.left }}
              >
                <div
                  className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[var(--color-leaf)]/50 animate-ping"
                  style={{ animationDelay: loc.delay, animationDuration: "2.5s" }}
                />
                {/* Bogor gets a larger/accent dot as headquarters */}
                <div className={`relative rounded-full shadow-[0_0_15px_rgba(26,124,52,0.8)] border-[1.5px] border-white bg-[var(--color-leaf)] ${idx === 0 ? "w-4 h-4 sm:w-5 sm:h-5" : "w-3 h-3 sm:w-4 sm:h-4"}`} />
              </div>

              {/* Floating Label */}
              <div
                className="absolute z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{ top: loc.labelTop, left: loc.labelLeft }}
              >
                <div className={`backdrop-blur-md text-[var(--color-ink)] text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] whitespace-nowrap ${
                  idx === 0
                    ? "bg-[var(--color-leaf)] text-white border border-[var(--color-leaf-deep)]"
                    : "bg-white/95 border border-[var(--color-leaf)]/20"
                }`}>
                  {loc.name}{idx === 0 ? " 📍" : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}