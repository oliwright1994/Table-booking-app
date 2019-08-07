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

class TableForm extends Component {
  state = {
    seats: "",
    text: ""
  };

  handleInput = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit = table => {
    console.log(table);
    const { values, userId, restaurantId } = table;
    Meteor.call("tables.createTable", values, userId, restaurantId);
  };

  handleChange = event => {
    this.setState({ seats: event.target.value });
  };

  render() {
    const { text, seats } = this.state;
    const { classes } = this.props;

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
                  name="Notes"
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
                  <Select
                    value={seats}
                    onChange={this.handleChange}
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

export default withStyles(styles)(TableForm);
