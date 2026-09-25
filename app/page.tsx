import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Contact />={" "}
    </main>
  );
}
