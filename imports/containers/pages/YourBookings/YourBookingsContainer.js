import React, { Component } from "react";
import YourBookings from "./YourBookings";
import { Tables } from '../../../api/tables/tables'
import { Restaurants } from '../../../api/restaurants/restaurants'
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from 'prop-types';

class YourBookingsContainer extends Component {
  render() {
    const { restaurants, tables } = this.props;
    if (restaurants.length === 0 || tables.length === 0 || !!Meteor.userId() === false) {
      return <p>Loading......</p>
    } else {
      return <YourBookings restaurants={restaurants} tables={tables} />;
    }
  }
}

YourBookingsContainer.propTypes = {
  classes: PropTypes.object,
  restaurants: PropTypes.array.isRequired,
  tables: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired
}

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


