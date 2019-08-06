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

export default () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/welcome" component={Login} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/create-restaurant" component={CreateRestaurant} />
        <Route exact path="/create-table" component={CreateTable} />
        <Route exact path="/restaurant" component={Restaurant} />
        <Route exact path="/your-booknigs" component={YourBookings} />
        <Redirect from="*" to="/bookings" />
      </Switch>
    </Fragment>
  );
};
