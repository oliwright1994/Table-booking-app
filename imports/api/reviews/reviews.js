import { Mongo } from "meteor/mongo";

export const Reviews = new Mongo.Collection("reviews");

import { Meteor } from "meteor/meteor";
import { Restaurants } from "../restaurants/restaurants";

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

    const restaurantReviews = Reviews.find(
      { restaurantId: restaurantId },
      { _id: 0, rating: 1 }
    ).fetch();
    const restaurantRaitings = restaurantReviews.map(review => review.rating);
    const newRating =
      restaurantRaitings.filter((a, b) => a + b, 0) / restaurantRaitings.length;
    Restaurants.update({ _id: restaurantId }, { $set: { rating: newRating } });
  }
});
