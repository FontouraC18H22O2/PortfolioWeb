import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Folder, ExternalLink, Star } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const githubUsername = "FontouraC18H22O2"; 

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) throw new Error("Erro ao carregar dados do GitHub");
        
        const data = await response.json();
        const filteredRepos = data.filter(repo => !repo.fork);
        setRepos(filteredRepos);
      } catch (error) {
        console.error("Erro na API do GitHub:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  return (
    <section id="projects" className="py-32 px-6 md:px-24 max-w-6xl mx-auto">
      <h2 className="text-4xl mb-4 font-mono text-white">{t('projects_title')}</h2>
      <p className="text-gray-400 mb-12 font-sans">{t('projects_subtitle')}</p>

      {loading ? (
        <div className="text-center font-mono text-cyan-400 animate-pulse py-12">
          {t('fetching_repos')}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5 }}
              className="p-6 border border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-xl flex flex-col justify-between hover:border-cyan-400/40 transition-colors duration-300 group cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  {/* SUBSTUIÇÃO DO EMOJI DE PASTA POR ÍCONE VETORIAL */}
                  <Folder className="w-8 h-8 text-cyan-400 stroke-[1.5]" />
                  
                  {/* SUBSTUIÇÃO DA SETA POR ÍCONE VETORIAL */}
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors stroke-[1.5]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {repo.name}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-3 font-sans mb-4">
                  {repo.description || "Sem descrição definida no GitHub."}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800/60">
                <span className="text-xs font-mono text-cyan-400/80">
                  {repo.language || "Markdown"}
                </span>
                
                {repo.stargazers_count > 0 && (
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    {/* SUBSTUIÇÃO DO EMOJI DE ESTRELA POR ÍCONE VETORIAL */}
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {repo.stargazers_count}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}