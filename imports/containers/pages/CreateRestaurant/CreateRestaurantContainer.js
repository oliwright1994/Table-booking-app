import React, { Component } from "react";
import CreateRestaurant from "./CreateRestaurant";
import { withTracker } from "meteor/react-meteor-data";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { Cuisines } from "../../../api/cuisines/cuisines";

class CreateRestaurantContainer extends Component {
  render() {
    console.log(this.props);
    const { restaurants, currentUserId, cuisines } = this.props;
    if (cuisines.length === 0 || currentUserId === undefined) {
      return <p>Loading...</p>;
    } else {
      return (
        <CreateRestaurant
          restaurant={restaurants[0]}
          userId={this.props.currentUserId}
          cuisines={this.props.cuisines}
        />
      );
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe("tables");
  Meteor.subscribe("restaurants");
  Meteor.subscribe("cuisines");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    restaurants: Restaurants.find({ owner: Meteor.userId() }).fetch(),
    cuisines: Cuisines.find({}).fetch()
  };
})(CreateRestaurantContainer);
