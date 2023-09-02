import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  CardBottomContainer,
  CardDescriptionWrapper,
  ShopCardCategory,
  ShopCardImg,
  ShopCardPrice,
  ShopCardTitle,
  ShopItem,
  StarsContainer,
} from "./Shop.styled";

export const ShopCard = ({ index, name, img, price, rating }) => {
  const [countStars, setCountStars] = useState(null);

  useEffect(() => {
    if (Number(rating) <= 1) {
      setCountStars(0);
    } else if (rating > 1) {
      setCountStars(Math.floor(rating / 2));
    }
  }, [rating]);

  return (
    <ShopItem>
      <ShopCardCategory>plant</ShopCardCategory>
      <Link to={`/shop/${index}`}>
        <ShopCardImg src={img} />
      </Link>

      <CardDescriptionWrapper>
        <ShopCardTitle>{name}</ShopCardTitle>

        {countStars >= 0 && (
          <CardBottomContainer>
            <StarsContainer>
              {countStars > 0 ? <AiOutlineStar /> : <AiFillStar />}
              {countStars > 1 ? <AiOutlineStar /> : <AiFillStar />}
              {countStars > 2 ? <AiOutlineStar /> : <AiFillStar />}
              {countStars > 3 ? <AiOutlineStar /> : <AiFillStar />}
              {countStars > 4 ? <AiOutlineStar /> : <AiFillStar />}
            </StarsContainer>
            <ShopCardPrice>Price: {price}UAH</ShopCardPrice>
          </CardBottomContainer>
        )}
      </CardDescriptionWrapper>
    </ShopItem>
  );
};

export default ShopItem;

ShopCard.propTypes = {
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  onRatingChange: PropTypes.func,
};
