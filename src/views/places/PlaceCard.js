import React from 'react';
import { withAuth } from '../../context/authContext';
import { withTheme } from '../../context/themeContext';
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const PlaceCard = (props) => {
  const { place: { placeName, address, coordinatesLatLong: { Latitude, Longitude } } } = props;
  const pin = new Icon({
    iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
    iconSize: [50, 50]
  });

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <p>PlaceCard:</p>
      <label htmlFor="">placeName</label>
      <p>{placeName}</p>
      <label htmlFor="">address</label>
      <p>{address}</p>
      <Map
        style={{ height: "300px", width: "100%" }}
        center={[Latitude, Longitude]}
        zoom={17}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[Latitude, Longitude]} icon={pin} >
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default withAuth(withTheme(PlaceCard));