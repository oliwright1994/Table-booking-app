import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import BookingCard from "../../Component/BookingCard";
import PropTypes from 'prop-types';

const Bookings = ({ classes, restaurants, tables }) => {
  return (
    <div className={classes.root}>
      {tables.map(table => {
        const now = new Date();
        const newDate = new Date(table.expireTime);

        const expired = !!(now > newDate);
        if (table.expireTime && !expired) {
          const restaurant = restaurants.find(
            restaurant => restaurant._id === table.restaurantId
          );
          return (
            restaurant && (
              <BookingCard
                key={table._id}
                restaurant={restaurant}
                table={table}
                expired={expired}
              />
            )
          );
        }
      })}
    </div>
  );
};

Bookings.propTypes = {
  classes: PropTypes.object.isRequired,
  restaurants: PropTypes.array.isRequired,
  table: PropTypes.array,
}

export default withStyles(styles)(Bookings);
