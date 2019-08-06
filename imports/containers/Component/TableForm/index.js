import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";
class TableForm extends Component {
  state = {
    text: ""
  };

  handleInput = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit(formState) {
    console.log(formState);
  }

  render() {
    const { text } = this.state;
    const { classes } = this.props;

    return (
      <Form
        onSubmit={formState => this.onSubmit(formState)}
        // validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <div>
                {/* <label>Discount</label> */}
                <Field
                  name="Discount"
                  render={({ input, meta }) => (
                    <label>
                      <TextField
                        id="Discount"
                        inputProps={{ ...input }}
                        label="Insert discount here"
                        value={input.value}
                        // margin="normal"
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
                        label="Descriptions for table"
                        value={input.value}
                        // margin="noraml"
                      />
                    </label>
                  )}
                />
              </div>

              {/* <div>
                <FormControl>
                  <Select
                    value={values.age}
                    onChange={handleChange}
                    displayEmpty
                    name="age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Without label</FormHelperText>
                </FormControl>
              </div> */}

              {/* <button type="submit" disabled={pristine || invalid}>
                Submit
              </button> */}
            </FormControl>
          </form>
        )}
      />
    );
  }
}

export default TableForm;
