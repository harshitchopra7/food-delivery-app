import React from "react";
import "./Type.css";

function Type({ image, text }) {
  return (
    <div className="filter-type-container">
      <div className="filter-type-image-container">
        <img className="filter-type-image" src={image} alt="filter" />
      </div>

      <p className="filter-type-text">{text}</p>
    </div>
  );
}

export default Type;
