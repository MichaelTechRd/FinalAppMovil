import { Fragment, useState } from "react";
import "./MapadeMultas.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Multas from "../helpers/multas.json";

const Clima: React.FC = () => {

  return (
    <div className="container">
      {/* <h1>hiola</h1>
      <Fragment>
        {new Map("map").setView([43.3082977, -1.9837398], 10)}
      </Fragment> */}
      <MapContainer
        center={[18.4838, -69.88]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[18.4838, -69.8896]}>
          <Popup>
            Soleado
          </Popup>
        </Marker>

        <Marker position={[18.4835, -69.9393]}>
          <Popup>
            Soleado
          </Popup>
        </Marker>

        <Marker position={[18.4829, -69.9117]}>
          <Popup>
            Nublado
          </Popup>
        </Marker>

        <Marker position={[18.4727, -69.941]}>
          <Popup>
            Precipitacion de lluvia
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Clima;
