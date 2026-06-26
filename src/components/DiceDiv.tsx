// src/components/DiceDiv/DiceDiv.tsx

type DiceProps = {
  dice: number;
};

export default function DiceDiv({ dice }: DiceProps) {
  return (
    <div id="dice-div">
      <h2>Current dice value</h2>
      <p id="dice-face">{dice}</p>
    </div>
  );
}
