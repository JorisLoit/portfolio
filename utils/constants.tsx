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
    name: { fr: "Accueil", en: "Home" },
    path: "/",
  },
  {
    name: { fr: "Projets", en: "Projects" },
    path: "/projects",
  },
  {
    name: { fr: "CV", en: "Resume" },
    path: "/resume",
  },
  {
    name: { fr: "Contact", en: "Contact" },
    path: "/contact",
  },
];
export const socials: SocialIcons[] = [
  {
    icon: <FaGithub />,
    path: "https://github.com/JorisLoit",
  },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/joris-loit-7345071b8/" },
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
    text: { fr: "Années d'expérience", en: "Years of experience" },
  },
  {
    num: 10,
    text: { fr: "Projets finis", en: "Projects finished" },
  },
  {
    num: 10,
    text: { fr: "Technologies utilisées", en: "Technologies used" },
  },
  {
    num: 1000,
    text: { fr: "Sourires apportés", en: "Smiles brought" },
  },
];

export const aboutMe: AboutMeType = {
  title: { fr: "A propos", en: "About me" },
  description: {
    fr:
      "Je suis Joris LOIT, ingénieur étude et développement depuis plus d'un an," +
      "diplômé de Polytech Tours dans le cursus Ingénieur informatique depuis 2023. " +
      "Je suis actuellement à la recherche d'une nouvelle aventure pour enrichir ma " +
      "carrière. Diligent et rigoureux grâce aux enseignements de ma CPGE, je suis " +
      "également sociable et apprécie le travail en équipe.\n Ce que j'apprécie particulièrement " +
      "dans le développement c'est la possibilité de résoudre des problèmes concrets grâce à des " +
      "algorithmes. J'ai cette passion depuis que j'ai découvert l'informatique au lycée. " +
      "L'approche mathématique est aussi une motivation pour moi, réfléchir et trouver des conjectures est un travail stimulant et intéressant",
    en: "I am Joris LOIT, computer science engineer for more than one year now, I got my computer science engineering degree at Polytech Tours. I am now looking for a new adventure to broaden my field of view. During my two-year intensive study course for the French 'Grandes écoles' I developed a strong sense of rigor and self discipline, also very outgoing and loves to do teamwork. What makes me enjoy programming is the possibility of resolving people's problems using logic and algorithms.",
  },
  info: [
    { fieldName: { fr: "Nom", en: "Name" }, fieldValue: { fr: "Joris Loit", en: "Joris Loit" } },
    {
      fieldName: { fr: "Expérience", en: "Experience" },
      fieldValue: { fr: "Plus d'un an", en: "One year" },
    },
    {
      fieldName: { fr: "Nationalité", en: "Nationality" },
      fieldValue: { fr: "Français", en: "French" },
    },
    {
      fieldName: { fr: "Téléphone", en: "Phone number" },
      fieldValue: { fr: "+33 6 16 89 85 38", en: "+33 6 16 89 85 38" },
    },
    {
      fieldName: { fr: "Email", en: "Email" },
      fieldValue: { fr: "jorisloit1@gmail.com", en: "jorisloit1@gmail.com" },
    },
    {
      fieldName: { fr: "Langues", en: "Languages" },
      fieldValue: { fr: "Français, Anglais", en: "French, English" },
    },
  ],
};
export const education: ExperienceEducationType = {
  title: { fr: "Formations", en: "Education" },
  description: {
    fr: "Le long de mon parcours j'ai eu l'occasion d'apprendre différentes technologies, des méthodes de travail et à travailler en équipe",
    en: "Along my journey I have had the opportunity to learn different technologies, working methods and teamwork",
  },
  info: [
    {
      date: "2020 - 2023",
      title: { fr: "Ingénierie informatique", en: "Computer engineering" },
      place: { fr: "Polytech Tours", en: "Polytech Tours" },
    },
    {
      date: "2018 - 2020",
      title: {
        fr: "Classe prépartoire aux grandes écoles TSI",
        en: "Intense two-years study course for French 'Grandes Ecoles",
      },
      place: {
        fr: "Lycée Marcel Sembat Sotteville-lès-Rouen",
        en: "High school Marcel Sembat Sotteville-lès-Rouen",
      },
    },
    {
      date: "2015 - 2018",
      title: {
        fr: "Baccalauréat STI2D SIN",
        en: "Bachelor's degree with a computer science speciality",
      },
      place: { fr: "Lycée Blaise Pascal Rouen", en: "High school Blaise Pascal Rouen" },
    },
  ],
};

