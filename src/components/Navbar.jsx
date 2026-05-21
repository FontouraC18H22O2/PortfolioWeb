import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Lista de itens de navegação ligada aos IDs das tuas secções
const navItems = [
  { 
    label: "Home", 
    target: "home",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  { 
    label: "Sobre Mim", 
    target: "about",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    )
  },
  { 
    label: "Projetos", 
    target: "projects",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.008 1.24l.885 1.77a2.25 2.25 0 0 0 2.007 1.24h1.98a2.25 2.25 0 0 0 2.007-1.24l.885-1.77a2.25 2.25 0 0 1 2.007-1.24h3.86m-18 0h18M2.25 13.5l1.125-6.75A2.25 2.25 0 0 1 5.59 5h12.82a2.25 2.25 0 0 1 2.215 1.75l1.125 6.75M2.25 13.5v6.5a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-6.5" />
      </svg>
    )
  },
  { 
    label: "Skills", 
    target: "skills",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  {
    label: "Percurso", 
    target: "career",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.732 2.076 1.704m-12.144 3.9a48.558 48.558 0 0 0-1.123.08A2.25 2.25 0 0 0 2 10.107V19.5a2.25 2.25 0 0 0 2.25 2.25h1.5m11.75-1.5 2.25 2.25m0 0 2.25-2.25m-2.25 2.25V16.5" />
      </svg>
    )
  },
  { 
    label: "Contacto", 
    target: "footer",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    )
  },
];

export default function Navbar() {
  const mouseX = useMotionValue(Infinity);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-[50] flex justify-center pointer-events-none">
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-4 px-6 py-3 rounded-full bg-gray-900/40 border border-gray-800/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-auto transition-all duration-300 hover:border-cyan-500/30"
      >
        {navItems.map((item, idx) => (
          <NavItem key={idx} mouseX={mouseX} item={item} onNavigate={handleScroll} />
        ))}
      </motion.nav>
    </header>
  );
}

function NavItem({ mouseX, item, onNavigate }) {
  const ref = useRef(null);

  // Calcula a distância entre o cursor e o centro deste ícone específico
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Transforma a distância numa escala física (alarga se estiver perto)
  const widthTransform = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
  const iconSizeTransform = useTransform(distance, [-150, 0, 150], [20, 32, 20]);

  // Suaviza a animação com molas matemáticas
  const width = useSpring(widthTransform, { stiffness: 400, damping: 25 });
  const height = useSpring(heightTransform, { stiffness: 400, damping: 25 });
  const iconSize = useSpring(iconSizeTransform, { stiffness: 400, damping: 25 });

  return (
    <motion.button
      ref={ref}
      style={{ width, height }}
      onClick={() => onNavigate(item.target)}
      className="relative flex items-center justify-center rounded-full bg-gray-800/50 text-gray-400 border border-gray-700/40 transition-colors group hover:bg-cyan-500 hover:text-black hover:border-cyan-400"
      title={item.label}
    >
      {/* CORREÇÃO: Renderiza diretamente o elemento HTML SVG injetado na lista */}
      <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
        {item.svg}
      </motion.div>
      
      {/* Pequeno indicador que aparece por baixo no Hover */}
      <span className="absolute -bottom-6 text-[10px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {item.label}
      </span>
    </motion.button>
  );
}