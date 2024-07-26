import React from "react";
import { links } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

type LinksPropsType = {
  setOpen: (open: boolean) => void;
};
const  Links = (props: LinksPropsType) => {
  const pathname = usePathname();
  const locale = useLocale();
  return links.map((link, index) => {
    return (
      <Link
        href={`${"/" + locale + link.path}`}
        key={index}
        className={`${
          pathname.length === 3
            ? link.path === "/" && "text-accent border-b-2 border-accent "
            : pathname.substring(4).includes(link.path.substring(1)) &&
              link.path.length > 1 &&
              "text-accent border-b-2 border-accent "
        } capitalize font-medium hover:text-accent transition-all text-xl `}
        onClick={() => {
          props.setOpen(false);
        }}
      >
        {link.name[locale]}
      </Link>
    );
  });
};

export default Links;
