import { Mongo } from "meteor/mongo";

export const Reviews = new Mongo.Collection("reviews");

import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("reviews", function todosPublication() {
    return Reviews.find({});
  });
}
