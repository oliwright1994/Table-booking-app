import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { Meteor } from "meteor/meteor";
import styles from "./styles";

class AccountsUIWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null,
      usertype: "customer"
    };
  }
  signUp = user => {
    const { email, password, usertype } = user;
    Meteor.call("users.createUser", email, password, usertype, (error, res) => {
      if (error) this.setState({ error: error.reason });
      else console.log(res);
    });
    this.logIn(user);
  };

  logIn = user => {
    const { email, password } = user;
    Meteor.loginWithPassword(email, password, error => {
      if (error) this.setState({ error: error.reason });
      else console.log(Meteor.userId());
    });
  };


  handleChange = event => {
    this.setState({ usertype: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Form
        onSubmit={values => {
          const user = {
            email: values.email,
            password: values.password,
            usertype: this.state.usertype
          };
          this.state.formToggle ? this.logIn(user) : this.signUp(user);
        }}
        render={({ handleSubmit, pristine, invalid, form }) => (
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            {!this.state.formToggle && (
              <FormControl fullWidth className={classes.formControl}>
                <FormLabel component="legend">UserType</FormLabel>
                <Field name="usertype">
                  {({ input, meta }) => {
                    return (
                      <RadioGroup
                        aria-label="usertype"
                        name="usertype"
                        className={classes.group}
                        value={input.value}
                        onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="customer"
                          checked={this.state.usertype == "customer"}
                          control={<Radio />}
                          label="Customer"
                        />
                        <FormControlLabel
                          value="restaurant"
                          checked={this.state.usertype == "restaurant"}
                          control={<Radio />}
                          label="Restaurant"
                        />
                      </RadioGroup>
                    );
                  }}
                </Field>
              </FormControl>
            )}
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Field name="email">
                {({ input, meta }) => {
                  return (
                    <Input
                      id="email"
                      required={true}
                      autoFocus={true}
                      inputProps={{
                        ...input,
                        type: "email",
                        autoComplete: "off"
                      }}
                      value={input.value}
                    />
                  );
                }}
              </Field>
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Field name="password">
                {({ input, meta }) => (
                  <Input
                    id="password"
                    required={true}
                    inputProps={{
                      ...input,
                      type: "password",
                      autoComplete: "off"
                    }}
                    value={input.value}
                  />
                )}
              </Field>
            </FormControl>
            {!!this.state.error ? (
              <Typography color="primary">{this.state.error}</Typography>
            ) : null}
            <FormControl className={classes.formControlButtom}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  className={classes.formButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  disabled={pristine || invalid}
                >
                  {this.state.formToggle ? "Enter" : "Create Account"}
                </Button>
                <div>
                  <button
                    className={classes.formToggle}
                    type="button"
                    onClick={() => {
                      this.setState({
                        formToggle: !this.state.formToggle
                      });
                    }}
                  >
                    {this.state.formToggle
                      ? "Create an account."
                      : "Login to existing account."}
                  </button>
                </div>
              </Grid>
            </FormControl>
          </form>
        )}
      />
    );
  }
}

export default withStyles(styles)(AccountsUIWrapper);
