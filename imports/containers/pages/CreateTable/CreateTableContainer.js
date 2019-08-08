import React, { Component } from "react";
import CreateTable from "./CreateTable";
import TableForm from "../../Component/TableForm";
import { withTracker } from "meteor/react-meteor-data";
import { Tables } from "../../../api/tables/tables";
import { Restaurants } from "../../../api/restaurants/restaurants";

class CreateTableContainer extends Component {
  render() {
    const { tables, currentUserId, restaurants } = this.props;

    return (
      <div>
        <h1>Lets fill those empty tables!</h1>
        <TableForm />
        <CreateTable />
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
})(CreateTableContainer);
