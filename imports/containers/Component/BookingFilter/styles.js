const styles = theme => ({
  root: {
    height: "100%",
    width: "100%",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.primary.main
  }
});

export default styles;
