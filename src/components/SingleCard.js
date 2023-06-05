import React from "react";
export const SingleCard = ({ card, handelChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handelChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.image2} alt="card front" />
        <img
          className="back"
          src={card.image1}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};
export default SingleCard;
