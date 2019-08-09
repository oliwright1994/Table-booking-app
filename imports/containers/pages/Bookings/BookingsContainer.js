import React, { Component } from "react";
import Bookings from "./Bookings";
import { Tables } from "../../../api/tables/tables";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { withTracker } from "meteor/react-meteor-data";
import Loader from "../../Component/Loader";

class BookingsContainer extends Component {
  render() {
    const { restaurants, tables } = this.props;
    if (restaurants.length === 0 || tables.length === 0) {
      return (
        <div style={{ height: "100vh" }}>
          <Loader />
        </div>
      );
    } else {
      return <Bookings restaurants={restaurants} tables={tables} />;
    }
  }
}

export default withTracker(() => {
  // Meteor.subscribe("reviews");
  Meteor.subscribe("tables");
  // Meteor.subscribe("users");
  Meteor.subscribe("restaurants");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    tables: Tables.find({ placesAvailable: { $gt: 0 } }).fetch(),
    restaurants: Restaurants.find({}).fetch()
  };
})(BookingsContainer);
