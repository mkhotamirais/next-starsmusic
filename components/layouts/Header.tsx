"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--spotlight)]";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Transparan di atas hero, jadi solid setelah di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape menutup menu HP
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-[rgba(255,242,214,0.1)] bg-[rgba(29,11,34,0.9)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-full focus:bg-(--brass) focus:px-4 focus:py-2 focus:font-bold focus:text-(--velvet)"
      >
        Lewati ke konten
      </a>

      <div className="mx-auto flex h-18 w-full max-w-300 items-center justify-between px-5">
        <Link href="/" aria-label={`${site.name}, ke atas halaman`} className={`rounded-md ${focusRing}`}>
          <Image src={site.logo} alt={site.name} width={160} height={40} priority className="h-10 w-auto rounded-md" />
        </Link>

        <nav aria-label="Menu utama" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold text-[rgba(255,242,214,0.85)] transition-colors hover:text-(--brass) ${focusRing}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.cta.href}
            className={`inline-flex min-h-10 items-center justify-center rounded-full bg-(--brass) px-5 text-sm font-bold text-(--velvet) transition-colors hover:bg-(--spotlight) ${focusRing}`}
          >
            {site.cta.label}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="menu-hp"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden ${focusRing}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav
        id="menu-hp"
        aria-label="Menu utama"
        className={open ? "border-t border-[rgba(255,242,214,0.1)] md:hidden" : "hidden"}
      >
        <ul className="mx-auto flex w-full max-w-300 flex-col gap-1 px-5 py-4 m-0 list-none">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-2 py-3 text-lg font-semibold ${focusRing}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={site.cta.href}
              onClick={() => setOpen(false)}
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-full bg-(--brass) px-6 text-base font-bold text-(--velvet) ${focusRing}`}
            >
              {site.cta.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
