import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FolderOpen, Mail, Github, ChevronDown } from 'lucide-react';

/* Escreve texto caractere a caractere. Respeita prefers-reduced-motion. */
function useTyped(text, active, speed, reduced) {
  const [out, setOut] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setOut('');
      setDone(false);
      return;
    }
    if (reduced) {
      setOut(text);
      setDone(true);
      return;
    }
    let i = 0;
    setOut('');
    setDone(false);
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed, reduced]);

  return { out, done };
}

function Command({ text, onDone, reduced }) {
  const { out, done } = useTyped(text, true, 42, reduced);

  useEffect(() => {
    if (!done) return;
    const id = setTimeout(onDone, 180);
    return () => clearTimeout(id);
  }, [done, onDone]);

  return (
    <p className="text-sm md:text-base">
      <span className="text-cyan-400 select-none">$&nbsp;</span>
      <span className="text-gray-200">{out}</span>
      {!done && <span className="term-caret" aria-hidden="true" />}
    </p>
  );
}

/* Revela um bloco de output e avança a sequência depois de um instante. */
function Output({ children, onDone, delay = 380 }) {
  useEffect(() => {
    const id = setTimeout(onDone, delay);
    return () => clearTimeout(id);
  }, [onDone, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => s + 1);

  /* Parallax 3D suave da janela, seguindo o rato. */
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 90, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 90, damping: 30 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const actions = [
    { icon: FolderOpen, cmd: 'cd ./projetos', label: t('hero_cta_projects'), target: 'projects', primary: true },
    { icon: Mail, cmd: './contactar', label: t('hero_cta_contact'), target: 'footer' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-28 md:py-32"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ perspective: 1600 }}
    >
      <motion.div
        style={reduced ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-3xl z-20"
      >
        <div className="rounded-xl overflow-hidden border border-cyan-500/20 bg-black/70 backdrop-blur-md shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)]">
          {/* Barra da janela */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-cyan-500/15">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/70" />
            <span className="ml-3 text-[11px] md:text-xs text-gray-500 font-mono truncate">
              hugo@portfolio ~ %
            </span>
          </div>

          {/* Corpo do terminal */}
          <div className="px-5 py-7 md:px-8 md:py-10 font-mono space-y-2.5 leading-relaxed">
            {step >= 0 && <Command text="whoami" onDone={next} reduced={reduced} />}

            {step >= 1 && (
              <Output onDone={next} delay={520}>
                <div className="glitch-wrapper py-1.5">
                  <h1
                    className="glitch-text text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
                    data-text={t('intro_name')}
                  >
                    {t('intro_name')}
                  </h1>
                </div>
              </Output>
            )}

            {step >= 2 && <Command text="cat role.txt" onDone={next} reduced={reduced} />}

            {step >= 3 && (
              <Output onDone={next} delay={320}>
                <p className="text-cyan-400 text-base md:text-lg pb-1.5">
                  {t('intro_tagline').trim()}
                </p>
              </Output>
            )}

            {step >= 4 && <Command text="./manifesto --read" onDone={next} reduced={reduced} />}

            {step >= 5 && (
              <Output onDone={next} delay={420}>
                <div className="py-1.5 text-sm md:text-base">
                  <p className="text-gray-600 select-none">/*</p>
                  {t('frase_intro')
                    .split('\n')
                    .map((line, i) => (
                      <p key={i} className="text-gray-400 pl-4">
                        {line}
                      </p>
                    ))}
                  <p className="text-gray-600 select-none">*/</p>
                </div>
              </Output>
            )}

            {step >= 6 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="pt-4 space-y-4"
              >
                <div className="flex flex-wrap gap-2.5">
                  {actions.map(({ icon: Icon, cmd, label, target, primary }) => (
                    <button
                      key={cmd}
                      onClick={() => scrollTo(target)}
                      aria-label={label}
                      className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                        primary
                          ? 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-400'
                          : 'border-gray-800 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-400'
                      }`}
                    >
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                      {cmd}
                    </button>
                  ))}

                  <a
                    href="https://github.com/FontouraC18H22O2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('hero_cta_github')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm border border-gray-800 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <Github className="w-4 h-4 stroke-[1.5]" />
                    git remote -v
                  </a>
                </div>

                <p className="text-sm md:text-base">
                  <span className="text-cyan-400 select-none">$&nbsp;</span>
                  <span className="term-caret" aria-hidden="true" />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      {step >= 6 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => scrollTo('about')}
          aria-label={t('hero_scroll')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
        >
          <ChevronDown className="w-5 h-5 animate-bounce motion-reduce:animate-none" />
        </motion.button>
      )}
    </section>
  );
}