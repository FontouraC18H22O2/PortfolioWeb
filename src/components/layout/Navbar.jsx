import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Home, FileText, FolderGit2, Boxes, ScrollText, Terminal } from 'lucide-react';

/* Cada secção é um ficheiro com a extensão que faz sentido:
   README.md porque a secção Sobre é literalmente isso, pastas para
   coleções, .log para um registo cronológico, .sh para uma ação.
   O `labelKey` traduz-se; a `ext` fica fixa (o .md e o / não mudam
   de idioma). Os `target` batem com os id que já tens nas secções. */
const TABS = [
  { target: 'home',     icon: Home,       labelKey: 'tab_home',     ext: '' },
  { target: 'about',    icon: FileText,   labelKey: 'tab_about',    ext: '.md' },
  { target: 'projects', icon: FolderGit2, labelKey: 'tab_projects', ext: '/' },
  { target: 'skills',   icon: Boxes,      labelKey: 'tab_skills',   ext: '/' },
  { target: 'career',   icon: ScrollText, labelKey: 'tab_career',   ext: '.log' },
  { target: 'footer',   icon: Terminal,   labelKey: 'tab_contact',  ext: '.sh' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState('home');
  const tabRefs = useRef({});

  /* Scroll spy: marca a tab da secção que está mais à vista.
     rootMargin puxa a linha de deteção para o meio do ecrã, para a
     tab acender quando a secção chega ao centro e não ao topo. */
  useEffect(() => {
    const sections = TABS
      .map((t) => document.getElementById(t.target))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Mantém a tab ativa visível quando a barra tem scroll horizontal
     em ecrãs pequenos. */
  useEffect(() => {
    tabRefs.current[active]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [active]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleLang = () => {
    i18n.changeLanguage(i18n.resolvedLanguage === 'pt' ? 'en' : 'pt');
  };

  const isPT = i18n.resolvedLanguage === 'pt';

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 pointer-events-none">
      <nav
        aria-label="Navegação principal"
        className="pointer-events-auto w-full max-w-3xl flex items-stretch rounded-xl overflow-hidden border border-cyan-500/20 bg-black/70 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)]"
      >
        {/* Tira de tabs, com scroll horizontal em telemóvel */}
        <ul className="flex items-stretch flex-1 overflow-x-auto no-scrollbar">
          {TABS.map(({ target, icon: Icon, labelKey, ext }) => {
            const isActive = active === target;
            return (
              <li key={target} className="shrink-0">
                <button
                  ref={(el) => (tabRefs.current[target] = el)}
                  onClick={() => go(target)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex items-center gap-2 h-11 px-3.5 font-mono text-xs whitespace-nowrap border-r border-gray-900 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'text-cyan-400 bg-white/[0.03]'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0 stroke-[1.5]" />
                  {/* Em ecrã pequeno esconde-se o texto e fica só o ícone */}
                  <span className="hidden sm:inline">
                    {t(labelKey)}
                    {ext && <span className="text-gray-600">{ext}</span>}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute left-0 right-0 top-0 h-0.5 bg-cyan-400"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Seletor de idioma, onde num editor estariam os indicadores */}
        <button
          onClick={toggleLang}
          aria-label={isPT ? 'Switch to English' : 'Mudar para Português'}
          className="shrink-0 flex items-center h-11 px-1 gap-0.5 font-mono text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
        >
          <span
            className={`px-2 py-1 rounded-l transition-colors ${
              isPT ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            PT
          </span>
          <span
            className={`px-2 py-1 rounded-r transition-colors ${
              !isPT ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            EN
          </span>
        </button>
      </nav>
    </header>
  );
}