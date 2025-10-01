"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const IG = "evimindoktorutr";
  const IG_WEB = `https://instagram.com/${IG}`;

  // Instagram app → fallback web
  function openIG(e: any) {
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
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-black via-black to-orange-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">İletişim</h2>
        <p className="text-lg mb-12 text-white/80">
          Bizimle hemen iletişime geçin, profesyonel temizlik hizmetimizi deneyimleyin.
        </p>

        {/* Bilgi Kartları */}
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {/* Adres */}
          <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <MapPin className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adres</h3>
            <p className="text-center text-white/80">Hizmet verdiğimiz iller ; Isparta/Burdur</p>
          </div>

          {/* Telefon */}
          <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <Phone className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <a
              href="tel:+905545978717"
              className="text-green-400 text-lg font-semibold hover:underline"
              aria-label="Telefonu ara"
            >
              +90 554 597 87 17
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <Mail className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <a
              href={IG_WEB}
              onClick={openIG}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 text-lg font-semibold hover:underline"
            >
              @{IG}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
