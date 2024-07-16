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
    "diplômé de Polytech Tours dans le cursus Ingénieur informatique depuis 2023." +
    "Je suis actuellement à la recherche d'une nouvelle aventure pour enrichir ma " +
    "carrière. Diligent et rigoureux grâce aux enseignements de ma CPGE, je suis " +
    "également sociable et apprécie le travail en équipe.En espérant prendre contact " +
    "avec vous, je vous souhaite une bonne journée.",
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
