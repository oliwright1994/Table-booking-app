const styles = theme => ({
  root: {
    width: 250,
    height: 300,
    display: "flex",
    flexDirection: "column",
    marginBottom: "40px"
  },
  reviewHeadline: {
    display: "flex",
    alignItems: "center"
  },
  reviewHeader: {
    padding: 0,
    borderBottom: "solid 1px grey",
    padding: 10
  },
  reviewContent: {
    padding: 20,
    color: "grey",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1
  },
  date: {
    wordSpacing: 10
  }
});

export default styles;
