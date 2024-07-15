import { socials } from "@/utils/constants";
import { SocialIcons } from "@/utils/types";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
type SocialsPropsType = {
  containerStyles: string;
  iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsPropsType) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={`${item.path}`} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
