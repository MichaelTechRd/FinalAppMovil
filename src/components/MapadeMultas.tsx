import { Map } from "leaflet";
import { Fragment } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapadeMultas: React.FC = () => {
  const position = [51.505, -0.09];
  return (
    <div className="container">
      {/* <h1>hiola</h1>
      <Fragment>
        {new Map("map").setView([43.3082977, -1.9837398], 10)}
      </Fragment> */}

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>


      </MapContainer>
      ,
    </div>
   );
};

export default MapadeMultas;
