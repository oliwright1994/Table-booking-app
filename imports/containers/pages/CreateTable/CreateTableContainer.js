import React, { Component } from "react";
import CreateTable from "./CreateTable";
import TableForm from "../../Component/TableForm";
import { withTracker } from "meteor/react-meteor-data";

class CreateTableContainer extends Component {
  render() {
    const { tables, currentUserId, restaurants } = this.props;

    return (
      <div>
        <CreateTable />
        <TableForm tables={tables} restaurant={restaurants} />
      </div>
    );
  }
}
// export default withTracker(() => {
//   // Meteor.subscribe("reviews");
//   Meteor.subscribe("tables");
//   Meteor.subscribe("users");
//   Meteor.subscribe("restaurant");

//   return {
//     currentUser: Meteor.user(),
//     currentUserId: Meteor.userId(),
//     // reviews: Reviews.find({}).fetch(),
//     tables: Tables.find({}).fetch(),
//     // users: Users.find({}).fetch(),
//     restaurant: Restaurants.find({}).fetch()
//   };
// })(CreateTableContainer);

export default CreateTableContainer;

// restaurants.find(restaurant => restaurant.owner === currentUserId);
