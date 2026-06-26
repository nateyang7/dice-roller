import { Dice } from "./DiceData.ts";

type DiceProps = {
  dice: Dice;
};

export default function DiceDiv({ dice }: DiceProps) {
  return (
    <div id="dice-div">
      <h2>Current dice value</h2>
      <p id="dice-face">{dice.face}</p>
    </div>
  );
}
