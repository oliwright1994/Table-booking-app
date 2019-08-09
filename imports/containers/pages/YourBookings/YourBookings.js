import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import BookingCard from "../../Component/BookingCard"

const YourBookings = ({ classes, restaurants, tables }) => {
  return (
    <div>
      <p>This is the YourBookings page.</p>
      <p>Current Booking</p>
      {(tables.length !== 0) ?

        tables.map(table => {
          if (table.customers.find(customer => (customer.customerId == Meteor.userId()))) {
            const now = new Date();
            const newDate = new Date(table.expireTime);
            if (table.expireTime && now <= newDate && restaurants.length !== 0) {
              const restaurant = restaurants.find(
                restaurant => restaurant._id === table.restaurantId
              );
              return (
                <div>
                  <BookingCard key={table._id} restaurant={restaurant} table={table} />
                </div>
              );
            }


          }
        }) : null
      }
      <p>Past Booking</p>
      {(tables.length !== 0) ?
        tables.map(table => {
          if (table.customers.find(customer => (customer.customerId == Meteor.userId()))) {
            const now = new Date();
            const newDate = new Date(table.expireTime);
            if (table.expireTime && now > newDate && restaurants.length !== 0) {
              const restaurant = restaurants.find(
                restaurant => restaurant._id === table.restaurantId
              );
              return (
                <div>
                  <BookingCard key={table._id} restaurant={restaurant} table={table} expired={true} />
                </div>
              );
            }
          }
        }
        ) : null
      }
    </div>
  );
};

export default withStyles(styles)(YourBookings);
