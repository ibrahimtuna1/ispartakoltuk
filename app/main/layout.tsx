export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white text-black min-h-screen">
      {/* Buraya istersen özel navbar koyabilirsin */}
      {children}
      {/* Buraya istersen footer koyabilirsin */}
    </section>
  );
}
