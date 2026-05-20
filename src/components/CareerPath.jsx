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
    { year: t('timeline_present'), title: 'BSc Computer Engineering', desc: 'ISPGAYA Polytechnic Institute.' },
    { year: t('timeline_past'), title: 'GPSI Professional Course & Internship', desc: 'IT Systems Management and Programming.' },
    /* Deixa novos objetos aqui para adicionar experiências futuras facilmente */
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-24 relative max-w-4xl mx-auto">
      <h2 className="text-4xl mb-16">{t('timeline_title')}</h2>
      
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
              <div className="p-6 border border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-xl hover:border-gray-700 transition-colors">
                <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase">{exp.year}</span>
                <h3 className="text-xl font-bold mt-2 text-white">{exp.title}</h3>
                <p className="text-gray-400 text-sm font-sans mt-2">{exp.desc}</p>
              </div>
            </div>
            <div className="hidden md:block w-[45%]" />
          </div>
        ))}
      </div>
    </section>
  );
}