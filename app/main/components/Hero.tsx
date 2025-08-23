"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-black via-black to-orange-600 text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between">
      {/* Logo + Marka adı */}
      <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center md:justify-start gap-3 items-center">
        <Image
          src="/images/logo.png"
          alt="Terapi Home Logo"
          width={80}
          height={80}
          priority
        />
        <span className="text-3xl md:text-4xl font-bold text-orange-500">
          TerapiHome
        </span>
      </div>

      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Profesyonel Koltuk Yıkama
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Evde, ofiste ve aracınızda hijyenik temizlik çözümleri
        </p>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Hemen Randevu Al
        </a>
      </div>
    </section>
  );
}
