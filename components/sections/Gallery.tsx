import Image from "next/image";

// Semua teks dan foto ada di sini supaya gampang kamu ganti.
// Judul dan kategori di bawah masih contoh. Foto dari Pixabay (butuh remotePatterns di next.config).
const content = {
  title: "Karya dan momen kami.",
  //   lead: "Sebagian dari panggung, studio, dan perlengkapan yang pernah kami kerjakan.",
  // lead: "Great music comes from the heart, but popular music comes from the soul",
  lead: "Musik yang hebat berasal dari hati, tetapi musik yang populer berasal dari jiwa.",
  items: [
    {
      title: "Konser band live",
      tag: "Live",
      src: "https://cdn.pixabay.com/photo/2019/12/04/05/17/band-4671748_1280.jpg",
      alt: "Band tampil di panggung dengan penonton yang antusias",
      sizes: "(min-width: 1024px) 50vw, 100vw",
      className: "col-span-2 row-span-2",
    },
    {
      title: "Sesi rekaman vokal",
      tag: "Studio",
      src: "https://cdn.pixabay.com/photo/2016/07/02/22/30/music-1493897_1280.jpg",
      alt: "Penyanyi di depan mikrofon di studio rekaman",
      sizes: "(min-width: 1024px) 25vw, 50vw",
      className: "col-span-1",
    },
    {
      title: "Set drum siap pakai",
      tag: "Perlengkapan",
      src: "https://cdn.pixabay.com/photo/2016/11/19/13/57/drum-set-1839383_1280.jpg",
      alt: "Satu set drum lengkap",
      sizes: "(min-width: 1024px) 25vw, 50vw",
      className: "col-span-1",
    },
    {
      title: "Panggung acara komunitas",
      tag: "Event",
      src: "https://cdn.pixabay.com/photo/2017/08/06/16/16/people-2593810_1280.jpg",
      alt: "Kerumunan penonton di depan panggung dengan lampu sorot",
      sizes: "(min-width: 1024px) 50vw, 100vw",
      className: "col-span-2",
    },
  ],
};

export default function Gallery() {
  return (
    <section id="karya" aria-labelledby="karya-title" className="bg-[#160718] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-300 px-5">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2
            id="karya-title"
            className="max-w-[16ch] font-(family-name:--font-display) text-[clamp(1.9rem,4.2vw,3.25rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-balance"
          >
            {content.title}
          </h2>
          <p className="max-w-[40ch] text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-(--smoke)">{content.lead}</p>
        </div>

        <div className="grid auto-rows-52 grid-cols-2 gap-3 sm:auto-rows-60 sm:gap-4 lg:auto-rows-68 lg:grid-cols-4">
          {content.items.map((item) => (
            <figure
              key={item.src}
              className={`group relative m-0 overflow-hidden rounded-2xl bg-(--curtain) ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.sizes}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(0deg,rgba(29,11,34,0.92)_0%,rgba(29,11,34,0)_60%)]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="mb-1.5 block text-xs font-semibold text-(--brass)">{item.tag}</span>
                <span className="block font-(family-name:--font-display) text-base leading-snug font-semibold sm:text-lg">
                  {item.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
