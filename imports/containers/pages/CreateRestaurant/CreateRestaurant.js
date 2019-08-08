import { withStyles } from "@material-ui/core/styles";
import { Form, Field, FormSpy } from "react-final-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";

import React, { Component } from "react";

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
        console.log(res[0]._id);
        this.props.history.push(`/restaurant/${res[0]._id}`);
      }
    );
  }

  render() {
    const { restaurant, classes, cuisines } = this.props;
    return (
      <div>
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
              <form onSubmit={handleSubmit} className={classes.root}>
                <FormControl>
                  <InputLabel htmlFor="name">Restaurant Name</InputLabel>
                  <Field
                    name="name"
                    required={true}
                    render={({ input, meta }) => (
                      <Input
                        id="name"
                        type="text"
                        inputProps={{ ...input, autoComplete: "off" }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="description">Description</InputLabel>
                  <Field
                    name="description"
                    required={true}
                    render={({ input, meta }) => (
                      <Input
                        id="description"
                        type="text"
                        multiline={true}
                        rows={8}
                        inputProps={{ ...input, autoComplete: "off" }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="imageurl">Image URL</InputLabel>
                  <Field
                    name="imageurl"
                    required={true}
                    render={({ input, meta }) => (
                      <Input
                        id="imageurl"
                        type="text"
                        inputProps={{ ...input, autoComplete: "off" }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="phone">Phone Number</InputLabel>
                  <Field
                    name="phone"
                    required={true}
                    render={({ input, meta }) => (
                      <Input
                        id="phone"
                        type="tel"
                        inputProps={{ ...input, autoComplete: "off" }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
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
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Field
                    name="email"
                    required={true}
                    render={({ input, meta }) => (
                      <Input
                        id="email"
                        type="email"
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
                    required={true}
                    render={({ input, meta }) => (
                      <Input
                        id="website"
                        type="url"
                        inputProps={{ ...input, autoComplete: "off" }}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
                <Typography component="p">
                  Select some cuisines for your restaurant (max 3)
                </Typography>
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
                        <MenuItem key={cuisine._id} value={cuisine.title}>
                          {cuisine.title}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
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
                        <MenuItem key={cuisine._id} value={cuisine.title}>
                          {cuisine.title}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <Button
                  variant="contained"
                  type="submit"
                  disabled={pristine || invalid}
                >
                  Update
                </Button>
              </form>
            );
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(CreateRestaurant);
