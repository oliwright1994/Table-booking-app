import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { Reviews } from "../../api/reviews/reviews";
import { Tables } from "../../api/tables/tables";
import { Restaurants } from "../../api/restaurants/restaurants";

Meteor.startup(() => {
  // if (Meteor.users.find().count() === 0) {
  //   user = Accounts.createUser({
  //     email: "customer@food.com",
  //     profile: {
  //       usertype: "customer"
  //     }
  //   });
  //   user = Accounts.createUser({
  //     email: "restaurant@food.com",
  //     password: "password",
  //     profile: {
  //       usertype: "restaurant"
  //     }
  //   });
  // }

  // if (Restaurants.find().count() === 0) {
  //   Restaurants.insert({
  //     name: "Vinny's Paradise",
  //     email: "VP@food.com",
  //     bio:
  //       "Sirloin hamburger jerky venison brisket turkey. Shoulder leberkas ground round swine pastrami picanha prosciutto brisket boudin tri-tip short loin filet mignon. Rump pork jowl pig, beef kielbasa salami pancetta porchetta ribeye frankfurter. Porchetta pork chop filet mignon tongue beef ribs capicola short loin, fatback biltong strip steak pork belly boudin jowl ball tip turducken. Meatloaf porchetta pork, sausage venison drumstick leberkas fatback t-bone strip steak meatball bresaola. Leberkas filet mignon pig turducken, hamburger shoulder t-bone capicola spare ribs shankle cow turkey.",
  //     capacity: "50",
  //     phone: "1-(800)-888-0215",
  //     address: "1490 Broadway Street, Vancouver",
  //     email: "vinnie@aol.com",
  //     website: "vinnies.com",
  //     id: 1,
  //     cuisines: ["Seafood", "Burger", "All American"],
  //     rating: 4,
  //     owner: 1
  //   });
  //   Restaurants.insert({
  //     name: "Jonny's Paradise",
  //     email: "JP@food.com",
  //     bio:
  //       "Sirloin hamburger jerky venison brisket turkey. Shoulder leberkas ground round swine pastrami picanha prosciutto brisket boudin tri-tip short loin filet mignon. Rump pork jowl pig, beef kielbasa salami pancetta porchetta ribeye frankfurter. Porchetta pork chop filet mignon tongue beef ribs capicola short loin, fatback biltong strip steak pork belly boudin jowl ball tip turducken. Meatloaf porchetta pork, sausage venison drumstick leberkas fatback t-bone strip steak meatball bresaola. Leberkas filet mignon pig turducken, hamburger shoulder t-bone capicola spare ribs shankle cow turkey.",
  //     capacity: "50",
  //     phone: "1-(800)-888-0215",
  //     address: "1490 Broadway Street, Vancouver",
  //     email: "jonny@aol.com",
  //     website: "jonnies.com",
  //     imageurl:
  //       "https://tastet.ca/wp-content/uploads/2018/10/restaurant-lexpress-montreal-3-1024x684.jpg",
  //     id: 2,
  //     cuisines: ["Seafood", "Burger", "All American"],
  //     rating: 2,
  //     owner: 2
  //   });
  //   Restaurants.insert({
  //     name: "Vegans Lovers",
  //     email: "VL@food.com",
  //     bio:
  //       "Sirloin hamburger jerky venison brisket turkey. Shoulder leberkas ground round swine pastrami picanha prosciutto brisket boudin tri-tip short loin filet mignon. Rump pork jowl pig, beef kielbasa salami pancetta porchetta ribeye frankfurter. Porchetta pork chop filet mignon tongue beef ribs capicola short loin, fatback biltong strip steak pork belly boudin jowl ball tip turducken. Meatloaf porchetta pork, sausage venison drumstick leberkas fatback t-bone strip steak meatball bresaola. Leberkas filet mignon pig turducken, hamburger shoulder t-bone capicola spare ribs shankle cow turkey.",
  //     capacity: "50",
  //     phone: "1-(800)-888-0215",
  //     address: "1490 Broadway Street, Vancouver",
  //     email: "vegans@aol.com",
  //     website: "vegans.com",
  //     imageurl:
  //       "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg",
  //     id: 3,
  //     cuisines: ["Seafood", "Burger", "All American"],
  //     rating: 3.5,
  //     owner: 3
  //   });
  //   Restaurants.insert({
  //     name: "Cesar's",
  //     email: "Cesar@food.com",
  //     bio:
  //       "Sirloin hamburger jerky venison brisket turkey. Shoulder leberkas ground round swine pastrami picanha prosciutto brisket boudin tri-tip short loin filet mignon. Rump pork jowl pig, beef kielbasa salami pancetta porchetta ribeye frankfurter. Porchetta pork chop filet mignon tongue beef ribs capicola short loin, fatback biltong strip steak pork belly boudin jowl ball tip turducken. Meatloaf porchetta pork, sausage venison drumstick leberkas fatback t-bone strip steak meatball bresaola. Leberkas filet mignon pig turducken, hamburger shoulder t-bone capicola spare ribs shankle cow turkey.",
  //     capacity: "50",
  //     phone: "1-(800)-888-0215",
  //     address: "1490 Broadway Street, Vancouver",
  //     email: "jonny@aol.com",
  //     website: "cesars.com",
  //     imageurl:
  //       "https://webbox.imgix.net/images/uzmdqklkumcnknpv/b7b8bb9a-7c0a-4d8f-bd8d-e10df7924123.jpg?auto=format,compress&fit=crop&crop=entropy",
  //     id: 4,
  //     cuisines: ["Seafood", "Burger", "All American"],
  //     rating: 5,
  //     owner: 4
  //   });
  //   Restaurants.insert({
  //     name: "Vinny's Paradise",
  //     email: "VP@food.com",
  //     bio: "Good food for Vinnies",
  //     capacity: "50",
  //     phone: "1-(800)-888-0215",
  //     address: "1490 Broadway Street, Vancouver",
  //     owner: 5
  //   });
  // }

  // if (Reviews.find().count() === 0) {
  //   Reviews.insert({
  //     restaurantId: 1,
  //     rating: 5,
  //     date: new Date(),
  //     text: "Please tell us your feedback!",
  //     impression: "Pretty good!"
  //   });
  //   Reviews.insert({
  //     restaurantId: 1,
  //     rating: 2,
  //     date: new Date(),
  //     text: "Had a wondeful time here on our daugthers quinceanera!",
  //     impression: "Pretty good!"
  //   });
  //   Reviews.insert({
  //     restaurantId: 3,
  //     rating: 4,
  //     date: new Date(),
  //     text:
  //       "The best reasons to go to the Paris Café are Saarinen’s glass walls, gliding curves and suspended catwalk, although the dining areas are swell, too, smartly evoking Raymond Loewy’s original design for the space, which looked like a coffee shop on the moon. ",
  //     impression: "Bit Pricey!"
  //   });
  //   Reviews.insert({
  //     restaurantId: 4,
  //     rating: 3,
  //     date: new Date(),
  //     text: "Very nice",
  //     impression: "Decent"
  //   });
  // }

  // if (Tables.find().count() === 0) {
  //   const now = new Date()
  //   Tables.insert({
  //     restaurantId: 3,
  //     maxPlaces: 4,
  //     discount: "20%",
  //     notes: "Lorem ipsum",
  //     created: new Date(),
  //     customers: [{ customerId: "zTW5ipq5Z634Li9CC", guests: 2 }],
  //     placesAvailable: 4,
  //     available: true,
  //     owner: 1,
  //     expireTime: now.setHours(now.getHours() + 0.1)
  //   });
  //   Tables.insert({
  //     restaurantId: 4,
  //     maxPlaces: 6,
  //     discount: "10%",
  //     notes: "Try our deliciou aydaday",
  //     created: new Date(),
  //     customers: [],
  //     placesAvailable: 4,
  //     available: true,
  //     owner: 1,
  //     expireTime: now.setHours(now.getHours() + 0.1)
  //   });
  //   Tables.insert({
  //     restaurantId: 1,
  //     maxPlaces: 2,
  //     discount: "35%",
  //     notes: "Eyyyy come eat food!",
  //     created: new Date(),
  //     customers: [],
  //     placesAvailable: 2,
  //     available: true,
  //     owner: 1,
  //     expireTime: now.setHours(now.getHours() + 1)
  //   });
  //   Tables.insert({
  //     restaurantId: 2,
  //     maxPlaces: 2,
  //     discount: "40%",
  //     notes: "Come try our delicious new burger",
  //     created: new Date(),
  //     customers: [],
  //     placesAvailable: 2,
  //     available: true,
  //     owner: 1,
  //     expireTime: now.setHours(now.getHours() + 0.5)
  //   });
  // }
});
