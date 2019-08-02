import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { Reviews } from "../../api/reviews/reviews";
import { Tables } from "../../api/tables/tables";
import { Restaurants } from "../../api/restaurants/restaurants";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      email: "customer@food.com",
      password: "password",
      type: "client"
    });
    user = Accounts.createUser({
      email: "restaurant@food.com",
      password: "password",
      type: "restaurant"
    });
  }

  if (Restaurants.find().count() === 0) {
    Restaurants.insert({
      name: "Vinny's Paradise",
      email: "VP@food.com",
      bio: "Good food for Vinnies",
      capacity: "50",
      phone: "1-(800)-888-0215",
      address: "1490 Broadway Street, Vancouver"
    });
  }

  if (Reviews.find().count() === 0) {
    Reviews.insert({
      rating: 5,
      date: new Date(),
      text: "Please tell us your feedback!"
    });
  }

  if (Tables.find().count() === 0) {
    Tables.insert({
      numberOfPeople: "4",
      discount: "20%",
      timeframe: "2hrs",
      date: new Date(),
      available: true
    });
  }
});
