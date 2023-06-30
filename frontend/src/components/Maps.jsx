import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "40rem"
};
// 40.7893459, 3.958297;
// const center = {
//   lat: 40.7893459,
//   lng: 3.958297
// };

// const centerr = {
//   lat: 48.6149919,
//   lng: 15.564328
// };

const Maps = ({ center }) => {
  return (
    <div>
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4.7}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
