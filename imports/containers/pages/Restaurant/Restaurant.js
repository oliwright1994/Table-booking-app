import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";

const Restaurant = ({ classes, restaurant, reviews, table }) => {
  const { name, imageurl, bio, cuisines, website, address, phone } = restaurant;
  return (
    <div className={classes.root}>
      <img src={imageurl} className={classes.image} />
      <div className={classes.restaurantContent}>
        <Typography component="h1" className={classes.restaurantName}>
          {name}
        </Typography>
        <Typography component="p">{bio}</Typography>
        <div className={classes.doubleColumn}>
          <div className={classes.singleColumn}>
            {cuisines ? (
              <div className={classes.cuisineList}>
                <Typography>Cuisines: </Typography>
                <List dense>
                  {cuisines.map(cuisine => (
                    <ListItem className={classes.cuisineListItem}>
                      <ListItemText primary={`•  ${cuisine}`} />
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : null}

            <div className={classes.singleColumn}>
              {/* Uncomment this section when review card is finished and imported */}
              {/* {reviews ? (
          reviews.map(review => <ReviewCard review={review} />)
        ) : (
          <p>No reviews yet</p>
        )} */}
            </div>
          </div>

          {/* Uncomment line below when booking card component is finished and imported */}
          <div className={classes.singleColumn}>
            <div>
              <Typography className={classes.bookingHeadline} component="h2">
                Current Booking:
              </Typography>
              {/* {table ? (
          <BookingCard restaurant={restaurant} table={table} />
        ) : (
          <p>No table available right now.</p>
        )} */}
            </div>
            <div>
              <Typography component="p">Address: {address}</Typography>
              <Typography component="p">
                Website:{" "}
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
            {/* put review form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Restaurant);
