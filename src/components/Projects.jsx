import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  // Array de configuração dos projetos
  const projectsList = [
    {
      title: t('portfolio_title'),
      description: t('portfolio_desc'),
      tags: ["React", "Tailwind v4", "Framer Motion", "i18next"],
      // AJUSTA ESTE LINK para o URL real do teu repositório no GitHub
      githubUrl: "https://github.com/FontouraC18H22O2/PortfolioWeb", 
      isFeatured: true
    },
    // No futuro, basta copiares este bloco para adicionar novos projetos:
    // {
    //   title: "Smart GPS App",
    //   description: "Aplicação inteligente de navegação com cálculo de consumo...",
    //   tags: ["React", "Leaflet", "Tailwind"],
    //   githubUrl: "https://github.com/...",
    //   isFeatured: false
    // }
  ];

  return (
    <section id="projects" className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Cabeçalho da Secção */}
      <div className="mb-16 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-mono text-cyan-400 mb-4"
        >
          {t('projects_title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          {t('projects_subtitle')}
        </motion.p>
      </div>

      {/* Grelha de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-gray-900/30 border border-gray-800/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(0,255,255,0.03)]"
          >
            {/* Brilho de fundo no Hover */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              {/* Tag de Destaque */}
              {project.isFeatured && (
                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-2.5 py-1 rounded-full mb-6">
                  Featured Project
                </span>
              )}

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                {project.description}
              </p>
            </div>

            <div>
              {/* Lista de Tecnologias (Tags) */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="text-xs font-mono text-gray-500 bg-gray-950/60 px-3 py-1 rounded-md border border-gray-800/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botão de Link Direto para o GitHub */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 font-semibold group/link"
              >
                {t('view_github')}
                {/* Ícone de Seta que se move no Hover */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}