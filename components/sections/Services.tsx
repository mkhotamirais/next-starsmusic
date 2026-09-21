// Semua teks ada di sini supaya gampang kamu ganti.
// Isi layanan di bawah masih contoh, sesuaikan dengan yang benar-benar ditawarkan Stars Music.
const content = {
  title: "Dari ide sampai sorak penonton.",
  lead: "Pilih satu yang kamu butuhkan, atau gabungkan semuanya dalam satu proyek.",
  //   tracks: [
  //     {
  //       title: "Rekaman & Produksi",
  //       text: "Rekam, aransemen, mixing, sampai mastering dengan telinga yang peka terhadap karakter lagumu.",
  //       tag: "Studio",
  //     },
  //     {
  //       title: "Musik Live",
  //       text: "Penampilan langsung untuk acara, pernikahan, dan panggung dari yang kecil sampai besar, lengkap dengan persiapan teknisnya.",
  //       tag: "Panggung",
  //     },
  //     {
  //       title: "Sound & Perlengkapan",
  //       text: "Sistem suara dan alat musik siap pakai, ditangani kru yang paham kebutuhan acaramu.",
  //       tag: "Perlengkapan",
  //     },
  //     {
  //       title: "Kelas Musik",
  //       text: "Belajar instrumen dan vokal bersama pengajar berpengalaman, dari pemula sampai berani tampil di depan orang.",
  //       tag: "Belajar",
  //     },
  //   ],
  tracks: [
    {
      title: "Talent Management",
      text: "Kami menaungi lebih dari 200 seniman berbakat, memberikan mereka kesempatan untuk berkolaborasi dalam berbagai proyek dan kampanye.",
      tag: "Talent",
    },
    {
      title: "Collaborative Campaigns (KOL)",
      text: "Kami bermitra dengan influencer dan pembuat konten untuk memperluas jangkauan serta meningkatkan autentisitas, memanfaatkan platform mereka untuk mempromosikan musik dan acara secara efektif.",
      tag: "KOL",
    },
    {
      title: "User-Generated Content (UGC)",
      text: "Kami mendorong dan mengurasi konten buatan pengguna untuk meningkatkan keterikatan komunitas, memungkinkan penggemar berbagi pengalaman dan terhubung dengan musik secara pribadi.",
      tag: "UGC",
    },
    {
      title: "Buzzer Marketing",
      text: "Kampanye buzzer kami melibatkan tokoh-tokoh kunci di industri musik untuk menciptakan antusiasme di sekitar rilis baru, memastikan pesan menjangkau audiens yang lebih luas.",
      tag: "Buzzer",
    },
  ],
  //   tracks: [
  //   {
  //     title: "Talent Management",
  //     text: "We represent over 200 talented artists, providing them with opportunities to collaborate on various projects and campaigns.",
  //     tag: "Talent"
  //   },
  //   {
  //     title: "Collaborative Campaigns (KOL)",
  //     text: "We partner with influencers and content creators to amplify reach and authenticity, leveraging their platforms to promote music and events effectively.",
  //     tag: "KOL"
  //   },
  //   {
  //     title: "User-Generated Content (UGC)",
  //     text: "We encourage and curate UGC to foster community engagement, allowing fans to share their experiences and connect with the music on a personal level.",
  //     tag: "UGC"
  //   },
  //   {
  //     title: "Buzzer Marketing",
  //     text: "Our buzzer campaigns engage key figures in the music industry to create buzz and excitement around new releases, ensuring that messages reach a wider audience.",
  //     tag: "Buzzer"
  //   }
  // ]
};

export default function Services() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-title"
      className="relative overflow-hidden bg-(--velvet) py-24 sm:py-32"
    >
      {/* Piringan hitam dekoratif, sengaja diam supaya equalizer tetap jadi satu-satunya gerakan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 z-0 hidden h-152 w-152 -translate-y-1/2 rounded-full bg-[repeating-radial-gradient(circle,#2b1031_0_2px,#1d0b22_2px_6px)] opacity-70 lg:block"
      >
        <div className="absolute inset-0 m-auto h-[30%] w-[30%] rounded-full border-2 border-(--brass) bg-(--curtain)">
          <div className="absolute inset-0 m-auto h-[12%] w-[12%] rounded-full bg-(--velvet)" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-300 gap-12 px-5 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2
            id="layanan-title"
            className="mb-5 max-w-[16ch] font-(family-name:--font-display) text-[clamp(1.9rem,4.2vw,3.25rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-balance"
          >
            {content.title}
          </h2>
          <p className="max-w-[40ch] text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-(--smoke)">{content.lead}</p>
        </div>

        <ol>
          {content.tracks.map((t, i) => (
            <li
              key={t.title}
              className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-b border-[rgba(255,242,214,0.14)] py-7 first:border-t sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline"
            >
              <span className="font-(family-name:--font-display) text-sm text-(--brass) tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-(family-name:--font-display) text-xl font-semibold sm:text-2xl">{t.title}</h3>
                <p className="mt-2 max-w-[48ch] leading-[1.7] text-(--smoke)">{t.text}</p>
              </div>
              <span className="col-start-2 justify-self-start rounded-full border border-[rgba(232,176,75,0.5)] px-3 py-1 text-xs font-semibold text-(--brass) sm:col-start-auto sm:justify-self-end">
                {t.tag}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
