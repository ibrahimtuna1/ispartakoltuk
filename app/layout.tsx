import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TerapiHome - Profesyonel Koltuk Yıkama",
  description: "Evde, ofiste ve aracınızda hijyenik temizlik hizmeti.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}
