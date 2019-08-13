import { Mongo } from "meteor/mongo";
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from "meteor/meteor";


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