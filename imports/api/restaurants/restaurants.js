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
    const res = Restaurants.update(
      { owner: userId },
      {
        $set: {
          owner: userId,
          name: values.name,
          description: values.description,
          imageurl: values.imageurl,
          phone: values.phone,
          address: values.address,
          email: values.email,
          website: values.website,
          cuisine1: values.cuisine1,
          cuisine2: values.cuisine2,
          cuisine3: values.cuisine3
        }
      },
      { upsert: true }
    );

    let booking = Restaurants.find({ owner: userId }).fetch();
    // console.log(booking);
    return booking;
  }
});
