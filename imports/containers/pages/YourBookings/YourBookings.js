import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import BookingCard from "../../Component/BookingCard"

const YourBookings = ({ classes, restaurants, tables }) => {
  return (
    <div>
      <p>This is the YourBookings page.</p>
      {tables.map(table => {
        if (table.customers.find(customer => (customer.customerId == Meteor.userId()))) {
          const restaurant = restaurants.find(
            restaurant => restaurant.id === table.restaurantId
          );
          return (
            <BookingCard key={table._id} restaurant={restaurant} table={table} />
          );
        }
      })
      }
    </div>
  );
};

export default withStyles(styles)(YourBookings);
