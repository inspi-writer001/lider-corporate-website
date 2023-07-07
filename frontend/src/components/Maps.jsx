import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import lidermap from "../assets/liderrr.png";

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
const leaf = "Jana Kilińskiego 15, 34-400 Nowy Targ, Poland";

const key = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

const Maps = ({ center }) => {
  const [latLng, setLatLng] = useState(null);
  useEffect(() => {
    Geocode.setApiKey(key);
    Geocode.fromAddress(center).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatLng({ lat, lng });
      },
      (error) => {
        console.error("Error while geocoding:", error);
      }
    );
  }, [center]);

  return (
    <div>
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap mapContainerStyle={containerStyle} center={latLng} zoom={15}>
          {latLng && <Marker position={latLng} />}{" "}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
