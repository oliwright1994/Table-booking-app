import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Cuisines = new Mongo.Collection("cuisines");

if (Meteor.isServer) {
  Meteor.publish("cuisines", function todosPublication() {
    return Cuisines.find({});
  });
}
