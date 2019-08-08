const styles = theme => ({
  tableForm: {
    width: "400px",
    height: "300px",
    // border: " 1px solid red",
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,250,205, 0.7)"
  },

  discount: {
    width: "300px",
    height: "50px"
  },

  description: {
    width: "300px",
    height: "50px"
  },

  seats: {
    height: "50px",
    width: "100px"
  },

  bottomWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  button: {
    height: "50px",
    width: "50px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "unset"
  },

  submitIcon: {
    fontSize: "2rem"
  }
});

export default styles;
