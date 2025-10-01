"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

type Branch = {
  id: "antalya" | "isparta" | "Burdur";
  name: string;
  addressHtml: string; // satır sonları için <br/> kullanıyoruz
  mapsQuery: string;   // Google Maps embed için arama parametresi
};

const BRANCHES: Branch[] = [
  {
    id: "antalya",
    name: "Antalya",
    addressHtml:
      'Konuksever Mah. Kızılırmak Cad. Çoban Apt No:119A <br />Muratpaşa / Antalya',
    // Adrese göre embed query (TR formatı iyi çalışır)
    mapsQuery:
      "Konuksever Mahallesi Kızılırmak Caddesi Çoban Apartmanı No:119A Muratpaşa Antalya",
  },
  {
    id: "isparta",
    name: "Isparta",
    addressHtml: "Isparta Merkez",
    mapsQuery: "Isparta Merkez",
  },
  {
    id: "Burdur",
    name: "Burdur",
    addressHtml: "Burdur",
    mapsQuery: "Burdur",
  },
];

export default function BranchPage() {
  const [active, setActive] = useState<Branch>(BRANCHES[0]);

  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    active.mapsQuery
  )}&output=embed`;

  return (
    <main className="min-h-screen bg-gradient-to-r from-black via-black to-orange-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Şubelerimiz</h1>
          <p className="mt-2 text-white/80">
            Aşağıdaki şubelerden birini seçin; sağdaki haritada konumu görün.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Sol: şube kartları */}
          <section className="space-y-4">
            {BRANCHES.map((b) => {
              const isActive = b.id === active.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setActive(b)}
                  className={`w-full text-left rounded-2xl border p-5 transition backdrop-blur-sm
                    ${
                      isActive
                        ? "border-orange-400 bg-white/10 shadow-lg"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`rounded-xl p-2 ${
                        isActive ? "bg-orange-500/20" : "bg-orange-500/10"
                      }`}
                    >
                      <MapPin
                        className={`h-6 w-6 ${
                          isActive ? "text-orange-300" : "text-orange-400"
                        }`}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{b.name}</h2>
                      <p
                        className="mt-1 text-sm text-white/85"
                        // adresi satır kırmalı göstermek için
                        dangerouslySetInnerHTML={{ __html: b.addressHtml }}
                      />
                      {isActive && (
                        <span className="mt-2 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-200">
                          Seçili
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </section>

          {/* Sağ: harita */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-xl backdrop-blur-sm">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                key={active.id} // seçimde yeniden yüklesin
                src={src}
                title={`${active.name} Konumu`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
            <div className="mt-3 text-center text-sm text-white/75">
              Görüntülenen: <span className="font-semibold">{active.name}</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
