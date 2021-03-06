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
    const ed = new Date();
    Tables.insert({
      restaurantId: restaurantId,
      maxPlaces: values.maxPlaces,
      discount: values.discount,
      notes: values.notes,
      created: new Date(),
      customers: [],
      placesAvailable: values.maxPlaces,
      available: true,
      owner: userId,
      expireTime: ed.setHours(ed.getHours() + values.expire)
    });
  },
  "tables.updateBooking"(tableId, userId, numberOfGuests) {
    Tables.update(
      {
        _id: tableId
      },
      {
        $addToSet: {
          customers: { customerId: userId, guests: numberOfGuests }
        },
        $inc: {
          placesAvailable: -numberOfGuests
        }
      }
    );
  },
  "tables.deleteTable"(tableId, userId) {
    Tables.remove({
      _id: tableId
    });
  },
  "tables.cancelBooking"(tableId, userId, numberOfGuests) {
    Tables.update(
      { _id: tableId },
      {
        $inc: { placesAvailable: +numberOfGuests },
        $pull: { customers: { customerId: userId } }
      }
    );
  },
  "tables.setTableToExpired"(tableId) {
    const newDate = new Date()
    Tables.update(
      { _id: tableId },
      {
        $set: { expireTime: newDate.setMinutes(newDate.getMinutes()-1) }
      }
    );
  }
});
