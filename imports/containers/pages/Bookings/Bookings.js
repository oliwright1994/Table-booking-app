import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import BookingCard from "../../Component/BookingCard"

const Bookings = ({ classes, restaurants, tables }) => {
  return (
    <div>
      <p>This is the Bookings page.</p>
      {tables.map(table => {
        const now = new Date();
        const newDate = new Date(table.expireTime);
        if (table.expireTime && now < newDate) {
          const restaurant = restaurants.find(
            restaurant => restaurant._id === table.restaurantId
          );
          return (
            <BookingCard key={table._id} restaurant={restaurant} table={table} />
          );
        }


      })}
    </div>
  );

};

export default withStyles(styles)(Bookings);
