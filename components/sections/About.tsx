import Image from "next/image";

// Semua teks ada di sini supaya gampang kamu ganti.
// PENTING: cerita dan nilai di bawah masih contoh umum. Ganti dengan cerita Stars Music yang sebenarnya.
const content = {
  // Foto Pixabay (studio rekaman). Ganti kalau sudah punya foto tim atau studio sendiri.
  image: "https://cdn.pixabay.com/photo/2016/07/02/22/30/music-1493897_1280.jpg",
  imageAlt: "Penyanyi merekam suara di depan mikrofon di studio",
  story: [
    // "Stars Music berangkat dari keyakinan sederhana: musik yang digarap sungguh-sungguh akan terasa sampai ke penonton paling belakang.",
    // "Kami bekerja bersama musisi, penyelenggara acara, dan brand untuk menyiapkan semuanya, dari ide dan rekaman sampai suara yang jernih di hari pertunjukan.",
    // "Setiap proyek kami perlakukan seperti panggung utama, sekecil apa pun acaranya.",
    // "Stars Music is a talent management company based in Jakarta, focused on the development and management of content creators to help distribute your campaigns to a wider audience. With over 200 talented creators, we are committed to creating innovative and engaging collaborations across various digital platforms.",
    // "Build and manage mutually beneficial relationships between creators and brands.",
    "Membangun dan mengelola hubungan yang saling menguntungkan antara pembuat konten dan brand.",
    "Stars Music adalah perusahaan manajemen talenta yang berbasis di Jakarta, berfokus pada pengembangan dan pengelolaan pembuat konten untuk membantu mendistribusikan kampanye Anda ke audiens yang lebih luas. Dengan lebih dari 200 pembuat konten berbakat, kami berkomitmen untuk menciptakan kolaborasi yang inovatif dan menarik di berbagai platform digital.",
  ],
  valuesTitle: "Cara kami bekerja",
  values: [
    {
      title: "Telinga yang peka",
      text: "Kami mendengarkan dulu sebelum mengerjakan, supaya hasilnya terdengar seperti kamu.",
    },
    {
      title: "Kerja yang rapi",
      text: "Persiapan teknis dan jadwal ditangani dengan detail, supaya hari pertunjukan berjalan tenang.",
    },
    {
      title: "Terbuka dan jelas",
      text: "Biaya, waktu, dan proses kami jelaskan sejak awal, tanpa kejutan di belakang.",
    },
  ],
};

export default function About() {
  return (
    <>
      <section aria-label="Cerita kami" className="bg-(--velvet) pb-24 sm:pb-32">
        <div className="mx-auto grid w-full max-w-300 items-center gap-12 px-5 lg:grid-cols-[5fr_6fr] lg:gap-20">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-(--curtain)">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(0deg,rgba(29,11,34,0.55)_0%,rgba(29,11,34,0)_45%)]"
            />
          </div>

          <div className="grid gap-6">
            {content.story.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-[clamp(1.15rem,2vw,1.5rem)] leading-[1.6] font-semibold text-(--spotlight)"
                    : "max-w-[56ch] text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.8] text-(--smoke)"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="nilai-title" className="bg-[#160718] py-24 sm:py-32">
        <div className="mx-auto w-full max-w-300 px-5">
          <h2
            id="nilai-title"
            className="mb-12 max-w-[16ch] font-(family-name:--font-display) text-[clamp(1.9rem,4.2vw,3.25rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-balance"
          >
            {content.valuesTitle}
          </h2>
          <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
            {content.values.map((v, i) => (
              <li
                key={v.title}
                className="rounded-2xl border border-[rgba(255,242,214,0.12)] bg-[rgba(91,18,51,0.35)] p-7"
              >
                <span className="font-(family-name:--font-display) text-sm text-(--brass) tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 mb-3 font-(family-name:--font-display) text-xl font-semibold">{v.title}</h3>
                <p className="leading-[1.7] text-(--smoke)">{v.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
