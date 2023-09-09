import React from "react";
import "./RestaurantDetails.css";
import Text from "../../common/Text/Text";
import RestaurantDetailsCard from "../../common/RestaurantDetailsCard/RestaurantDetailsCard";

function RestaurantDetails({ title, restaurants }) {
  return (
    <div className="restaurant-details-container">
      <Text text={title} variant="h1" />

      <div className="restaurant-details-cards-container">
        {restaurants.map((restaurant, index) => (
          <RestaurantDetailsCard
            image={restaurant.info.image.url}
            coupon=""
            title={restaurant.info.name}
            rating={restaurant.info.rating.rating_text}
            // description={}
            price={restaurant.info.cft.text}
            time={restaurant.order.deliveryTime}
            showMaxSafety=""
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantDetails;
