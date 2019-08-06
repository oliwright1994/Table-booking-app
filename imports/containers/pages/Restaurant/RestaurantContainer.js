import React, { Component } from "react";
import Restaurant from "./Restaurant";
import { Reviews } from "../../../api/reviews/reviews";
import { Tables } from "../../../api/tables/tables";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { withTracker } from "meteor/react-meteor-data";

class RestaurantContainer extends Component {
  render() {
    console.log(this.props);
    const { reviews, tables, restaurant } = this.props;
    if (restaurant.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <Restaurant
          restaurant={restaurant[0]}
          table={tables[0]}
          reviews={reviews}
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
  const restaurantId = 4;

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    reviews: Reviews.find({ restaurantId: restaurantId }).fetch(),
    tables: Tables.find({ restaurantId: restaurantId }).fetch(),
    // users: Users.find({}).fetch(),
    restaurant: Restaurants.find({ id: restaurantId }).fetch()
  };
})(RestaurantContainer);
