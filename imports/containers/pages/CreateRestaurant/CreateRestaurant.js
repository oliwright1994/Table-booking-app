import { withStyles } from "@material-ui/core/styles";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Restaurant from "@material-ui/icons/restaurantmenu";
import React, { Component } from "react";
import PropTypes from 'prop-types';

class CreateRestaurant extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      selectedCuisines: [],
      bookingsRes: null
    };
  }

  async updateRestaurant(values) {
    let booking = Meteor.call(
      await "restaurants.updateProfile",
      values,
      this.props.userId,
      (err, res) => {
        this.props.history.push(`/restaurant/${res[0]._id}`);
      }
    );
  }

  displayHeaderText(restaurant) {
    if (!restaurant) {
      return (
        <div>
          <Typography component="h1">Welcome!</Typography>
          <Typography>
            Before you get started, <br />
            lets get a few details about your restaurant to help you get setup.
          </Typography>
        </div>
      );
    } else {
      return (
        <div>
          <Typography component="h1">
            Update your restaurants profile.
          </Typography>
        </div>
      );
    }
  }

  render() {
    const { restaurant, classes, cuisines } = this.props;
    return (
      <div className={classes.pageContainer}>
        <div className={classes.title}>
          {this.displayHeaderText(restaurant)}
        </div>
        <Form
          onSubmit={values => this.updateRestaurant(values)}
          initialValues={restaurant ? { ...restaurant } : null}
          render={({
            handleSubmit,
            pristine,
            form,
            submitting,
            values,
            invalid
          }) => {
            return (
              <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.resInfo}>
                  <div className={classes.resInfoLeft}>
                    <FormControl className={classes.resInfoLeftField}>
                      <InputLabel htmlFor="name">Restaurant Name</InputLabel>
                      <Field
                        name="name"
                        required={true}
                        render={({ input, meta }) => (
                          <Input
                            autoFocus={true}
                            required={true}
                            id="name"
                            type="text"
                            inputProps={{ ...input, autoComplete: "off" }}
                            value={input.value}
                          />
                        )}
                      />
                    </FormControl>

                    <FormControl className={classes.resInfoLeftField}>
                      <InputLabel htmlFor="phone">Phone Number</InputLabel>
                      <Field
                        name="phone"
                        className={classes.resInfoLeftInput}
                        required={true}
                        render={({ input, meta }) => (
                          <Input
                            id="phone"
                            inputProps={{
                              ...input,
                              autoComplete: "off",
                              type: "tel"
                            }}
                            value={input.value}
                          />
                        )}
                      />
                    </FormControl>

                    <FormControl className={classes.resInfoLeftEmail}>
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <Field
                        name="email"
                        className={classes.resInfoLeftInput}
                        render={({ input, meta }) => (
                          <Input
                            id="email"
                            required={true}
                            inputProps={{
                              ...input,
                              autoComplete: "off",
                              type: "email"
                            }}
                            value={input.value}
                          />
                        )}
                      />
                    </FormControl>
                  </div>
                  <div className={classes.resInfoRight}>
                    <FormControl>
                      <InputLabel htmlFor="address">Adress</InputLabel>
                      <Field
                        name="address"
                        required={true}
                        render={({ input, meta }) => (
                          <Input
                            id="address"
                            multiline={true}
                            rows={5}
                            type="text"
                            inputProps={{ ...input, autoComplete: "off" }}
                            value={input.value}
                          />
                        )}
                      />
                    </FormControl>

                    <FormControl>
                      <InputLabel htmlFor="website">Website</InputLabel>
                      <Field
                        name="website"
                        render={({ input, meta }) => (
                          <Input
                            required={true}
                            id="website"
                            type="url"
                            inputProps={{
                              ...input,
                              autoComplete: "off",
                              type: "website"
                            }}
                            value={input.value}
                          />
                        )}
                      />
                    </FormControl>
                  </div>
                </div>
                <FormControl className={classes.description}>
                  <InputLabel htmlFor="description">Description</InputLabel>
                  <Field
                    name="description"
                    required={true}
                    render={({ input, meta }) => (
                      <Input
                        id="description"
                        type="text"
                        multiline={true}
                        rows={6}
                        inputProps={{ ...input, autoComplete: "off" }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
                <FormControl className={classes.image}>
                  <InputLabel htmlFor="imageurl">Image URL</InputLabel>
                  <Field
                    name="imageurl"
                    render={({ input, meta }) => (
                      <Input
                        required={true}
                        id="imageurl"
                        inputProps={{
                          ...input,
                          autoComplete: "off",
                          type: "url"
                        }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
                <div className={classes.cuisineWrapper}>
                  <div className={classes.cuisineLeft}>
                    <div className={classes.cuisineInfo}>
                      <Typography component="p">
                        Select some <br />
                        cuisines for <br />
                        your restaurant <br />
                        (max 3)
                      </Typography>
                    </div>
                    <div className={classes.cuisineSelect}>
                      <FormControl className={classes.cuisine}>
                        <Field
                          fullWidth
                          inputProps={{ autoComplete: "off" }}
                          name="cuisine1"
                          render={({ input, meta }) => (
                            <Select
                              input={<Input id="select-multiple" />}
                              id="select-multiple"
                              inputProps={{
                                ...input,
                                autoComplete: "off"
                              }}
                            >
                              {cuisines.map(cuisine => (
                                <MenuItem
                                  id={cuisine._id}
                                  key={cuisine._id}
                                  value={cuisine.title}
                                >
                                  {cuisine.title}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                      </FormControl>
                      <FormControl className={classes.cuisine}>
                        <Field
                          fullWidth
                          inputProps={{ autoComplete: "off" }}
                          name="cuisine2"
                          render={({ input, meta }) => (
                            <Select
                              inputProps={{
                                ...input,
                                autoComplete: "off"
                              }}
                            >
                              {cuisines.map(cuisine => (
                                <MenuItem
                                  key={cuisine._id}
                                  value={cuisine.title}
                                >
                                  {cuisine.title}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                      </FormControl>
                      <FormControl className={classes.cuisine}>
                        <Field
                          fullWidth
                          inputProps={{ autoComplete: "off" }}
                          name="cuisine3"
                          formControlProps={{ fullWidth: true }}
                          render={({ input, meta }) => (
                            <Select
                              inputProps={{
                                ...input,
                                autoComplete: "off"
                              }}
                            >
                              {cuisines.map(cuisine => (
                                <MenuItem
                                  key={cuisine._id}
                                  value={cuisine.title}
                                >
                                  {cuisine.title}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className={classes.cuisineRight}>
                    <Button
                      className={classes.button}
                      variant="contained"
                      type="submit"
                      disabled={pristine || invalid}
                    >
                      <div >
                        <Restaurant />
                        <span>Update</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </form>
            );
          }}
        />
      </div>
    );
  }
}
CreateRestaurant.propTypes = {
  classes: PropTypes.object.isRequired,
  restaurant: PropTypes.object.isRequired,
  cuisines: PropTypes.array.isRequired,
}
export default withStyles(styles)(CreateRestaurant);
