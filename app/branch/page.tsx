"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

type Branch = {
  id: "isparta" | "Burdur" | "antalya";
  name: string;
  addressHtml: string;
  mapsQuery: string;
};

const BRANCHES: Branch[] = [
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
  {
    id: "antalya",
    name: "Antalya",
    addressHtml:
      'Konuksever Mah. Kızılırmak Cad. Çoban Apt No:119A <br />Muratpaşa / Antalya',
    mapsQuery:
      "Konuksever Mahallesi Kızılırmak Caddesi Çoban Apartmanı No:119A Muratpaşa Antalya",
  },
];

export default function BranchPage() {
  const [active, setActive] = useState<Branch>(BRANCHES[0]); // Isparta default

  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    active.mapsQuery
  )}&output=embed`;

  return (
    <main className="relative min-h-screen text-slate-800">
      {/* turkuaz → beyaz arka plan */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-white to-white" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Şubelerimiz</h1>
          <p className="mt-2 text-slate-600">
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
                        ? "border-teal-500 bg-teal-50 shadow-md"
                        : "border-slate-200 bg-white/80 hover:bg-white"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`rounded-xl p-2 ${isActive ? "bg-teal-100" : "bg-teal-50"}`}>
                      <MapPin
                        className={`h-6 w-6 ${isActive ? "text-teal-700" : "text-teal-600"}`}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">{b.name}</h2>
                      <p
                        className="mt-1 text-sm text-slate-600"
                        dangerouslySetInnerHTML={{ __html: b.addressHtml }}
                      />
                      {isActive && (
                        <span className="mt-2 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-700">
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
          <section className="rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                key={active.id}
                src={src}
                title={`${active.name} Konumu`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
            <div className="mt-3 text-center text-sm text-slate-600">
              Görüntülenen: <span className="font-semibold text-slate-900">{active.name}</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
