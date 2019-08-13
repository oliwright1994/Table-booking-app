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

  tableForm2: {
    width: "400px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,250,205, 0.8)",
    borderRadius: "50px"
  },

  topWrapper: {
    display: "flex",
    justifyContent: "space-between"
  },

  discount: {
    width: "150px",
    height: "50px",
    margin: "2px 0 0 0"
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
    alignItems: "center",
    marginTop: "20px"
  },

  buttonIcon: {
    height: "50px",
    width: "50px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "unset"
  }, 

  text: {
    margin: "0 50px",
    lineHeight: "2.5"
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "400px"
  },

  button: {
    height: "60px",
    width: "150px",
    background: "rgb(139,35,35, 0.8)",
    color: "rgb(255,250,205, 0.7)",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  smallText: {
    paddingLeft: "15px"
  },

  buttonFont: {
    fontSize: "15px",
    color: "rgb(255,250,205, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  expired: {
    height: "40px"
  }
});


export default styles;
