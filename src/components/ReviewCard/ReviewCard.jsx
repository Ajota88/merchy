import "./ReviewCard.scss";

import React from "react";

const ReviewCard = ({ name, image, desc }) => {
  return (
    <div className="review-card">
      <div className="container">
        <div className="avatar">
          <img src={image} />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
