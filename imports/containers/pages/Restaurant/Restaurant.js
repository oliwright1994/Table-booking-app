import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const Restaurant = ({ classes, restaurant, reviews, table }) => {
  const { name, imageurl, bio, cuisines, website, adress, phone } = restaurant;
  return (
    <div>
      <img src={imageurl} className={classes.image} />
      <h1 className={classes.restaurantName}>{name}</h1>
      <p>{bio}</p>

      {cuisines ? (
        <div>
          <p>Cuisines:</p>
          <ul>
            {cuisines.map(cuisine => (
              <li>{cuisine}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Uncomment this section when review card is finished and imported */}
      {/* <div>
        {reviews ? (
          reviews.map(review => <ReviewCard review={review} />)
        ) : (
          <p>No reviews yet</p>
        )}
      </div> */}

      <div>
        <p>Adress:{adress}</p>
        <p>
          Website:<a href={website}>{website}</a>
        </p>
        <p>Phone:{phone}</p>
      </div>

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
