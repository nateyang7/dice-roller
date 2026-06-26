// src/App.tsx

import DiceDiv from "./components/DiceDiv/DiceDiv.tsx";
import { Dice } from "./components/DiceDiv/DiceData.ts";
import RollButton from "./components/RollButton.tsx";

function App() {
  const diceChoices: { label: string; faces: number }[] = [
    { label: "D4", faces: 4 },
    { label: "D6", faces: 6 },
    { label: "D8", faces: 8 },
    { label: "D10", faces: 10 },
    { label: "D12", faces: 12 },
    { label: "D20", faces: 20 },
  ];
  let currentDice = new Dice(20);

  /**
   * Set the current dice to a new one depending on the dice choice button.
   * @return {void}
   */
  function setCurrentDice(event: React.MouseEvent<HTMLButtonElement>): void {
    console.log(`Change current dice to ${event.currentTarget.id}`);
    console.log("Before: ", currentDice);
    currentDice.faces = Number(event.currentTarget.value);
    console.log("After: ", currentDice);
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
        <DiceDiv dice={currentDice} />
        <RollButton label="Roll" onClick={() => currentDice.roll} />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
