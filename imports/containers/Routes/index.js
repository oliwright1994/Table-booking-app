import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import React, { Fragment } from "react";
import CreateRestaurant from "../pages/CreateRestaurant";
import CreateTable from "../pages/CreateTable";
import Login from "../pages/Login";
import Restaurant from "../pages/Restaurant";
import YourBookings from "../pages/YourBookings";
import Bookings from "../pages/Bookings";
import { Meteor } from "meteor/meteor";
// import TopBar from "../Component/TopBar";

export default () => {
  if (Meteor.user() === null) {
    return (
      <Switch>
        <Route exact path="/welcome" component={Login} />
        <Redirect from="*" to="/welcome" />
      </Switch>
    )
  } else if (Meteor.user() === undefined) {
    return (<p>Loading</p>)
  } else if (Meteor.user().profile.usertype == "customer") {
    return (
      <Fragment>
        {/* <TopBar /> */}
        <Switch>
          <Route path="/bookings" component={Bookings} />
          <Route exact path="/restaurant/:restaurantId" component={Restaurant} />
          <Route exact path="/your-bookings" component={YourBookings} />
          <Redirect from="*" to="/bookings" />
        </Switch>
      </Fragment>
    );
  }
  else if (Meteor.user().profile.usertype == "restaurant") {
    return (
      <Fragment>
        {/* <TopBar /> */}
        <Switch>
          <Route exact path="/create-restaurant" component={CreateRestaurant} />
          <Route exact path="/create-table" component={CreateTable} />
          <Route exact path="/restaurant/:restaurantId" component={Restaurant} />
          <Redirect from="*" to="/restaurant/:restaurantId" />
        </Switch>
      </Fragment>
    );
  }
};
