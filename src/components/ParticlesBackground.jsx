import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // Função que o próprio componente <Particles /> vai chamar assim que estiver pronto para receber os plugins
  const particlesInit = async (engine) => {
    // Carrega o motor slim (leve) diretamente na instância passada pelo componente
    await loadSlim(engine);
    setInit(true);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        particlesInit={particlesInit}
        className="absolute inset-0 -z-10 pointer-events-auto" // <-- ADICIONA ESTA LINHA
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
              value: "#00ffff",
            },
            links: {
              color: "#00ffff",
              distance: 150,
              enable: true,
              opacity: 0.04,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800,
              },
              value: 55,
            },
            opacity: {
              value: 0.15,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}