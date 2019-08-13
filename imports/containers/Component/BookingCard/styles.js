const styles = theme => ({
  root: {
    width: "500px",
    height: "450px",
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
  },

  bookingSeats: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  contentInfoTitle: {
    color: "black",
    paddingBottom: "5px",
    fontSize: "20px"
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

  seatsLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "20px"
  },

  cancelBookingButton: {
    padding: "unset"
  },

  contentInfoDiscount: {
    display: "flex",
    paddingBottom: "5px"
  },

  discountColor: {
    color: "red",
    paddingLeft: "5px"
  }
});

export default styles;
