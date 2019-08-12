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
import GoogleMap from "../../Component/GoogleMap";
import Geocode from "react-geocode";

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

  showReviewForm = (reviews, user, restaurant) => {
    if (reviews && reviews.find(review => review.author === user._id)) {
      return (
        <Typography component="p">Thanks for leaving a review!</Typography>
      );
    } else if (user && restaurant && restaurant.owner === user._id) {
      return null;
    } else {
      return <ReviewForm restaurantId={restaurant._id} user={user} />;
    }
  };

  displayMap = () => {
    Geocode.setApiKey("AIzaSyCTarxeCZCyhhU-T_S8BlG4sTyMyE_RaVo");
    Geocode.fromAddress({ address }).then(response => {
      const { lat, lng } = response.results[0].geometry.location;
      return <GoogleMap lat={lat} lng={lng} />;
    });
  };
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
        <div className={classes.resWrapper}>
          <div className={classes.wrapperLeft}>
            {cuisines.length > 0 ? (
              <div className={classes.cuisine}>
                <Typography className={classes.cuisineList}>
                  Cuisines:{" "}
                </Typography>
                <List dense>
                  {cuisines.map(cuisine => (
                    <ListItem
                      className={classes.cuisineListItem}
                      key={cuisine._id}
                      component="li"
                    >
                      <ListItemText primary={`•  ${cuisine}`} />
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : null}

            <Typography className={classes.reviewHead} component="h2">
              Reviews
            </Typography>
            <div className={classes.reviews}>
              {reviews.length !== 0 ? (
                reviews.map(review => (
                  <ReviewCard review={review} key={review._id} />
                ))
              ) : (
                <p>No reviews yet, be the first!</p>
              )}
            </div>
          </div>

          <div className={classes.wrapperRight}>
            <div>
              <Typography className={classes.bookingHead} component="h2">
                Current Booking:
              </Typography>
              {table && table.placesAvailable > 0 ? (
                <BookingCard restaurant={restaurant} table={table} />
              ) : (
                <p>No table available right now.</p>
              )}
            </div>
            <div className={classes.resInfo}>
              <Typography component="p" className={classes.rightTitle}>
                Address:
                <Typography component="span" className={classes.address}>
                  {address}
                </Typography>
              </Typography>
              <Typography component="p" className={classes.rightTitle}>
                Website:
                <Link className={classes.website} href={website}>
                  {website}
                </Link>
              </Typography>
              <Typography component="p" className={classes.rightTitle}>
                Phone:
                <Typography component="span" className={classes.phone}>
                  {phone}
                </Typography>
              </Typography>
            </div>

            <div className={classes.reviewForm}>
              {showReviewForm(reviews, user, restaurant)}
              <GoogleMap address={address} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Restaurant);
