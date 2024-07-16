import React from "react";
import { ScrollArea } from "./ui/scroll-area";

type ScrollAreaEduExpPropsType = {
  info: { date: String; title: String; place: String }[];
};

const ScrollAreaEduExp = (props: ScrollAreaEduExpPropsType) => {
  return (
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {props.info.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-lavender-400 h-[184px] py-6 px-10 rounded-xl justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.date}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.place}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  );
};

export default ScrollAreaEduExp;
