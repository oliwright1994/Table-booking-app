import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import BookingCard from "../../Component/BookingCard"

const Bookings = ({ classes, restaurants, tables }) => {
  console.log(restaurants);
  console.log("tables: ", tables);
  console.log("hi");
  return (
    <div>
      <p>This is the Bookings page.</p>
      {tables.map(table => {
        const restaurant = restaurants.find(
          restaurant => restaurant.id === table.restaurantId
        );
        return (
          <BookingCard key={table._id} restaurant={restaurant} table={table} />

        );

      })}
    </div>
  );

};

export default withStyles(styles)(Bookings);
