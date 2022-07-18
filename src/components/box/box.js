import { useState } from "react";

function Box({ isMiddle, setIsX, isX }) {
  const [isClicked, setIsClicked] = useState(false);
  const [valorA, setValorA] = useState("");
  return (
    <div
      onClick={() => {
        if (!isClicked) {
          setIsClicked(true);
          setValorA(isX ? "X" : "O");
          setIsX(!isX);
        }
      }}
      className={!isMiddle ? "inside-line" : "inside-line middle-vertical"}
    >
      {isClicked && valorA}
    </div>
  );
}

export default Box;
