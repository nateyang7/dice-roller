// src/App.tsx

import "./App.css";
import { useState } from "react";

function App() {
  const [face, setFace] = useState(1);

  const rollDice = () => {
    setFace(Math.floor(Math.random() * 20) + 1);
  };

  return (
    <>
      <div>
        <h1>Dice Roller</h1>
        <div id="dice20">Face: {face}</div>
        <button onClick={rollDice}>Roll</button>
      </div>
    </>
  );
}

export default App;
