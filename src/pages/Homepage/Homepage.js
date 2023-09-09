import React from "react";
import FilterTypes from "../../components/FilterTypes/FilterTypes";
import Inspiration from "../../components/Inspiration/Inspiration";
import TopBrands from "../../components/TopBrands/TopBrands";
import RestaurantDetails from "../../components/RestaurantDetails/RestaurantDetails";
import { useLocation } from "react-router-dom";
import { restaurantListing } from "../../mocks/restaurant-listings";

function Homepage() {
  const location = useLocation();

  const pathName = location.pathname;
  const cityName = pathName.split("/")[1].toUpperCase();

  return (
    <div>
      <FilterTypes />
      <Inspiration />
      <TopBrands />
      <RestaurantDetails
        title={`Best Food in ${cityName}`}
        restaurants={restaurantListing.sections.SECTION_SEARCH_RESULT}
      />
    </div>
  );
}
export default Homepage;
