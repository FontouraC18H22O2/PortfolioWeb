import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  const projects = [
    { id: 1, title: 'Full-Stack Dashboard', type: t('featured'), tech: 'React, Node.js, MySQL' },
    { id: 2, title: 'Encryption Protocol & Cipher Decrypter', type: t('featured'), tech: 'Java, C/C++' },
    { id: 3, title: 'Intelligent GPS Navigation App', type: t('wip'), tech: 'React, Leaflet, Node.js' },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 overflow-hidden">
      <h2 className="text-4xl mb-12 text-cyan-400">{t('projects_title')}</h2>
      
      <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
        <motion.div 
          drag="x" 
          dragConstraints={carouselRef}
          className="flex gap-8 w-max px-2"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className={`min-w-[300px] md:min-w-[400px] p-8 rounded-2xl border ${
                project.type === t('wip') 
                  ? 'border-dashed border-cyan-500/40 bg-cyan-950/10' 
                  : 'border-gray-800 bg-gray-900/40 backdrop-blur-md'
              }`}
            >
              <div className="text-xs text-cyan-400 mb-4 tracking-widest uppercase">{project.type}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm font-sans">{project.tech}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}