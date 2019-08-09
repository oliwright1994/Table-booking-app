const styles = theme => ({
  root: {
    width: "500px",
    height: "390px",
    justifySelf: "center"
  },

  bookingWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },

  bookingInfo: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    // "&hover": {
    //   background: "red"
    // }
  },

  bookingSeats: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  contentInfoTitle: {
    color: "red",
    paddingBottom: "5px"
  },

  contentInfo: {
    paddingBottom: "5px"
  },

  contentRating: {
    margin: "unset",
    padding: "15px 0"
  },

  bookingSeatsWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 30px"
  },

  seats: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  seatsControl: {
    width: "50px"
  },

  cancelBookingButton: {
    padding: "unset"
  }
});

export default styles;
