import React from "react";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Gravatar from "react-gravatar";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ReviewCard = ({ classes, review }) => {
  const { text, date, rating, impression, authorEmail } = review;
  return (
    <Card className={classes.root}>
      <div className={classes.reviewHeader}>
        <div className={classes.reviewHeadline}>
          <Gravatar
            className={classes.profilePic}
            email={`"${authorEmail}"`}
            size={40}
          />
          <p>{impression ? `"${impression}"` : "No overall impression yet"}</p>
        </div>
        <Rating value={rating} readOnly />
      </div>
      <div className={classes.reviewContent}>
        <Typography component="p">
          "{text ? text : "No review given"}"
        </Typography>
        <Typography component="p" className={classes.date}>
          {date.toLocaleDateString("en-US")}
        </Typography>
      </div>
    </Card>
  );
};

export default withStyles(styles)(ReviewCard);
