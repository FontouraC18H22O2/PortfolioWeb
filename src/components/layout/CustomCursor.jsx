import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, summary';

export default function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [moving, setMoving] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  /* O rasto segue com atraso — a persistência de fósforo de um CRT. */
  const ghostX = useSpring(x, { stiffness: 240, damping: 26 });
  const ghostY = useSpring(y, { stiffness: 240, damping: 26 });

  /* Só liga onde faz sentido: com rato e a partir de 768px. São os
     mesmos limites do `cursor: none` no index.css, para nunca haver
     um ecrã sem ponteiro nenhum. */
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let idle;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setMoving(true);
      clearTimeout(idle);
      idle = setTimeout(() => setMoving(false), 220);
    };

    /* Delegação de eventos em vez de querySelectorAll no mount.
       O código anterior registava os listeners uma única vez, por isso
       os cartões de projeto (que chegam depois via API) e os botões do
       Hero (que só aparecem no fim da sequência) nunca ativavam o
       hover. Com closest() funciona para qualquer elemento, mesmo os
       criados mais tarde. */
    const onOver = (e) => {
      setHovering(Boolean(e.target?.closest?.(INTERACTIVE)));
    };

    const onLeave = () => {
      setVisible(false);
      setHovering(false);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      clearTimeout(idle);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  /* Um terminal a sério fica sólido enquanto escreves e só pisca
     quando está parado. */
  const blinking = visible && !moving && !hovering && !reduced;

  return (
    <>
      {/* Rasto de fósforo */}
      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            x: ghostX,
            y: ghostY,
            translateX: '-50%',
            translateY: '-50%',
            width: 9,
            height: 19,
            backgroundColor: 'rgba(34, 211, 238, 0.25)',
          }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        />
      )}

      {/* Bloco principal */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          borderStyle: 'solid',
          borderWidth: 1,
        }}
        initial={false}
        animate={{
          width: hovering ? 26 : 9,
          height: hovering ? 26 : 19,
          backgroundColor: hovering ? 'rgba(34, 211, 238, 0.12)' : 'rgba(34, 211, 238, 1)',
          borderColor: hovering ? 'rgba(34, 211, 238, 1)' : 'rgba(34, 211, 238, 0)',
          scale: pressed ? 0.8 : 1,
          opacity: visible ? (blinking ? [1, 1, 0, 0] : 1) : 0,
        }}
        transition={{
          width: { type: 'spring', stiffness: 500, damping: 30 },
          height: { type: 'spring', stiffness: 500, damping: 30 },
          scale: { type: 'spring', stiffness: 600, damping: 25 },
          backgroundColor: { duration: 0.15 },
          borderColor: { duration: 0.15 },
          opacity: blinking
            ? { duration: 1.1, times: [0, 0.49, 0.5, 1], repeat: Infinity, ease: 'linear' }
            : { duration: 0.12 },
        }}
      />
    </>
  );
}