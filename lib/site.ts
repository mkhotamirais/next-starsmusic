// Satu tempat untuk data yang dipakai di banyak bagian (header, footer, kontak).
// PENTING: nomor WhatsApp, email, dan Instagram di bawah masih contoh. Ganti dengan yang asli.
// Nomor WhatsApp: format internasional tanpa + atau spasi, contoh Indonesia: 6281234567890
const WA_NUMBER = "6281234567890";

export const site = {
  name: "Stars Music",
  tagline: "Musik yang membuat panggungmu bersinar.",
  logo: "/images/logo-starsmusic-dark.png",
  nav: [
    { label: "Layanan", href: "#layanan" },
    { label: "Karya", href: "#karya" },
    { label: "Kontak", href: "#kontak" },
  ],
  cta: { label: "Hubungi kami", href: "#kontak" },
  whatsapp: {
    display: "+62 812-3456-7890",
    url: `https://wa.me/${WA_NUMBER}`,
  },
  email: "email@domainmu.id",
  instagram: {
    handle: "@akun_instagram",
    url: "https://instagram.com/akun_instagram",
  },
  hours: "Senin sampai Sabtu, 10.00 sampai 20.00",
};
