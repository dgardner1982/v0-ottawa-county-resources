'use client'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const locations = [
  { name: 'Community Mental Health of Ottawa County - Holland', address: '347 Hoover Blvd, Holland, MI 49423', position: [42.7945, -86.1222] as [number, number] },
  { name: 'Corewell Health - Grand Haven', address: '15100 Whittaker Way, Grand Haven, MI 49417', position: [43.0197, -86.1468] as [number, number] },
  { name: 'Corewell Health - Zeeland', address: '8333 Felch St, Zeeland, MI 49464', position: [42.8125, -85.9952] as [number, number] },
  { name: 'Momentum Center - Grand Haven', address: '401 N 7th St, Grand Haven, MI 49417', position: [43.0652, -86.2286] as [number, number] },
  { name: 'Ottawa County Jail - Lobby', address: '12220 Fillmore Ave, West Olive, MI 49460', position: [42.9222, -86.1658] as [number, number] },
  { name: 'Reach for Recovery - Grand Haven', address: '420 Washington Ave, Grand Haven, MI 49417', position: [43.0636, -86.2282] as [number, number] },
  { name: 'Reach for Recovery - Holland', address: '483 Century Lane, Holland, MI 49424', position: [42.7785, -86.0878] as [number, number] },
  { name: 'Samaritas', address: '2416 Van Ommen Dr, Holland, MI 49424', position: [42.7552, -86.0677] as [number, number] },
  { name: 'Sobar Recovery Community Center', address: '347 Hoover Blvd, Holland, MI 49423', position: [42.7945, -86.1222] as [number, number] },
]

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export function OttawaCountyMap() {
  return (
    <MapContainer center={[42.88, -86.12]} zoom={11} scrollWheelZoom className="h-[600px] w-full rounded-xl">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker key={`${location.name}-${location.address}`} position={location.position} icon={markerIcon}>
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
