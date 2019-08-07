import { Mongo } from "meteor/mongo";

export const Cuisines = new Mongo.Collection("cuisines");

import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("cuisines", function todosPublication() {
    return Cuisines.find({});
  });
}
