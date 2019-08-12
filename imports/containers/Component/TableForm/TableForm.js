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
import SubmitIcon from "@material-ui/icons/checkcircle";
import { Tables } from "../../../api/tables/tables";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

class TableForm extends Component {
  async onSubmit(newTable, restaurants) {
    const restaurantId = restaurants[0]._id;
    Meteor.call(
      await "tables.createTable",
      newTable,
      Meteor.userId(),
      restaurantId,
      (err, res) => {
        if (err) {
          throw err;
        } else {
          this.props.history.push(`/restaurant/${restaurantId}`);
        }
      }
    );
  }
  setToExpire = tableId => {
    Meteor.call("tables.setTableToExpired", tableId);
  };

  render() {
    const { classes, restaurants, tables } = this.props;
    const currentTable = tables.find(table => {
      const now = new Date();
      const newDate = new Date(table.expireTime);
      return newDate > now;
    });
    if (currentTable === undefined) {
      return (
        <div className={classes.tableForm}>
          <Form
            onSubmit={table => this.onSubmit(table, restaurants)}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <div>
                    <Field
                      name="discount"
                      render={({ input, meta }) => (
                        <label>
                          <TextField
                            id="discount"
                            inputProps={{ ...input, type: "number" }}
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
                      name="notes"
                      render={({ input, meta }) => (
                        <label>
                          <TextField
                            id="notes"
                            inputProps={{ ...input }}
                            label="Descriptions for table..."
                            value={input.value}
                            margin="normal"
                            className={classes.description}
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
                          </div>
                        )}
                      />
                    </FormControl>
                  </div>

                  <div className={classes.bottomWrapper}>
                    <FormControl>
                      <Field
                        name="maxPlaces"
                        render={({ input, meta }) => (
                          <div>
                            <Select
                              className={classes.seats}
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
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                              <MenuItem value={7}>7</MenuItem>
                              <MenuItem value={8}>8</MenuItem>
                              <MenuItem value={9}>9</MenuItem>
                              <MenuItem value={10}>10</MenuItem>
                            </Select>
                            <FormHelperText>Number of Seats</FormHelperText>
                          </div>
                        )}
                      />
                    </FormControl>

                    <button
                      className={classes.button}
                      type="submit"
                      disabled={pristine || invalid}
                    >
                      <SubmitIcon />
                    </button>
                  </div>
                </FormControl>
              </form>
            )}
          />
        </div>
      );
    } else {
      return (
        <div>
          <p>You already have a table avalible!</p>
          <p>
            You can set the current table to expired then create a new table
          </p>

          <button className={classes.button}>
            <Link
              component={RouterLink}
              to={`/restaurant/${restaurants[0]._id}`}
            >
              Go To My Table
            </Link>
          </button>

          <button
            className={classes.button}
            onClick={() => this.setToExpire(currentTable._id)}
          >
            Set Current Table To Expired
          </button>
        </div>
      );
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe("restaurants");
  Meteor.subscribe("tables");
  return {
    restaurants: Restaurants.find({ owner: Meteor.userId() }).fetch(),
    tables: Tables.find({ owner: Meteor.userId() }).fetch()
  };
})(withStyles(styles)(TableForm));
