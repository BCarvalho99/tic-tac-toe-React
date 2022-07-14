import "./App.css";
import Box from "./components/box/box";
import { useState } from "react";

function App() {
  const [isX, setIsX] = useState(true);

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
