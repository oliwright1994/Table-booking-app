import React, { Component } from "react";
import CreateRestaurant from "./CreateRestaurant";
import { withTracker } from "meteor/react-meteor-data";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { Cuisines } from "../../../api/cuisines/cuisines";
import PropTypes from 'prop-types';

class CreateRestaurantContainer extends Component {
  render() {
    const { restaurants, currentUserId, cuisines, history } = this.props;
    if (cuisines.length === 0 || currentUserId === undefined) {
      return <p>Loading...</p>;
    } else {
      return (
        <CreateRestaurant
          restaurant={restaurants[0]}
          userId={currentUserId}
          cuisines={cuisines}
          history={history}
        />
      );
    }
  }
}
CreateRestaurantContainer.propTypes = {
  restaurants: PropTypes.array.isRequired,
  cuisines: PropTypes.array.isRequired,
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
