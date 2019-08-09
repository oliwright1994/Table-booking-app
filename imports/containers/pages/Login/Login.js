import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
// import LoginBanner from "../../assets/images/welcome.svg";
import AccountsUIWrapper from "../../Component/AccountsWrapper";

const Login = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
<<<<<<< HEAD
        {/* <img src={LoginBanner} alt="Login-Banner" /> */}
=======
        <img src="../../assets/images/welcome.svg" alt="Login-Banner" />
>>>>>>> fbcf0fac4d33d9ff5cd8c7d8743afd49a3f4a345
      </div>
      <h1>Welcome to Food</h1>
      <div className={classes.loginWrapper}>
        <AccountsUIWrapper />
      </div>
    </div>
  );
};

export default withStyles(styles)(Login);
