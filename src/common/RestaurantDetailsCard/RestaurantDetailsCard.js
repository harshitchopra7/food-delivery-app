import React from "react";
import "./RestaurantDetailsCard.css";
import Text from "../Text/Text";

function RestaurantDetailsCard({
  image,
  coupon,
  title,
  rating,
  description,
  price,
  time,
  showMaxSafety,
}) {
  return (
    <div className="restaurant-details-card-container">
      <div>
        <img
          src="https://b.zmtcdn.com/data/pictures/0/20248800/3a5eb4d04fa6fe9df5b08b5fb2be8974_o2_featured_v2.jpg?output-format=webp"
          alt="restaurant"
          className="restaurant-details-card-image"
        />
      </div>
      <div className="restaurant-details-card-title-container">
        <Text text="The Cake Company" variant="h4" />
        <div className="restaurant-details-card-rating">
          <Text text="4" variant="bold-p" />
          <p>&#9734;</p>
        </div>
      </div>
      <div className="restaurant-details-card-description-container">
        <div className="restaurant-details-card-description">
          <Text text="Bakery, Sandwich, Street Food, Fast Food, Rolls, Chinese, Beverages, North Indian" />
        </div>

        <Text text="₹50 for one" />
      </div>
      <div className="restaurant-details-card-price">
        <Text text="34 min" variant="p2" />
      </div>
    </div>
  );
}

export default RestaurantDetailsCard;
