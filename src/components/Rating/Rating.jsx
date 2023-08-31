import PropTypes from "prop-types";
import { RatingCounter, RatingStars } from "./Rating.styled";

export const Rating = ({ value, onRatingChange, selectedRating }) => {
  return (
    <RatingStars className="rating-stars">
      <input
        type="radio"
        name={`rating${value}`}
        id="rs0"
        value="0"
        checked={selectedRating === "0"}
        onChange={onRatingChange}
      />
      <label htmlFor="rs0"></label>
      <input
        type="radio"
        name={`rating${value}`}
        id={`rs1${value}`}
        value="1"
        checked={selectedRating === "1"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs1${value}`}></label>
      <input
        type="radio"
        name={`rating${value}`}
        id={`rs2${value}`}
        value="2"
        checked={selectedRating === "2"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs2${value}`}></label>
      <input
        type="radio"
        name={`rating${value}`}
        id={`rs3${value}`}
        value="3"
        checked={selectedRating === "3"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs3${value}`}></label>
      <input
        type="radio"
        name={`rating${value}`}
        id={`rs4${value}`}
        value="4"
        checked={selectedRating === "4"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs4${value}`}></label>
      <input
        type="radio"
        name={`rating${value}`}
        id={`rs5${value}`}
        value="5"
        checked={selectedRating === "5"}
        onChange={onRatingChange}
      />
      <label htmlFor={`rs5${value}`}></label>
      <RatingCounter className="rating-counter"></RatingCounter>
    </RatingStars>
  );
};

Rating.propTypes = {
  value: PropTypes.string.isRequired,
  selectedRating: PropTypes.string.isRequired,
  onRatingChange: PropTypes.func,
};
