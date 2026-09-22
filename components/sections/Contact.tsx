// Semua teks ada di sini supaya gampang kamu ganti.
// PENTING: nomor WhatsApp, email, dan Instagram di bawah masih contoh. Ganti dengan yang asli.
// Format internasional tanpa + atau spasi, contoh Indonesia: 6281234567890
const WA_NUMBER = "6281234567890";

const content = {
  title: "Punya lagu, acara, atau ide? Mari kita bicarakan.",
  lead: "Ceritakan kebutuhanmu, kami balas secepatnya dengan gambaran waktu dan biaya.",
  whatsapp: {
    number: WA_NUMBER,
    label: "Chat lewat WhatsApp",
    message: "Halo Stars Music, saya ingin bertanya tentang layanan kalian.",
  },
  details: [
    {
      label: "WhatsApp",
      value: "+62 812-3456-7890",
      href: `https://wa.me/${WA_NUMBER}`,
    },
    {
      label: "Email",
      value: "hallo@starsmusic.id",
      href: "mailto:hallo@starsmusic.id",
    },
    {
      label: "Instagram",
      value: "@starsmusic.id",
      href: "https://www.instagram.com/starsmusic.id?igsh=MXc2c3dseG54cnF0eg==",
    },
    {
      label: "Jam layanan",
      value: "Senin sampai Sabtu, 10.00 sampai 20.00",
    },
  ],
};

const waHref = `https://wa.me/${content.whatsapp.number}?text=${encodeURIComponent(content.whatsapp.message)}`;

export default function Contact() {
  return (
    <section id="kontak" aria-labelledby="kontak-title" className="bg-(--velvet) py-24 sm:py-32">
      <div className="mx-auto w-full max-w-300 px-5">
        {/* Panel dengan cahaya lampu sorot dari atas */}
        <div className="grid gap-12 rounded-4xl border border-[rgba(255,242,214,0.12)] bg-[radial-gradient(ellipse_80%_120%_at_50%_0%,rgba(232,176,75,0.22)_0%,rgba(91,18,51,0.92)_55%,#3b0d24_100%)] p-8 sm:p-12 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:p-16">
          <div>
            <h2
              id="kontak-title"
              className="mb-5 max-w-[18ch] font-(family-name:--font-display) text-[clamp(1.9rem,4.4vw,3.5rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-balance"
            >
              {content.title}
            </h2>
            <p className="mb-9 max-w-[46ch] text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-[rgba(255,242,214,0.8)]">
              {content.lead}
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 w-full items-center justify-center rounded-full bg-([var(--brass)]) px-8 text-base font-bold text-(--velvet) transition-colors bg-(--spotlight) focus-visible:outline focus-visible:outline-offset-[3px] focus-visible:outline-(--spotlight) sm:w-auto"
            >
              {content.whatsapp.label}
              <span className="sr-only"> (buka di tab baru)</span>
            </a>
          </div>

          <dl className="grid content-center gap-5">
            {content.details.map((d) => (
              <div key={d.label} className="border-b border-[rgba(255,242,214,0.16)] pb-5 last:border-b-0 last:pb-0">
                <dt className="mb-1 text-sm font-semibold text-(--brass)">{d.label}</dt>
                <dd className="m-0 text-lg wrap-break-words">
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="underline decoration-[rgba(255,242,214,0.35)] underline-offset-4 transition-colors hover:decoration-([var(--brass)]) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--spotlight)"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
