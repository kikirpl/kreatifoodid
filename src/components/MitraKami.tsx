"use client";

import Image from "next/image";

export default function MitraKami() {
  const logos = [
    "/mitra/mitra1.jpeg",
    "/mitra/mitra2.jpeg",
    "/mitra/mitra3.jpeg",
  ];

  // Repeat logos to fill the marquee for an infinite sliding effect
  const partnerLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="section-heading mx-auto text-center">
        <p className="section-kicker">Partner Terpercaya</p>
        <h2 className="section-title">Mitra Kreatif Food</h2>
      </div>

      <div className="mt-16 relative overflow-hidden rounded-[2.5rem] border border-[var(--color-leaf)]/10 bg-white/60 py-12 shadow-[0_20px_50px_rgba(26,124,52,0.06)] backdrop-blur">
        <div className="marquee-track">
          <div
            className="marquee-group hover:[animation-play-state:paused]"
            style={{ animationDuration: "30s" }}
          >
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={index}
                className="mx-14 flex shrink-0 items-center justify-center grayscale transition-all duration-500 hover:grayscale-0 opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={200}
                  height={100}
                  className="h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}