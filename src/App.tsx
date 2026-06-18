// src/App.tsx

import "./App.css";

function App() {
  const rollDice = (): void => {
    console.log("Hello");
  };

  return (
    <>
      <div>
        <h1>Dice Roller</h1>
        <div id="dice20"></div>
        <button onClick={rollDice}>Roll</button>
      </div>
    </>
  );
}

export default App;
