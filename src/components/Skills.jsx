import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  // Estrutura de dados dividida por categorias técnicas
  const skillsCategories = [
    {
      id: "frontend",
      title: t('skills_frontend'),
      skills: [
        { 
          name: "React", 
          color: "hover:text-[#61dafb] hover:border-[#61dafb]/40",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
          )
        },
        { 
          name: "Tailwind CSS", 
          color: "hover:text-[#38bdf8] hover:border-[#38bdf8]/40",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 6.036c-2.286 0-3.428 1.143-3.428 3.428 0 2.286 1.143 3.429 3.428 3.429m6.857-6.857c-2.286 0-3.428 1.143-3.428 3.428 0 2.286 1.143 3.429 3.428 3.429M5.143 12c-2.286 0-3.428 1.143-3.428 3.429 0 2.285 1.143 3.428 3.428 3.428m6.857-6.857c-2.286 0-3.428 1.143-3.428 3.429 0 2.285 1.143 3.428 3.428 3.428"/>
            </svg>
          )
        },
        {
          name: "JavaScript",
          color: "hover:text-[#f7df1e] hover:border-[#f7df1e]/40",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M3 3h18v18H3V3zm16.525 13.83c-.15-.435-.445-.79-.87-1.035-.415-.23-.975-.415-1.68-.555-.7-.14-1.21-.295-1.52-.465-.31-.17-.53-.38-.665-.64-.135-.255-.2-.57-.2-.94 0-.395.08-.73.245-1 .165-.275.405-.495.73-.66.32-.16.73-.245 1.215-.245.505 0 .915.085 1.23.255.31.17.545.425.705.76.16.335.25.755.275 1.255h1.415c-.04-.845-.275-1.505-.705-1.975-.43-.47-1.045-.785-1.845-.945-.435-.085-.945-.13-1.535-.13-.865 0-1.575.145-2.13.435-.55.29-.96.69-1.23 1.2-.27.505-.405 1.07-.405 1.695 0 .765.17 1.375.505 1.835.34.46.815.8 1.425 1.01.61.21 1.34.37 2.19.48.85.11 1.485.245 1.9.41.415.16.7.385.855.67.155.285.23.635.23 1.05 0 .445-.1.815-.3 1.11-.2.295-.495.515-.885.665-.39.15-.865.225-1.425.225-.675 0-1.22-.095-1.635-.285-.415-.19-.71-.485-.885-.885-.175-.4-.265-.92-.27-1.56h-1.43c.025.96.265 1.705.72 2.235.455.53 1.1.885 1.94 1.06.46.095.99.145 1.59.145.92 0 1.685-.15 2.3-.45.615-.3.1.085-1.07-.645 1.215-.27.525-.795.89-1.57.37-.56.555-1.23.555-2.005 0-.825-.175-1.475-.525-1.945z"/>
            </svg>
          )
        }
      ]
    },
    {
      id: "backend",
      title: t('skills_backend'),
      skills: [
        { 
          name: "Java", 
          color: "hover:text-[#ea2d2e] hover:border-[#ea2d2e]/40",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M6 15c0 3 3 4 6 4s6-1 6-4m-12-3c0 2.5 2.5 3.5 5.5 3.5s5.5-1 5.5-3.5M9 7c0-2 1-3 3-3s3 1 3 3M7 21c1.5 1 3.5 1.5 5 1.5s3.5-.5 5-1.5" />
            </svg>
          )
        },
        { 
          name: "Python", 
          color: "hover:text-[#3776ab] hover:border-[#3776ab]/40",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M11.93 2c-2.58 0-4.32.18-5.18.57a3.86 3.86 0 0 0-2.2 2.22c-.4 1-.38 2.3-.38 4.39v1.16h5.36V11h-7.1c-1.1 0-1.83.3-2.18.91-.44.78-.43 2.14-.43 4.14 0 2.26 0 3.63.43 4.4a3.67 3.67 0 0 0 2.18 2c.86.35 2.58.55 5.18.55h1.94v-2.61c0-1.48.56-2.82 1.55-3.8a5.32 5.32 0 0 1 3.8-1.56h5.4v-1.15c0-2.1 0-3.4-.42-4.4a3.88 3.88 0 0 0-2.2-2.22c-.86-.39-2.6-.57-5.18-.57H11.93z"/>
            </svg>
          )
        },
        { 
          name: "C#", 
          color: "hover:text-[#00599c] hover:border-[#00599c]/40",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <circle cx="12" cy="12" r="10" />
              <path d="M14 9a3 3 0 1 0 0 6M17 12h4M19 10v4" />
            </svg>
          )
        }
      ]
    },
    {
      id: "tools",
      title: t('skills_tools'),
      skills: [
        { 
          name: "Git / GitHub", 
          color: "hover:text-[#f05032] hover:border-[#f05032]/40",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          )
        },
        { 
          name: "Android Dev", 
          color: "hover:text-[#3ddc84] hover:border-[#3ddc84]/40",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M6 14h12M9 18v2M15 18v2M4 11h16" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Título da Secção */}
      <div className="mb-20 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-mono text-cyan-400 mb-4"
        >
          {t('skills_title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          {t('skills_subtitle')}
        </motion.p>
      </div>

      {/* Grid de Categorias */}
      <div className="flex flex-col gap-16">
        {skillsCategories.map((category, catIdx) => (
          <div key={category.id}>
            {/* Título da Categoria Exclusiva */}
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-3 before:content-[''] before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full"
            >
              {category.title}
            </motion.h3>

            {/* Grelha de Ícones Destas Tecnologias */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (catIdx * 0.1) + (skillIdx * 0.05) }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/20 border border-gray-800/60 backdrop-blur-xs text-gray-400 transition-all duration-300 ${skill.color}`}
                >
                  {/* Contentor do Ícone */}
                  <div className="w-10 h-10 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {skill.svg}
                  </div>
                  {/* Nome da Tech */}
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}