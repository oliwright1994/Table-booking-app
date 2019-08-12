import React, { Component } from "react";
import YourBookings from "./YourBookings";
import { Tables } from "../../../api/tables/tables";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { withTracker } from "meteor/react-meteor-data";

class YourBookingsContainer extends Component {
  render() {
    const { restaurants, tables } = this.props;
    if (
      restaurants.length === 0 ||
      tables.length === 0 ||
      !!Meteor.userId() === false
    ) {
      return <p>Loading......</p>;
    } else {
      return <YourBookings restaurants={restaurants} tables={tables} />;
    }
  }
}

YourBookingsContainer.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      address: PropTypes.string,
      address: PropTypes.string,
      description: PropTypes.string,
      email: PropTypes.string,
      imageurl: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
      cuisine1: PropTypes.string,
      cuisine2: PropTypes.string,
      cuisine3: PropTypes.string
    })
  ),
  tables: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      restaurantId: PropTypes.string.isRequired,
      placesAvailable: PropTypes.number.isRequired,
      expireTime: PropTypes.number.isRequired,
      maxPlaces: PropTypes.number.isRequired
    })
  )
};

export default withTracker(() => {
  Meteor.subscribe("tables");
  Meteor.subscribe("restaurants");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    tables: Tables.find({}).fetch(),
    restaurants: Restaurants.find({}).fetch()
  };
})(YourBookingsContainer);
