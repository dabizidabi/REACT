import { useEffect, useState } from "react";

export default function useHover(refer) {
  const [onHover, setOnHover] = useState({
    hover: false,
    r: null,
    g: null,
    b: null,
  });

  const hoverOn = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setOnHover({
      hover: true,
      r: Math.floor(x / 2),
      g: Math.floor(x * 2),
      b: Math.floor(y * 2),
    });
  };

  const hoverOff = () => {
    setOnHover({ ...onHover, hover: false });
  };

  useEffect(() => {
    const element = refer.current;
    if (!refer.current) {
      return;
    }

    element.addEventListener("mousemove", hoverOn);
    element.addEventListener("mouseleave", hoverOff);

    return () => {
      element.removeEventListener("mousemove", hoverOn);
      element.removeEventListener("mouseleave", hoverOff);
    };
  }, []);

  return onHover;
}
