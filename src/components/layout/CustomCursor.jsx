import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Mola apenas para o anel exterior (cria o efeito de perseguição elástica)
  const ringX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const ringY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

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
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. Ponto Central - Sem atraso/mola para clique preciso */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_8px_#00ffff]"
        style={{ x: mouseX, y: mouseY, scale: isHovering ? 0 : 1 }}
      />

      {/* 2. Anel Exterior - Com física de mola */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-cyan-400/60 hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          backgroundColor: isHovering ? "rgba(0, 255, 255, 0.05)" : "transparent",
          borderColor: isHovering ? "rgba(0, 255, 255, 1)" : "rgba(0, 255, 255, 0.4)",
          shadow: isHovering ? "0 0 20px rgba(0, 255, 255, 0.4)" : "none"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />
    </>
  );
}