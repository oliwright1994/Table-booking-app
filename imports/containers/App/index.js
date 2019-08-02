import React, { Component } from "react";
import "./index.css";
import "../../startup/accounts-config";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter } from "react-router-dom";
import { Reviews } from "../../api/reviews/reviews";
import { Tables } from "../../api/tables/tables";
import { Restaurants } from "../../api/restaurants/restaurants";
import AppRoutes from "../Routes";
// import { Meteor } from "meteor/meteor";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("reviews");
  Meteor.subscribe("tables");
  // Meteor.subscribe("users");
  Meteor.subscribe("restaurant");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    reviews: Reviews.find({}).fetch(),
    tables: Tables.find({}).fetch(),
    // users: Users.find({}).fetch(),
    restaurant: Restaurants.find({}).fetch()
  };
})(App);

// export default App;
