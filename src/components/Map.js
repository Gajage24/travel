import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  ZoomControl
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
});

const locations = [
  {
    name: "WorldNest Tours – Pune",
    position: [18.5204, 73.8567],
  },
  {
    name: "Mumbai Office",
    position: [19.0760, 72.8777],
  },
  {
    name: "Goa Office",
    position: [15.2993, 74.1240],
  },
];

const Map = () => {
  const center = [18.5204, 73.8567];

  return (
    <div className="map-card">
      <MapContainer
        center={center}
        zoom={6}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
       
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="© OpenStreetMap © CartoDB"
        />

        
        {locations.map((loc, index) => (
          <Marker key={index} position={loc.position} icon={icon}>
            <Popup>
              <h4>{loc.name}</h4>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${loc.position[0]},${loc.position[1]}`}
                target="_blank"
                rel="noreferrer"
              >
              </a>
            </Popup>
          </Marker>
        ))}

   
        <Circle
          center={center}
          radius={20000}
          pathOptions={{
            color: "#00c3ff",
            fillColor: "#00c3ff",
            fillOpacity: 0.15,
          }}
        />

      
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default Map;
