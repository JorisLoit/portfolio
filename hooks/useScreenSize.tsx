import { screenSizeConfig } from "@/utils/constants";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<String>("");
  const getScreenSizeLabel = (width: number): string => {
    switch (true) {
      case width < screenSizeConfig.sm:
        return "sm";
      case width < screenSizeConfig.md:
        return "md";
      case width < screenSizeConfig.lg:
        return "lg";
      default:
        return "xl";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = Number(window.innerWidth);
      setScreenSize(getScreenSizeLabel(width));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
