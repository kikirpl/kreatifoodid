import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kreatiffood.id"),
  title: "PT Kreatif Food Indonesia | Pengolahan, Distribusi & Perdagangan Ayam Beku",
  description:
    "PT Kreatif Food Indonesia mengolah, mendistribusikan, dan memperdagangkan produk ayam beku (frozen food) yang berkualitas, higienis, dan halal. Cold chain terjaga -18°C untuk HORECA, ritel, industri pangan, dan pasar ekspor.",
  keywords:
    "ayam beku, frozen food ayam, supplier karkas ayam, boneless dada ayam, boneless paha ayam, distributor ayam beku HORECA, cold chain ayam, zero waste processing ayam, PT Kreatif Food Indonesia, AYAMKITA, Prime Chicken, KFI Poultry Premium",
  openGraph: {
    title: "PT Kreatif Food Indonesia — Frozen Food Ayam Berkualitas, Higienis, dan Halal",
    description:
      "Pengolahan, distribusi, dan perdagangan ayam beku dengan rantai dingin terjaga. Melayani HORECA, ritel, industri pangan, dan pasar ekspor.",
    url: "https://kreatiffood.id/",
    siteName: "PT Kreatif Food Indonesia",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "PT Kreatif Food Indonesia — Fresh Quality, Trusted Nutrition",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Kreatif Food Indonesia | Frozen Food Ayam",
    description:
      "Fresh Quality, Trusted Nutrition — ayam beku berkualitas untuk HORECA, ritel, industri pangan, dan ekspor.",
    images: ["/logo.png"],
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