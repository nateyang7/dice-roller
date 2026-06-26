// src/App.tsx

import DiceChoices from "./components/DiceChoices/DiceChoices.tsx";
import DiceDiv from "./components/DiceDiv/DiceDiv.tsx";
import { Dice } from "./components/DiceDiv/DiceData.ts";
import RollButton from "./components/RollButton.tsx";

function App() {
  const dices: Dice[] = [
    new Dice(4),
    new Dice(6),
    new Dice(8),
    new Dice(10),
    new Dice(12),
    new Dice(20),
  ];
  let currentDice = dices[0];

  return (
    <>
      <header>
        <h1>Dice Roller</h1>
      </header>

      <main>
        <DiceChoices dices={dices} />
        <DiceDiv dice={currentDice} />
        <RollButton label="Roll" onClick={() => currentDice.roll} />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
