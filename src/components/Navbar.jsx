import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

// Lista de itens de navegação ligada aos IDs das tuas secções
const navItems = [
  { icon: Home, label: "Home", target: "home" },
  { icon: User, label: "Sobre Mim", target: "about" },
  { icon: Briefcase, label: "Projetos", target: "projects" },
  { icon: Code, label: "Skills", target: "skills" },
  { icon: Mail, label: "Contacto", target: "footer" },
];

export default function Navbar() {
  const mouseX = useMotionValue(Infinity);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
  const Icon = item.icon;

  // Calcula a distância entre o cursor e o centro deste ícone específico
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Transforma a distância numa escala física (alarga se estiver a menos de 150px de distância)
  const widthTransform = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
  const iconSizeTransform = useTransform(distance, [-150, 0, 150], [20, 32, 20]);

  // Suaviza a animação com molas matemáticas de alta performance
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
      <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
        <Icon size="100%" />
      </motion.div>
      
      {/* Pequeno indicador que aparece por baixo no Hover */}
      <span className="absolute -bottom-6 text-[10px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {item.label}
      </span>
    </motion.button>
  );
}