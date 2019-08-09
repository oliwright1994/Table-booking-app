import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import BookingCard from "../../Component/BookingCard";
import ReviewCard from "../../Component/ReviewCard";
import ReviewForm from "../../Component/ReviewForm";

const Restaurant = ({ classes, restaurant, reviews, table, user }) => {
  const {
    name,
    imageurl,
    bio,
    cuisine1,
    cuisine2,
    cuisine3,
    website,
    address,
    phone
  } = restaurant;
  const cuisines = [cuisine1, cuisine2, cuisine3].filter(e => !!e);
  return (
    <div className={classes.root}>
      <img
        src={
          imageurl !== undefined
            ? imageurl
            : "http://via.placeholder.com/350x250?text=No picture yet!"
        }
        className={classes.image}
      />
      <div className={classes.restaurantContent}>
        <Typography component="h1" className={classes.restaurantName}>
          {name}
        </Typography>
        <Typography component="p">{bio}</Typography>
        <div className={classes.doubleColumn}>
          <div className={classes.singleColumn}>
            {cuisines.length > 0 ? (
              <div className={classes.cuisineList}>
                <Typography>Cuisines: </Typography>
                <List dense>
                  {cuisines.map(cuisine => (
                    <ListItem
                      className={classes.cuisineListItem}
                      key={cuisine._id}
                    >
                      <ListItemText primary={`•  ${cuisine}`} />
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : null}

            <div className={classes.singleColumn}>
              <Typography className={classes.bookingHeadline} component="h2">
                Reviews
              </Typography>
              {reviews.length !== 0 ? (
                reviews.map(review => (
                  <ReviewCard review={review} key={review._id} />
                ))
              ) : (
                <p>No reviews yet, be the first!</p>
              )}
            </div>
          </div>

          <div className={classes.singleColumn}>
            <div>
              <Typography className={classes.bookingHeadline} component="h2">
                Current Booking:
              </Typography>
              {table && table.placesAvailable > 0 ? (
                <BookingCard restaurant={restaurant} table={table} />
              ) : (
                <p>No table available right now.</p>
              )}
            </div>
            <div>
              <Typography component="p">Address: {address}</Typography>
              <Typography component="p">
                Website:
                <Link className={classes.website} href={website}>
                  {website}
                </Link>
              </Typography>
              <Typography component="p">
                Phone:
                <Typography component="span" className={classes.phone}>
                  {phone}
                </Typography>
              </Typography>
            </div>
            {reviews.find(review => review.author === user) ? (
              <Typography component="p">
                Thanks for leaving a review!
              </Typography>
            ) : (
              <ReviewForm restaurantId={restaurant._id} userId={user} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Restaurant);
