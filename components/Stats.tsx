"use client";

import { stats } from "@/utils/constants";
import { useLocale } from "next-intl";
import CountUp from "react-countup";

const Stats = () => {
  const locale = useLocale();
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  prefix="+"
                  end={item.num}
                  duration={2}
                  delay={2}
                  className="text-4x xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text[locale].length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text[locale]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
