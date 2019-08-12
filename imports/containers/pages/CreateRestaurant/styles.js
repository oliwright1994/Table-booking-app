const styles = theme => ({
  pageContainer: {
    background: "url('/assets/images/createRestaurant.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh"
  },

  title: {
    textAlign: "center",
    padding: "20px 0"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    margin: "0 430px"
  },

  resInfo: {
    display: "flex",
    height: "250px"
  },

  resInfoLeft: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },

  resInfoLeftField: {
    width: "70%"
  },
  resInfoLeftEmail: {
    width: "90%"
  },

  resInfoRight: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginRight: "15px"
  },

  description: {
    marginBottom: "20px",
    marginRight: "15px"
  },

  image: {
    marginBottom: "30px",
    marginRight: "15px"
  },

  cuisineWrapper: {
    display: "flex"
  },

  cuisineLeft: {
    width: "60%",
    display: "flex"
  },

  cuisineRight: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  cuisine: {
    paddingBottom: "10px"
  },

  button: {
    width: "60px",
    height: "60px"
  },

  cuisineSelect: {
    display: "flex",
    flexDirection: "column",
    width: "60%"
  },

  cuisineInfo: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
