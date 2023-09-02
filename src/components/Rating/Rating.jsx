import PropTypes from "prop-types";
import { RatingCounter, RatingStars } from "./Rating.styled";
import { useEffect, useState } from "react";

export const Rating = ({
  index: { id },
  onRatingChange,
  selectedRating,
  rating,
}) => {
  const [selectRating, setSelectRating] = useState(selectedRating);

  useEffect(() => {
    if (selectedRating != "0") {
      setSelectRating(selectedRating);
      return;
    }
    if (rating != "0") {
      setSelectRating(String(Math.floor(Number(rating) / 2)));
      return;
    }
    if (rating === "0") {
      setSelectRating("0");
    }
  }, [rating, selectedRating]);

  return (
    <RatingStars className="rating-stars">
      <input
        type="radio"
        name={`rating${id}`}
        id="rs0"
        value="0"
        checked={selectRating === "0"}
        onChange={onRatingChange}
      />
      <label htmlFor="rs0"></label>
      <input
        type="radio"
        name={`rating${id}`}
        id={`rs1${id}`}
        value="1"
        checked={selectRating === "1"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs1${id}`}></label>
      <input
        type="radio"
        name={`rating${id}`}
        id={`rs2${id}`}
        value="2"
        checked={selectRating === "2"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs2${id}`}></label>
      <input
        type="radio"
        name={`rating${id}`}
        id={`rs3${id}`}
        value="3"
        checked={selectRating === "3"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs3${id}`}></label>
      <input
        type="radio"
        name={`rating${id}`}
        id={`rs4${id}`}
        value="4"
        checked={selectRating === "4"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs4${id}`}></label>
      <input
        type="radio"
        name={`rating${id}`}
        id={`rs5${id}`}
        value="5"
        checked={selectRating === "5"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs5${id}`}></label>
      <RatingCounter className="rating-counter"></RatingCounter>
    </RatingStars>
  );
};

Rating.propTypes = {
  index: PropTypes.object,
  id: PropTypes.string,
  rating: PropTypes.string,
  selectedRating: PropTypes.string,
  onRatingChange: PropTypes.func,
};
