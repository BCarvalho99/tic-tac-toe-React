import "./App.css";
import AppBox from "./components/box/app-box";
import { useState, useEffect } from "react";
import { Modal, Typography, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 100,
  bgcolor: "#155cf6",
  border: "2px solid #000",
  boxShadow: 24,

  p: 4,
};

function App() {
  const [isX, setIsX] = useState(true);
  const [open, setOpen] = useState(false);

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
        setOpen(true);
      }
    });
  }, [isX]);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="line">
            <AppBox open={open} setIsX={setIsX} isX={isX} />
            <AppBox open={open} isMiddle setIsX={setIsX} isX={isX} />
            <AppBox open={open} setIsX={setIsX} isX={isX} />
          </div>
          <div className="line middle-horizontal">
            <AppBox open={open} setIsX={setIsX} isX={isX} />
            <AppBox open={open} isMiddle setIsX={setIsX} isX={isX} />
            <AppBox open={open} setIsX={setIsX} isX={isX} />
          </div>
          <div className="line">
            <AppBox open={open} setIsX={setIsX} isX={isX} />
            <AppBox open={open} isMiddle setIsX={setIsX} isX={isX} />
            <AppBox open={open} setIsX={setIsX} isX={isX} />
          </div>
        </header>
      </div>

      <Modal open={open} onClose={close}>
        <Box sx={style}>
          <div className="modal-modal-description" sx={{ mt: 2 }}>
            O JOGO ENCERROU!
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default App;
