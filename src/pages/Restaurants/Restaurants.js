import React from "react";
import "./Restaurants.css";
import FilterTypes from "../../components/FilterTypes/FilterTypes";
import RestaurantDetails from "../../components/RestaurantDetails/RestaurantDetails";

import { useLocation } from "react-router-dom";

function Restaurants() {
  const location = useLocation();

  const pathName = location.pathname;
  const cityName = pathName.split("/")[1].toUpperCase();

  return (
    <div>
      <FilterTypes />
      <RestaurantDetails title={`${cityName} Restaurants`} />
    </div>
  );
}

export default Restaurants;
