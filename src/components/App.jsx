import "../styles/App.css";
import { useState } from "react";
import Header from "./Header.jsx";
import Die from "./Die.jsx";
import Btn from "./Btn.jsx";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    const diceArr = [];

    for (let i = 0; i < 10; i++) {
      diceArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: i,
      });
    }
    return diceArr;
  }

  function handleDice() {
    if (gameWon) {
      setDice(generateAllNewDice());
    } else {
      setDice((prev) =>
        prev.map((dice) =>
          dice.isHeld
            ? dice
            : {
                ...dice,
                value: Math.ceil(Math.random() * 6),
              }
        )
      );
    }
  }

  function handle(id) {
    setDice(
      dice.map((dice) => {
        if (id === dice.id) {
          return {
            ...dice,
            isHeld: !dice.isHeld,
          };
        } else {
          return dice;
        }
      })
    );
  }

  const newDiceArr = dice.map((dice) => (
    <Die
      handleClick={() => handle(dice.id)}
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
    />
  ));

  return (
    <div className="container">
      {gameWon && <Confetti className="confetti" />}

      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations, You won!. Press New Game to start again.</p>
        )}
      </div>

      <div className="tenzies-box">
        <Header />

        <div className="boxes">{newDiceArr}</div>

        <Btn handleClick={handleDice} btnText={gameWon ? "New game" : "Roll"} />
      </div>
    </div>
  );
}

export default App;
