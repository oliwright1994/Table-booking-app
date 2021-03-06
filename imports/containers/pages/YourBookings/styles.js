const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `"current past"`,
    margin: "50px 100px"
  },

  current: {
    gridArea: "current",
    justifySelf: "center"
  },

  past: {
    gridArea: "past",
    justifySelf: "center"
  },

  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  booking: {
    marginBottom: "50px"
  },
});

export default styles;
