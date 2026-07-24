import { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

export default function CareerPath() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const railRef = useRef(null);

  /* A linha preenche-se com scaleY (uma transformação normal).
     A versão anterior usava pathLength num <line> de SVG, que o
     Framer Motion não anima sem strokeDasharray — era por isso
     que a linha aparecia estática. */
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 70%', 'end 65%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  /* Do mais recente para o mais antigo, como num git log a sério.
     Os hashes são decorativos — dão o vocabulário do git à secção. */
  const commits = [
    {
      hash: 'c3f9a1e',
      year: t('timeline_present'),
      title: t('exp_uni_title'),
      desc: t('exp_uni_desc'),
      link: 'https://www.ispgaya.pt',
      head: true,
    },
    {
      hash: '8b2d4f7',
      year: '2024 - 2025',
      title: t('exp_job_title'),
      desc: t('exp_job_desc'),
      link: 'https://www.yazaki-europe.com/index',
    },
    {
      hash: '1a7c05e',
      year: t('timeline_past'),
      title: t('exp_school_title'),
      desc: t('exp_school_desc'),
      link: 'https://www.antoniosergio.pt/index.php/cursos-profissionais/692-tecnico-a-de-gestao-e-programacao-de-sistemas-informaticos',
      root: true,
    },
  ];

  return (
    <section id="career" className="py-28 md:py-32 px-5 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono text-white mb-3">{t('timeline_title')}</h2>
        <p className="font-mono text-sm text-gray-500">
          <span className="text-cyan-400/70">$&nbsp;</span>
          git log --graph --author=&quot;Hugo Dias&quot;
        </p>
      </motion.div>

      <div ref={railRef} className="relative pl-8 md:pl-10">
        {/* Carril do grafo */}
        <div className="absolute left-0 top-3 bottom-3 w-px bg-gray-800" aria-hidden="true">
          <motion.div
            className="w-px h-full bg-cyan-400 origin-top"
            style={reduced ? { scaleY: 1 } : { scaleY }}
          />
        </div>

        {commits.map((commit, idx) => (
          <motion.div
            key={commit.hash}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
            className="relative pb-8 last:pb-0"
          >
            {/* Ponto do commit, assente no carril */}
            <span
              className="absolute top-4 -left-8 md:-left-10 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-[#0a0a0a]"
              aria-hidden="true"
            />

            <a
              href={commit.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border border-gray-900 bg-white/[0.015] backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {/* Cabeçalho do commit */}
              <div className="flex items-center gap-2.5 flex-wrap px-4 py-2.5 bg-white/[0.025] border-b border-gray-900 group-hover:border-cyan-500/20 transition-colors">
                <span className="font-mono text-xs text-amber-400/80">{commit.hash}</span>

                {commit.head && (
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
                    HEAD &rarr; main
                  </span>
                )}
                {commit.root && (
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-500">
                    {t('career_root')}
                  </span>
                )}

                <span className="font-mono text-[11px] text-gray-500 ml-auto shrink-0">
                  {commit.year}
                </span>
              </div>

              {/* Corpo do commit */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl text-white leading-snug mb-2 group-hover:text-cyan-400 transition-colors">
                  {commit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{commit.desc}</p>

                <span className="inline-flex items-center gap-1.5 mt-4 font-mono text-[11px] text-gray-600 group-hover:text-cyan-400 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5 stroke-[1.5]" />
                  {t('career_visit')}
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}