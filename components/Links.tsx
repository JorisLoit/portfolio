import React from "react";
import { links } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinksPropsType = {
  setOpen: (open: boolean) => void;
};
const Links = (props: LinksPropsType) => {
  const pathname = usePathname();
  return links.map((link, index) => {
    return (
      <Link
        href={`${link.path}`}
        key={index}
        className={`${
          link.path === pathname && "text-accent border-b-2 border-accent "
        } capitalize font-medium hover:text-accent transition-all text-xl `}
        onClick={() => {
          props.setOpen(false);
        }}
      >
        {link.name}
      </Link>
    );
  });
};

export default Links;
