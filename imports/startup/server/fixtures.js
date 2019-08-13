import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { Reviews } from "../../api/reviews/reviews";
import { Tables } from "../../api/tables/tables";
import { Restaurants } from "../../api/restaurants/restaurants";
import { Cuisines } from "../../api/cuisines/cuisines";

Meteor.startup(() => {
  if (Cuisines.find().count() === 0) {
    Cuisines.insert({ title: "American" });
    Cuisines.insert({ title: "Chinese" });
    Cuisines.insert({ title: "Asian Fusion" });
    Cuisines.insert({ title: "Indian" });
    Cuisines.insert({ title: "Japanese" });
    Cuisines.insert({ title: "Burger" });
    Cuisines.insert({ title: "Mexican" });
    Cuisines.insert({ title: "Vegetarian" });
    Cuisines.insert({ title: "Bakery" });
    Cuisines.insert({ title: "Meditterenean" });
    Cuisines.insert({ title: "Greek" });
    Cuisines.insert({ title: "Cheap-Eats" });
    Cuisines.insert({ title: "Fine-Dining" });
  }
});
