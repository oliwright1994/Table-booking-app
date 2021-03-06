import React, { Component } from "react";
import Restaurant from "./Restaurant";
import { Reviews } from "../../../api/reviews/reviews";
import { Tables } from "../../../api/tables/tables";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect } from "react-router";
import Loader from "../../Component/Loader";
import PropTypes from 'prop-types';

class RestaurantContainer extends Component {
  render() {
    const { reviews, tables, restaurants, currentUser } = this.props;
    let restaurantId = this.props.match.params.restaurantId;
    const now = new Date();
    const table = tables.find(table => {
      const tableExpiryDate = new Date(table.expireTime);
      const expired = !!(now > tableExpiryDate);
      return (table.restaurantId == restaurantId && !expired)
    })
    if (restaurants.length === 0 || currentUser === undefined) {
      return (
        <div style={{ height: "100vh" }}>
          <Loader />
        </div>
      );
    } else if (
      restaurants.find(restaurant => restaurant._id == restaurantId) ===
      undefined
    ) {
      return <Redirect to="/bookings" />;
    } else {
      return (
        <Restaurant
          restaurant={restaurants.find(
            restaurant => restaurant._id == restaurantId
          )}
          table={table}
          reviews={reviews.filter(
            reviews => reviews.restaurantId == restaurantId
          )}
          user={currentUser}
        />
      );
    }
  }
}
RestaurantContainer.propTypes = {
  classes: PropTypes.object,
  restaurants: PropTypes.array.isRequired,
  tables: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
}
export default withTracker(() => {
  Meteor.subscribe("reviews");
  Meteor.subscribe("tables");
  Meteor.subscribe("restaurants");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    reviews: Reviews.find({}).fetch(),
    tables: Tables.find({}).fetch(),
    restaurants: Restaurants.find({}).fetch()
  };
})(RestaurantContainer);
