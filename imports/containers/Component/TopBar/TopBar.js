import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Menu,
  MenuItem,
  Fade,
  Avatar,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import HamburgerMenu from "@material-ui/icons/fastfood";
import Gravatar from "react-gravatar";
import { Meteor } from "meteor/meteor";
import { Restaurants } from "../../../api/restaurants/restaurants";
import { Tables } from "../../../api/tables/tables";
import { withTracker } from "meteor/react-meteor-data";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types'; 
import ProfileIcon from "@material-ui/icons/assignmentind";
import LogoutIcon from "@material-ui/icons/powersettingsnew";
import TableIcon from "@material-ui/icons/restaurant";
import Restaurant from "@material-ui/icons/storemalldirectory"


class TopBar extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      currentNumOfCustomers: 0,
      prevNumOfCustomers: 0
    };
  }
  resetNotification = () => {
    this.setState({
      prevNumOfCustomers: this.state.currentNumOfCustomers,
      currentNumOfCustomers: 0
    });
  };

  componentDidUpdate(prevProps) {
    const currentTables = this.props.tables;
    const preTables = prevProps.tables;
    if (!!currentTables.length && !!preTables.length) {
      currentTables.map(currentTable => {
        const table = preTables.find(
          preTable => currentTable._id === preTable._id
        );
        if (
          !!table &&
          table.customers.length - currentTable.customers.length < 0
        ) {
          this.setState({
            currentNumOfCustomers:
              currentTable.customers.length - this.state.prevNumOfCustomers
          });
        } else if (
          !!table &&
          table.customers.length - currentTable.customers.length > 0
        ) {
          this.setState({
            currentNumOfCustomers: currentTable.customers.length
          });
        }
      });
    }
  }
  render() {
    return (
      <TopBarContent
        classes={this.props.classes}
        restaurants={this.props.restaurants}
        location={this.props.location}
        tables={this.props.tables}
        currentNumOfCustomers={this.state.currentNumOfCustomers}
        resetNotification={this.resetNotification}
      />
    );
  }
}
TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  restaurants: PropTypes.array.isRequired,
  tables: PropTypes.array.isRequired,
}
export default withTracker(() => {
  Meteor.subscribe("restaurants");
  Meteor.subscribe("tables");
  return {
    restaurants: Restaurants.find({ owner: Meteor.userId() }).fetch(),
    tables: Tables.find({})
      .fetch()
      .filter(table => {
        const now = new Date();
        const expireTime = new Date(table.expireTime);
        if (expireTime > now) {
          return table;
        }
      })
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
  const { restaurants, classes, location, tables } = props;
  resetNotification = currentNumOfCustomers => {
    props.resetNotification();
    alert(`you have ${currentNumOfCustomers} bookings changed`);
  };
  return (
    <div className={classes.container}>
      <div className={classes.logoWrapper}>
        {Meteor.user().profile.usertype === "customer" ? (
          <Link to="/bookings">
            <img
              src="/assets/images/logo.svg"
              alt="Food Logo"
              className={classes.logo}
            />
          </Link>
        ) : restaurants.length > 0 ? (
          <Link to={`/restaurant/${restaurants[0]._id}`}>
            <img
              src="/assets/images/logo.svg"
              alt="Food Logo"
              className={classes.logo}
            />
          </Link>
        ) : (
          <img
            src="/assets/images/logo.svg"
            alt="Food Logo"
            className={classes.logo}
          />
        )}
        <Typography className={classes.brand}>UberSeats.</Typography>
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
              <MenuItem onClick={handleClose} >
                <Link to="/your-bookings" className={classes.link} > 
                  <div className={classes.menuItems}>
                    <ProfileIcon />
                    <p className={classes.text}>Profile</p>
                  </div>
                </Link>
              </MenuItem>
            )}
          {Meteor.user() && Meteor.user().profile.usertype === "restaurant" && (
            <MenuItem 
            onClick={() =>
              this.resetNotification(props.currentNumOfCustomers)
            }>
              <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
              >
                <Badge
                  badgeContent={props.currentNumOfCustomers}
                  color="secondary"
                >
                  <NotificationsIcon /> 
                </Badge>
              </IconButton>
              <p>Notifications</p>
            </MenuItem>
          )}
          {Meteor.user() &&
            Meteor.user().profile.usertype === "restaurant" &&
            location.pathname !== "/create-restaurant" && (
              <MenuItem onClick={handleClose}>
                <Link to="/create-restaurant" className={classes.link}>
                  <div className={classes.menuItems}>
                    <Restaurant />
                    <p className={classes.text}>Edit Restaurant</p>
                  </div>
                </Link>
              </MenuItem>
            )}
          {Meteor.user() &&
            Meteor.user().profile.usertype === "restaurant" &&
            restaurants.length > 0 &&
            location.pathname !== "/create-table" && (
              <MenuItem onClick={handleClose}>
                <Link to="/create-table" className={classes.link}>
                  <div className={classes.menuItems}>
                    <TableIcon />
                    <p className={classes.text}>Create A Table</p>
                  </div>
                </Link>
              </MenuItem>
            )}
          <MenuItem onClick={() => Meteor.logout()}>
            <div className={classes.menuItems}>
              <LogoutIcon /> 
              <p className={classes.text}>Logout</p>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
TopBarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  restaurants: PropTypes.array.isRequired,
  tables: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  currentNumOfCustomers: PropTypes.number.isRequired,
  resetNotification: PropTypes.func.isRequired
}

