import React, { Component } from "react";
import Restaurant from "./Restaurant";
import { Reviews } from "../../../api/reviews/reviews";
import { Tables } from "../../../api/tables/tables";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect } from "react-router";
import Loader from "../../Component/Loader";

class RestaurantContainer extends Component {
  render() {
    const { reviews, tables, restaurants, currentUserId } = this.props;
    let restaurantId = this.props.match.params.restaurantId;
    if (restaurants.length === 0 || currentUserId === undefined) {
      <div style={{ height: "100vh" }}>
        <Loader />
      </div>;
    } else if (
      restaurants.find(restaurant => restaurant.id == restaurantId) ===
      undefined
    ) {
      return <Redirect to="/bookings" />;
    } else {
      return (
        <Restaurant
          restaurant={restaurants.find(
            restaurant => restaurant.id == restaurantId
          )}
          table={tables.find(table => table.restaurantId == restaurantId)}
          reviews={reviews.filter(
            reviews => reviews.restaurantId == restaurantId
          )}
          user={currentUserId}
        />
      );
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe("reviews");
  Meteor.subscribe("tables");
  // Meteor.subscribe("users");
  Meteor.subscribe("restaurants");

  //The line below needs to be replaced with the correct id from the url

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    reviews: Reviews.find({}).fetch(),
    tables: Tables.find({}).fetch(),
    // users: Users.find({}).fetch(),
    restaurants: Restaurants.find({}).fetch()
  };
})(RestaurantContainer);
