import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useColorMode } from '@chakra-ui/react';

export const createLabelIcon = (label: string, color: string) =>
  L.divIcon({
    html: `<div style="
      background:${color};
      color:white;
      width:24px;
      height:24px;
      border-radius:50%;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:14px;
      font-weight:bold;
      border:2px solid white;
    ">${label}</div>`,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

const Map = ({zones}) => {
  const [position, setPosition] = useState<LatLngTuple>([14.069668,100.607863]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error('Geolocation error:', err);
        }
      );
    }
  }, []);
  

  return (
    <MapContainer center={[14.062392107587984, 100.60673343461902]} zoom={14} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />

      <Marker
        position={position}
        icon={createLabelIcon("↑", "#2d68ff")}  // “U” = you (or change label)
      >
        <Popup>You are here</Popup>
      </Marker>

      {zones.map((zone) => {
        return(
        <Marker position={zone.coords} icon={createLabelIcon(zone.id, zone.status)}>
          <Popup>
            {zone.name}
          </Popup>
        </Marker>
        )
      }
    )}

    </MapContainer>
  );
};

export default Map;
