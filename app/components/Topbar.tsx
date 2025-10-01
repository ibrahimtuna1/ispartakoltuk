"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Menu, X } from "lucide-react";

const PHONE_E164 = "+905545978717";
const PHONE_HUMAN = "+90 554 597 87 17";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    // ARTIK sticky değil → absolute top-0
    <header className="w-full absolute top-0 left-0 z-40">
      {/* Üst bilgi barı */}
      <div className="bg-white/80 backdrop-blur border-b border-slate-200 text-slate-700 text-xs md:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <div className="flex min-w-0 items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-teal-600" />
            
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Phone className="h-4 w-4 text-teal-600" />
            <a href={`tel:${PHONE_E164}`} className="font-semibold text-teal-700 hover:text-teal-600">
              {PHONE_HUMAN}
            </a>
          </div>
        </div>
      </div>

      {/* Menü bar (logo yok) */}
      <div className="bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          {/* Masaüstü menü */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-800">
            <Link href="/" className="hover:text-teal-600 transition">Anasayfa</Link>
            <Link href="/#services" className="hover:text-teal-600 transition">Hizmetlerimiz</Link>
            <Link href="/branch" className="hover:text-teal-600 transition">Şubelerimiz</Link>
            <Link href="/#contact" className="hover:text-teal-600 transition">İletişim</Link>
          </nav>

          {/* Mobil hamburger */}
          <button
            className="md:hidden text-slate-800"
            aria-label="Menüyü aç/kapat"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobil menü */}
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur text-slate-800">
            <div className="mx-auto max-w-6xl flex flex-col px-4 py-3 text-base">
              <Link href="/" onClick={close} className="py-2 hover:text-teal-600">Anasayfa</Link>
              <Link href="/#services" onClick={close} className="py-2 hover:text-teal-600">Hizmetlerimiz</Link>
              <Link href="/branch" onClick={close} className="py-2 hover:text-teal-600">Şubelerimiz</Link>
              <Link href="/#contact" onClick={close} className="py-2 hover:text-teal-600">İletişim</Link>

              <a
                href={`tel:${PHONE_E164}`}
                onClick={close}
                className="mt-2 inline-flex items-center gap-2 text-teal-700"
              >
                <Phone className="h-4 w-4" /> {PHONE_HUMAN}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
