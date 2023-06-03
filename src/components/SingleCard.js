import React from "react";
export const SingleCard = (card, handelChoice) => {
  const handleClick = () => {
    handelChoice(card);
  };
  return (
    <div className="card">
      <div>
        <img className="back" src={card.image1} alt="card back" />
        <img
          className="front"
          src={card.image2}
          onClick={handleClick}
          alt="card fornt"
        />
      </div>
    </div>
  );
};
export default SingleCard;
