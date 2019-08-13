const styles = theme => ({
  root: {
    textAlign: "center"
  },

  background: {
    backgroundImage: "url('/assets/images/restaurant-tables.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
    boxShadow: "inset 0 0 0 100vmax rgba(0, 0, 0, .3)"
  },

  title: {
    color: "lightgoldenrodyellow",
    margin: "unset",
    paddingTop: "40px",
    textShadow: "1px 1px lightslategrey",
    textTransform: "capitalize"
  },

  container: {
    display: "flex",
    justifyContent: "center",
    margin: "10% 15%"
  }
});

export default styles;
