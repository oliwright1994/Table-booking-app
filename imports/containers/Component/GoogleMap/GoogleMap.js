import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";
import Loader from "../../Component/Loader";
import LocationOn from "@material-ui/icons/LocationOn";
import { GOOGLE_API_KEY } from "../../../../googleapi";

const MapMarker = () => (
  <div>
    <LocationOn />
  </div>
);
class GoogleMap extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      center: {
        lat: null,
        lng: null
      },
      zoom: 15
    };
  }

  componentDidMount() {
    const { address } = this.props;
    Geocode.setApiKey(GOOGLE_API_KEY);
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;

        this.setState({ center: { lat: lat, lng: lng } });
      },
      error => {}
    );
  }

  render() {
    if (this.state.center.lat === null || this.state.center.lng === null) {
      return (
        <div style={{ height: 300, width: 500 }}>
          <Loader />
        </div>
      );
    } else {
      return (
        <div style={{ height: 300, width: 500 }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: GOOGLE_API_KEY
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <MapMarker
              lat={this.state.center.lat}
              lng={this.state.center.lng}
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default GoogleMap;
