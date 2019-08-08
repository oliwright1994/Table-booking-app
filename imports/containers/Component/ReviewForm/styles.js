const styles = theme => ({
  root: {
    border: "solid 1px grey",
    padding: 20,
    paddingRight: 30,
    paddingleft: 30,
    marginTop: 30
  },
  textArea: {
    borderRadius: 0,
    padding: 0,
    width: "100%",
    "& div": {
      borderRadius: 0
    }
  },
  rating: {
    marginBottom: 20,
    borderBottom: "solid 1px grey",
    paddingBottom: 10
  },
  submitButton: {
    marginTop: 15,
    backgroundColor: "#9C3C35",
    borderRadius: 15
  },
  submitButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%"
  },
  reviewHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10
  },
  profilePic: {
    borderRadius: "50%",
    marginRight: 10
  }
});

export default styles;
