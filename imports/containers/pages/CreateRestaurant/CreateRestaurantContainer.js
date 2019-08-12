import React, { Component } from "react";
import CreateRestaurant from "./CreateRestaurant";
import { withTracker } from "meteor/react-meteor-data";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { Cuisines } from "../../../api/cuisines/cuisines";

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
  Meteor.subscribe("cuisines");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    restaurants: Restaurants.find({ owner: Meteor.userId() }).fetch(),
    cuisines: Cuisines.find({}).fetch()
  };
})(CreateRestaurantContainer);
