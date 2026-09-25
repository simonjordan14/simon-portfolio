import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
