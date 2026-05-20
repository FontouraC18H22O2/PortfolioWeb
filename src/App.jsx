import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CareerPath from './components/CareerPath';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 relative">
      <ParticlesBackground />
      <CustomCursor />
      
      {/* A nova barra estilo Dock no topo */}
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <CareerPath />
        <Footer />
      </div>
    </main>
  );
}