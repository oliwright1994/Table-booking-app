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
    const { reviews, tables, restaurants, currentUser } = this.props;
    let restaurantId = this.props.match.params.restaurantId;
    const now = new Date();
    const table = tables.find(table => {
      const tableExpiryDate = new Date(table.expireTime);
      const expired = !!(now > tableExpiryDate);
      return table.restaurantId == restaurantId && !expired;
    });
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
      placesAvailable: PropTypes.string.isRequired,
      expireTime: PropTypes.number.isRequired,
      maxPlaces: PropTypes.number.isRequired
    })
  ),
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      restaurantId: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      string: PropTypes.string,
      impression: PropTypes.string
    })
  )
};

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
