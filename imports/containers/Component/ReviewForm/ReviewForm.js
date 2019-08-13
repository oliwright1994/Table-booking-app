import styles from "./styles";
import { Form, Field } from "react-final-form";
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import Gravatar from "react-gravatar";
import PropTypes from 'prop-types';

class ReviewForm extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      starRating: 0
    };
    this.formRef = React.createRef();
  }
  submitReview(values, rating) {
    Meteor.call(
      "reviews.createReview",
      { ...values, rating: rating },
      this.props.user._id,
      this.props.restaurantId,
      this.props.user.emails[0].address
    );
  }
  setValue(event, value) {
    this.setState({ starRating: +event.target.value });
  }
  resetForm(form) {
    form.reset();
    this.setState({ starRating: 0 });
  }
  render() {
    const { classes, user } = this.props;

    return (
      <div>
        <Form
          onSubmit={values => this.submitReview(values, this.state.starRating)}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            reset
          }) => (
              <form
                className={classes.root}
                onSubmit={handleSubmit}
                ref={this.formRef}
              >
                <div className={classes.reviewHeader}>
                  <Gravatar
                    className={classes.profilePic}
                    email={user.emails[0].address}
                    size={40}
                  />
                  <Field
                    name="impression"
                    required={true}
                    render={({ input, meta }) => (
                      <div>
                        <TextField
                          fullWidth={true}
                          placeholder="Your overall impression..."
                          inputProps={{ ...input }}
                        />
                      </div>
                    )}
                  />
                </div>
                <Field
                  name="rating"
                  required={true}
                  render={({ input, meta }) => (
                    <div>
                      <Rating
                        className={classes.rating}
                        name="rating"
                        value={this.state.starRating}
                        onChange={(event, newValue) => {
                          this.setValue(event, newValue);
                        }}
                      />
                    </div>
                  )}
                />
                <Field
                  name="text"
                  required={true}
                  render={({ input, meta }) => (
                    <div>
                      <TextField
                        variant="outlined"
                        className={classes.textArea}
                        placeholder="Add your review here..."
                        inputProps={{ ...input }}
                        multiline={true}
                        rows={8}
                      />
                    </div>
                  )}
                />
                <div className={classes.submitButtonWrapper}>
                  <Button
                    className={classes.submitButton}
                    type="submit"
                    variant="contained"
                    disabled={submitting || pristine}
                  // onClick={() => this.resetForm(form)}
                  >
                    Post Review
                </Button>
                </div>
              </form>
            )}
        />
      </div>
    );
  }
}
ReviewForm.propTypes = {
  classes: PropTypes.object.isRequired,
  restaurantId: PropTypes.string.isRequired,
  user: PropTypes.array.isRequired,
}

export default withStyles(styles)(ReviewForm);
