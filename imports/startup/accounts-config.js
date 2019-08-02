import { Accounts } from "meteor/accounts-base";
// import { AccountsTemplates } from "meteor/templating";

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

// AccountsTemplates.addField({
//   _id: "type",
//   type: "radio",
//   displayName: "User Type",
//   select: [
//     {
//       text: "Customer",
//       value: "customer",
//     },
//     {
//       text: "Restaurant",
//       value: "restaurant",
//     },
//   ],
// });