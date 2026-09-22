import Image from "next/image";

// Semua isi ada di sini supaya gampang kamu ganti.
// PENTING: daftar klien di bawah masih contoh. Ganti nama, jenis, dan (opsional) logo dengan klien asli.
// Logo: simpan di public/clients/, lalu isi "logo", contoh: logo: "/clients/nama-klien.png"
// Kalau "logo" dikosongkan, yang tampil adalah nama klien sebagai teks.
type Client = { name: string; type: string; logo?: string };

const content: { title: string; lead: string; clients: Client[] } = {
  // title: "Mereka yang sudah mempercayakan musiknya pada kami.",
  // lead: "Dari musisi dan penyelenggara acara sampai brand, inilah sebagian yang pernah bekerja sama dengan Stars Music.",
  title: "Partner Banyak Brand, Artis & Label Musik",
  lead: "Telah menjadi partner banyak brand, artis, dan label musik dalam berbagai kolaborasi, distribusi konten dan campaign digital",
  clients: [
    { logo: "/images/clients/client-1-rfas-music.png", name: "Nama Klien 1", type: "Konser" },
    // { name: "Nama Klien 2", type: "Pernikahan" },
    // { name: "Nama Klien 3", type: "Rekaman" },
    // { name: "Nama Klien 4", type: "Festival" },
    // { name: "Nama Klien 5", type: "Acara perusahaan" },
    // { name: "Nama Klien 6", type: "Sekolah" },
    // { name: "Nama Klien 7", type: "Komunitas" },
    // { name: "Nama Klien 8", type: "Brand" },
  ],
};

export default function Clients() {
  return (
    <section aria-labelledby="klien-title" className="bg-(--velvet) pb-24 pt-16 sm:pb-32">
      <div className="mx-auto w-full max-w-300 px-5">
        <div className="mb-12 max-w-[60ch]">
          <h2
            id="klien-title"
            className="mb-5 font-(family-name:--font-display) text-[clamp(1.4rem,2.6vw,2rem)] leading-tight font-extrabold tracking-[-0.01em] text-balance"
          >
            {content.title}
          </h2>
          <p className="leading-[1.7] text-(--smoke)">{content.lead}</p>
        </div>

        <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {content.clients.map((c) => (
            <li
              key={c.name}
              className="flex aspect-3/2 flex-col items-center justify-center gap-2 rounded-2xl bg-(--spotlight) p-2 text-center text-(--velvet)"
            >
              {c.logo ? (
                <div className="relative h-40 w-full">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="font-(family-name:--font-display) text-base leading-tight font-bold sm:text-lg">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
