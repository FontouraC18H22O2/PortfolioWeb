# 👨‍💻 Hugo Dias — Portfólio | Portfolio

<!-- 🇵🇹 Português | 🇬🇧 English -->
> **PT:** Portefólio pessoal interativo desenvolvido em React + Vite, com suporte multi-idioma (PT/EN), animações e um fundo de partículas reativo ao rato.
> **EN:** Interactive personal portfolio built with React + Vite, featuring multi-language support (PT/EN), animations, and a mouse-reactive particle background.

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

👉 **[Ver site ao vivo / View live site](https://portfolio-web-one-hazel.vercel.app/)**


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

**PT:** Sou o **Hugo Dias**, estudante de Engenharia Informática no ISPGAYA. O meu percurso começou no curso profissional de GPSI, no ensino secundário, onde realizei um estágio na Yazaki Saltano a desenvolver software para a indústria automóvel. Hoje foco-me em transformar ideias em sistemas robustos, eficientes e escaláveis. Este portefólio reúne o meu percurso, projetos e competências.

**EN:** I'm **Hugo Dias**, a Computer Engineering student at ISPGAYA. My journey started with the GPSI professional course in secondary school, where I completed an internship at Yazaki Saltano building software for the automotive industry. Today I focus on turning ideas into robust, efficient, and scalable systems. This portfolio brings together my journey, projects, and skills.

> _"Código não é apenas sobre resolver problemas. É sobre construir soluções que escalem, durem e gerem valor real."_
> _"Code is not just about solving problems. It's about building solutions that scale, endure and generate real value."_

---

## ✨ Funcionalidades | Features

- 🌍 **PT:** Multi-idioma (PT/EN) com deteção automática do idioma do browser · **EN:** Multi-language (PT/EN) with automatic browser language detection
- 🎇 **PT:** Fundo de partículas reativo ao rato · **EN:** Mouse-reactive particle background *(tsParticles)*
- 🖱️ **PT:** Cursor personalizado · **EN:** Custom animated cursor
- 🎬 **PT:** Animações e transições fluidas · **EN:** Smooth animations and transitions *(Framer Motion)*
- 🧭 **PT:** Navbar estilo Dock · **EN:** Dock-style navbar
- 📱 **PT:** Design responsivo · **EN:** Responsive design

---

## 🧭 Secções | Sections

| Secção / Section | Descrição / Description |
| --- | --- |
| **Hero** | PT: Introdução e apresentação. · EN: Introduction and intro. |
| **Sobre Mim / About Me** | PT: O meu percurso e áreas de foco. · EN: My background and focus areas. |
| **Projetos / Projects** | PT: Sistemas e aplicações que desenvolvi. · EN: Systems and applications I've built. |
| **Competências / Skills** | PT: Frontend, Backend, Ferramentas & Sistemas. · EN: Frontend, Backend, Tools & Systems. |
| **Percurso / Career Path** | PT: Linha de tempo académica e profissional. · EN: Academic and professional timeline. |
| **Contactos / Contact** | PT: Formas de entrar em contacto. · EN: Ways to reach me. |

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

---

## ⚙️ Instalação | Getting Started

```bash
# 1. Clonar o repositório | Clone the repository
git clone https://github.com/FontouraC18H22O2/PortfolioWeb.git

# 2. Entrar na pasta | Enter the folder
cd PortfolioWeb

# 3. Instalar dependências | Install dependencies
npm install

# 4. Iniciar o servidor de desenvolvimento | Start the dev server
npm run dev
```

**PT:** Abre `http://localhost:5173` no teu browser.
**EN:** Open `http://localhost:5173` in your browser.

**Scripts disponíveis | Available scripts:**

| Comando / Command | Descrição / Description |
| --- | --- |
| `npm run dev` | PT: Servidor de desenvolvimento · EN: Development server |
| `npm run build` | PT: Build de produção · EN: Production build |
| `npm run preview` | PT: Pré-visualizar o build · EN: Preview the build |
| `npm run lint` | PT: Correr o ESLint · EN: Run ESLint |

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
│   ├── styles/
│   │   └── App.css
│   ├── i18n.js                    # Config. de idiomas | Language config (PT/EN)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌍 Idiomas | Internationalization (i18n)

**PT:** O site suporta **Português** e **Inglês**. O idioma é detetado automaticamente a partir do browser, com fallback para inglês. Todas as traduções estão centralizadas em `src/i18n.js`.
**EN:** The site supports **Portuguese** and **English**. The language is auto-detected from the browser, with a fallback to English. All translations are centralized in `src/i18n.js`.

---

## ▲ Deploy

**PT:** Este projeto está hospedado no **[Vercel](https://vercel.com/)**. Cada push para a branch principal gera automaticamente um novo deploy.
**EN:** This project is hosted on **[Vercel](https://vercel.com/)**. Every push to the main branch automatically triggers a new deployment.

---

## 📬 Contactos | Contact

- 🐙 **GitHub:** [github.com/FontouraC18H22O2](https://github.com/FontouraC18H22O2)
- 🌐 **Portfólio / Portfolio:** [portfolio-web-one-hazel.vercel.app](https://portfolio-web-one-hazel.vercel.app/)
- 📧 **Email:** hugo.work.dias@gmail.com 



**PT:** Disponível para novos projetos, parcerias e oportunidades. Vamos conversar? 🤞
**EN:** Available for new projects, partnerships and opportunities. Let's talk? 🤞

---

<p align="center">
  Feito com ❤️ e React por <strong>Hugo Dias</strong> · Made with ❤️ and React by <strong>Hugo Dias</strong>
</p>