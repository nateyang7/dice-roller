// src/App.tsx

import DiceDiv from "./components/DiceDiv/DiceDiv.tsx";
import { Dice } from "./components/DiceDiv/DiceData.ts";
import RollButton from "./components/RollButton.tsx";

function App() {
  const dice: Dice = new Dice(6);

  return (
    <>
      <header>
        <h1>Dice Roller</h1>
      </header>

      <main>
        <section id="dice-choice">
          <h2>Choose a dice to roll</h2>
          <ul>
            <li>D4</li>
            <li>D6</li>
            <li>D8</li>
            <li>D10</li>
            <li>D12</li>
            <li>D20</li>
          </ul>
        </section>

        <DiceDiv dice={dice} />
        <RollButton label="Roll" onClick={() => dice.roll} />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
