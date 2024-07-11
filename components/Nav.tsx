"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
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
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent "
            } capitalize font-medium hover:text-accent transition-all text-xl `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
