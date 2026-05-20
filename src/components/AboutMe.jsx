import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bloco Principal: Biografia */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">{t('about_title')}</h2>
          <p className="text-gray-400 leading-relaxed text-lg italic">
            "{t('about_bio')}"
          </p>
        </motion.div>

        {/* Bloco Lateral: Foco/Skills Rápidas */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-cyan-950/10 border border-cyan-500/20 backdrop-blur-sm"
        >
          <h3 className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-6">
            {t('about_focus_title')}
          </h3>
          <ul className="space-y-4">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {t(`about_focus_${i}`)}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}