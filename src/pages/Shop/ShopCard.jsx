import { useState } from "react";
import PropTypes from "prop-types";
import { Rating } from "../../components/Rating/Rating";

import {
  CardDescriptionWrapper,
  ShopCardCategory,
  ShopCardImg,
  ShopCardPrice,
  ShopCardTitle,
  ShopItem,
} from "./Shop.styled";

export const ShopCard = ({ index, name, img, price, onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState("0");

  const handleRatingChange = (event) => {
    const newValue =
      event.target.value === selectedRating ? null : event.target.value;
    setSelectedRating(newValue);
    onRatingChange(index, event.target);
  };

  return (
    <ShopItem>
      <ShopCardCategory>plant</ShopCardCategory>
      <ShopCardImg src={img} />
      <CardDescriptionWrapper>
        <ShopCardTitle>{name}</ShopCardTitle>
        <ShopCardPrice>Price: {price}UAH</ShopCardPrice>
        <Rating
          value={index}
          selectedRating={selectedRating}
          onRatingChange={handleRatingChange}
        />
      </CardDescriptionWrapper>
    </ShopItem>
  );
};

export default ShopItem;

ShopCard.propTypes = {
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func,
};
