import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
// import LoginBanner from "../../assets/images/welcome.svg";

const Login = ({ classes }) => {
  return (
    <div>
      <p>This is the Login page.</p>
      {/* <img src={LoginBanner} alt="Login-Banner" /> */}
    </div>
  );
};

export default withStyles(styles)(Login);
