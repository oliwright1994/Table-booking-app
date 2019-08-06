import { Mongo } from "meteor/mongo";
import { Accounts } from 'meteor/accounts-base'


import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
    // Meteor.publish("users", function todosPublication() {
    //     return users.find({});
    // });
}

Meteor.methods({
    'users.createUser'(email, password, usertype) {
        const userId = Accounts.createUser(
            {
                "email": email, "password": password, profile: {
                    "usertype": usertype
                }
            }
        );

        // if (userId) {
        //     console.log("user created:", userId)
        //     Meteor.users.update(
        //         { userId: Meteor.userId },
        //         {
        //             $set: {
        //                 usertype: usertype
        //                 // profile: {
        //                 //     "type": usertype
        //                 // }
        //             }
        //         }
        //     )
        // }
        // else console.log("can not create user")

    },
    "users.logIn"(email, password) {
        Meteor.loginWithPassword(email, password, function (error) {

            if (Meteor.user()) {
                console.log(Meteor.userId());
            } else {
                console.log("ERROR: " + error.reason);
            }
        });
    }

})