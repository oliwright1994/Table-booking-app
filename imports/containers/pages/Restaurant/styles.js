import { flexbox } from "@material-ui/system";

const styles = theme => ({
  root: { width: "100%", padding: 0 },
  image: {
    width: "100vw",
    height: "40vh",
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
  cuisineListItem: {
    padding: 0,
    listStyleType: "disc"
  },
  bookingHeadline: {
    fontSize: 25,
    marginBottom: 20
  },
  cuisineList: {},
  doubleColumn: {
    display: "flex",
    width: "100%",
    marginTop: 40
  },
  website: {
    color: "grey"
  },
  singleColumn: {
    display: "flex",
    flexDirection: "column",
    width: "50%"
  },
  phone: {
    textDecoration: "underline",
    color: "grey"
  }
});

export default styles;
