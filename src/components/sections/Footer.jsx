import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-gray-900 bg-black/40 py-16 px-6 md:px-12 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="text-center md:text-left">
          <h3 className="text-2xl text-white mb-2">{t('talk')}</h3>
          <p className="text-gray-400 text-sm font-sans">{t('available')}</p>
        </div>

        <div className="flex gap-6 text-sm">
          <motion.a
            href="mailto:hugo.work.dias@gmail.com"
            whileHover={{ y: -3, color: '#00ffff' }}
            className="text-gray-300 border border-gray-800 bg-gray-900/40 px-5 py-3 rounded-xl hover:border-cyan-500/20 transition-colors"
          >
            Email
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/o-teu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, color: '#00ffff' }}
            className="text-gray-300 border border-gray-800 bg-gray-900/40 px-5 py-3 rounded-xl hover:border-cyan-500/20 transition-colors"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/FontouraC18H22O2" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-colors duration-300 backdrop-blur-xs"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </motion.a>
        </div>

        <div className="text-center md:text-right text-xs text-gray-500 font-sans">
          <p>© {currentYear} Hugo Dias</p>
          <p className="mt-1 text-gray-600">{t('rights')}</p>
        </div>

      </div>
    </footer>
  );
}