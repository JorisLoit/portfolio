import { socials } from "@/utils/constants";
import Link from "next/link";
type SocialsPropsType = {
  containerStyles: string;
  iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsPropsType) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={`${item.path}`}
            className={iconStyles}
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
