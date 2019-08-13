import React, { Component } from "react";
import TableForm from "../../Component/TableForm";
import { withTracker } from "meteor/react-meteor-data";
import { Tables } from "../../../api/tables/tables";
import { Restaurants } from "../../../api/restaurants/restaurants";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

class CreateTableContainer extends Component {
  render() {

    const { classes, history } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.background}>
          <h1 className={classes.title}>Lets fill those empty tables!</h1>
          <div className={classes.container}>
            <TableForm history={history} />
          </div>
        </div>
      </div>
    );
  }
}
CreateTableContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
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
