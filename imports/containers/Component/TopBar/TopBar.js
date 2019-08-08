import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Menu, MenuItem, Fade, Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import logo from "../../assets/images/logo.svg";
import HamburgerMenu from "@material-ui/icons/fastfood";
import Gravatar from "react-gravatar";
import { Meteor } from "meteor/meteor";
const TopBar = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.container}>
      <div>
        <Link to="/bookings">
          <img src={logo} alt="Food Logo" className={classes.logo} />
        </Link>
      </div>

      <div className={classes.smallcontainer}>
        <Avatar round="true" className={classes.avatar}>
          <Gravatar email="blah@blah.com" />
        </Avatar>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <HamburgerMenu />
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {Meteor.user() && Meteor.user().profile.usertype == "customer" && (
            <Link to="/your-booknigs">
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
          )}
          {Meteor.user() && Meteor.user().profile.usertype == "restaurant" && (
            <Link to="/create-restaurant">
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
          )}

          <MenuItem onClick={() => Meteor.logout()}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(TopBar));
