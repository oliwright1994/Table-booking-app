import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

import App from "../imports/containers/App/";

Meteor.startup(ReactDOM.render(<App />, document.getElementById("root")));
