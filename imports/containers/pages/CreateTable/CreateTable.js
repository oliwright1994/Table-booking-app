import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const CreateTable = ({ classes }) => {
  return (
    <div>
      <p>This is the CreateTable page.</p>
    </div>
  );
};

export default withStyles(styles)(CreateTable);
