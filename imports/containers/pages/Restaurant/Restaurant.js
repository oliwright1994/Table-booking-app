import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import BookingCard from "../../Component/BookingCard/index"

const Restaurant = ({ classes }) => {
  return (<div>
    <p>This is the Restaurant page.</p>

  </div>

  );

};

export default withStyles(styles)(Restaurant);
