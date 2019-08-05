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
      address: "1490 Broadway Street, Vancouver",
      email: "vinnie@aol.com",
      wbesite: "vinnies.com",
      id: 1
    });
    Restaurants.insert({
      name: "Jonny's Paradise",
      email: "JP@food.com",
      bio: "Good food for Jonnies",
      capacity: "50",
      phone: "1-(800)-888-0215",
      address: "1490 Broadway Street, Vancouver",
      email: "jonny@aol.com",
      wbesite: "jonnies.com",
      imageurl:
        "https://tastet.ca/wp-content/uploads/2018/10/restaurant-lexpress-montreal-3-1024x684.jpg",
      id: 2
    });
    Restaurants.insert({
      name: "Vegans Lovers",
      email: "VL@food.com",
      bio: "Good food for Vegans",
      capacity: "50",
      phone: "1-(800)-888-0215",
      address: "1490 Broadway Street, Vancouver",
      email: "vegans@aol.com",
      wbesite: "vegans.com",
      imageurl:
        "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
      id: 3
    });
    Restaurants.insert({
      name: "Cesar's",
      email: "Cesar@food.com",
      bio: "Good food for pepolpe",
      capacity: "50",
      phone: "1-(800)-888-0215",
      address: "1490 Broadway Street, Vancouver",
      email: "jonny@aol.com",
      wbesite: "cesars.com",
      imageurl:
        "https://webbox.imgix.net/images/uzmdqklkumcnknpv/b7b8bb9a-7c0a-4d8f-bd8d-e10df7924123.jpg?auto=format,compress&fit=crop&crop=entropy",
      id: 4
    });
  }

  if (Reviews.find().count() === 0) {
    Reviews.insert({
      restaurantId: 1,
      rating: 5,
      date: new Date(),
      text: "Please tell us your feedback!"
    });
    Reviews.insert({
      restaurantId: 1,
      rating: 2,
      date: new Date(),
      text: "Please tell us your feedback!"
    });
    Reviews.insert({
      restaurantId: 3,
      rating: 4,
      date: new Date(),
      text: "Please tell us your feedback!"
    });
    Reviews.insert({
      restaurantId: 4,
      rating: 3,
      date: new Date(),
      text: "very nice"
    });
  }

  if (Tables.find().count() === 0) {
    Tables.insert({
      restaurantId: 3,
      maxPlaces: 4,
      discount: "20%",
      notes: "Lorem ipsum",
      created: new Date(),
      customers: [],
      placesAvailable: 4,
      available: true,
      owner: 1
    });
    Tables.insert({
      restaurantId: 4,
      maxPlaces: 6,
      discount: "10%",
      notes: "Try our deliciou aydaday",
      created: new Date(),
      customers: [],
      placesAvailable: 4,
      available: true,
      owner: 1
    });
    Tables.insert({
      restaurantId: 1,
      maxPlaces: 2,
      discount: "35%",
      notes: "Eyyyy come eat food!",
      created: new Date(),
      customers: [],
      placesAvailable: 2,
      available: true,
      owner: 1
    });
    Tables.insert({
      restaurantId: 2,
      maxPlaces: 2,
      discount: "40%",
      notes: "Come try our delicious new burger",
      created: new Date(),
      customers: [],
      placesAvailable: 2,
      available: true,
      owner: 1
    });
  }
});
