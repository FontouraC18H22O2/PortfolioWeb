import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

/* IMPORTANTE: esta função tem de viver fora do componente.
   A v4 exige que a referência de `init` seja estável durante toda a
   vida da app — se for declarada inline, a biblioteca lança
   "ParticlesProvider init callback must be stable across the app lifecycle." */
const initParticles = async (engine) => {
  await loadSlim(engine);
};

/* Também fora do componente: assim o objeto não é recriado a cada
   render e o motor não recarrega as partículas sem necessidade. */
const options = {
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
};

const style = {
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  pointerEvents: 'none',
};

export default function ParticlesBackground() {
  /* O ParticlesProvider só renderiza os filhos depois de o motor
     carregar. Por isso fica aqui, a envolver apenas as partículas —
     nunca a app inteira, senão o site fica em branco se falhar. */
  return (
    <ParticlesProvider init={initParticles}>
      <Particles id="tsparticles" options={options} style={style} />
    </ParticlesProvider>
  );
}
