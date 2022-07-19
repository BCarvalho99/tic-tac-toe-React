import { useEffect, useState } from "react";

function AppBox({ isMiddle, setIsX, isX, open }) {
  const [isClicked, setIsClicked] = useState(false);
  const [valorA, setValorA] = useState("");
  useEffect(() => {
    if (!open) {
      setIsClicked(false);
      setValorA("");
      setIsX(true);
    }
  }, [open]);
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

export default AppBox;
