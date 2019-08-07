import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
// import LoginBanner from "../../assets/images/welcome.svg";
import AccountsUIWrapper from "../../Component/AccountsWrapper"

const Login = ({ classes }) => {
  return (
    <div>
      <p>This is the Login page.</p>
      {/* <img src={LoginBanner} alt="Login-Banner" /> */}
      <div className="login-wrapper">
        <AccountsUIWrapper />
      </div>
    </div>
  );
};

export default withStyles(styles)(Login);
