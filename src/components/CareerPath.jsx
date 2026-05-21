import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function CareerPath() {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });


  const experiences = [
    {
      year: t('timeline_present'),
      title: 'Licenciatura em Engenharia Informática - ISPGAYA',
      desc: 'ISPGAYA Instituto politécnico.',
      link: 'https://www.ispgaya.pt'
    },
    {
      year: '2024 - 2025',
      title: 'Estágio Profissional - Empresa Yazaki Saltano Ovar',
      desc: 'Estagio profissional na área de Core Engineering, focado na criação de aplicações de software para a indústria automóvel.',
      link: 'https://www.yazaki-europe.com/index'
    },
    {
      year: t('timeline_past'),
      title: 'Agrupamento de Escolas António Sérgio',
      desc: 'Curso Profissional de GPSI - Gestão e Programação de Sistemas Informáticos.',
      link: 'https://www.antoniosergio.pt/index.php/cursos-profissionais/692-tecnico-a-de-gestao-e-programacao-de-sistemas-informaticos'
    },
  ];

  return (
    <section id="career" ref={containerRef} className="py-32 px-6 md:px-24 relative max-w-4xl mx-auto">
      <h2 className="text-4xl mb-16 font-mono text-white">{t('timeline_title')}</h2>

      <div className="relative">
        <motion.svg className="absolute left-4 md:left-[50%] top-0 h-full w-1 origin-top transform md:-translate-x-1/2">
          <motion.line
            x1="0" y1="0" x2="0" y2="100%"
            stroke="#00ffff"
            strokeWidth="2"
            style={{ pathLength: scrollYProgress }}
          />
        </motion.svg>

        {experiences.map((exp, index) => (
          <div key={index} className={`relative flex items-center justify-between mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="absolute left-4 md:left-[50%] w-3 h-3 rounded-full bg-cyan-400 transform -translate-x-[4px] md:-translate-x-1/2 shadow-[0_0_10px_#00ffff]" />

            <div className="w-full md:w-[45%] pl-12 md:pl-0">
              {/* Transformamos o div num link <a> clicável, mantendo o teu design intacto */}
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] hover:-translate-y-1"
              >
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase">{exp.year}</span>
                  {/* Pequena seta indicando que é clicável e externo */}
                  <span className="text-gray-600 text-xs font-mono group-hover:text-cyan-400 transition-colors">↗</span>
                </div>
                <h3 className="text-xl font-bold mt-2 text-white">{exp.title}</h3>
                <p className="text-gray-400 text-sm font-sans mt-2">{exp.desc}</p>
              </a>
            </div>
            <div className="hidden md:block w-[45%]" />
          </div>
        ))}
      </div>
    </section>
  );
}