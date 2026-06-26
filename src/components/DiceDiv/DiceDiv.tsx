import { Dice } from "./DiceData.ts";

type DiceProps = {
  dice: Dice;
};

export default function DiceDiv({ dice }: DiceProps) {
  return (
    <div id="dice-div">
      <p id="dice-face">{dice.face}</p>
    </div>
  );
}
