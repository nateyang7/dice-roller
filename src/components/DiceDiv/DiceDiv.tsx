import { Dice } from "./DiceData.ts";

export default function DiceDiv() {
  const dice: Dice = new Dice(6);

  return (
    <div id="dice-div">
      <p id="dice-face">{dice.face}</p>
    </div>
  );
}
