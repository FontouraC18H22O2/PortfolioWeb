import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const skills = ['Java', 'Python', 'C#', 'React', 'Node.js', 'MySQL', 'Inteligência Artificial', 'Vibe Coding'];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black/20">
      <h2 className="text-4xl mb-16 text-center text-gray-200">{t('tech_stack')}</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            animate={{ y: [0, -12, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: index * 0.25
            }}
            className="px-6 py-3 rounded-xl border border-gray-800 bg-gray-900/30 text-md text-gray-300 shadow-[0_0_20px_rgba(0,255,255,0.02)] hover:border-cyan-400/60 hover:text-white transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}