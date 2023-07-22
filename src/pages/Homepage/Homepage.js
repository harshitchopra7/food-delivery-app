import React from "react";
import FilterTypes from "../../components/FilterTypes/FilterTypes";
import Inspiration from "../../components/Inspiration/Inspiration";
import TopBrands from "../../components/TopBrands/TopBrands";
import RestaurantDetails from "../../components/RestaurantDetails/RestaurantDetails";

function Homepage() {
  return (
    <div>
      <FilterTypes />
      <Inspiration />
      <TopBrands />
      <RestaurantDetails />
    </div>
  );
}
export default Homepage;
