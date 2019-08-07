import { Mongo } from "meteor/mongo";

export const Restaurants = new Mongo.Collection("restaurants");

import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("restaurants", function todosPublication() {
    return Restaurants.find({});
  });
}

Meteor.methods({
  "restaurants.createRestaurant"(userId) {
    Restaurants.insert({
      owner: userId,
      name: "This restaurant has no name yet",
      description: "No bio yet",
      imageurl: "No image added",
      phone: "",
      adress: "",
      email: "",
      website: ""
    });
  },
  "restaurants.updateProfile"(values, userId, restaurantId) {
    Restaurants.update(
      { owner: userId },
      {
        $set: {
          owner: userId,
          name: values.name,
          bio: values.description,
          imageurl: values.imageurl,
          phone: values.phone,
          adress: values.address,
          email: values.email,
          website: values.website
        }
      },
      { upsert: true }
    );
  }
});
