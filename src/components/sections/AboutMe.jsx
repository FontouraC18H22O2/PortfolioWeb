import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';

export default function AboutMe() {
  const { t } = useTranslation();

  /* A bio é um único texto no i18n. Separando por linha em branco,
     podes controlar os parágrafos a partir da tradução sem tocar aqui. */
  const paragraphs = t('about_bio').split('\n\n');

  return (
    <section id="about" className="py-28 md:py-32 px-5 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="group rounded-xl overflow-hidden border border-gray-900 bg-white/[0.015] backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/30"
      >
        {/* Tab do ficheiro */}
        <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white/[0.025] border-b border-gray-900 group-hover:border-cyan-500/20 transition-colors">
          <FileText className="w-4 h-4 shrink-0 text-gray-600 group-hover:text-cyan-400 transition-colors stroke-[1.5]" />
          <span className="font-mono text-xs text-gray-300">README.md</span>
        </div>

        <div className="p-5 md:p-8">
          {/* # Sobre Mim */}
          <h2 className="font-mono text-2xl md:text-3xl text-white mb-6">
            <span className="text-cyan-400/60 select-none">#&nbsp;</span>
            {t('about_title')}
          </h2>

          {/* Corpo do texto. Sem itálico e sem aspas: dez linhas de mono
              itálico eram pesadas de ler. A medida está limitada a 68ch,
              porque linhas muito longas em monospace cansam a vista. */}
          <div className="space-y-4 max-w-[68ch]">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-300 text-[15px] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* ## O meu foco */}
          <h3 className="font-mono text-base text-white mt-10 mb-5">
            <span className="text-cyan-400/60 select-none">##&nbsp;</span>
            {t('about_focus_title')}
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start gap-2.5 font-mono text-sm">
                {/* items-start em vez de items-center: o quarto item ocupa
                    duas linhas e o marcador ficava desalinhado ao centro. */}
                <span className="text-cyan-400 shrink-0 leading-relaxed select-none">- [x]</span>
                <span className="text-gray-300 leading-relaxed">{t(`about_focus_${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}