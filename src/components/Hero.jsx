import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  return (
    <section
    id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      style={{ perspective: 1500 }}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="max-w-4xl px-6 text-center z-20"
      >
        
        <div className="glitch-wrapper mb-6">
          <h1 className="text-6xl md:text-8xl font-bold glitch-text" data-text={t('intro_name')}>
            {t('intro_name')}
          </h1>
        </div>
        
        <p className="text-gray-400 font-mono text-lg md:text-xl [transform:translateZ(50px)]">
          {t('intro_tagline')}
        </p>
      </motion.div>
    </section>
  );
}