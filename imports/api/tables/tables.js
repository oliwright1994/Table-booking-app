import { Mongo } from "meteor/mongo";

export const Tables = new Mongo.Collection("tables");

import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("tables", function todosPublication() {
    return Tables.find({});
  });
}

Meteor.methods({
  "tables.createTable"(values, userId, restaurantId) {
    Tables.insert({
      restaurantId: restaurantId,
      covers: values.covers,
      discount: values.discount,
      notes: values.notes,
      created: new Date(),
      customers: [],
      guests: 0,
      available: true
    });
  },
  "tables.updateBooking"(tableId, userId, numberOfGuests) {
    Tables.update(
      {
        _id: tabledId
      },
      {
        $addToSet: {
          customers: { customerId: userId, guests: numberOfGuests }
        },
        $inc: {
          guests: numberOfGuests
        }
      }
    );
  },
  "tables.setBookingFull"(tabledId) {
    Tables.update(
      {
        _id: tableId
      },
      { $set: { available: false } }
    );
  },
  "tables.cancelBooking"(tableId, userId) {
    Tables.update(
      { _id: tabledId },
      { $pull: { customers: { customerId: userID } },
    );
  }
});
