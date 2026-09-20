"use client";

import Image from "next/image";

const logos = ["/mitra/mitra1.jpeg", "/mitra/mitra2.jpeg", "/mitra/mitra3.jpeg"];

export default function MitraKami() {
  const partnerLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section id="mitra" className="band band-mist">
      <div className="shell">
        <p className="eyebrow">
          <span className="eyebrow-num">10</span>
          <span className="eyebrow-rule" />
          Jaringan kerja sama
        </p>
        <h2 className="section-title">Mitra Kreatif Food</h2>
        <p className="lede">
          Bekerja sama dengan pemasok bahan baku, penyedia logistik dingin, dan mitra dagang di
          sepanjang rantai pasok ayam beku.
        </p>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[var(--kfi-line)] bg-white py-10">
          <div className="marquee-track">
            <div
              className="marquee-group hover:[animation-play-state:paused]"
              style={{ animationDuration: "32s" }}
            >
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={index}
                  className="mx-10 flex shrink-0 items-center justify-center opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={logo}
                    alt={`Logo mitra ${(index % logos.length) + 1}`}
                    width={200}
                    height={100}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}