import { useState } from "react";
import "./App.css";
import fruitCards from "./fruitCards";

function App() {
  const [cards, setCards] = useState([{ fruitCards }]);
  const [count, setCount] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);

  const shuffleCards = (fruit) => {
    fruitCards.sort(() => Math.random() - 0.5);
    setCards(shuffleCards);
    setCount(0);
  }; // shuffleCards

  console.log(cards, count);

  return (
    <div className="App">
      <div className="score-board">
        <div className="score">
          <p>failed Attempts : </p>
          <p>Score : </p>
          <button className="restart-button" onClic={shuffleCards}>
            Restart
          </button>
        </div>
      </div>
      <div className="game-board">
        <p className="title">
          <strong> Fruit Memory Game </strong>
        </p>
      </div>
      <div class="container">
        <div class="row">
          <button id="0" className="card" onclick="clickButton(0)">
            <img src={cards[fruitCards.image1]}></img>
          </button>
          <button id="1" className="card" onclick="clickButton(1)"></button>
          <button id="2" className="card" onclick="clickButton(2)"></button>
          <button id="3" className="card" onclick="clickButton(3)"></button>
        </div>
        <div class="row">
          <button id="4" className="card" onclick="clickButton(4)"></button>
          <button id="5" className="card" onclick="clickButton(5)"></button>
          <button id="6" className="card" onclick="clickButton(6)"></button>
          <button id="7" className="card" onclick="clickButton(7)"></button>
        </div>
        <div class="row">
          <button id="8" className="card" onclick="clickButton(8)"></button>
          <button id="9" className="card" onclick="clickButton(9)"></button>
          <button id="10" className="card" onclick="clickButton(10)"></button>
          <button id="11" className="card" onclick="clickButton(11)"></button>
        </div>
        <div class="row">
          <button id="13" className="card" onclick="clickButton(13)"></button>
          <button id="14" className="card" onclick="clickButton(14)"></button>
          <button id="15" className="card" onclick="clickButton(15)"></button>
          <button id="16" className="card" onclick="clickButton(16)"></button>
        </div>
      </div>
      //{" "}
    </div>
  );
}

export default App;
