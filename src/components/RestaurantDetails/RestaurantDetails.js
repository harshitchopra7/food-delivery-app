import React from "react";
import "./RestaurantDetails.css";
import Text from "../../common/Text/Text";
import RestaurantDetailsCard from "../../common/RestaurantDetailsCard/RestaurantDetailsCard";

function RestaurantDetails() {
  return (
    <div className="restaurant-details-container">
      <Text text="Best Food in Jabalpur" variant="h1" />

      <div className="restaurant-details-cards-container">
        <RestaurantDetailsCard />
        <RestaurantDetailsCard />
        <RestaurantDetailsCard />
      </div>
    </div>
  );
}

export default RestaurantDetails;
