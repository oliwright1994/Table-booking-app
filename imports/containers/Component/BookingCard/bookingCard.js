import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Meteor } from "meteor/meteor";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./styles";
import FilledInput from "@material-ui/core/FilledInput";

class BookingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSeats: 0
    };
  }
  handleChange = event => {
    this.setState({ selectSeats: event.target.value });
  };
  bookTable = (tableId, userId, numberOfGuests) => {
    Meteor.call("tables.updateBooking", tableId, userId, numberOfGuests);
  };
  cancleTable = (table, tableId, userId) => {
    const numberofGuests = table.customers.find(
      customer => customer.customerId == Meteor.userId()
    ).guests;
    Meteor.call("tables.cancelBooking", tableId, userId, numberofGuests);
  };
  setToExpire = tableId => {
    Meteor.call("tables.setTableToExpired", tableId);
  };

  render() {
    const { classes, restaurant, table, expired } = this.props;
    const tableDefaultNotes =
      "This is nice restautant, come eat here. We have food and table and seats";

    const { cuisine1, cuisine2, cuisine3 } = restaurant;
    const cuisines = [cuisine1, cuisine2, cuisine3].filter(e => !!e);

    const spaceDropdown = [];
    for (let i = table.placesAvailable; i > 0; i--) {
      spaceDropdown.push(i);
    }

    return (
      <div>
        <Card className={classes.root}>
          <Link component={RouterLink} to={`/restaurant/${restaurant._id}`}>
            <CardMedia
              className={classes.media}
              image={
                restaurant.imageurl
                  ? restaurant.imageurl
                  : "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg"
              }
              title="restaurant Image"
              height="200"
              component="img"
              width="200"
            />
          </Link>
          <div className={classes.bookingWrapper}>
            <Link
              component={RouterLink}
              to={`/restaurant/${restaurant._id}`}
              className={classes.bookingInfo}
            >
              <CardContent className={classes.content}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h3"
                  className={classes.contentInfoTitle}
                >
                  {restaurant.name}
                </Typography>

                {cuisines ? (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.contentInfo}
                  >
                    {cuisines.join(", ")}
                  </Typography>
                ) : null}

                <div className={classes.discountContainer}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.contentInfo}
                  >
                    {`Discount: `}
                    {table.discount ? table.discount : null}%
                  </Typography>
                </div>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  className={classes.contentInfo}
                >
                  {table.notes ? table.notes : tableDefaultNotes}
                </Typography>

                <div variant="body2" color="textSecondary" component="p">
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={classes.contentRating}
                  >
                    <Rating value={restaurant.rating} readOnly />
                  </Box>
                </div>
              </CardContent>
            </Link>

            <div className={classes.bookingSeats}>
              <div className={classes.bookingSeatsWrapper}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.seatAvailable}
                >
                  {!expired
                    ? table.placesAvailable > 1
                      ? `${table.placesAvailable} seats left`
                      : `${table.placesAvailable} seat left`
                    : null}
                </Typography>

                {Meteor.user().profile.usertype == "customer" &&
                  table.customers.find(
                    customer => customer.customerId == Meteor.userId()
                  ) && (
                    <div className={classes.cancle}>
                      <CardActions>
                        <Button
                          size="small"
                          className={classes.cancelBookingButton}
                          onClick={() =>
                            this.cancleTable(table, table._id, Meteor.userId())
                          }
                          disabled={expired}
                        >
                          {expired || expired === undefined
                            ? "Table Expired"
                            : "Cancel Book"}
                        </Button>
                      </CardActions>
                    </div>
                  )}
                {Meteor.user().profile.usertype == "customer" &&
                  !table.customers.find(
                    customer => customer.customerId == Meteor.userId()
                  ) && (
                    <div className={classes.seats}>
                      <FormControl
                        variant="filled"
                        className={classes.seatsControl}
                      >
                        <InputLabel htmlFor="book" />
                        <Select
                          value={this.state.selectSeats}
                          onChange={this.handleChange}
                          input={
                            <FilledInput name="book" id="numOfPeopleBook" />
                          }
                        >
                          {spaceDropdown.map(i => (
                            <MenuItem key={i} value={i}>
                              {" "}
                              {i}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <CardActions>
                        <Button
                          size="small"
                          className={classes.bookingButton}
                          disabled={!this.state.selectSeats}
                          onClick={() =>
                            this.bookTable(
                              table._id,
                              Meteor.userId(),
                              this.state.selectSeats
                            )
                          }
                        >
                          Book
                        </Button>
                      </CardActions>
                    </div>
                  )}

                {Meteor.user().profile.usertype == "restaurant" && (
                  <div>
                    <CardActions>
                      <Button
                        size="small"
                        className={classes.Button}
                        disabled={expired}
                        onClick={() => this.setToExpire(table._id)}
                      >
                        Set Table To Expire
                      </Button>
                    </CardActions>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(BookingCard);
