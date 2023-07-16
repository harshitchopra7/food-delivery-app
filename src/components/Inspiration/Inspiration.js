import React from "react";
import "./Inspiration.css";
import InspirationCard from "./InspirationCard/InspirationCard.js";

import { inspirationData } from "./constants";

function Inspiration() {
  return (
    <div className="inspiration-container">
      <p className="inspiration-title">Inspiration for your first order</p>

      <div className="inspiration-cards-container">
        {inspirationData.map((value) => (
          <InspirationCard image={value.image} text={value.text} />
        ))}
      </div>
    </div>
  );
}

export default Inspiration;
