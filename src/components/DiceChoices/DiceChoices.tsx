// src/components/DiceChoices/DiceChoices.tsx

import { Dice } from "../DiceDiv/DiceData.ts";

type DiceChoicesProps = {
  dices: Dice[];
  callbackFunction: () => void;
};

export default function DiceChoices({
  dices,
  callbackFunction,
}: DiceChoicesProps) {
  return (
    <section id="dice-choices">
      <h2>Choose a dice</h2>
      <ul>
        {dices.map((dice) => (
          <li key={dice.id}>
            <button onClick={callbackFunction}>{dice.label}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
