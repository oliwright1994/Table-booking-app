import React, { Component } from "react";
import CreateRestaurant from "./CreateRestaurant";
import { withTracker } from "meteor/react-meteor-data";
import { Restaurants } from "../../../api/restaurants/restaurants";

class CreateRestaurantContainer extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <CreateRestaurant
        restaurant={restaurants[0]}
        userId={this.props.currentUserId}
      />
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("tables");
  Meteor.subscribe("restaurants");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    restaurants: Restaurants.find({ owner: Meteor.userId() }).fetch()
  };
})(CreateRestaurantContainer);
