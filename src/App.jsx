import Navbar from './components/layout/Navbar';
import CustomCursor from './components/layout/CustomCursor';
import ParticlesBackground from './components/layout/ParticlesBackground';
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import CareerPath from './components/sections/CareerPath';
import Footer from './components/sections/Footer';
import './styles/App.css';

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