import React from 'react';
import { withAuth } from '../../context/authContext';
import { withTheme } from '../../context/themeContext';
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const PlaceCard = (props) => {
  const { place: { placeName, address, country, coordinatesLatLong: { Latitude, Longitude } } } = props;
  const pin = new Icon({
    iconUrl: 'https://www.seekpng.com/png/full/11-119662_current-locations-location-icon-blue-vector.png',
    iconSize: [50, 50]
  });

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Map
        style={{ height: "300px", width: "100%" }}
        center={[Latitude, Longitude]}
        zoom={17}
        scrollWheelZoom={false}
        zoomControl={false}
        touchExtend={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[Latitude, Longitude]} icon={pin} >
          <Popup>
            <p>Name: {placeName}</p>
            <p>Address: {address}</p>
            <p>Country: {country}</p>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default withAuth(withTheme(PlaceCard));