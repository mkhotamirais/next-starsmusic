import Image from "next/image";

// Semua teks ada di sini supaya gampang kamu ganti.
const content = {
  //   title: "Musik yang membuat panggungmu bersinar.",
  title: "Talent Management Company Based in Jakarta",
  lead: "Stars Music membantu musisi, acara, dan brand menghadirkan musik yang terdengar profesional, dari rekaman sampai tampil di depan penonton.",
  primary: { label: "Hubungi kami", href: "#kontak" },
  secondary: { label: "Lihat karya kami", href: "#karya" },
  // Foto dari Pixabay (butuh remotePatterns cdn.pixabay.com di next.config).
  // Kalau nanti diunduh, taruh di public/images/hero-stage.jpg dan ganti jadi "/images/hero-stage.jpg".
  image: "https://cdn.pixabay.com/photo/2017/08/01/14/14/concert-2565765_1280.jpg",
};

// Nilai tetap (bukan random) supaya server dan client sama, tidak error hydration.
const BARS = Array.from({ length: 56 }, (_, i) => ({
  delay: -(((i * 37) % 17) / 10),
  duration: 0.8 + ((i * 53) % 11) / 10,
  peak: 35 + ((i * 29) % 60),
}));

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-(--velvet)"
    >
      <Image src={content.image} alt="" fill priority sizes="100vw" className="-z-20 object-cover object-center" />

      {/* Gelap di kiri supaya teks terbaca, hangat di kanan seperti lampu panggung */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#1d0b22_0%,rgba(29,11,34,0)_45%),linear-gradient(90deg,rgba(29,11,34,0.95)_0%,rgba(29,11,34,0.72)_45%,rgba(91,18,51,0.3)_100%)]"
      />

      <div className="mx-auto w-full max-w-300 px-5 pt-32 pb-[clamp(6.5rem,16vh,10rem)]">
        <h1
          id="hero-title"
          className="mb-6 max-w-[14ch] font-(family-name:--font-display) text-[clamp(2.3rem,6.4vw,5.25rem)] leading-[1.04] font-extrabold tracking-[-0.02em] text-balance"
        >
          {content.title}
        </h1>

        <p className="mb-9 max-w-[52ch] text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.7] text-(--smoke)">{content.lead}</p>

        <div className="flex flex-wrap gap-3.5">
          <a
            href={content.primary.href}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-(--brass) px-7 text-base font-bold text-(--velvet) transition-colors hover:bg-(--spotlight) focus-visible:outline focus-visible:outline-offset-[3px] focus-visible:outline-(--spotlight) sm:w-auto"
          >
            {content.primary.label}
          </a>
          <a
            href={content.secondary.href}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-[1.5px] border-[rgba(255,242,214,0.45)] px-7 text-base font-bold text-(--spotlight)] transition-colors hover:border-[var(--spotlight) hover:bg-[rgba(255,242,214,0.08)] focus-visible:outline focus-visible:outline-offset-[3px] focus-visible:outline-(--spotlight) sm:w-auto"
          >
            {content.secondary.label}
          </a>
        </div>
      </div>

      {/* Equalizer di dasar hero: satu-satunya gerakan otomatis di halaman */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[clamp(72px,13vh,140px)] items-end gap-[clamp(3px,0.5vw,8px)] px-[clamp(0.75rem,2vw,2rem)]"
      >
        {BARS.map((b, i) => (
          <span
            key={i}
            className="eq-bar flex-1"
            style={
              {
                "--d": `${b.delay}s`,
                "--t": `${b.duration}s`,
                "--h": b.peak,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </section>
  );
}
