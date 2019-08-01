import React, { Component } from "react";
import "./index.css";
import { withTracker } from "meteor/react-meteor-data";

import "../../startup/accounts-config";

class App extends Component {
  render() {
    return (
      <div>
        <p>Heres our sweet app</p>
      </div>
    );
  }
}

export default App;
