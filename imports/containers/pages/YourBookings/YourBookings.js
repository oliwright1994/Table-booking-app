import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import BookingCard from "../../Component/BookingCard";
import PropTypes from 'prop-types';
import CurrentIcon from "@material-ui/icons/timer";
import PastIcon from "@material-ui/icons/timeroff";

const YourBookings = ({ classes, restaurants, tables }) => {
  return (
    
    <div className={classes.container}>
      <div className={classes.current}>
        <p className={classes.title}>
          <CurrentIcon />
          &nbsp; Current Booking
        </p>
        {tables.length !== 0
          ? tables.map(table => {
              if (
                table.customers.find(
                  customer => customer.customerId == Meteor.userId()
                )
              ) {
                const now = new Date();
                const tableExpiryDate = new Date(table.expireTime);
                const expired = !!(now > tableExpiryDate);
                  if (
                    table.expireTime &&
                    now <= tableExpiryDate &&
                    restaurants.length !== 0
                  ) {
                    const restaurant = restaurants.find(
                      restaurant => restaurant._id === table.restaurantId
                    );
                    return (
                      <div className={classes.booking}>
                        <BookingCard
                          key={table._id}
                          restaurant={restaurant}
                          table={table}
                          expired={expired}
                        />
                      </div>
                    );
                  }
                }
              })
            : null}
        </div>
        <div className={classes.past}>
          <p className={classes.title}>
            <PastIcon />
            &nbsp; Past Booking
          </p>
          {tables.length !== 0
            ? tables.map(table => {
                if (
                  table.customers.find(
                    customer => customer.customerId == Meteor.userId()
                  )
                ) {
                  const now = new Date();
                  const tableExpiryDate = new Date(table.expireTime);
                  if (
                    table.expireTime &&
                    now > tableExpiryDate &&
                    restaurants.length !== 0
                  ) {
                    const restaurant = restaurants.find(
                      restaurant => restaurant._id === table.restaurantId
                    );
                    return (
                      <div className={classes.booking}>
                        <BookingCard
                          key={table._id}
                          restaurant={restaurant}
                          table={table}
                          expired={true}
                        />
                      </div>
                    );
                  }
                }
              })
            : null}
      </div>
    </div>
  );
}

YourBookings.propTypes = {
  classes: PropTypes.object.isRequired,
  restaurants: PropTypes.array.isRequired,
  tables: PropTypes.array.isRequired,
}

export default withStyles(styles)(YourBookings);
