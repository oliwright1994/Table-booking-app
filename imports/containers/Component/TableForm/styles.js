const styles = theme => ({
  tableForm: {
    width: "400px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,250,205, 0.8)",
    borderRadius: "50px"
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
  },
  newTableForm: {
    flexWrap: "wrap",
    padding: "20px",
    fontSize: "18px",
    flexDirection: "column"
  },
  buttonsLarge: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonLarge: {
    width: "150px",
    height: "50px",
    cursor: "pointer",
    backgroundColor: "unset",
    fontSize: "14px",
    margin: "20px",
    backgroundColor: "#8B2323",
    color: "rgb(255,250,205)"

  }
});


export default styles;
