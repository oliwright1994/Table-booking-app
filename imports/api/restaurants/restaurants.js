import { Mongo } from "meteor/mongo";

export const Restaurants = new Mongo.Collection("restaurants");

import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("restaurants", function todosPublication() {
    return Restaurants.find({});
  });
}
