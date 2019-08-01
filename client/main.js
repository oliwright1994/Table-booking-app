import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import App from "../imports/containers/App/App.js/index.js.js";

Meteor.startup(ReactDOM.render(<App />, document.getElementById("root")));
