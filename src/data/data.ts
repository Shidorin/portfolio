import {
  MdOutlineEmail,
  MdOutlineExplore,
  MdOutlineInsertDriveFile,
} from "react-icons/md";

export const skillData = {
  skills: [
    {
      title: "Frontend",
      stacks: [
        { name: "HTML5", img: "html5.png" },
        { name: "CSS3", img: "css.png" },
        { name: "JavaScript", img: "javascript.png" },
        { name: "TypeScript", img: "typescript.png" },
        { name: "React", img: "react.png" },
        { name: "Redux", img: "redux.png" },
        { name: "Anime.js", img: "animejs.png" },
      ],
    },
    {
      title: "Backend",
      stacks: [
        { name: "Node", img: "node.png" },
        { name: "Express", img: "express.png" },
        { name: "Sequelize ORM", img: "sequelize.png" },
        { name: "RESTful API", img: "restfulapi.png" },
      ],
    },
    {
      title: "Tools",
      stacks: [
        { name: "Agile", img: "agile.png" },
        { name: "Git", img: "git.png" },
        { name: "Tailwind", img: "tailwind.png" },
        { name: "MaterialUI", img: "mui3.png" },
        { name: "Bootstrap", img: "bootstrap.png" },
      ],
    },
  ],
};

export const projectsData = {
  projects: [
    {
      id: "1",
      title: "eBookshelf",
      description: "dummy data",
      descriptionPL: "",
      image: "ebookshelf.png",
      imageMobile: "ebookshelf-mobile.png",
      technologies: [
        { name: "JavaScript", img: "javascript.png" },
        { name: "React", img: "react.png" },
        { name: "MaterialUI", img: "mui.png" },
        { name: "Node", img: "node.png" },
        { name: "Express", img: "express.png" },
        { name: "Sequelize ORM", img: "sequelize.png" },
      ],
      demoLink: "",
      sourceCodeLink: "https://github.com/Shidorin/eBookshelf",
    },
    {
      id: "2",
      title: "Hotel Website",
      description: "dummy data",
      descriptionPL:
        "Strona sieci hoteli została stworzona jako narzędzie do nauki TypeScript oraz udoskonalenie podstaw CSS. " +
        "Została przygotowana również pod możliwość korzystania przez urządzenia mobilne. " +
        "Strona zawiera filtr hoteli, który jest połączony z paginacją oraz z url. " +
        "Projekt nie posiada backendu, ale cała strona jest dynamiczna i przygotowana pod możliwość zastąpienia danych pozornych na realne.",
      image: "hotel.png",
      imageMobile: "hotel-mobile.png",
      technologies: [
        { name: "TypeScript", img: "typescript.png" },
        { name: "React", img: "react.png" },
        { name: "Redux", img: "redux.png" },
        { name: "CSS", img: "css.png" },
      ],
      demoLink: "https://shidorin.github.io/hotel-project/",
      sourceCodeLink: "https://github.com/Shidorin/hotel-project",
    },
    {
      id: "3",
      title: "Portfolio",
      description:
        "While creating the portfolio, I had a chance to work with CI/CD infrastructure using Netlify. " +
        "To prepare the user interface, I used Tailwind and the Anime.js library, which helped me create animations. " +
        "Tailwind has proven to be an ideal tool for quickly creating flexible UIs with a 'mobile first' approach.",
      descriptionPL:
        "Tworząc portfolio miałem okazję pracować z CI/CD infrastrukturą korzystając z Netlify. " +
        "Do przygotowania interfejsu wykorzystałem Tailwind oraz bibliotekę Anime.js dzięki, której stworzyłem animacje. " +
        "Tailwind okazał się idealnym narzędziem do szybkiego tworzenia elastycznego UI z podejściem 'mobile first'.",
      image: "portfolio.png",
      imageMobile: "portfolio-mobile.png",
      technologies: [
        { name: "TypeScript", img: "typescript.png" },
        { name: "React", img: "react.png" },
        { name: "Redux", img: "redux.png" },
        { name: "Tailwind", img: "tailwind.png" },
        { name: "Anime.js", img: "animejs.png" },
      ],
      demoLink: "https://wojtek-dev.netlify.app/",
      sourceCodeLink: "https://github.com/Shidorin/portfolio",
    },
  ],
};

export const languagesData = {
  languages: [
    {
      language: "en",
      home: {
        title: "Hello, I'm Wojtek",
        description:
          "I'm Frontend Software Engineer, something something, and something something",
      },
    },
    {
      language: "pl",
      nav: {},
      home: {
        title: "Cześć, jestem Wojtek",
        description:
          "Jestem Frontend Software Engineer, tekst tekst tekst tekst",
      },
    },
  ],
};

export const contactInfo = {
  title: "Contact me",
  namePlaceholder: "Name",
  msgPlaceholder: "Message",
  contactButton: "Contact me",
  contact: [
    {
      title: "View portfolio",
      icon: MdOutlineInsertDriveFile,
      links: [
        {
          description: "English version",
          url: "Pawlicki-Gil_CV_eng.pdf",
        },
        {
          description: "Polish version",
          url: "Pawlicki-Gil_CV_eng.pdf",
        },
      ],
    },
    {
      title: "Email",
      icon: MdOutlineEmail,
      links: [
        {
          description: "wojciech.pawlicki-gil@gmail.com",
          url: "",
        },
      ],
    },
    {
      title: "Sites",
      icon: MdOutlineExplore,
      links: [
        {
          description: "Github",
          url: "https://github.com/Shidorin",
        },
      ],
    },
  ],
};

export const contactInfoPL = {
  title: "Skontaktuj się",
  namePlaceholder: "Imię",
  msgPlaceholder: "Wiadomość",
  contactButton: "Wyślij",
  contact: [
    {
      title: "Zobacz portfolio",
      icon: MdOutlineInsertDriveFile,
      links: [
        {
          description: "Zobacz portfolio po angielsku",
          url: "Pawlicki-Gil_CV_eng.pdf",
        },
        {
          description: "Zobacz portfolio po polsku",
          url: "Pawlicki-Gil_CV_eng.pdf",
        },
      ],
    },
    {
      title: "Email",
      icon: MdOutlineEmail,
      links: [
        {
          description: "wojciech.pawlicki-gil@gmail.com",
          url: "",
        },
      ],
    },
    {
      title: "Strony",
      icon: MdOutlineExplore,
      links: [
        {
          description: "Github",
          url: "https://github.com/Shidorin",
        },
      ],
    },
  ],
};
