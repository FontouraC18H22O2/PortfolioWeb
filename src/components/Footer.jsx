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
            href="mailto:o-teu-email@gmail.com"
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
        </div>

        <div className="text-center md:text-right text-xs text-gray-500 font-sans">
          <p>© {currentYear} Hugo Dias</p>
          <p className="mt-1 text-gray-600">{t('rights')}</p>
        </div>

      </div>
    </footer>
  );
}