import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
// import tableBanner from "../../assets/images/restaurant-tables.jpg";

const CreateTable = ({ classes }) => {
  return (
    <div className={classes.container}>
      <img src="../../assets/images/restaurant-tables.jpg" className={classes.tableBanner} />
    </div>
  );
};

export default withStyles(styles)(CreateTable);
