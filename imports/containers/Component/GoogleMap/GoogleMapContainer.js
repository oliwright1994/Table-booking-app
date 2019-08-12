import React from "react";
import GoogleMap from "./GoogleMap";
import Geocode from "react-geocode";
import Loader from "../../Component/Loader";

Geocode.setApiKey("AIzaSyCTarxeCZCyhhU-T_S8BlG4sTyMyE_RaVo");

const GoogleMapContainer = ({ address }) => {
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

  return (
    <div>
      <GoogleMap />
    </div>
  );
};

export default GoogleMapContainer;
