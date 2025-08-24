"use client";

import Image from "next/image";

// Ayrı kompozisyon/çözünürlükler:
import heroDesktop from "@/public/images/hero-desktop.png"; // 3840×1200 gibi yatay
import heroMobile  from "@/public/images/hero-mobile.png";  // 1080×1920 gibi dikey

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[80svh] md:min-h-[88svh]">
      {/* DESKTOP banner */}
      <Image
        src={heroDesktop}
        alt="TerapiHome"
        fill
        priority
        sizes="(min-width: 768px) 100vw"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        className="absolute inset-0 -z-20 hidden md:block"
        draggable={false}
      />

      {/* MOBILE banner */}
      <Image
        src={heroMobile}
        alt="TerapiHome"
        fill
        priority
        sizes="(max-width: 767px) 100vw"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        className="absolute inset-0 -z-20 md:hidden"
        draggable={false}
      />

      {/* Turuncu geçiş (karartma yok) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[-10%] w-[72%] -z-10
                   bg-gradient-to-l from-orange-700/70 via-orange-500/35 to-transparent
                   blur-[80px]"
      />
    </section>
  );
}
