"use client";

import { motion, type MotionProps, type Transition } from "framer-motion";
import {
  Sofa, Car, Armchair, Home, MapPin,
  Droplets, ShieldCheck, CheckCircle2, Sparkles, Clock, PhoneCall
} from "lucide-react";
import React from "react";

type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// --- WhatsApp helper: başlığa göre default metin, istenirse özel metin ---
const WA_PHONE = "905545978717";
const waHref = ({ title, text }: { title: string; text?: string }) => {
  const fallback = `Merhaba, ${title.toLocaleLowerCase("tr-TR")} için randevu almak istiyorum.`;
  const msg = text ?? fallback;
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
};

// easing / fade
const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
  viewport: { once: true, amount: 0.2 },
});

// HİZMETLER
const SERVICES: {
  title: string;
  icon: Icon;
  desc: string;
  bullets: string[];
  badges: { icon: Icon; label: string }[];
  waText?: string; // özel WA mesajı (opsiyonel)
}[] = [
  {
    title: "Ev & Ofis Koltuk Yıkama",
    icon: Sofa,
    desc:
      "Leke ve kokuya sebep olan derin kirleri güçlü ekstraksiyon ile çekerek kumaşları ilk günkü ferahlığına yaklaştırırız. Kalıntı bırakmayan uygulama, hızlı kuruma.",
    bullets: [
      "Derinlemesine hijyen & leke azaltma",
      "Koku yenileme, taze görünüm",
      "Kumaş dostu çözümler",
    ],
    badges: [
      { icon: Droplets, label: "Alerjen azaltma" },
      { icon: ShieldCheck, label: "Koruma opsiyonu" },
    ],
  },
  {
    title: "Araç Koltuğu & İç Detaylı Temizlik",
    icon: Car,
    desc:
      "Koltuklar, taban halısı ve tavan gibi bölgelerde biriken kirleri güçlü vakum ve ekstraksiyonla uzaklaştırır; ferah ve hijyenik bir iç mekân elde edersiniz.",
    bullets: [
      "Koltuk & döşeme derin temizlik",
      "Koku tazeleme, detaylı bakım",
      "Hızlı kuruma, profesyonel ekipman",
      "Yerinde temizlik (adresinizde)",
    ],
    badges: [
      { icon: MapPin, label: "Yerinde temizlik" },
      { icon: Sparkles, label: "Detaylı iç temizlik" },
      { icon: Clock, label: "Aynı gün hızlandırılmış teslim" },
    ],
    waText:
      "Merhaba, araç koltuğu ve iç detaylı temizlik için YERİNDE TEMİZLİK randevusu almak istiyorum.",
  },
  {
    title: "Sandalye & Kafe Koltuğu Yıkama",
    icon: Armchair,
    desc:
      "Kafe, restoran ve ofis oturma gruplarında hızlı uygulama + kısa kuruma süresiyle görünür tazelik sağlar.",
    bullets: [
      "Yerinde hızlı uygulama",
      "Lekelerde nokta müdahale",
      "Yoğun kullanım için planlama",
    ],
    badges: [
      { icon: Clock, label: "Kısa kuruma" },
      { icon: Sparkles, label: "Görünür tazelik" },
    ],
  },
  {
    title: "Ev İçi Detaylı Temizlik",
    icon: Home,
    desc:
      "Mutfak, banyo, detay yüzey temizliği ve toz/kir birikimlerinin çözümü; talebe göre kapsam belirlenir.",
    bullets: [
      "Mutfak & banyo detay",
      "Yüzey/derz & nokta temizlik",
      "Planlı ekip çalışması",
    ],
    badges: [
      { icon: Sparkles, label: "Detay odaklı" },
      { icon: ShieldCheck, label: "Güvenli ürün" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* arka plan: turkuaz açık degrade */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-white to-white" />
      {/* hafif teal glow */}
      <div className="pointer-events-none absolute right-[-12%] top-[12%] h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-teal-400/20 blur-[80px]" />

      <div className="mx-auto max-w-6xl px-6 py-20 text-slate-800">
        {/* başlık */}
        <motion.div {...fadeUp(0.05)} className="text-center">
          <span className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold text-teal-700">
            Derinlemesine temizlik • Hızlı kuruma
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">Hizmetlerimiz</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Koltuk, araç ve işletme oturma gruplarında profesyonel ekipmanla derin temizlik.
          </p>
        </motion.div>

        {/* kartlar */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const IconEl = s.icon;
            return (
              <motion.div
                key={s.title}
                {...fadeUp(0.1 + i * 0.08)}
                className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-teal-500/10 p-3">
                    <IconEl className="h-7 w-7 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                </div>

                <p className="mt-3 text-slate-700">{s.desc}</p>

                <ul className="mt-4 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-teal-600" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {s.badges.map(({ icon: BIcon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                    >
                      <BIcon className="h-4 w-4 text-teal-600" /> {label}
                    </span>
                  ))}
                </div>

                <a
                  href={waHref({ title: s.title, text: s.waText })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-3 font-semibold text-white shadow transition hover:bg-teal-600"
                >
                  WhatsApp’tan Randevu Al
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* güven/süreç */}
        <motion.div
          {...fadeUp(0.26)}
          className="mt-14 grid grid-cols-1 gap-6 rounded-2xl border border-slate-200 bg-white/80 p-6 text-slate-800 backdrop-blur md:grid-cols-3"
        >
          <div className="text-center">
            <PhoneCall className="mx-auto h-8 w-8 text-teal-600" />
            <p className="mt-2 font-semibold text-slate-900">Hızlı Randevu</p>
            <p className="text-sm text-slate-600">WhatsApp’tan anında dönüş</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-teal-600" />
            <p className="mt-2 font-semibold text-slate-900">Kumaş Güvenliği</p>
            <p className="text-sm text-slate-600">Uygun ürün, kalıntı bırakmaz</p>
          </div>
          <div className="text-center">
            <Sparkles className="mx-auto h-8 w-8 text-teal-600" />
            <p className="mt-2 font-semibold text-slate-900">Derin Hijyen</p>
            <p className="text-sm text-slate-600">Güçlü ekstraksiyon ile</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
