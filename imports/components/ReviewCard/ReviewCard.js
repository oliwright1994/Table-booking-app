import React from "react";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";

const ReviewCard = ({ review }) => {
  const { text, date, rating, impression } = review;
  return (
    <Card>
      <p>{impression ? impression : "No overall impression yet"}</p>
      <Rating value={rating} readOnly />
      <p>"{text ? text : "No review given"}"</p>
      <p>{date.toLocaleDateString("en-US")}</p>
    </Card>
  );
};

export default ReviewCard;
