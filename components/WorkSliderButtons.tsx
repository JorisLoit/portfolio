"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderButtons = {
  containerStyles: string;
  buttonStyles: string;
};
const WorkSliderButtons = (props: WorkSliderButtons) => {
  const swiper = useSwiper();
  return (
    <div className={props.containerStyles}>
      <button className={props.buttonStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={props.buttonStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
