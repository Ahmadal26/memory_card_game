import { useEffect, useState } from "react";
import "./App.css";
import fruitCards from "./fruitCards";
import SingleCard from "./components/SingleCard";

function App() {
  const [cards, setCards] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [firstcard, setFirstcard] = useState(null);
  const [secondcard, setSecondcard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const shuffleCards = () => {
    const shuffledCards = [...fruitCards, ...fruitCards]
      // shuffle cards (need help)
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setFirstcard(null);
    setSecondcard(null);
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
      setDisabled(true);
      if (firstcard.name === secondcard.name) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.name === firstcard.name) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstcard, secondcard]);
  console.log(cards);
  // reset choices and increase attempt
  const resetTurn = () => {
    setFirstcard(null);
    setSecondcard(null);
    setAttempt((prevAttempt) => prevAttempt + 1);
    setDisabled(false);
  };
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Memory Card Game </h1>
      <button onClick={shuffleCards}>Reset </button>
      <p> Attempt:{attempt}</p>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handelChoice={handelChoice}
            flipped={card === firstcard || card === secondcard || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
