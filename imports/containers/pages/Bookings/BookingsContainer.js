import React, { Component } from "react";
import Bookings from "./Bookings";
import { Tables } from "../../../api/tables/tables";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { withTracker } from "meteor/react-meteor-data";
import Loader from "../../Component/Loader";
import BookingFilter from "../../Component/BookingFilter";
import PropTypes from "prop-types";

class BookingsContainer extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      selectedCuisine: "noPreference",
      minDiscount: 0
    };
  }

  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };
  resetFilters = () => {
    this.setState({
      selectedCuisine: "noPreference",
      minDiscount: 0
    });
  };

  filterTables = (tables, restaurants) => {
    let filteredTables = tables.filter(
      table => table.discount >= this.state.minDiscount
    );

    if (this.state.selectedCuisine == "noPreference") {
      return filteredTables;
    } else {
      let cuisineFilteredTables = filteredTables.filter(table => {
        const { cuisine1, cuisine2, cuisine3 } = restaurants.find(
          restaurant => restaurant._id === table.restaurantId
        );

        const tableCuisines = [cuisine1, cuisine2, cuisine3];

        return tableCuisines.includes(this.state.selectedCuisine);
      });
      return cuisineFilteredTables;
    }
  };
  render() {
    const { restaurants, tables } = this.props;
    if (restaurants.length === 0 || tables.length === 0) {
      return (
        <div style={{ height: "100vh" }}>
          <Loader />
        </div>
      );
    } else {
      return (
        <div>
          <BookingFilter
            state={this.state}
            handleChange={this.handleChange}
            resetFilters={this.resetFilters}
          />
          <Bookings
            restaurants={restaurants}
            tables={this.filterTables(tables, restaurants)}
          />
          ;
        </div>
      );
    }
  }
}
BookingsContainer.propTypes = {
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
  // Meteor.subscribe("reviews");
  Meteor.subscribe("tables");
  // Meteor.subscribe("users");
  Meteor.subscribe("restaurants");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    tables: Tables.find({ placesAvailable: { $gt: 0 } }).fetch(),
    restaurants: Restaurants.find({}).fetch()
  };
})(BookingsContainer);
