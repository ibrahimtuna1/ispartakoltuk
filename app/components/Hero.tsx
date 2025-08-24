"use client";

import Image from "next/image";
import { motion, type MotionProps, type Transition } from "framer-motion";

import heroDesktop from "@/public/images/hero-desktop.png";
import heroMobile from "@/public/images/hero-mobile.png";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
  viewport: { once: true, amount: 0.3 },
});

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white min-h-[80svh] md:min-h-[88svh]">
      {/* DESKTOP banner */}
      <Image
        src={heroDesktop}
        alt="TerapiHome Koltuk Yıkama"
        fill
        priority
        sizes="(min-width: 768px) 100vw"
        className="absolute inset-0 -z-20 object-cover object-[50%_50%] hidden md:block"
        draggable={false}
      />

      {/* MOBILE banner */}
      <Image
        src={heroMobile}
        alt="TerapiHome Koltuk Yıkama"
        fill
        priority
        sizes="(max-width: 767px) 100vw"
        className="absolute inset-0 -z-20 object-cover object-[50%_50%] md:hidden"
        draggable={false}
      />

      {/* Sağdaki turuncu glow - hem mobilde hem masaüstünde farklı ayarlar */}
      <div
        className="pointer-events-none absolute right-[-10%] w-[70%] -z-10 bg-gradient-to-l from-orange-700/60 via-orange-600/30 to-transparent blur-[70px]
          md:w-[50%] md:h-[100%]
          h-[80%] w-[80%]
        "
      />

      {/* İçerik: ortalanmış başlık ve alt yazılar */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
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
         
        </motion.p>
      </div>
    </section>
  );
}