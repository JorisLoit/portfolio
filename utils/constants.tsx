import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SocialIcons } from "./types";

export const links = [
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
