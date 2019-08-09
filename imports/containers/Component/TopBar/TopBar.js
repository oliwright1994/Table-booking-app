import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Menu, MenuItem, Fade, Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import logo from "../../assets/images/logo.svg";
import HamburgerMenu from "@material-ui/icons/fastfood";
import Gravatar from "react-gravatar";
import { Meteor } from "meteor/meteor";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { withTracker } from "meteor/react-meteor-data";

class TopBar extends Component {
  constructor({ props }) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TopBarContent
        classes={this.props.classes}
        restaurants={this.props.restaurants}
        location={this.props.location}
      />
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe("restaurants");
  return {
    restaurants: Restaurants.find({ owner: Meteor.userId() }).fetch()
  };
})(withRouter(withStyles(styles)(TopBar)));

const TopBarContent = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  const { restaurants, classes, location } = props;
  return (
    <div className={classes.container}>
      <div>
        {Meteor.user().profile.usertype === "customer" ? (
          <Link to="/bookings">
            <img src={logo} alt="Food Logo" className={classes.logo} />
          </Link>
        ) : restaurants.length > 0 ? (
          <Link to={`/restaurant/${restaurants[0]._id}`}>
            <img src={logo} alt="Food Logo" className={classes.logo} />
          </Link>
        ) : (
          <img src={logo} alt="Food Logo" className={classes.logo} />
        )}
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
          {Meteor.user() &&
            Meteor.user().profile.usertype === "customer" &&
            location.pathname !== "/your-bookings" && (
              <MenuItem onClick={handleClose}>
                <Link to="/your-bookings">Profile</Link>
              </MenuItem>
            )}
          {Meteor.user() &&
            Meteor.user().profile.usertype === "restaurant" &&
            location.pathname !== "/create-restaurant" && (
              <MenuItem onClick={handleClose}>
                <Link to="/create-restaurant">Edit Restaurant</Link>
              </MenuItem>
            )}
          {Meteor.user() &&
            Meteor.user().profile.usertype === "restaurant" &&
            restaurants.length > 0 &&
            location.pathname !== "/create-table" && (
              <MenuItem onClick={handleClose}>
                <Link to="/create-table">Create A Table</Link>
              </MenuItem>
            )}
          <MenuItem onClick={() => Meteor.logout()}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
