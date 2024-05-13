import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export function Map() {
  return (
    <>
      <div className="justify-normal absolute bottom-[6rem]">
        <h1>Welcome to the LokasjonSide!</h1>
        <MapContainer
          center={[60.80758436467838, 11.053091129300938]}
          zoom={13}
          style={{ height: "400px", width: "600px", borderRadius: "15px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[60.80758436467838, 11.053091129300938]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
