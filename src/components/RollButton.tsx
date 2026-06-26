// src/components/RollButton.tsx

/** Type representing the roll button properties. */
type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function RollButton({ label, onClick }: ButtonProps) {
  return (
    <button id="roll-button" onClick={onClick}>
      {label}
    </button>
  );
}