export const experience: ExperienceEducationType = {
  title: { fr: "Expériences professionnelles", en: "" },
  description: {
    fr: "Avec plus d'un an d'expérience j'ai pu découvrir divers outils utilisés universellement tels que Jira, Confluence, Postman/Insomnia. Egalement tous mes projets étaient en équipe.",
    en: "With more than a year of experience I was able to discover various tools used universally such as Jira, Confluence, Postman/ Insomnia. Also all my projects were in a team.",
  },
  info: [
    {
      date: "2023-2024",
      title: { fr: "Ingénieur étude et développement", en: "Computer science engineer" },
      place: { fr: "Attineos", en: "Attineos" },
    },
    {
      date: "2022-2023",
      title: {
        fr: "Ingénieur étude et développement en Alternance",
        en: "Internship Computer science engineer",
      },
      place: { fr: "Attineos", en: "Attineos" },
    },
  ],
};
export const skills: SkillsType = {
  title: { fr: "Mes compétences", en: "My skills" },
  description: {
    fr: "Ces technologies ont été maitrisées dans le cadre de mes projets professionnels, scolaires et personnels",
    en: "I have mastered these technologies through my professional, academic, and personal projects.",
  },
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
    category: { fr: "Back-end", en: "Back-end" },
    title: { fr: "MyGreffe", en: "MyGreffe" },
    description: {
      fr: "Projet national visant à fusionner les deux applications historiques utilisée par les greffiers de France pour en faire une nouvelle plus accessible. Au cours de ce projet j'ai réalisé plusieurs missions, notamment l'ouverture et la maintenance de routes API, création de batchs, gestion de base de données",
      en: "The merging of two historical applications used by clerks in France is being done as part of a national project to make a new one more accessible. During this project I carried out several missions, including the opening and maintenance of API routes, batch creation, database management",
    },
    stack: [{ name: "Java 17, 8" }, { name: "Spring Boot" }, { name: "React Js" }],
    type: { fr: "Professionnel", en: "Professional" },
    image: "/mygreffe.jpg",
  },
  {
    num: "02",
    category: { fr: "Fullstack", en: "Fullstack" },
    title: { fr: "Maïa Travel", en: "Maïa Travel" },
    description: {
      fr: "Projet national de Maïa Travel, une startup française visant à proposer une alternative pour la création de voyage, d’abord en France puis à l’international si possible.  L’innovation venait de la fusion entre l’agence de voyage en ligne proposant tout, du transport à l’hébergement en passant par les activités à faire sur place, au réseau social type Instagram pour partager ses expériences. De part cette fusion, la planification à plusieurs était facile. ",
      en: "National project of Maïa Travel, a French startup aiming to offer an alternative for the creation of travel, first in France and then internationally if possible.  The innovation came from the merger of the online travel agency offering everything from transport to accommodation and activities to do on site, to the social network Instagram to share their experiences. Because of this merger, planning with others was easy. ",
    },
    stack: [{ name: "ReactJs" }, { name: "Typescript" }, { name: "NodeJs" }, { name: "Sequelize" }],
    type: { fr: "Professionnel", en: "Professional" },
    image: "/maiatravel.jpg",
  },
  {
    num: "03",
    category: { fr: "Front-end, Lead développeur", en: "Front-end, Lead developer" },
    title: { fr: "Extranet", en: "Extranet" },
    description: {
      fr: "Projet interne à Attineos, permet à l'équipe commerciale de récupérer les CV des collaborateur et démarcher les clients. Un existant était présent le but était de le migrer vers des technologies plus récentes en faisant une refonte graphique. Dans un premier temps sur de la formation de 3 stagiaires, j'ai ensuite rejoint l'équipe afin de prêter une main forte technique et de remettre de l'ordre dans le répertoire et les bonnes pratiques.",
      en: "Internal project at Attineos, allows the sales team to retrieve employees' CVs and solicit customers. An existing one was present the purpose was to migrate it to newer technologies and do a graphic redesign. Initially on the training of 3 trainees, I then joined the team to lend a strong technical hand and put order in the directory and good practices.",
    },
    stack: [{ name: "ReactJs" }, { name: "PHP/Symfony" }, { name: "TypeScript" }],
    type: { fr: "Professionnel", en: "Professional" },
    image: "/extranet.jpg",
  },
  {
    num: "04",
    category: { fr: "Front-end", en: "Front-end" },
    title: { fr: "Portfolio", en: "Portfolio" },
    description: {
      fr: "Le site sur lequel vous vous trouvez actuellement ! C'est le moment de faire tourner la toupie",
      en: "The site you are currently on! The moment has arrived to spin the wheel.",
    },
    stack: [{ name: "ReactJs" }, { name: "NextJs" }, { name: "Tailwind" }],
    type: { fr: "Personel", en: "" },
    image: "/portfolio.jpg",
  },
  {
    num: "05",
    category: { fr: "Fullstack", en: "Fullstack" },
    title: { fr: "Faux Pronote", en: "Academic platform" },
    description: {
      fr: "Lors de mon Erasmus en Pologne, j'ai effectué ce projet dans le cadre de ma formation en tant qu'introduction à SpringBoot et AngularJs",
      en: "During my Erasmus in Poland, I did this project as part of my training as an introduction to SpringBoot and AngularJs",
    },
    stack: [{ name: "Java/SpringBoot" }, { name: "AngularJs" }],
    type: { fr: "Scolaire", en: "Academic" },
    image: "/pronote.jpg",
  },
  {
    num: "06",
    category: { fr: "Logiciel", en: "Software" },
    title: { fr: "IHM librairie", en: "HMI library" },
    description: {
      fr: "Lors de mon Erasmus en Pologne, j'ai effectué ce projet dans le cadre de ma formation en tant qu'introduction au C#",
      en: "During my Erasmus in Poland, I did this project as part of my training as an introduction to C#",
    },
    stack: [{ name: "C#" }],
    type: { fr: "Scolaire", en: "Academic" },
    image: "/bibliotheque.jpg",
  },
];
export const screenSizeConfig: { [key: string]: number } = { sm: 640, md: 768, lg: 960, xl: 1200 };
