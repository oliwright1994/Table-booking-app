import { Mongo } from "meteor/mongo";
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  // Meteor.publish("users", function todosPublication() {
  //     return users.find({});
  // });
}

Meteor.methods({
  'users.createUser'(email, password, usertype) {
    Accounts.createUser(
      {
        "email": email, "password": password, profile: {
          "usertype": usertype
        }
      }
    );
  }
})