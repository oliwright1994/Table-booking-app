import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";
import Loader from "../../Component/Loader";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    Geocode.setApiKey("AIzaSyCTarxeCZCyhhU-T_S8BlG4sTyMyE_RaVo");
    Geocode.fromAddress({ address }).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        return (
          <div>
            <GoogleMap lat={lat} lng={lng} />
          </div>
        );
      },
      error => {
        console.error(error);
      }
    );
    if (this.state.lat === null || this.state.lng === null) {
      return <Loader />;
    } else {
      return (
        <div style={{ height: 400, width: 300 }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCTarxeCZCyhhU-T_S8BlG4sTyMyE_RaVo"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default GoogleMap;
