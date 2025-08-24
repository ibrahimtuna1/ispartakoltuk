"use client";

import Image from "next/image";
import { motion, type MotionProps, type Transition } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, Sparkles } from "lucide-react";

// 3840 genişlikte banner (dosya adı banner.png)
import heroBanner from "@/public/images/banner.png";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
  viewport: { once: true, amount: 0.3 },
});

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white min-h-[78vh] md:min-h-[86vh]">
      {/* Arka plan: banner full-bleed, karartma YOK */}
      <Image
        src={heroBanner}
        alt="TerapiHome Koltuk Yıkama"
        fill
        priority
        sizes="100vw"
        quality={95}
        className="absolute inset-0 -z-20 object-cover object-center"
      />

      {/* Sağdaki turuncu glow kalsın */}
      <div className="pointer-events-none absolute inset-y-0 right-[-10%] w-[70%] -z-10 bg-gradient-to-l from-orange-700/70 via-orange-600/35 to-transparent blur-[70px]" />

      {/* Hafif vignette (çok sönük) */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(85%_65%_at_50%_50%,black,transparent)]" />

      {/* İçerik: daha aşağıya aldım */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-start px-6 pt-44 md:pt-60 pb-16 text-center">
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl font-extrabold leading-tight md:text-6xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
        >
          Her Dokunuşta{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(255,165,0,0.25)]">
            Temizlik Sanatı
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-4 max-w-2xl text-white/90 md:text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
        >
          Antalya’da koltuk yıkama — evde, ofiste ve aracınızda hijyenik,
          profesyonel ve güvenilir temizlik.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-8 flex justify-center">
          <a
            href="https://wa.me/905306209416?text=Merhaba,%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-white shadow-lg outline-none transition hover:bg-emerald-600"
          >
            <span
              className="pointer-events-none absolute -inset-0.5 -z-10 rounded-xl opacity-0 blur-md transition duration-300 group-hover:opacity-60"
              style={{
                background:
                  "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.6), rgba(34,197,94,0))",
              }}
            />
            <MessageCircle className="h-5 w-5 opacity-90" />
            WhatsApp’tan Randevu Al
          </a>
        </motion.div>

        {/* Rozetler */}
        <motion.div
          {...fadeUp(0.4)}
          className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 text-sm text-white/90 sm:grid-cols-3"
        >
          <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            <Sparkles className="h-5 w-5 text-orange-300" />
            Derin Temizlik
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            <ShieldCheck className="h-5 w-5 text-orange-300" />
            Kumaş Dostu
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            <Clock className="h-5 w-5 text-orange-300" />
            Hızlı Kuruma
          </div>
        </motion.div>
      </div>
    </section>
  );
}
