import React from "react";
import { MapContainer, GeoJSON } from 'react-leaflet';

const Map = ({ floor }) => {
  return (
    <div>
      <MapContainer
        center={[53.91712919154794, 27.63486423374176]}
        zoom={10.5}
        minZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      >
        <GeoJSON
          data={floor}
        />
      </MapContainer>
    </div>
  );
};
export default React.memo(Map);