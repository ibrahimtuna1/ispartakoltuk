import Hero from "./main/components/Hero";
import Services from "./main/components/Services";
import Contact from "./main/components/Contact";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Hizmetler Section */}
      <Services />

      {/* İletişim Section */}
      <Contact />
    </main>
  );
}
