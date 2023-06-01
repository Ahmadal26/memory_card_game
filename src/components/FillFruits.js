import React from "react";
import fruits from "../fruits";

const FillFruits = () => {
  const shuffleCards = (fruit) => {
    fruits.reverse().forEach((item, index) => {
      const j = Math.floor(Math.random() * (index + 1));
      [fruit[index], fruit[j]] = [fruit[j], fruit[index]];
    });
    return fruit;
  };
  console.log({ shuffleCards });
  const buttons = document.querySelectorAll(".card");
  buttons.forEach((button, index) => {
    button.style.backgroundImage = `url(${shuffleCards[index]})`;
  });
  return (
    <>
      {buttons.map((button) => (
        <button
          key={button.id}
          className="my-button"
          style={{ backgroundImage: `url(${button.imagePath})` }}
        >
          Button {button.id}
        </button>
      ))}
    </>
  );
};

export default FillFruits;
