import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Menu, MenuItem, Fade } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import logo from "../../assets/images/logo.svg";
import HamburgerMenu from "@material-ui/icons/fastfood";

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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default withRouter(withStyles(styles)(TopBar));
