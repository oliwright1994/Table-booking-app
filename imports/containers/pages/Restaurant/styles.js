import { flexbox } from "@material-ui/system";

const styles = theme => ({
  root: { width: "100%", padding: 0 },

  container: {
    background: "url('/assets/images/Restaurant.jpg')"
  },

  image: {
    width: "100vw",
    height: "300px",
    objectFit: "cover"
  },

  restaurantContent: {
    padding: 50
  },

  restaurantName: {
    textAlign: "center",
    marginBottom: 30,
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
    width: "50%"
  },

  cuisine: {
    padding: "20px"
  },

  cuisineList: {
    color: "#AA0054"
  },

  cuisineListItem: {
    padding: 0,
    listStyleType: "disc"
  },

  reviews: {
    padding: "20px"
  },

  reviewHead: {
    fontSize: 25,
    marginBottom: 20,
    color: "#AA0054"
  },

  wrapperRight: {
    display: "flex",
    flexDirection: "column",
    width: "50%"
  },

  bookingHead: {
    fontSize: 25,
    marginBottom: 20,
    color: "#AA0054"
  },

  rightTitle: {
    color: "#AA0054",
    padding: "5px"
  },

  address: {
    color: "lightslategrey",
    paddingLeft: "5px"
  },

  website: {
    color: "lightslategrey",
    paddingLeft: "5px"
  },

  phone: {
    textDecoration: "underline",
    color: "lightslategrey",
    paddingLeft: "5px"
  }
});

export default styles;
