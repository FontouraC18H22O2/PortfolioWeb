import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Folder } from 'lucide-react';

export default function Skills() {
  const { t } = useTranslation();

  /* Sem logos desenhados à mão. Cada tecnologia traz só a sua cor de
     marca — dá reconhecimento visual sem o risco de paths SVG errados. */
  const categories = [
    {
      id: 'frontend',
      path: 'frontend',
      title: t('skills_frontend'),
      items: [
        { name: 'React', color: '#61dafb' },
        { name: 'TailwindCSS', color: '#38bdf8' },
        { name: 'JavaScript', color: '#f7df1e' },
      ],
    },
    {
      id: 'backend',
      path: 'backend',
      title: t('skills_backend'),
      items: [
        { name: 'Java', color: '#ed8b00' },
        { name: 'Python', color: '#3776ab' },
        { name: 'C#', color: '#512bd4' },
        { name: 'Kotlin', color: '#7f52ff' },
        { name: 'PrismaORM', color: '#5a67d8' },
        { name: 'postgreSQL', color: '#336791' },
      ],
    },
    {
      id: 'cloud',
      path: 'cloud',
      title: t('skills_cloud'),
      items: [
        { name: 'Vercel', color: '#f5f5f5' },
        { name: 'Railway', color: '#c9a9fa' },
        { name: 'Resend', color: '#e5e7eb' },
        { name: 'Docker', color: '#2496ed' },
      ],
    },
    {
      id: 'tools',
      path: 'tools',
      title: t('skills_tools'),
      items: [
        { name: 'Git', color: '#f05032' },
        { name: 'GitHub', color: '#f5f5f5' },
        { name: 'Android', color: '#3ddc84' },
        { name: 'ClaudeAI', color: '#d97757' },
        { name: 'GeminiAI', color: '#4285f4' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 md:py-32 px-5 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono text-white mb-3">{t('skills_title')}</h2>
        <p className="text-gray-500 font-mono text-sm max-w-2xl">{t('skills_subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.07, ease: 'easeOut' }}
            className="group rounded-xl overflow-hidden border border-gray-900 bg-white/[0.015] backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/30"
          >
            {/* Tab da pasta */}
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white/[0.025] border-b border-gray-900 group-hover:border-cyan-500/20 transition-colors">
              <Folder className="w-4 h-4 shrink-0 text-gray-600 group-hover:text-cyan-400 transition-colors stroke-[1.5]" />
              <span className="font-mono text-xs text-gray-300">
                stack/<span className="text-gray-500">{category.path}</span>
              </span>
              <span className="ml-auto font-mono text-[11px] text-gray-600">
                {category.items.length}
              </span>
            </div>

            {/* Bloco de import */}
            <div className="p-4 font-mono text-sm">
              <p className="text-gray-600 mb-2.5">
                <span className="text-fuchsia-400/70">import</span> {'{'}
              </p>

              <ul className="flex flex-wrap gap-2 pl-4 mb-2.5">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <span
                      className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-gray-800/80 bg-white/[0.02] text-gray-300 transition-colors duration-200 hover:bg-white/[0.05]"
                      style={{ '--tech': item.color }}
                    >
                      <span
                        className="w-2 h-2 rounded-sm shrink-0"
                        style={{ backgroundColor: item.color }}
                        aria-hidden="true"
                      />
                      <span className="text-xs">{item.name}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600">
                {'}'} <span className="text-fuchsia-400/70">from</span>{' '}
                <span className="text-cyan-400/80">&apos;./{category.path}&apos;</span>;
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 font-mono text-xs text-gray-600">
        <span className="text-cyan-400/70">$&nbsp;</span>
        {t('skills_count', {
          count: categories.reduce((total, c) => total + c.items.length, 0),
        })}
      </p>
    </section>
  );
}