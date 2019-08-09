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
    const { tables, currentUserId, restaurants, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.background}>
          <h1 className={classes.title}>Lets fill those empty tables!</h1>
          <div className={classes.container}>
            <TableForm restaurant={restaurants} />
            <CreateTable />
          </div>
        </div>
      </div>
    );
  }
}
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
