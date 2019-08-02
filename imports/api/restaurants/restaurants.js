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
  "restaurants.updateProfile"(values, restaurantId) {
    Restaurants.update(
      { _id: restaurantId },
      {
        $set: {
          name: values.name,
          description: values.description,
          imageurl: values.imageurl,
          phone: values.phone,
          adress: values.adress,
          email: values.email,
          website: values.website
        }
      }
    );
  }
});
