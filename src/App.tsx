// src/App.tsx

import { useState } from "react";

import DiceDiv from "./components/DiceDiv.tsx";
import RollButton from "./components/RollButton.tsx";

function App() {
  const [dice, setDice] = useState(20);
  const [value, setValue] = useState(1);
  const diceChoices: { label: string; faces: number }[] = [
    { label: "D4", faces: 4 },
    { label: "D6", faces: 6 },
    { label: "D8", faces: 8 },
    { label: "D10", faces: 10 },
    { label: "D12", faces: 12 },
    { label: "D20", faces: 20 },
  ];

  /**
   * Reset style for unselected buttons.
   * @return {void}
   */
  function resetButton(): void {
    const selectionButtons = document.querySelectorAll(".selectionButton");
    console.log(selectionButtons)
    for (const selectionButton of selectionButtons) {
      selectionButton.classList.remove("selected");
    }
  }

  /**
   * Set the current dice to a new one depending on the dice choice button.
   * @return {void}
   */
  function setCurrentDice(event: React.MouseEvent<HTMLButtonElement>): void {
    resetButton();
    event.currentTarget.classList.add("selected");
    setDice(Number(event.currentTarget.value));
  }

  /**
   * Set the value of the dice after a roll.
   * @return {void}
   */
  function setCurrentValue(): void {
    setValue(roll(1, dice));
  }

  /**
   * Rolls the dice and change the value display.
   * @param {number} min - Possible minimum value of the dice (default: 1).
   * @param {number} max - Possible maximum value of the dice.
   * @return {number} Random integer between min and max included.
   */
  function roll(min: number = 1, max: number): number {
    return Math.floor(Math.random() * max) + min;
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
                  className="selectionButton"
                  onClick={(event) => setCurrentDice(event)}
                  value={dice.faces}
                >
                  {dice.label}
                </button>
              </li>
            ))}
          </ul>
        </section>
        <DiceDiv dice={value} />
        <RollButton label="Roll" onClick={() => setCurrentValue()} />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
