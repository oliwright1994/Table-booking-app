import { Mongo } from "meteor/mongo";

export const Reviews = new Mongo.Collection("reviews");

import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("reviews", function todosPublication() {
    return Reviews.find({});
  });
}

Meteor.methods({
  "reviews.createReview"(values, userId, restaurantId) {
    Reviews.insert({
      author: userId,
      restaurantId: restaurantId,
      date: new Date(),
      rating: values.rating,
      text: values.text,
      impression: values.impression
    });
  }
});
