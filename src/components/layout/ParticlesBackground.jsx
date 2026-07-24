import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  /* A API do @tsparticles/react v3 inicializa o motor UMA vez,
     fora do componente <Particles />. O prop `particlesInit` era
     da v2 e é ignorado — era por isso que não aparecia nada. */
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 110, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#22d3ee' },
        links: {
          color: '#22d3ee',
          distance: 150,
          enable: true,
          opacity: 0.14,
          width: 1,
        },
        move: {
          enable: true,
          direction: 'none',
          outModes: { default: 'out' },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: { enable: true, width: 900, height: 900 },
          value: 45,
        },
        opacity: { value: 0.22 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 2.5 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}