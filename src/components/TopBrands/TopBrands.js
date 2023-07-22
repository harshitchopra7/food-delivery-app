import React from "react";
import "./TopBrands.css";
import Text from "../../common/Text/Text";
import { topBrandsData } from "./constants";
import CircularCard from "../../common/CircularCard/CircularCard";

function TopBrands() {
  return (
    <div className="top-brands-container">
      <Text text="Top brands for you" variant="h1" />

      <div className="top-brand-card-container">
        {topBrandsData.map((value, key) => (
          <CircularCard
            key={key}
            image={value.image}
            text={value.text}
            time={value.time}
            textVariant="bold-p"
          />
        ))}
      </div>
    </div>
  );
}

export default TopBrands;
