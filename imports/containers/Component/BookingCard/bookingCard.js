import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Meteor } from "meteor/meteor"
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';
import styles from './styles'
import FilledInput from '@material-ui/core/FilledInput';

class BookingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSeats: 0
    };
  }
  handleChange = (event) => {
    this.setState({ selectSeats: event.target.value })
  }
  bookTable = (tableId, userId, numberOfGuests) => {
    console.log("submit:", tableId, numberOfGuests, userId)
    Meteor.call("tables.updateBooking", tableId, userId, numberOfGuests);
  }

  render() {
    const { classes, restaurant, table } = this.props;
    console.log("imageurl", restaurant.imageurl);
    const tableDefaultNotes = "This is nice restautant, come eat here. We have food and table and seats";
    const spaceDropdown = [];

    for (let i = table.placesAvailable; i > 0; i--) {
      spaceDropdown.push(i);
    }
    return (
      <div className={classes.root}>
        <Card className={classes.root}>
          {/* <Link component={RouterLink} to={`/restaurant/${restaurant._id}`}> */}
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={restaurant.imageurl ? restaurant.imageurl : "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg"}
              title="restaurant Image"
              height='200'
              component='img'
              width='200'
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="span" className={classes.resInfo}>
                <Typography variant="body2" color="textSecondary" component="div" className={classes.meta}>
                  <Typography variant="body2" color="textSecondary" component="h3" className={classes.resName}>
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {restaurant.cuisines.join(", ")}
                  </Typography>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div" className={classes.discountContainer}>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.discount}>
                    {table.discount ? table.discount : null}
                  </Typography>
                </Typography>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div" className={classes.resBio}>
                {table.notes ? table.notes : tableDefaultNotes}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="div" className={classes.bookingInfo}>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.rating}>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating value={restaurant.rating} readOnly />
                  </Box>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.bookingContainer}>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.seatAvailable}>
                    {table.placesAvailable > 1 ? `${table.placesAvailable} seats left` : `${table.placesAvailable} seat left`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.booking}>

                    <FormControl variant="filled" className={classes.formControl}>
                      <InputLabel htmlFor="book"></InputLabel>
                      <Select
                        value={this.state.selectSeats}
                        onChange={this.handleChange}
                        input={<FilledInput name="book" id="numOfPeopleBook" />}

                      >
                        {spaceDropdown.map((i) => <MenuItem key={i} value={i} > {i}</MenuItem>)}

                      </Select>
                    </FormControl>
                    <CardActions>
                      <Button
                        size="small"
                        className={classes.bookingButton}
                        disabled={
                          !this.state.selectSeats
                        }
                        onClick={() =>
                          this.bookTable(table._id, Meteor.userId(), this.state.selectSeats)
                        }
                      >
                        Book
                      </Button>
                    </CardActions>


                  </Typography>
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* </Link> */}

        </Card>
      </div>
    )
  }
}
export default withStyles(styles)(BookingCard);