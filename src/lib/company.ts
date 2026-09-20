/**
 * Sumber tunggal data perusahaan — seluruh angka, alamat, dan penamaan
 * mengikuti Company Profile PT Kreatif Food Indonesia.
 */

export const company = {
  name: "PT Kreatif Food Indonesia",
  short: "Kreatif Food Indonesia",
  tagline: "Fresh Quality, Trusted Nutrition",
  positioning: "Frozen Food Ayam Berkualitas, Higienis, dan Halal",
  bidangUsaha: "Pengolahan, Distribusi & Perdagangan Ayam Beku",
  email: "info@kreatiffood.id",
  whatsapp: "6281234567890",
  phones: ["0251-123 4567", "0251-123 4568"],
  offices: {
    bogor: {
      label: "Kantor / Domisili",
      city: "Kota Bogor, Jawa Barat",
      lines: [
        "Jl. Sholeh Iskandar No. 106, Kel. Cibadak,",
        "Kec. Tanah Sareal, Kota Bogor, Jawa Barat 16166",
      ],
      maps: "https://maps.google.com/?q=-6.545788093196256,106.77365935268824",
    },
    yogyakarta: {
      label: "Unit Operasional",
      city: "Kab. Sleman, D.I. Yogyakarta",
      lines: [
        "Japanan RT.001/RW.015, Margodadi, Seyegan,",
        "Kab. Sleman, D.I. Yogyakarta",
      ],
      maps: "https://maps.google.com/?q=Margodadi+Seyegan+Sleman+Yogyakarta",
    },
  },
  legal: {
    aktaPendirian: "Akta No. 16 — 30 September 2024",
    notarisPendirian: "Notaris M. Kamaludin Purnomo, S.H.",
    pengesahan: "AHU-0076839.AH.01.01",
    pengesahanDate: "Ditetapkan 1 Oktober 2024",
    daftarPerseroan: "AHU-0209024",
    jenisPerseroan: "Swasta Nasional",
    aktaPerubahan: "Akta No. 08 — 26 Mei 2026",
    notarisPerubahan: "Notaris Nadiya Najmi, S.H., M.Kn",
    modal: "Rp 4,8 Miliar",
    lembarSaham: "4.800 lembar @ Rp 1.000.000",
  },
} as const;

export const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Bidang Usaha", href: "#bidang-usaha" },
  { label: "Produk", href: "#produk" },
  { label: "Merek", href: "#merek" },
  { label: "Legalitas", href: "#legalitas" },
  { label: "Kontak", href: "#kontak" },
];