import "./Stars.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as starFull,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FontAwesomeIcon icon={starFull} />
        ) : stars >= number ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={faStar} />
        )}
      </span>
    );
  });

  return (
    <div className="star">
      <div className="container">{tempStars}</div>
      <p className="reviews">({reviews} customers reviews)</p>
    </div>
  );
};

export default Stars;
