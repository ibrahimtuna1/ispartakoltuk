"use client";

import { motion, type MotionProps, type Transition } from "framer-motion";
import {
  Sofa, Car, Ship, Armchair, Home, MapPin,
  Droplets, ShieldCheck, CheckCircle2, Sparkles, Clock, PhoneCall
} from "lucide-react";
import React from "react";

type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// --- WhatsApp helper: başlığa göre default metin, istenirse özel metin ---
const WA_PHONE = "905306209416";
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
      "Yerinde temizlik (adresinizde)", // ✅ eklendi
    ],
    badges: [
      { icon: MapPin, label: "Yerinde temizlik" }, // ✅ rozet
      { icon: Sparkles, label: "Detaylı iç temizlik" },
      { icon: Clock, label: "Aynı gün hızlandırılmış teslim" },
    ],
    waText:
      "Merhaba, araç koltuğu ve iç detaylı temizlik için YERİNDE TEMİZLİK randevusu almak istiyorum.", // ✅ özel WA metni
  },
  {
    title: "Yat & Tekne Döşeme Temizliği",
    icon: Ship,
    desc:
      "Tuz, nem ve güneş kaynaklı zor lekeleri malzemeye uygun ürünlerle çıkarır; küf ve koku oluşumunu azaltmaya yardımcı oluruz.",
    bullets: [
      "Vinyl/deri/döşeme için uygun kimyasal",
      "Tuz & nem kaynaklı leke giderimi",
      "UV sonrası matlaşmayı azaltıcı bakım",
    ],
    badges: [
      { icon: ShieldCheck, label: "Malzeme güvenliği" },
      { icon: Droplets, label: "Küf/koku azaltma" },
    ],
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
      {/* arka plan: siyah → turuncu */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black via-black to-orange-900" />
      <div className="pointer-events-none absolute right-[-15%] top-[12%] h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-orange-500/20 blur-[80px]" />

      <div className="mx-auto max-w-6xl px-6 py-20 text-white">
        {/* başlık */}
        <motion.div {...fadeUp(0.05)} className="text-center">
          <span className="inline-block rounded-full bg-orange-500/15 px-3 py-1 text-sm font-semibold text-orange-300">
            Derinlemesine temizlik • Hızlı kuruma
          </span>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Hizmetlerimiz</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Koltuk, araç, yat/tekne ve işletme oturma gruplarında profesyonel ekipmanla derin temizlik.
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
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-orange-500/15 p-3">
                    <IconEl className="h-7 w-7 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>

                <p className="mt-3 text-white/85">{s.desc}</p>

                <ul className="mt-4 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {s.badges.map(({ icon: BIcon, label }) => (
                    <span key={label} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs">
                      <BIcon className="h-4 w-4" /> {label}
                    </span>
                  ))}
                </div>

                <a
                  href={waHref({ title: s.title, text: s.waText })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white shadow transition hover:bg-emerald-600"
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
          className="mt-14 grid grid-cols-1 gap-6 rounded-2xl bg-white/5 p-6 backdrop-blur-sm md:grid-cols-3"
        >
          <div className="text-center">
            <PhoneCall className="mx-auto h-8 w-8 text-orange-400" />
            <p className="mt-2 font-semibold">Hızlı Randevu</p>
            <p className="text-sm text-white/80">WhatsApp’tan anında dönüş</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-orange-400" />
            <p className="mt-2 font-semibold">Kumaş Güvenliği</p>
            <p className="text-sm text-white/80">Uygun ürün, kalıntı bırakmaz</p>
          </div>
          <div className="text-center">
            <Sparkles className="mx-auto h-8 w-8 text-orange-400" />
            <p className="mt-2 font-semibold">Derin Hijyen</p>
            <p className="text-sm text-white/80">Güçlü ekstraksiyon ile</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
