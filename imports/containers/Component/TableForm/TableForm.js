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
  onSubmit = (newTable, restaurants) => {
    Meteor.call("tables.createTable", newTable, Meteor.userId(), restaurants[0]._id);
    // console.log(restaurants);
    // console.log(restaurants._id);
  };

  render() {
    const { classes, restaurants } = this.props;
    // console.log(restaurants);

    return (
      <Form
        onSubmit={table => this.onSubmit(table, restaurants)}
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
                        inputProps={{ ...input }}
                        label="Insert discount here..."
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
                    name="expire"
                    render={({ input, meta }) => (
                      <div>
                        <Select
                          onChange={this.handleChange}
                          inputProps={{ ...input }}
                          displayEmpty
                          name="expireTime"
                          id="expireTime"
                        >
                          <MenuItem value="">
                            <p>Table Expired Time</p>
                          </MenuItem>
                          <MenuItem value={1}>1 Hour</MenuItem>
                          <MenuItem value={2}>2 Hours</MenuItem>
                          <MenuItem value={3}>3 Hours</MenuItem>
                          <MenuItem value={4}>4 Hours</MenuItem>
                        </Select>
                        {/* <FormHelperText>Table Expired Time</FormHelperText> */}
                      </div>
                    )}
                  />
                </FormControl>
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
                            <p>Number of Seats</p>
                          </MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                        </Select>
                        {/* <FormHelperText>Number of Seats</FormHelperText> */}
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
    restaurants: Restaurants.find({ owner: Meteor.userId() }).fetch()
  };
})(withStyles(styles)(TableForm));
