import { aboutMe } from "@/utils/constants";
import { useLocale } from "next-intl";
import React from "react";

const AboutMeSection = () => {
  const locale = useLocale();
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
      {aboutMe.info.map((item, index) => {
        return (
          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-accent">{item.fieldName[locale]}</span>
            <span className="text-xl">{item.fieldValue[locale]}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default AboutMeSection;
