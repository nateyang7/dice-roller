// src/components/DiceChoices/DiceChoices.tsx

import { Dice } from "../DiceDiv/DiceData.ts";

type DiceChoicesProps = {
  dices: Dice[];
};

export default function DiceChoices({ dices }: DiceChoicesProps) {
  return (
    <section id="dice-choices">
      <h2>Choose a dice</h2>
      <ul>
        {dices.map((dice) => (
          <li key={dice.id}>
            <button>{dice.label}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
