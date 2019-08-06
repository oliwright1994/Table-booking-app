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
      maxPlaces: values.maxPlaces,
      discount: values.discount,
      notes: values.notes,
      created: new Date(),
      customers: [],
      placesAvailable: values.maxPlaces,
      available: true,
      owner: userId
    });
  },
  "tables.updateBooking"(tableId, userId, numberOfGuests) {
    const booking = Tables.find({ _id: tabledId });

    // if (booking.customers.includes({ customerId: userId })) {
    //   throw new Meteor.Error(
    //     "tables.deleteTable.not-authorized",
    //     "You are already booked on this table."
    //   );
    // }

    Tables.update(
      {
        _id: tabledId
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

    booking = Tables.find({ _id: tableid });

    if (booking.placesAvailable === 0) {
      Tables.update(
        {
          _id: tableId
        },
        { $set: { available: false } }
      );
    }
  },
  "tables.deleteTable"(tabledId, userId) {
    const booking = Tables.find({ _id: tabledId });

    // if (booking.owner !== userId) {
    //   throw new Meteor.Error(
    //     "tables.deleteTable.not-authorized",
    //     "You cannot delete tables from other restaurants."
    //   );
    // }
    Tables.remove({
      _id: tableId
    });
  },
  "tables.cancelBooking"(tableId, userId) {
    let booking = Tables.find({ _id: tableid });

    let customer = booking.customers.find(
      customer => customer.customerId === userId
    );

    // if (booking.customers.includes({ customerId: userId })) {
    Tables.update(
      { _id: tabledId },
      {
        $pull: { customers: { customerId: userID } },
        $inc: { placesAvailable: customer.guests }
      }
    );

    booking = Tables.find({ _id: tableid });

    if (booking.placesAvailable > 0) {
      Tables.update(
        {
          _id: tableId
        },
        { $set: { available: true } }
      );
    }
    // } else {
    //   throw new Meteor.Error(
    //     "tables.cancelBooking.not-authorized",
    //     "You are not booked on this table."
    //   );
    // }
  }
});
