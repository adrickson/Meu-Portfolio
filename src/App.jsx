import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <Navbar />
      <ParticlesBackground />

      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
