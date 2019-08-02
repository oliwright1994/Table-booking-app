import React, { Component } from "react";
import "./index.css";
import "../../startup/accounts-config";
import { withTracker } from "meteor/react-meteor-data";
import Reviews from "../../api/reviews";
import Tables from "../../api/tables";
import Users from "../../api/users";
import Restaurants from "../../api/restaurants";

class App extends Component {
  render() {
    return (
      <div>
        <p>Heres our sweet app</p>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("reviews");
  Meteor.subscribe("tables");
  Meteor.subscribe("users");
  Meteor.subscribe("restaurant");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    reviews: Reviews.find({}).fetch(),
    tables: Tables.find({}).fetch(),
    users: Users.find({}).fetch(),
    restaurant: Restaurants.find({}).fetch()
  };
})(App);
