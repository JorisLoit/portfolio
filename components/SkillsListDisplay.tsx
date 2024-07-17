import { skills } from "@/utils/constants";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import useScreenSize from "@/hooks/useScreenSize";

const SkillsListDisplay = () => {
  const width = useScreenSize();
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xl:gap-[30px]">
      {skills.skillList.map((skill, index) => {
        return (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-lavender-400 rounded-xl flex justify-center items-center group gap-2">
                  <div className="text-6xl group-hover:text-accent trasition-all duration-300">
                    {skill.icon}
                  </div>
                  {width !== "xl" && <div>{skill.name}</div>}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsListDisplay;
