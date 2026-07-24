import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileCode2, ArrowUpRight, Star, RefreshCw } from 'lucide-react';

const GITHUB_USERNAME = 'FontouraC18H22O2';

/* Cores oficiais do GitHub por linguagem. */
const LANG_COLOR = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572a5',
  Kotlin: '#a97bff',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C#': '#178600',
  PHP: '#4f5d95',
  Dart: '#00b4ab',
  Shell: '#89e051',
  Vue: '#41b883',
  Ruby: '#701516',
  Go: '#00add8',
  Rust: '#dea584',
  Swift: '#f05138',
  Markdown: '#083fa1',
};

/* Extensão de ficheiro por linguagem — dá o aspeto de tab de editor. */
const LANG_EXT = {
  JavaScript: 'js',
  TypeScript: 'ts',
  Python: 'py',
  Kotlin: 'kt',
  Java: 'java',
  HTML: 'html',
  CSS: 'css',
  'C#': 'cs',
  PHP: 'php',
  Dart: 'dart',
  Shell: 'sh',
  Vue: 'vue',
  Ruby: 'rb',
  Go: 'go',
  Rust: 'rs',
  Swift: 'swift',
  Markdown: 'md',
};

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setStatus('loading');
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
        );
        if (!res.ok) throw new Error(`GitHub respondeu ${res.status}`);

        const data = await res.json();
        const clean = data
          /* Fora forks e o repo de perfil (que só tem o README). */
          .filter((r) => !r.fork && r.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
          .slice(0, 6);

        if (!cancelled) {
          setRepos(clean);
          setStatus(clean.length ? 'ready' : 'empty');
        }
      } catch (err) {
        console.error('GitHub API:', err);
        if (!cancelled) setStatus('error');
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(i18n.language === 'pt' ? 'pt-PT' : 'en-GB', {
      month: 'short',
      year: 'numeric',
    });

  return (
    <section id="projects" className="py-28 md:py-32 px-5 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono text-white mb-3">{t('projects_title')}</h2>
        <p className="text-gray-500 font-mono text-sm">{t('projects_subtitle')}</p>
      </motion.div>

      {status === 'loading' && (
        <div className="font-mono text-sm space-y-3" aria-live="polite">
          <p className="text-gray-500">
            <span className="text-cyan-400">$&nbsp;</span>git fetch --all
          </p>
          <p className="text-cyan-400/80">
            {t('fetching_repos')}
            <span className="term-caret" aria-hidden="true" />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-44 rounded-xl border border-gray-900 bg-white/[0.015] animate-pulse motion-reduce:animate-none"
                style={{ animationDelay: `${i * 90}ms` }}
              />
            ))}
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="font-mono text-sm border border-gray-900 rounded-xl p-8 text-center">
          <p className="text-gray-400 mb-1">{t('projects_error')}</p>
          <p className="text-gray-600 text-xs mb-5">{t('projects_error_hint')}</p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-cyan-500/40 text-cyan-400 text-xs hover:bg-cyan-500 hover:text-black transition-colors"
          >
            <RefreshCw className="w-4 h-4 stroke-[1.5]" />
            {t('projects_error_action')}
          </a>
        </div>
      )}

      {status === 'empty' && (
        <p className="font-mono text-sm text-gray-500 border border-gray-900 rounded-xl p-8 text-center">
          {t('projects_empty')}
        </p>
      )}

      {status === 'ready' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, idx) => {
              const ext = LANG_EXT[repo.language] ?? 'txt';
              const dot = LANG_COLOR[repo.language] ?? '#6b7280';

              return (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.07, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col rounded-xl overflow-hidden border border-gray-900 bg-white/[0.015] backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {/* Tab de ficheiro */}
                  <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white/[0.025] border-b border-gray-900 group-hover:border-cyan-500/20 transition-colors">
                    <FileCode2 className="w-4 h-4 shrink-0 text-gray-600 group-hover:text-cyan-400 transition-colors stroke-[1.5]" />
                    <span className="font-mono text-xs text-gray-300 truncate">
                      {repo.name}
                      <span className="text-gray-600">.{ext}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 ml-auto shrink-0 text-gray-700 group-hover:text-cyan-400 transition-colors stroke-[1.5]" />
                  </div>

                  {/* Corpo */}
                  <div className="flex flex-col flex-1 p-4">
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {repo.description || t('projects_no_desc')}
                    </p>

                    {repo.topics?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="font-mono text-[11px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400/90"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Metadados */}
                    <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-900 font-mono text-[11px] text-gray-500">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: dot }}
                            aria-hidden="true"
                          />
                          {repo.language}
                        </span>
                      )}

                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-400/80 stroke-[1.5]" />
                          {repo.stargazers_count}
                        </span>
                      )}

                      <span className="ml-auto text-gray-600 shrink-0">
                        {formatDate(repo.pushed_at)}
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <p className="mt-8 font-mono text-xs text-gray-600">
            <span className="text-cyan-400/70">$&nbsp;</span>
            {t('projects_synced', { count: repos.length })}
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-gray-500 hover:text-cyan-400 underline underline-offset-4 decoration-gray-800 transition-colors"
            >
              {t('projects_see_all')}
            </a>
          </p>
        </>
      )}
    </section>
  );
}