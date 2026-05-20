import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      // Secção: Hero (Introdução)
      intro_name: "Hugo Dias",
      intro_tagline: "Estudante de Engenharia Informática ",

      // Secção: Sobre Mim (About Me)
      about_title: "Sobre Mim",
      about_bio: "O meu percurso na tecnologia começou no curso profissional de GPSI, onde ganhei o gosto pela resolução de problemas complexos. Hoje, como estudante de Engenharia Informática, foco-me em transformar ideias em sistemas robustos, eficientes e escaláveis.",
      about_focus_title: "O meu Foco",
      about_focus_1: "Arquitetura de Software",
      about_focus_2: "Eficiência de Sistemas",
      about_focus_3: "Soluções Full-Stack",

      // Secção: Projetos
      projects_title: "<Projetos />",
      featured: "Destaque",
      wip: "Em Desenvolvimento",
      tech_stack: "Skills",

      // Secção: Linha de Tempo / Percurso
      timeline_title: "Percurso",
      timeline_present: "Presente",
      timeline_past: "Passado",

      // Secção: Rodapé / Contactos
      talk: "Vamos conversar?",
      available: "Disponível para novos projetos e oportunidades.",
      rights: "Todos os direitos reservados."
    }
  },
  en: {
    translation: {
      // Section: Hero (Introduction)
      intro_name: "Hugo Dias",
      intro_tagline: "Computer Engineering Student",

      // Section: About Me
      about_title: "About Me",
      about_bio: "My journey in tech began with the GPSI professional course, where I discovered my passion for solving complex problems. Today, as a Computer Engineering student, I focus on turning ideas into robust, efficient, and scalable systems.",
      about_focus_title: "My Focus",
      about_focus_1: "Software Architecture",
      about_focus_2: "System Efficiency",
      about_focus_3: "Full-Stack Solutions",

      // Section: Projects
      projects_title: "<Projects />",
      featured: "Featured",
      wip: "Work in Progress",
      tech_stack: "Skills",

      // Section: Timeline
      timeline_title: "Timeline",
      timeline_present: "Present",
      timeline_past: "Past",

      // Section: Footer / Contacts
      talk: "Let's talk?",
      available: "Available for new projects and opportunities.",
      rights: "All rights reserved."
    }
  }
};

i18n
  .use(LanguageDetector) // Deteta automaticamente o idioma do browser/sistema
  .use(initReactI18next) // Passa o i18n para o ecossistema do React
  .init({
    resources,
    fallbackLng: 'en', // Se o sistema estiver num idioma sem tradução, usa o Inglês
    interpolation: {
      escapeValue: false // O React já protege contra ataques XSS por defeito
    }
  });

export default i18n;