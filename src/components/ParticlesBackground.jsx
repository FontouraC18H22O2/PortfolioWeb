import { useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // Esta função recebe a instância do motor (engine) assim que o componente monta
  const particlesInit = async (engine) => {
    await loadSlim(engine);
    setInit(true);
  };

  return (
    <Particles
      id="tsparticles"
      particlesInit={particlesInit} // Passa a função de inicialização correta aqui
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,           // Fica por trás de tudo
        pointerEvents: "none" // Não bloqueia os cliques nos teus botões e links
      }}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#00ffff", // Ciano néon
          },
          links: {
            color: "#00ffff",
            distance: 150,
            enable: true,
            opacity: 0.25,     // Linhas bem visíveis
            width: 1.2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 800,
            },
            value: 65,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}