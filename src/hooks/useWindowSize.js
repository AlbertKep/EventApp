import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const screenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({
        width,
        height,
      });
    };

    //On mount
    screenSize();

    window.addEventListener("resize", screenSize);
    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  return windowSize;
};
