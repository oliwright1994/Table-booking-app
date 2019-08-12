import React, { Component } from "react";
import CreateTable from "./CreateTable";
import TableForm from "../../Component/TableForm";
import { withTracker } from "meteor/react-meteor-data";
import { Tables } from "../../../api/tables/tables";
import { Restaurants } from "../../../api/restaurants/restaurants";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class CreateTableContainer extends Component {
  render() {
    const { tables, currentUserId, restaurants, classes, history } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.background}>
          <h1 className={classes.title}>Lets fill those empty tables!</h1>
          <div className={classes.container}>
            <TableForm history={history} />
            <CreateTable />
          </div>
        </div>
      </div>
    );
  }
}

CreateTableContainer.propTypes = {
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
  Meteor.subscribe("users");
  Meteor.subscribe("restaurant");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    tables: Tables.find({}).fetch(),
    restaurant: Restaurants.find({}).fetch()
  };
})(withStyles(styles)(CreateTableContainer));
