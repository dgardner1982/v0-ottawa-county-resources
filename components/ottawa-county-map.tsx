'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const locations = [
  { name: 'Community Mental Health of Ottawa County - Holland - James St Location', address: '12265 James St, Holland, MI 49424', position: [42.7955, -86.1198] as [number, number] },
  { name: 'Community Mental Health of Ottawa County - Grand Haven', address: '1111 Fulton St, Grand Haven, MI 49417', position: [43.0628, -86.2255] as [number, number] },
  { name: 'Community Mental Health of Ottawa County - Holland - Hoover Blvd Location', address: '347 Hoover Blvd, Holland, MI 49423', position: [42.7945, -86.1222] as [number, number] },
  { name: 'Ottawa County Jail - Lobby', address: '12220 Fillmore Ave, West Olive, MI 49426', position: [42.9222, -86.1658] as [number, number] },
  { name: 'Reach for Recovery - Grand Haven', address: '420 Washington Ave, Grand Haven, MI 49417', position: [43.0636, -86.2282] as [number, number] },
  { name: 'Reach for Recovery - Holland', address: '483 Century Lane, Holland, MI 49424', position: [42.7785, -86.0878] as [number, number] },
  { name: 'Samaritas', address: '2416 Van Ommen Dr, Holland, MI 49424', position: [42.7552, -86.0677] as [number, number] },
  { name: 'Sobar Recovery Community Center', address: '347 Hoover Blvd, Holland, MI 49423', position: [42.7945, -86.1222] as [number, number] },
  { name: 'The Ink Society', address: '7610 Cottonwood Dr Ste 101, Jenison, MI 49428', position: [42.9075, -85.8345] as [number, number] },
  { name: 'Faith Community Church of Coopersville', address: '105 68th Ave N, Coopersville, MI 49404', position: [43.0635, -85.9345] as [number, number] },
  { name: 'First United Methodist Church', address: '57 W 10th St, Holland, MI 49423', position: [42.7895, -86.1092] as [number, number] },
  { name: 'Ottawa County Department of Public Health', address: '12251 James St, Holland, MI 49424', position: [42.7952, -86.1205] as [number, number] },
  { name: 'Momentum Center - Grand Haven', address: '401 N 7th St, Grand Haven, MI 49417', position: [43.0652, -86.2286] as [number, number] },
]

export default function OttawaCountyMap() {
  return (
    <MapContainer center={[42.88, -86.12]} zoom={11} scrollWheelZoom className="h-[600px] w-full rounded-xl">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker key={`${location.name}-${location.address}`} position={location.position}>
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
