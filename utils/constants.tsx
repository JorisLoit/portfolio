import {
  FaGithub,
  FaLinkedinIn,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSpringboot, SiTypescript } from "react-icons/si";
import {
  AboutMeType,
  ExperienceEducationType,
  LinksType,
  ProjectsType,
  SkillsType,
  SocialIcons,
  StatsType,
} from "./types";
import { Variants } from "framer-motion";

export const links: LinksType[] = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "Projets",
    path: "/projects",
  },
  {
    name: "CV",
    path: "/resume",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
export const socials: SocialIcons[] = [
  {
    icon: <FaGithub />,
    path: "",
  },
  { icon: <FaLinkedinIn />, path: "" },
];
export const MAX_STEPS = 6;

export const stairAnimation: Variants = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
export const stats: StatsType[] = [
  {
    num: 1,
    text: "Années d'expérience",
  },
  {
    num: 10,
    text: "Projets finis",
  },
  {
    num: 6,
    text: "Technologies utilisées",
  },
  {
    num: 1000,
    text: "Sourires apportés",
  },
];

export const aboutMe: AboutMeType = {
  title: "A propos",
  description:
    "Je suis Joris LOIT, ingénieur étude et développement depuis plus d'un an," +
    "diplômé de Polytech Tours dans le cursus Ingénieur informatique depuis 2023. " +
    "Je suis actuellement à la recherche d'une nouvelle aventure pour enrichir ma " +
    "carrière. Diligent et rigoureux grâce aux enseignements de ma CPGE, je suis " +
    "également sociable et apprécie le travail en équipe.",
  info: [
    { fieldName: "Nom", fieldValue: "Joris Loit" },
    { fieldName: "Expérience", fieldValue: "Plus d'un an" },
    { fieldName: "Nationalité", fieldValue: "Français" },
    { fieldName: "Téléphone", fieldValue: "+33 6 16 89 85 38" },
    { fieldName: "Email", fieldValue: "jorisloit1@gmail.com" },
    { fieldName: "Langues", fieldValue: "Français, Anglais" },
  ],
};
export const education: ExperienceEducationType = {
  title: "Formations",
  description:
    "Le long de mon parcours j'ai eu l'occasion d'apprendre différentes technologies, des méthodes de travail et à travailler en équipe",
  info: [
    {
      date: "2020 - 2023",
      title: "Ingénierie informatique",
      place: "Polytech Tours",
    },
    {
      date: "2020 - 2018",
      title: "Classe prépartoire aux grandes écoles TSI",
      place: "Lycée Marcel Sembat Sotteville-lès-Rouen",
    },
    {
      date: "2018 - 2015",
      title: "Baccalauréat STI2D SIN",
      place: "Lycée Blaise Pascal Rouen",
    },
  ],
};

export const experience: ExperienceEducationType = {
  title: "Expériences professionnelles",
  description:
    "Avec plus d'un an d'expérience j'ai pu découvrir divers outils utilisés universellement tels que Jira, Confluence, Postman/Insomnia. Egalement tous mes projets étaient en équipe.",
  info: [
    {
      date: "2023-2024",
      title: "Ingénieur étude et développement",
      place: "Attineos",
    },
    {
      date: "2022-2023",
      title: "Ingénieur étude et développement en Alternance",
      place: "Attineos",
    },
  ],
};
export const skills: SkillsType = {
  title: "Mes compétences",
  description:
    "Ces technologies ont été maitrisées dans le cadre de mes projets professionnels, scolaires et personnels",
  skillList: [
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaJava />,
      name: "Java 17",
    },
    {
      icon: <SiSpringboot />,
      name: "SpringBoot",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
  ],
};

export const projects: ProjectsType[] = [
  {
    num: "01",
    category: "Back-end",
    title: "MyGreffe",
    description:
      "Projet national visant à fusionner les deux applications historiques utilisée par les greffiers de France pour en faire une nouvelle plus accessible. Au cours de ce projet j'ai réalisé plusieurs missions, notamment l'ouverture et la maintenance de routes API, création de batchs, gestion de base de données",
    stack: [{ name: "Java 17 et 8" }, { name: "Spring Boot" }, { name: "React Js" }],
    type: "Professionnel",
    image: "/mygreffe.jpg",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Maïa Travel",
    description:
      "Projet national de Maïa Travel, une startup française visant à proposer une alternative pour la création de voyage, d’abord en France puis à l’international si possible.  L’innovation venait de la fusion entre l’agence de voyage en ligne proposant tout, du transport à l’hébergement en passant par les activités à faire sur place, au réseau social type Instagram pour partager ses expériences. De part cette fusion, la planification à plusieurs était facile. ",
    stack: [{ name: "ReactJs" }, { name: "Typescript" }, { name: "NodeJs" }, { name: "Sequelize" }],
    type: "Professionnel",
    image: "/maiatravel.jpg",
  },
  {
    num: "03",
    category: "Front-end, Lead développeur",
    title: "Extranet",
    description:
      "Projet interne à Attineos, permet à l'équipe commerciale de récupérer les CV des collaborateur et démarcher les clients. Un existant était présent le but était de le migrer vers des technologies plus récentes en faisant une refonte graphique. Dans un premier temps sur de la formation de 3 stagiaires, j'ai ensuite rejoint l'équipe afin de prêter une main forte technique et de remettre de l'ordre dans le répertoire et les bonnes pratiques.  ",
    stack: [{ name: "ReactJs" }, { name: "PHP/Symfony" }, { name: "TypeScript" }],
    type: "Profesionnelle",
    image: "/extranet.jpg",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Application web type Pronote",
    description:
      "Lors de mon Erasmus en Pologne, j'ai effectué ce projet dans le cadre de ma formation en tant qu'introduction à SpringBoot et AngularJs",
    stack: [{ name: "Java/SpringBoot" }, { name: "AngularJs" }],
    type: "Scolaire",
    image: "/pronote.jpg",
  },
  {
    num: "05",
    category: "Logiciel",
    title: "IHM de simulation de bibliothèque",
    description:
      "Lors de mon Erasmus en Pologne, j'ai effectué ce projet dans le cadre de ma formation en tant qu'introduction au C#",
    stack: [{ name: "C#" }],
    type: "Scolaire",
    image: "/bibliotheque.jpg",
  },
];
