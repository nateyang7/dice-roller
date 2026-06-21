// src/App.tsx

import "./App.css";
import { useState } from "react";

/**
 * Returns a random integer from an interval.
 *
 * @param min - Minimum included of the interval.
 * @param max - Maximum included of the interval.
 * @returns Random integer from the interval [min, max].
 */
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

function App() {
  const [face, setFace] = useState(1);
  const diceButtons = [
    { label: "d4", callbackFunction: getRandomInt(1, 4) },
    { label: "d6", callbackFunction: getRandomInt(1, 6) },
    { label: "d8", callbackFunction: getRandomInt(1, 8) },
    { label: "d10", callbackFunction: getRandomInt(1, 10) },
    { label: "d12", callbackFunction: getRandomInt(1, 12) },
    { label: "d20", callbackFunction: getRandomInt(1, 20) },
  ];

  const rollDice = () => {
    setFace(getRandomInt(1, 20));
  };

  return (
    <>
      <div>
        <h1>Dice Roller</h1>
        <div id="dice20">Face: {face}</div>
        <div id="diceButtonsContainer">
          {diceButtons.map((diceButton) => (
            <button key={diceButton.label} onClick={rollDice}>
              {diceButton.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
