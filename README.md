# 👨‍💻 Hugo Dias — Portfólio | Portfolio

<!-- 🇵🇹 Português | 🇬🇧 English -->
> **PT:** Portefólio pessoal interativo com estética de editor de código, desenvolvido em React + Vite. Suporte multi-idioma (PT/EN), fundo de partículas reativo ao rato e cursor personalizado em estilo terminal.
> **EN:** Interactive personal portfolio with a code-editor aesthetic, built with React + Vite. Multi-language support (PT/EN), a mouse-reactive particle background, and a terminal-style custom cursor.

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white" alt="i18next" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## 🔗 Demo / Live

👉 **[Ver site ao vivo / View live site](https://portfolio-web-hugofd.vercel.app/)**

---

## 📑 Índice | Table of Contents

- [Sobre | About](#-sobre--about)
- [Funcionalidades | Features](#-funcionalidades--features)
- [Secções | Sections](#-secções--sections)
- [Tecnologias | Tech Stack](#-tecnologias--tech-stack)
- [Instalação | Getting Started](#-instalação--getting-started)
- [Estrutura | Project Structure](#-estrutura--project-structure)
- [Idiomas | Internationalization](#-idiomas--internationalization-i18n)
- [Deploy](#-deploy)
- [Contactos | Contact](#-contactos--contact)

---

## 👋 Sobre | About

**PT:** Sou o **Hugo Dias**, estudante de Engenharia Informática no ISPGAYA. Este portefólio foi desenhado como um editor de código — cada secção é um ficheiro, com tabs, blocos de `import` e um `git log`. Reúne o meu percurso, projetos e competências.

**EN:** I'm **Hugo Dias**, a Computer Engineering student at ISPGAYA. This portfolio is designed like a code editor — each section is a file, with tabs, `import` blocks, and a `git log`. It brings together my journey, projects, and skills.

---

## ✨ Funcionalidades | Features

- 🌍 **PT:** Multi-idioma (PT/EN) com deteção automática do browser e seletor manual · **EN:** Multi-language (PT/EN) with automatic browser detection and a manual switcher
- 🗂️ **PT:** Navegação em barra de tabs de editor, com secção ativa em destaque · **EN:** Editor tab-strip navigation, highlighting the active section
- 🎇 **PT:** Fundo de partículas reativo ao rato · **EN:** Mouse-reactive particle background *(tsParticles)*
- 🖱️ **PT:** Cursor personalizado em bloco de terminal, com rasto e piscar · **EN:** Terminal-block custom cursor, with trail and blink
- 📇 **PT:** Projetos carregados em tempo real a partir da API do GitHub · **EN:** Projects loaded live from the GitHub API
- 🎬 **PT:** Animações e transições fluidas · **EN:** Smooth animations and transitions *(Framer Motion)*
- ♿ **PT:** Respeita `prefers-reduced-motion` e navegação por teclado · **EN:** Respects `prefers-reduced-motion` and keyboard navigation
- 📱 **PT:** Design responsivo · **EN:** Responsive design

---

## 🧭 Secções | Sections

| Secção / Section | Descrição / Description |
| --- | --- |
| **Hero** | PT: Sequência de terminal que se escreve sozinha. · EN: A terminal boot sequence that types itself. |
| **README.md / About** | PT: O meu percurso e áreas de foco. · EN: My background and focus areas. |
| **projetos/ / Projects** | PT: Repositórios do GitHub em cartões de ficheiro. · EN: GitHub repositories as file cards. |
| **stack/ / Skills** | PT: Tecnologias agrupadas em blocos de import. · EN: Technologies grouped into import blocks. |
| **percurso.log / Career** | PT: Percurso académico e profissional em git log. · EN: Academic and professional path as a git log. |
| **contacto.sh / Contact** | PT: Formas de entrar em contacto. · EN: Ways to reach me. |

---

## 🛠️ Tecnologias | Tech Stack

**Core**
- [React 18](https://react.dev/) — biblioteca principal / main library
- [Vite 6](https://vitejs.dev/) — build tool & dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — estilos / styling

**UI & Animação | UI & Animation**
- [Framer Motion](https://www.framer.com/motion/) — animações / animations
- [tsParticles](https://particles.js.org/) — fundo de partículas / particle background
- [Lucide React](https://lucide.dev/) — ícones / icons

**Internacionalização | Internationalization**
- [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)
- i18next-browser-languagedetector

**Requisitos | Requirements**
- Node.js `>= 20.x`
- Gestor de pacotes: **pnpm** (o projeto usa `pnpm-lock.yaml`)

---

## 📁 Estrutura | Project Structure

```
PortfolioWeb/
├── public/
├── src/
│   ├── assets/                    # Imagens e recursos | Images & assets
│   ├── components/
│   │   ├── layout/                # Navbar, CustomCursor, ParticlesBackground
│   │   └── sections/              # Hero, AboutMe, Projects, Skills, CareerPath, Footer
│   ├── config/
│   │   └── i18n.js                # Config. de idiomas | Language config (PT/EN)
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vercel.json
├── vite.config.js
└── README.md
```

---

## 🌍 Idiomas | Internationalization (i18n)

**PT:** O site suporta **Português** e **Inglês**. O idioma é detetado automaticamente a partir do browser (com fallback para inglês) e pode ser trocado a qualquer momento no seletor `PT / EN` da barra de navegação. Todas as traduções estão centralizadas em `src/config/i18n.js`.
**EN:** The site supports **Portuguese** and **English**. The language is auto-detected from the browser (falling back to English) and can be switched anytime via the `PT / EN` toggle in the navbar. All translations are centralized in `src/config/i18n.js`.

---

## ▲ Deploy

**PT:** Este projeto está hospedado no **[Vercel](https://vercel.com/)**. Cada push para a branch principal gera automaticamente um novo deploy.
**EN:** This project is hosted on **[Vercel](https://vercel.com/)**. Every push to the main branch automatically triggers a new deployment.

---

## 📬 Contactos | Contact

- 🐙 **GitHub:** [github.com/FontouraC18H22O2](https://github.com/FontouraC18H22O2)
- 🌐 **Portfólio / Portfolio:** [portfolio-web-hugofd.vercel.app](https://portfolio-web-hugofd.vercel.app/)
- 📧 **Email:** hugo.work.dias@gmail.com

**PT:** Disponível para novos projetos, parcerias e oportunidades. Vamos conversar? 🤞
**EN:** Available for new projects, partnerships and opportunities. Let's talk? 🤞

---

<p align="center">
  Feito com ❤️ e React por <strong>Hugo Dias</strong> · Made with ❤️ and React by <strong>Hugo Dias</strong>
</p>