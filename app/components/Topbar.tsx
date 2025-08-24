"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Menu, X } from "lucide-react";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    // ARTIK sticky değil → absolute top-0
    <header className="w-full absolute top-0 left-0 z-40">
      {/* Üst bilgi barı */}
      <div className="bg-black text-white text-xs md:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <div className="flex min-w-0 items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="truncate">
              Konuksever Mah. Kızılırmak Cad. Çoban Apt No:119A Muratpaşa / Antalya
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+905306209416" className="font-semibold">
              0530 620 94 16
            </a>
          </div>
        </div>
      </div>

      {/* Menü bar (logo yok) */}
      <div className="bg-black border-b border-white/10">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          {/* Masaüstü menü */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-white">
            <Link href="/" className="hover:text-orange-400 transition">
              Anasayfa
            </Link>
            <Link href="/#services" className="hover:text-orange-400 transition">
              Hizmetlerimiz
            </Link>
            <Link href="/branch" className="hover:text-orange-400 transition">
              Şubelerimiz
            </Link>
            <Link href="/#contact" className="hover:text-orange-400 transition">
              İletişim
            </Link>
          </nav>

          {/* Mobil hamburger */}
          <button
            className="md:hidden text-white"
            aria-label="Menüyü aç/kapat"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobil menü */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black text-white">
            <div className="mx-auto max-w-6xl flex flex-col px-4 py-3 text-base">
              <Link href="/" onClick={close} className="py-2 hover:text-orange-400">
                Anasayfa
              </Link>
              <Link
                href="/#services"
                onClick={close}
                className="py-2 hover:text-orange-400"
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/branch"
                onClick={close}
                className="py-2 hover:text-orange-400"
              >
                Şubelerimiz
              </Link>
              <Link
                href="/#contact"
                onClick={close}
                className="py-2 hover:text-orange-400"
              >
                İletişim
              </Link>

              <a
                href="tel:+905306209416"
                onClick={close}
                className="mt-2 inline-flex items-center gap-2 text-orange-300"
              >
                <Phone className="h-4 w-4" /> 0530 620 94 16
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
