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
      projects_subtitle: "Alguns dos sistemas e aplicações que desenvolvi recentemente.",
      view_github: "Ver no GitHub",
      portfolio_title: "Portfólio Pessoal",
      portfolio_desc: "O meu portfólio pessoal interativo. Desenvolvido com React e Tailwind v4, incluisuporte multi-idioma (i18n).",
      wip: "Em Desenvolvimento",



      //Secção: Stack Tecnológico
      skills_title: "<Competências />",
      skills_subtitle: "As tecnologias e ferramentas que domino e utilizo regularmente.",
      skills_frontend: "Frontend",
      skills_backend: "Backend",
      skills_tools: "Ferramentas & Sistemas",

      // Secção: Linha de Tempo / Percurso
      timeline_title: "Percurso",
      timeline_present: "Presente",
      timeline_past: "Passado",

      // Secção: Rodapé / Contactos
      talk: "Vamos conversar?",
      available: "Disponível para novos projetos, parcerias e oportunidades.",
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
      projects_subtitle: "Some of the systems and applications I have recently developed.",
      view_github: "View on GitHub",
      portfolio_title: "Web Personal Portfolio",
      portfolio_desc: "My interactive personal portfolio. Built with React and Tailwind v4, featuring a mouse-reactive particle engine, 3D parallax effect, and multi-language support (i18n).",
      wip: "Work in Progress",
     
      // Section: Tech Stack
      skills_title: "<Skills />",
      skills_subtitle: "The technologies and tools I master and use regularly.",
      skills_frontend: "Frontend",
      skills_backend: "Backend",
      skills_tools: "Tools & Systems",

      // Section: Timeline
      timeline_title: "Timeline",
      timeline_present: "Present",
      timeline_past: "Past",

      // Section: Footer / Contacts
      talk: "Let's talk?",
      available: "Available for new projects, partnerships and opportunities.",
      rights: "All rights reserved."
    }
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;