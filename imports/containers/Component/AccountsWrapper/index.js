import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Accounts } from 'meteor/accounts-base'
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Meteor } from "meteor/meteor"

export default class AccountsUIWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null,
      type: 'customer'
    };
  }
  signUp = (user) => {
    const { email, password, usertype } = user;
    Meteor.call("users.createUser", email, password, usertype, (err, res) => {
      if (err) console.log(err)
      else console.log(res)
    })

  }

  logIn = (user) => {
    const { email, password } = user;
    Meteor.call("users.logIn", email, password)
    // Meteor.loginWithPassword(email, password, function (error) {

    //   if (Meteor.user()) {
    //     console.log(Meteor.userId());
    //   } else {
    //     console.log("ERROR: " + error.reason);
    //   }
    // });
  }

  handleChange = (event) => {
    this.setState({ type: event.target.value })
  }

  render() {
    const { classes } = this.props;
    return (
      <Form
        // validate={validate.bind(this)}
        onSubmit={values => {
          const user = { email: values.email, password: values.password, type: values.usertype };
          this.state.formToggle
            ? this.logIn(user)
            : this.signUp(user);
          console.log(values);
        }}
        render={({ handleSubmit, pristine, invalid, form }) => (
          <form onSubmit={handleSubmit}
          // className={classes.accountForm}
          >
            {!this.state.formToggle && (
              <FormControl fullWidth
              // className={classes.formControl}
              >
                <FormLabel component="legend">UserType</FormLabel>
                <Field name="usertype">
                  {({ input, meta }) => {
                    return (
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        // className={classes.group}
                        value={input.value}
                        onChange={this.handleChange.bind(this)}
                      >
                        <FormControlLabel value="restaurant" checked={this.state.type == 'restaurant'} control={<Radio />} label="Restaurant" />
                        <FormControlLabel value="customer" checked={this.state.type == 'customer'} control={<Radio />} label="Customer" />
                      </RadioGroup>
                    )
                  }}
                </Field>

              </FormControl>
            )}
            <FormControl fullWidth
            // className={classes.formControl}
            >
              <InputLabel htmlFor="email">Email</InputLabel>
              <Field name="email">
                {({ input, meta }) => {
                  return (
                    <Input
                      id="email"
                      type="text"
                      inputProps={{
                        ...input,
                        autoComplete: 'off'
                      }}
                      value={input.value}

                    />
                  )
                }}
              </Field>
            </FormControl>
            <FormControl fullWidth
            // className={classes.formControl}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Field name="password">
                {({ input, meta }) => (
                  <Input
                    id="password"
                    type="password"
                    inputProps={{
                      ...input,
                      autoComplete: 'off'
                    }}
                    value={input.value}
                  />
                )
                }
              </Field>
            </FormControl>
            <FormControl
            // className={classes.formControl}
            >
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  // className={classes.formButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  disabled={
                    pristine || invalid
                  }
                >
                  {this.state.formToggle ? 'Enter' : 'Create Account'}
                </Button>
                <Typography>
                  <button
                    // className={classes.formToggle}
                    type="button"
                    onClick={() => {
                      // form.reset();
                      this.setState({
                        formToggle: !this.state.formToggle
                      });
                    }}
                  >
                    {this.state.formToggle
                      ? 'Create an account.'
                      : 'Login to existing account.'}
                  </button>
                </Typography>
              </Grid>
            </FormControl>
          </form>
        )
        }

      />

    )
  }


}