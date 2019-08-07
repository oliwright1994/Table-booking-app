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

import React, { Component } from "react";

class CreateRestaurant extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      selectedCuisines: []
    };
  }

  updateRestaurant(values) {
    Meteor.call("restaurants.updateProfile", values, this.props.userId);
  }

  handleSelectCuisine(event) {
    this.setState({ selectedCuisines: event.target.value });
  }

  generateTagsText(cuisines, selected) {
    return cuisines
      .map(cuisine =>
        selected.indexOf(cuisine._id) > -1 ? cuisine.title : false
      )
      .filter(e => e)
      .join(", ");
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
                <FormControl fullWidth>
                  <InputLabel htmlFor="cuisines">Add some Cuisines</InputLabel>
                  <Field name="cuisines">
                    {({ input, meta }) => {
                      return (
                        <Select
                          fullWidth={true}
                          multiple
                          value={this.state.selectedCuisines}
                          onChange={e => this.handleSelectCuisine(e)}
                          renderValue={selected => {
                            return this.generateCuisinesText(
                              cuisines,
                              selected
                            );
                          }}
                        >
                          {cuisines &&
                            cuisines.map(cuisine => (
                              <MenuItem key={cuisine._id} value={cuisine.title}>
                                <Checkbox
                                  checked={
                                    this.state.selectedCuisines.indexOf(
                                      cuisine._id
                                    ) > -1
                                  }
                                />
                                <ListItemText primary={cuisine.title} />
                              </MenuItem>
                            ))}
                        </Select>
                      );
                    }}
                  </Field>
                </FormControl>
                <Button
                  variant="contained"
                  // onClick={console.log("submit button")}
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
