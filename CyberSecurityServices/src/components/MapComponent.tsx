import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LogoMain from "../assets/LogoMain.png";
import "../index.css";

export function Map() {
  return (
    <>
      <div className="justify-normal bottom-[6rem]">
        <MapContainer
          center={[60.80758436467838, 11.053091129300938]}
          zoom={13}
          style={{ height: "600px", width: "800px", borderRadius: "15px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[60.80758436467838, 11.053091129300938]}>
            <Popup>
              <div className="bg-MainBackground w-48 h-24 border-none">
                <img src={LogoMain} />
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
