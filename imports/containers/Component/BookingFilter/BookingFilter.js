import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  Button
} from "@material-ui/core";

import { withTracker } from "meteor/react-meteor-data";
import { Cuisines } from "../../../api/cuisines/cuisines";
import ResetIcon from "@material-ui/icons/refresh";

class BookingFilter extends Component {
  constructor({ props }) {
    super(props);
  }
  render() {
    let discountDropdown = [];
    for (let i = 1; i < 10; i++) {
      discountDropdown.push(i * 10);
    }
    const { classes, cuisines } = this.props;

    return (
      <div>
        <FormControl className={classes.filterContainer}>
          <Select
            className={classes.filterDiscount}
            onChange={event => this.props.handleChange(event, "minDiscount")}
            inputProps={{ name: "minDiscount", id: "minDiscount" }}
            name="minDiscount"
            id="minDiscount"
            value={this.props.state.minDiscount}
          >
            <MenuItem value={0}>Discount...</MenuItem>

            {discountDropdown.map(discount => (
              <MenuItem
                key={discount}
                value={discount}
              >{`${discount}%`}</MenuItem>
            ))}
          </Select>
          <Select
            className={classes.filterCuisine}
            onChange={event =>
              this.props.handleChange(event, "selectedCuisine")
            }
            inputProps={{ name: "selectedCuisine", id: "selectedCuisine" }}
            name="selectedCuisine"
            id="selectedCuisine"
            value={this.props.state.selectedCuisine}
          >
            <MenuItem value={"noPreference"}>Cuisine...</MenuItem>

            {cuisines.map(cuisine => (
              <MenuItem key={cuisine._id} value={cuisine.title}>
                {cuisine.title}
              </MenuItem>
            ))}
          </Select>
          <Button
            className={classes.button}
            type="button"
            color="primary"
            onClick={() => this.props.resetFilters()}
          >
            <ResetIcon />
          </Button>
        </FormControl>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("cuisines");
  return {
    cuisines: Cuisines.find({}).fetch()
  };
})(withStyles(styles)(BookingFilter));
