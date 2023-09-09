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
      <div className="restaurant-details-card-image-container">
        <img
          src={image}
          alt="restaurant"
          className="restaurant-details-card-image"
        />
      </div>
      <div className="restaurant-details-card-title-container">
        <Text text={title} variant="h4" />
        <div className="restaurant-details-card-rating">
          <Text text={rating} variant="bold-p" />
          <p>&#9734;</p>
        </div>
      </div>
      <div className="restaurant-details-card-description-container">
        <div className="restaurant-details-card-description">
          <Text text={description} />
        </div>

        <Text text={price} />
      </div>
      <div className="restaurant-details-card-price">
        <Text text={time} variant="p2" />
      </div>
    </div>
  );
}

export default RestaurantDetailsCard;
