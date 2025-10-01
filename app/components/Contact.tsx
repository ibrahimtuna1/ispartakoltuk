"use client";

import { MapPin, Phone, Instagram } from "lucide-react";
import type { MouseEventHandler } from "react";

export default function Contact() {
  const IG = "evimindoktorutr" as const;
  const IG_WEB = `https://instagram.com/${IG}` as const;

  const openIG: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const ua = navigator.userAgent;
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    if (isAndroid) {
      window.location.href =
        `intent://user?username=${IG}#Intent;scheme=instagram;package=com.instagram.android;S.browser_fallback_url=${encodeURIComponent(IG_WEB)};end`;
    } else if (isIOS) {
      const t = setTimeout(() => window.open(IG_WEB, "_blank"), 700);
      window.location.href = `instagram://user?username=${IG}`;
      setTimeout(() => clearTimeout(t), 1500);
    } else {
      window.open(IG_WEB, "_blank");
    }
  };

  return (
    <section id="contact" className="relative py-20">
      {/* bölümün kendi açık arka planı */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-white to-white" />

      <div className="max-w-6xl mx-auto px-6 text-center text-slate-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">İletişim</h2>
        <p className="text-lg mb-12 text-slate-600">
          Bizimle hemen iletişime geçin, profesyonel temizlik hizmetimizi deneyimleyin.
        </p>

        {/* Bilgi Kartları */}
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {/* Adres */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <MapPin className="h-10 w-10 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Adres</h3>
            <p className="text-center text-slate-600">
              Hizmet verdiğimiz iller: Isparta / Burdur
            </p>
          </div>

          {/* Telefon */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <Phone className="h-10 w-10 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Telefon</h3>
            <a
              href="tel:+905545978717"
              className="text-teal-700 text-lg font-semibold hover:underline"
              aria-label="Telefonu ara"
            >
              +90 554 597 87 17
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <Instagram className="h-10 w-10 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Instagram</h3>
            <a
              href={IG_WEB}
              onClick={openIG}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 text-lg font-semibold hover:underline"
            >
              @{IG}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
