"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-black via-black to-orange-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          İletişim
        </h2>
        <p className="text-lg mb-12 text-white/80">
          Bizimle hemen iletişime geçin, profesyonel temizlik hizmetimizi deneyimleyin.
        </p>

        {/* Bilgi Kartları */}
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {/* Adres */}
          <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <MapPin className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adres</h3>
            <p className="text-center text-white/80">
              Konuksever Mah. Kızılırmak Cad. Çoban Apt No:119A <br />
              Muratpaşa / Antalya
            </p>
          </div>

          {/* Telefon */}
          <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <Phone className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <a
              href="tel:+905306209416"
              className="text-green-400 text-lg font-semibold hover:underline"
            >
              +90 530 620 94 16
            </a>
          </div>

          {/* Mail */}
          <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <Mail className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">E-posta</h3>
            <a
              href="mailto:terapihometr@gmail.com"
              className="text-orange-400 text-lg font-semibold hover:underline"
            >
              terapihometr@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
