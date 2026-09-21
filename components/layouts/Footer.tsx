import { site } from "@/lib/site";
import Image from "next/image";

const link =
  "text-[rgba(255,242,214,0.75)] transition-colors hover:text-[color:var(--brass)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--spotlight)]";

const heading = "mb-4 text-sm font-semibold text-[color:var(--brass)]";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(255,242,214,0.12)] bg-[#120615]">
      <div className="mx-auto grid w-full max-w-300 gap-12 px-5 py-16 md:grid-cols-[2fr_1fr_1.5fr]">
        <div>
          <Image src={site.logo} alt={site.name} width={160} height={40} className="h-10 w-auto rounded-md" />
          <p className="mt-5 max-w-[32ch] leading-[1.7] text-[rgba(255,242,214,0.7)]">{site.tagline}</p>
        </div>

        <nav aria-label="Menu footer">
          <h2 className={heading}>Menu</h2>
          <ul className="m-0 grid list-none gap-3 p-0">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>Kontak</h2>
          <ul className="m-0 grid list-none gap-3 p-0">
            <li>
              <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className={link}>
                WhatsApp {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={`${link} wrap-break-words`}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={link}>
                Instagram {site.instagram.handle}
              </a>
            </li>
            <li className="text-[rgba(255,242,214,0.6)]">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(255,242,214,0.1)]">
        <div className="mx-auto flex w-full max-w-300 flex-col gap-2 px-5 py-6 text-sm text-[rgba(255,242,214,0.6)] sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">
            © {year} {site.name}. Semua hak dilindungi.
          </p>
          <p className="m-0">
            Foto oleh{" "}
            <a
              href="https://pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-(--brass)"
            >
              Pixabay
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
