import { Mongo } from "meteor/mongo";

export const Tables = new Mongo.Collection("tables");

import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("tables", function todosPublication() {
    return Tables.find({});
  });
}
