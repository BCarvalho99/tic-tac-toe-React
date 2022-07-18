import "./App.css";
import Box from "./components/box/box";
import { useState, useEffect } from "react";

function App() {
  const [isX, setIsX] = useState(true);
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  useEffect(() => {
    const boxes = document.querySelectorAll(".inside-line");

    winConditions.forEach((condition) => {
      if (
        boxes[condition[0]].innerHTML != "" &&
        boxes[condition[0]].innerHTML == boxes[condition[1]].innerHTML &&
        boxes[condition[0]].innerHTML == boxes[condition[2]].innerHTML
      ) {
        alert("WON");
      }
    });
  }, [isX]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="line">
          <Box setIsX={setIsX} isX={isX} />
          <Box isMiddle setIsX={setIsX} isX={isX} />
          <Box setIsX={setIsX} isX={isX} />
        </div>
        <div className="line middle-horizontal">
          <Box setIsX={setIsX} isX={isX} />
          <Box isMiddle setIsX={setIsX} isX={isX} />
          <Box setIsX={setIsX} isX={isX} />
        </div>
        <div className="line">
          <Box setIsX={setIsX} isX={isX} />
          <Box isMiddle setIsX={setIsX} isX={isX} />
          <Box setIsX={setIsX} isX={isX} />
        </div>
      </header>
    </div>
  );
}

export default App;
