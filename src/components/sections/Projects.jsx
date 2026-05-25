// src/components/sections/Projects.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocalAPI = async () => {
      try {
        // Em produção na Vercel, a pasta /api/ vira uma rota real do domínio
        const response = await fetch('/api/get-repos');
        if (!response.ok) throw new Error("Erro na resposta da API local");
        
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocalAPI();
  }, []);

  return (
    <section id="projects" className="py-32 px-6 md:px-24 max-w-6xl mx-auto">
      <h2 className="text-4xl mb-4 font-mono text-white">{t('projects_title')}</h2>
      <p className="text-gray-400 mb-12 font-sans">{t('projects_subtitle')}</p>

      {loading ? (
        <div className="text-center font-mono text-cyan-400 animate-pulse">
          {t('wip')}...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              whileHover={{ y: -5 }}
              className="p-6 border border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-xl flex flex-col justify-between hover:border-cyan-400/40 transition-colors duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl text-cyan-400">📁</span>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors text-xl">↗</a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{repo.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-3 font-sans mb-4">{repo.description || "Sem descrição."}</p>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800/60">
                <span className="text-xs font-mono text-cyan-400/80">{repo.language || "Web"}</span>
                {repo.stargazers_count > 0 && <span className="text-xs text-gray-500">⭐ {repo.stargazers_count}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}