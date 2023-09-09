import React from "react";
import "./CircularCard.css";
import Text from "../Text/Text";

function CircularCard({ image, text, time, textVariant, handleClick }) {
  return (
    <div className="circular-card-container" onClick={handleClick}>
      <img className="circular-card-image" src={image} alt={text} />
      <div className="circular-card-text-container">
        <Text text={text} variant={textVariant} />
        {time && <Text text={time} />}
      </div>
    </div>
  );
}

export default CircularCard;
