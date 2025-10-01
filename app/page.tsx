import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Topbar from "./components/Topbar";

export default function HomePage() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </>
  );
}
