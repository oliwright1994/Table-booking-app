import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
// import WelcomeBanner from "../../assets/images/welcome.svg";

const CreateTable = ({ classes }) => {
  return (
    <div>
      {/* <img src={WelcomeBanner} alt="Welcome Banner" /> */}
      <p>This is the CreateTable page.</p>
    </div>
  );
};

export default withStyles(styles)(CreateTable);
