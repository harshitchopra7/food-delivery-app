import React from "react";
import "./Inspiration.css";

import { inspirationData } from "./constants";
import Text from "../../common/Text/Text";
import CircularCard from "../../common/CircularCard/CircularCard";

import { useNavigate, useLocation } from "react-router-dom";

function Inspiration() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathName = location.pathname;
  const cityName = pathName.split("/")[1];

  const goToRestaurants = () => {
    // which should redirect to "/restaurants"
    navigate(`/${cityName}/restaurants`);
  };

  return (
    <div className="inspiration-container">
      <Text text="Inspiration for your first order" variant="h1" />

      <div className="inspiration-cards-container">
        {inspirationData.map((value) => (
          <CircularCard
            image={value.image}
            text={value.text}
            textVariant="h3"
            handleClick={goToRestaurants}
          />
        ))}
      </div>
    </div>
  );
}

export default Inspiration;
