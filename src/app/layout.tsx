import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Kreatif Food Indonesia | Supplier Ayam Frozen & Fresh",
  description:
    "PT Kreatif Food Indonesia menyediakan pasokan ayam frozen dan ayam fresh berkualitas tinggi langsung ke UMKM, restoran, katering, dan usaha kuliner. Pengiriman cepat, stok stabil, harga kompetitif.",
  keywords:
    "supplier ayam frozen Jakarta, ayam fresh UMKM, distributor ayam segar, Kreatif Food Indonesia, pasokan ayam katering, ayam frozen restoran, supply chain ayam B2B, PT Kreatif Food Indonesia",
  openGraph: {
    title: "PT Kreatif Food Indonesia — Ayam Frozen & Fresh untuk Bisnis Kuliner",
    description:
      "Pasokan ayam frozen dan fresh langsung dari rantai distribusi besar. Kualitas terjaga, pengiriman tepat waktu, dan skema fleksibel untuk UMKM.",
    url: "https://kreatifood.id/",
    siteName: "Kreatif Food Indonesia",
    images: [
      {
        url: "logo1.png",
        width: 1200,
        height: 630,
        alt: "PT Kreatif Food Indonesia — Supplier Ayam Frozen & Fresh",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Kreatif Food Indonesia | Ayam Frozen & Fresh",
    description:
      "Solusi pasokan ayam frozen dan fresh untuk bisnis kuliner — stok stabil, kualitas terjaga, pengiriman cepat ke seluruh wilayah.",
    images: ["https://kreatiffood.id/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}