import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {

      // --- MENUS DA NAVBAR EM PT ---
       tab_home: "início",
      tab_about: "README",
      tab_projects: "projetos",
      tab_skills: "stack",
      tab_career: "percurso",
      tab_contact: "contacto",

      // Secção: Hero (Introdução)
      intro_name: "Hugo Dias",
      intro_tagline: "Estudante de Engenharia Informática",
      frase_intro: "Código não é apenas sobre resolver problemas.\nÉ sobre construir soluções que escalem, durem e gerem valor real.",
      hero_cta_projects: "Ver projetos",
      hero_cta_contact: "Entrar em contacto",
      hero_cta_github: "Abrir o meu GitHub",
      hero_scroll: "Continuar para Sobre Mim",

      // Secção: Sobre Mim (About Me)
      about_title: "Sobre Mim",
       about_bio: "O meu percurso na tecnologia começou no curso profissional de GPSI, no ensino secundário, onde descobri o gosto por resolver problemas. Foi durante esse curso que realizei um estágio na Yazaki Saltano, a desenvolver software para a indústria automóvel — uma primeira experiência que me mostrou o valor de sistemas bem arquitetados.\n\nHoje, como estudante de Engenharia Informática no ISPGAYA, foco-me em transformar ideias em sistemas robustos, eficientes e escaláveis, incluindo o desenvolvimento assistido por IA, que adotei por ajudar a reduzir o tempo de desenvolvimento.",
      about_focus_title: "O meu Foco",
      about_focus_1: "Arquitetura de Software",
      about_focus_2: "Eficiência de Sistemas",
      about_focus_3: "Soluções Full-Stack",
      about_focus_4: "Integração de IA em Aplicações",

      // Secção: Projetos
      projects_title: "<Projetos />",
      projects_subtitle: "Alguns dos sistemas e aplicações que desenvolvi.",
      view_github: "Ver no GitHub",
      fetching_repos: "A sincronizar projetos com o GitHub...",
      projects_no_desc: "Sem descrição definida no GitHub.",
      projects_synced: "{{count}} repositórios sincronizados",
      projects_see_all: "ver todos",
      projects_empty: "Ainda não há repositórios públicos para mostrar.",
      projects_error: "Não foi possível carregar os repositórios.",
      projects_error_hint: "A API do GitHub limita o número de pedidos por hora.",
      projects_error_action: "Ver no GitHub",
      timeline_title: "<Percurso />",       
      career_root: "início do percurso",
      career_visit: "abrir site",

      // Secção: Stack Tecnológico
      skills_title: "<Competências />",
      skills_subtitle: "As tecnologias e ferramentas que domino e utilizo regularmente.",
      skills_frontend: "Frontend",
      skills_backend: "Backend",
      skills_cloud: "Cloud & Infraestrutura",
      skills_tools: "Ferramentas & Sistemas",
      skills_count: "{{count}} tecnologias no stack",

      // Secção: Linha de Tempo / Percurso
      timeline_title: "O Meu Percurso",
      timeline_present: "2026 - Presente",
      timeline_past: "Até 2025",
      exp_uni_title: "Licenciatura em Engenharia Informática - ISPGAYA",
      exp_uni_desc: "ISPGAYA Instituto Politécnico.",
      exp_job_title: "Estágio Profissional - Empresa Yazaki Saltano Ovar",
      exp_job_desc: "Estágio profissional na área de Core Engineering, focado na criação de aplicações de software para a indústria automóvel.",
      exp_school_title: "Agrupamento de Escolas António Sérgio",
      exp_school_desc: "Curso Profissional de GPSI - Gestão e Programação de Sistemas Informáticos.",

      // Secção: Rodapé / Contactos
      talk: "Vamos conversar?",
      available: "Disponível para novos projetos, parcerias e oportunidades.",
      rights: "Todos os direitos reservados.",

      // Seletor de idioma
      lang_switch: "Mudar idioma"
    }
  },
  en: {
    translation: {

      // --- NAVBAR MENU ITEMS IN EN ---
      tab_home: "home",
      tab_about: "README",
      tab_projects: "projects",
      tab_skills: "stack",
      tab_career: "journey",
      tab_contact: "contact",

      // Section: Hero (Introduction)
      intro_name: "Hugo Dias",
      intro_tagline: "Computer Engineering Student",
      frase_intro: "Code is not just about solving problems.\nIt's about building solutions that scale, endure and generate real value.",
      hero_cta_projects: "View projects",
      hero_cta_contact: "Get in touch",
      hero_cta_github: "Open my GitHub",
      hero_scroll: "Continue to About Me",

      // Section: About Me
      about_title: "About Me",
      about_bio: "My journey in tech began with the GPSI professional course in secondary school, where I discovered my passion for solving problems. It was during that course that I completed an internship at Yazaki Saltano, building software for the automotive industry — a first experience that showed me the value of well-architected systems.\n\nToday, as a Computer Engineering student at ISPGAYA, I focus on turning ideas into robust, efficient, and scalable systems, including AI-assisted development, which I embraced for helping to reduce development time.",
      about_focus_title: "My Focus",
      about_focus_1: "Software Architecture",
      about_focus_2: "System Efficiency",
      about_focus_3: "Full-Stack Solutions",
      about_focus_4: "AI Integration in Applications",

      // Section: Projects
      projects_title: "<Projects />",
      projects_subtitle: "Some of the systems and applications I have developed.",
      view_github: "View on GitHub",
      fetching_repos: "Syncing projects with GitHub...",
      projects_no_desc: "No description set on GitHub.",
      projects_synced: "{{count}} repositories synced",
      projects_see_all: "see all",
      projects_empty: "No public repositories to show yet.",
      projects_error: "Couldn't load the repositories.",
      projects_error_hint: "The GitHub API limits how many requests you can make per hour.",
      projects_error_action: "View on GitHub",
      timeline_title: "<Career />",          
      career_root: "where it started",
      career_visit: "visit site",

      // Section: Tech Stack
      skills_title: "<Skills />",
      skills_subtitle: "The technologies and tools I master and use regularly.",
      skills_frontend: "Frontend",
      skills_backend: "Backend",
      skills_cloud: "Cloud & Infrastructure",
      skills_tools: "Tools & Systems",
      skills_count: "{{count}} technologies in the stack",

      // Section: Timeline
      timeline_title: "My Route",
      timeline_present: "2026 - Present",
      timeline_past: "Until 2025",
      exp_uni_title: "BSc in Computer Engineering - ISPGAYA",
      exp_uni_desc: "ISPGAYA Polytechnic Institute.",
      exp_job_title: "Professional Internship - Yazaki Saltano Ovar",
      exp_job_desc: "Professional Internship in Core Engineering, focused on building software applications for the automotive industry.",
      exp_school_title: "Agrupamento de Escolas António Sérgio",
      exp_school_desc: "GPSI Professional Course - IT Systems Management and Programming.",

      // Section: Footer / Contacts
      talk: "Let's talk?",
      available: "Available for new projects, partnerships and opportunities.",
      rights: "All rights reserved.",

      // Language switcher
      lang_switch: "Change language"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['pt', 'en'],
    /* Sem isto, um browser em "pt-PT" ou "pt-BR" pode não
       encontrar o bloco "pt". Trunca a região e usa só o idioma. */
    load: 'languageOnly',
    interpolation: {
      escapeValue: false
    }
  });

/* Mantém o atributo lang do <html> em sincronia com o idioma ativo.
   Importa para leitores de ecrã, tradutores e SEO. */
document.documentElement.lang = i18n.resolvedLanguage || 'en';
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;