import { useState } from "react";
import "./App.css";
import fruitCards from "./fruitCards";
import GameBoard from "./components/GameBoard";
import _ from "lodash";
function App() {
  const [card, setCard] = useState();
  const [count, setCount] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([{ fruitCards }]);
  const shuffleCards = _.shuffle(cards);

  function shuffle() {
    setCards(shuffleCards);
    setCount(0);
  }

  console.log(cards, count);

  return (
    <div className="App">
      <div className="score-board">
        <div className="score">
          <p>failed Attempts : </p>
          <p>Score : </p>
          <button className="restart-button" onClick={shuffle}>
            Restart
          </button>
        </div>
      </div>
      <div className="game-board">
        <p className="title">
          <strong> Fruit Memory Game </strong>
        </p>
      </div>
      <GameBoard board={cards} />
    </div>
  );
}

export default App;
