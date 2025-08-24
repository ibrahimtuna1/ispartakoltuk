"use client";

import Image from "next/image";
import heroBanner from "@/public/images/banner.png";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[80svh] md:min-h-[88svh]">
      {/* Banner: full-bleed, karartma yok */}
      <Image
        src={heroBanner}
        alt="TerapiHome"
        fill
        priority
        sizes="100vw"
        quality={95}
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        className="absolute inset-0 -z-20"
      />

      {/* Turuncu geçiş (sağdan sola doğru) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[-10%] w-[72%] -z-10
                   bg-gradient-to-l from-orange-700/70 via-orange-500/35 to-transparent
                   blur-[80px]"
      />
    </section>
  );
}
