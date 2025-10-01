"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white">
      {/* arka plan */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black to-orange-900" />
      <div className="pointer-events-none absolute -right-24 bottom-[-60px] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Hakkımızda */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">TerapiHome</h3>
            <p className="mt-3 text-white/80 text-sm leading-6">
              Ev/ofis koltukları ve araç döşemelerinde güçlü ekstraksiyonla
              derin kirleri yüzeyin altından çıkarır, hızlı kuruma ve kalıcı
              ferahlık sağlar.
            </p>

            {/* sosyal */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/evimindoktorutr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Menü */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">Menü</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>
                <Link href="/" className="hover:text-orange-300">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-orange-300">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/branch" className="hover:text-orange-300">
                  Şubelerimiz
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-orange-300">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">İletişim</h3>
            <ul className="mt-3 space-y-3 text-white/85">
              <li className="flex items-start gap-2">
                
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-orange-300" />
                <a href="tel:+905306209416" className="hover:text-orange-300">
                  +90 554 597 87 17
                </a>
              </li>
              <li className="flex items-center gap-2">
              </li>
            </ul>

            {/* WhatsApp CTA */}
       <a
  href="https://wa.me/905545978717?text=Merhaba,%20randevu%20almak%20istiyorum."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600"
>
  WhatsApp’tan Randevu Al
</a>


          </div>
        </div>

        {/* alt çizgi */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/70 md:flex-row md:justify-between md:text-left">
          <p>© {year} işify.com Tüm hakları saklıdır.</p>

          {/* en üste dön */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white/90 transition hover:bg-white/10"
            aria-label="Yukarı dön"
          >
            <ArrowUp className="h-4 w-4" />
            Yukarı dön
          </button>
        </div>
      </div>
    </footer>
  );
}
