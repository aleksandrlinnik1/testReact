import React from "react";
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ floor }) => {
    return (
        <div>
            <MapContainer
                center={[53.91712919154794, 27.63486423374176]}
                zoom={19.5}
            >
                <GeoJSON data={floor} />
            </MapContainer>
        </div>
    );
};
export default Map;