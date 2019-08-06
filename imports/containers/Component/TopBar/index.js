import React, { Component } from "react";

import { Menu, MenuItem, Button, Fade } from "@material-ui/core";

import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

// const TopBar = ({ classes }) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   function handleClick(event) {
//     setAnchorEl(event.currentTarget);
//   }

//   function handleClose() {
//     setAnchorEl(null);
//   }
//   return (
//     <div className={classes.container}>
//       <div>
//         <Link to="/bookings">
//           <img src={logo} alt="Food Logo" className={classes.logo} />
//         </Link>
//       </div>

//       <Button
//         aria-controls="fade-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         Settings
//       </Button>
//       <Menu
//         id="fade-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//       >
//         <MenuItem onClick={handleClose}>Notification</MenuItem>
//         <MenuItem onClick={handleClose}>Your Location</MenuItem>
//         <MenuItem onClick={handleClose}>Max Distance</MenuItem>

//         <Button>
//           <MenuItem onClick={handleClose}>Logout</MenuItem>
//         </Button>
//       </Menu>
//     </div>
//   );
// };

// export default withRouter(withStyles(styles)(TopBar));

class TopBar extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ AnchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ AnchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const open = Boolean(anchorEl);

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
          onClick={this.handleClick}
        >
          Settings
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={this.handleClose}>Notification</MenuItem>
          <MenuItem onClick={this.handleClose}>Your Location</MenuItem>
          <MenuItem onClick={this.handleClose}>Max Distance</MenuItem>

          <Button>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Button>
        </Menu>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(TopBar));
