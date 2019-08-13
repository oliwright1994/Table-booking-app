import { flexbox } from "@material-ui/system";

const styles = theme => ({
  root: { width: "100%", padding: 0, marginBottom: 50 },

  image: {
    width: "100vw",
    height: "60vh",
    objectFit: "cover"
  },

  restaurantName: {
    textAlign: "center",
    margin: 30,
    fontSize: 40
  },

  resWrapper: {
    display: "flex",
    width: "100%",
    marginTop: 40
  },

  wrapperLeft: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    marginLeft: "50px",
    justifyContent: "center",
    alignItems: "center"
  },

  cuisine: {
    paddingRight: "50px"
  },

  cuisineTitle: {
    color: "#AA0054",
    paddingTop: "5px"
  },

  cuisineList: {
    padding: "unset"
  },

  cuisineListItem: {
    padding: "0 20px",
    listStyleType: "disc"
  },

  reviews: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  reviewHead: {
    fontSize: 25,
    marginBottom: 20,
    color: "#AA0054",
    textAlign: "center"
  },

  wrapperRight: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    marginRight: "50px",
    alignItems: "center"
  },

  bookingHead: {
    fontSize: 25,
    marginBottom: 20,
    color: "#AA0054",
    textAlign: "center"
  },

  resInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  rightTitle: {
    color: "#AA0054",
    padding: "5px"
  },

  address: {
    color: "grey",
    paddingLeft: "5px"
  },

  website: {
    color: "grey",
    paddingLeft: "5px"
  },

  phone: {
    textDecoration: "underline",
    color: "grey",
    paddingLeft: "5px"
  },

  reviewForm: {
    width: "400px",
    textAlign: "center"
  },

  bio: {
    textAlign: "center"
  },

  topWrapper: {
    display: "flex",
    marginBottom: "40px"
  },

  map: {
    marginTop: "50px"
  }
});

export default styles;
