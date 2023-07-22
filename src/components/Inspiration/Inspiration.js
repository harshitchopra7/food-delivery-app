import React from "react";
import "./Inspiration.css";

import { inspirationData } from "./constants";
import Text from "../../common/Text/Text";
import CircularCard from "../../common/CircularCard/CircularCard";

function Inspiration() {
  return (
    <div className="inspiration-container">
      <Text text="Inspiration for your first order" variant="h1" />

      <div className="inspiration-cards-container">
        {inspirationData.map((value) => (
          <CircularCard
            image={value.image}
            text={value.text}
            textVariant="h3"
          />
        ))}
      </div>
    </div>
  );
}

export default Inspiration;
