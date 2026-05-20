import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Posição base do mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Aplica física de mola para suavizar o movimento do cursor digital
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    // Deteta hover em elementos clicáveis (links, botões, cards arrastáveis)
    const interactables = document.querySelectorAll('a, button, .cursor-grab, [role="button"]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-cyan-400/80 shadow-[0_0_15px_#00ffff]"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        scale: isHovering ? 1.8 : 1,
        opacity: isHovering ? 0.3 : 0.6,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
  );
}