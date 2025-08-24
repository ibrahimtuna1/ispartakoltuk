"use client";

import { motion, type MotionProps, type Transition } from "framer-motion";
import {
  Sofa,
  Car,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Clock,
  PhoneCall,
} from "lucide-react";

// WhatsApp CTA
const whatsapp =
  "https://wa.me/905306209416?text=Merhaba,%20koltuk%20yikama%20icin%20randevu%20almak%20istiyorum.";

// easing (easeOut cubic-bezier) — TS uyumlu
const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

// reusable fade-up animation (TS-safe)
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
  viewport: { once: true, amount: 0.2 },
});

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
            Ev/ofis koltukları ve araç döşemelerinde yüksek emiş gücüne sahip
            profesyonel makinelerle derin kirleri yüzeyin altından çıkarıyoruz.
          </p>
        </motion.div>

        {/* kartlar */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Ev & Ofis Koltuk Yıkama */}
          <motion.div
            {...fadeUp(0.1)}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-500/15 p-3">
                <Sofa className="h-7 w-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Ev & Ofis Koltuk Yıkama</h3>
            </div>

            <p className="mt-3 text-white/85">
              Leke ve kokuya sebep olan derin kirleri güçlü ekstraksiyon ile
              çekerek kumaşları ilk günkü ferahlığına yaklaştırırız. Kalıntı
              bırakmayan uygulama, <strong>hızlı kuruma</strong>.
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Derinlemesine hijyen & leke azaltma
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Koku yenileme, taze görünüm
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Kumaş dostu çözümler
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs">
                <Droplets className="h-4 w-4" /> Alerjen azaltma
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs">
                <ShieldCheck className="h-4 w-4" /> Koruma opsiyonu
              </span>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white shadow transition hover:bg-emerald-600"
            >
              WhatsApp’tan Randevu Al
            </a>
          </motion.div>

          {/* Araç Koltuğu & İç Detaylı Temizlik */}
          <motion.div
            {...fadeUp(0.18)}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-500/15 p-3">
                <Car className="h-7 w-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Araç Koltuğu & İç Detaylı Temizlik</h3>
            </div>

            <p className="mt-3 text-white/85">
              Koltuklar, taban halısı ve tavan gibi bölgelerde derin kirleri
              güçlü vakum ve ekstraksiyonla uzaklaştırır; ferah ve hijyenik bir
              iç mekân elde edersiniz.
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Koltuk & döşeme derin temizlik
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Koku tazeleme, detaylı bakım
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Hızlı kuruma, profesyonel ekipman
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs">
                <Sparkles className="h-4 w-4" /> Detaylı iç temizlik
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs">
                <Clock className="h-4 w-4" /> Aynı gün hızlandırılmış teslim
              </span>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white shadow transition hover:bg-emerald-600"
            >
              WhatsApp’tan Randevu Al
            </a>
          </motion.div>
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
