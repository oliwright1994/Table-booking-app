import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const Restaurant = ({ classes, restaurant, reviews, table }) => {
  const { name, imageurl, bio, cuisines } = restaurant;
  return (
    <div>
      <img src={imageurl} className={classes.image} />
      <h1>{name}</h1>
      <p>{bio}</p>
      <div>
        <p>Cuisines:</p>
        <ul>{cuisines ? cuisines.map(cuisine => <li>{cuisine}</li>) : null}</ul>
      </div>
      {/* Uncomment this section when review card is finished and imported */}
      {/* <div>
        {reviews ? (
          reviews.map(review => <ReviewCard review={review} />)
        ) : (
          <p>No reviews yet</p>
        )}
      </div> */}

      {/* Uncomment line below when booking card component is finished and imported */}
      {/* <div>
        {table ? (
          <BookingCard booking={table} />
        ) : (
          <p>No table available right now.</p>
        )}
      </div> */}
    </div>
  );
};

export default withStyles(styles)(Restaurant);
