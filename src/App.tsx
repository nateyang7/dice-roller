// src/App.tsx

import { useState } from "react";

import DiceDiv from "./components/DiceDiv/DiceDiv.tsx";
import RollButton from "./components/RollButton.tsx";

function App() {
  const [dice, setDice] = useState(20);
  const diceChoices: { label: string; faces: number }[] = [
    { label: "D4", faces: 4 },
    { label: "D6", faces: 6 },
    { label: "D8", faces: 8 },
    { label: "D10", faces: 10 },
    { label: "D12", faces: 12 },
    { label: "D20", faces: 20 },
  ];

  /**
   * Set the current dice to a new one depending on the dice choice button.
   * @return {void}
   */
  function setCurrentDice(event: React.MouseEvent<HTMLButtonElement>): void {
    console.log(event);
    setDice(Number(event.currentTarget.value));
  }

  return (
    <>
      <header>
        <h1>Dice Roller</h1>
      </header>

      <main>
        <section id="dice-choices">
          <h2>Choose a dice</h2>
          <ul>
            {diceChoices.map((dice) => (
              <li key={dice.label}>
                <button
                  id={dice.label}
                  onClick={(event) => setCurrentDice(event)}
                  value={dice.faces}
                >
                  {dice.label}
                </button>
              </li>
            ))}
          </ul>
        </section>
        <DiceDiv dice={dice} />
        <RollButton label="Roll" onClick={() => console.log("roll")} />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
