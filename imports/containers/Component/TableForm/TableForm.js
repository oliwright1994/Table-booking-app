import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Restaurants } from "../../../api/restaurants/restaurants";

class TableForm extends Component {
  onSubmit = newTable => {
    Meteor.call("tables.createTable", newTable, Meteor.userId(), 1);
  };

  render() {
    const { classes, restaurants } = this.props;
    // console.log(restaurants);

    return (
      <Form
        onSubmit={table => this.onSubmit(table)}
        // validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <div>
                <Field
                  name="Discount"
                  render={({ input, meta }) => (
                    <label>
                      <TextField
                        id="Discount"
                        inputProps={{ ...input, type: "number" }}
                        label="Insert discount percent here..."
                        value={input.value}
                        margin="normal"
                        className={classes.discount}
                      />
                    </label>
                  )}
                />
              </div>

              <div>
                <Field
                  name="description"
                  render={({ input, meta }) => (
                    <label>
                      <TextField
                        id="Notes"
                        inputProps={{ ...input }}
                        label="Descriptions for table..."
                        value={input.value}
                        margin="normal"
                        className={classes.notes}
                      />
                    </label>
                  )}
                />
              </div>

              <div>
                <FormControl>
                  <Field
                    name="maxPlaces"
                    render={({ input, meta }) => (
                      <div>
                        <Select
                          onChange={this.handleChange}
                          inputProps={{ ...input }}
                          displayEmpty
                          name="seats"
                          id="seats"
                        >
                          <MenuItem value="">
                            <em>0</em>
                          </MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                        </Select>
                        <FormHelperText>Number of Seats</FormHelperText>
                      </div>
                    )}
                  />
                </FormControl>
              </div>

              <button type="submit" disabled={pristine || invalid}>
                Submit
              </button>
            </FormControl>
          </form>
        )}
      />
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("restaurant");
  return {
    // restaurants: Restaurants.find({}).fetch()
  };
})(withStyles(styles)(TableForm));
