import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Isparta Koltuk Yıkama",
  description:
    "Isparta'da profesyonel koltuk yıkama hizmeti. Evde, ofiste ve aracınızda güçlü ekstraksiyon makineleriyle derin temizlik. Uygun fiyat, güvenilir hizmet, hemen arayın!",
  keywords: [
    "Isparta koltuk yıkama",
    "evde koltuk yıkama",
    "profesyonel koltuk temizliği",
    "koltuk yıkama fiyatları",
    "araç içi detaylı temizlik",
  ],
  openGraph: {
    title: "Isparta Koltuk Yıkama",
    description:
      "Isparta'da profesyonel koltuk yıkama ve detaylı temizlik hizmeti. Ev, ofis ve araç için hijyenik çözümler.",
    siteName: "Isparta Koltuk Yıkama",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isparta Koltuk Yıkama",
    description:
      "Isparta'da profesyonel koltuk yıkama hizmeti. Evde, ofiste ve aracınızda güvenilir temizlik çözümleri.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body
        className={`${poppins.className} theme-teal text-slate-800 antialiased`}
      >
        {/* Sayfa arka planı: turkuaz → beyaz */}
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(180deg,var(--bg-start),var(--bg-mid),var(--bg-end))]" />
        {/* Hafif parlama / temizlik hissi */}
        <div className="pointer-events-none fixed -z-10 right-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--glow),transparent_60%)] blur-3xl opacity-60" />
        <div className="pointer-events-none fixed -z-10 left-[-10%] bottom-[-10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,var(--glow-soft),transparent_60%)] blur-3xl opacity-60" />

        {/* İçerik */}
        {children}

        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
