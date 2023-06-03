import { useEffect, useState } from "react";
import "./App.css";
import fruitCards from "./fruitCards";
import SingleCard from "./components/SingleCard";

function App() {
  const [cards, setCards] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [firstcard, setFirstcard] = useState(null);
  const [secondcard, setSecondcard] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...fruitCards, ...fruitCards]
      // shuffle cards (need help)
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setAttempt(0);
  };
  // handel a choice
  const handelChoice = (card) => {
    firstcard ? setSecondcard(card) : setFirstcard(card);
  };
  // compare two selected cards
  useEffect(() => {
    if (firstcard && secondcard) {
      if (firstcard.name === secondcard.name) {
        console.log("those card match");
        resetTurn();
      } else {
        console.log("those card don't match");
        resetTurn();
      }
    }
  }, [firstcard, secondcard]);
  // reset choices and increase attempt
  const resetTurn = () => {
    setFirstcard(null);
    setSecondcard(null);
    setAttempt((prevAttempt) => prevAttempt + 1);
  };

  return (
    <div className="App">
      <h1>Memory Card Game </h1>
      <button onClick={shuffleCards}>Reset </button>
      <div className="card-grid">
        {cards.map((card) => (
          // need help in using fruitCards.id
          // need help in using fruitCards.images
          <SingleCard key={card.id} card={card} handelChoice={handelChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
