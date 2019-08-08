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
      selectedCuisines: []
    };
  }

  updateRestaurant(values) {
    Meteor.call("restaurants.updateProfile", values, this.props.userId);
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
                        required={true}
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
                <FormControl>
                  <InputLabel htmlFor="phone">Phone Number</InputLabel>
                  <Field
                    name="phone"
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
