import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { FormControl, Select, MenuItem, Typography } from "@material-ui/core";

import { withTracker } from "meteor/react-meteor-data";
import { Cuisines } from "../../../api/cuisines/cuisines";

class BookingFilter extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      selectedCuisine: null,
      minDiscount: null
    };
  }
  render() {
    let discountDropdown = [];
    for (let i = 1; i > 10; i++) {
      discountDropdown.push(i * 10);
    }
    const { classes } = this.props;
    return (
      <div>
        <Form
          onSubmit={() => this.updateFilters}
          render={({
            handleSubmit,
            pristine,
            form,
            submitting,
            values,
            invalid
          }) => {
            <FormControl>
              <Field
                name="minDiscount"
                render={({ input, meta }) => (
                  <div>
                    <Select
                      onChange={this.handleChange}
                      inputProps={{ ...input }}
                      displayEmpty
                      name="minDiscount"
                      id="minDiscount"
                    >
                      <MenuItem value="">Discount</MenuItem>
                    </Select>
                    {/* <FormHelperText>Table Expired Time</FormHelperText> */}
                  </div>
                )}
              />
            </FormControl>;
          }}
        />
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("cuisines");
  return {
    restaurants: Cuisines.find({}).fetch()
  };
})(withStyles(styles)(BookingFilter));
