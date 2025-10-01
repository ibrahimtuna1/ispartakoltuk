"use client";

import Link from "next/link";
import { MapPin, Phone, ArrowUp, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const PHONE_E164 = "+905545978717";
  const PHONE_HUMAN = "+90 554 597 87 17";

  return (
    <footer className="relative overflow-hidden text-slate-800">
      {/* arka plan (teal → beyaz) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-white to-white" />
      <div className="pointer-events-none absolute -right-24 bottom-[-60px] h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Hakkımızda */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-slate-900">Isparta Koltuk Yıkama</h3>
            <p className="mt-3 text-slate-600 text-sm leading-6">
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
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/80 p-2 text-teal-700 transition hover:border-teal-200 hover:bg-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Menü */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-slate-900">Menü</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>
                <Link href="/" className="hover:text-teal-600 transition">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-teal-600 transition">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/branch" className="hover:text-teal-600 transition">
                  Şubelerimiz
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-teal-600 transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-slate-900">İletişim</h3>
            <ul className="mt-3 space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                <span>Isparta / Burdur ve çevresi</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-teal-600" />
                <a href={`tel:${PHONE_E164}`} className="hover:text-teal-600">
                  {PHONE_HUMAN}
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905545978717?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-600"
            >
              WhatsApp’tan Randevu Al
            </a>
          </div>
        </div>

        {/* alt çizgi */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 md:flex-row md:justify-between md:text-left">
          <p>© {year} işify.com Tüm hakları saklıdır.</p>

          {/* en üste dön */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white/80 px-3 py-2 text-slate-700 transition hover:border-teal-200 hover:text-teal-700"
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
