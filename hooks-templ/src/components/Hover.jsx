import { useRef } from "react";
import useHover from "../hooks/useHover";

const Hover = () => {
  const refer = useRef();

  const { hover, r, g, b } = useHover(refer);
  return (
    <div
      ref={refer}
      style={{
        width: "100px",
        height: "100px",
        background: hover ? `rgb(${r},${g},${b})` : "tomato",
        border: "1px solid black",
        margin: "5px",
      }}
    ></div>
  );
};

export default Hover;
