import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const Loader = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.loader}>
        <CircularProgress variant="indeterminate" />
        <p>Loading...</p>
      </div>
    </div>
  );
};
Loader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Loader);
