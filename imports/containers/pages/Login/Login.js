import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import AccountsUIWrapper from "../../Component/AccountsWrapper";

const Login = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <img src="/assets/images/welcome.svg" alt="Login-Banner" />
        <img src="/assets/images/welcome-2.svg" alt="Login-Banner" />
      </div>
      <div className={classes.header}>
        <h1>Welcome to Food</h1>
        <img
          src="/assets/images/logo.svg"
          alt="logo"
          className={classes.logo}
        />
      </div>
      <div className={classes.loginWrapper}>
        <AccountsUIWrapper />
      </div>
    </div>
  );
};

export default withStyles(styles)(Login);
