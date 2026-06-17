import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
} from "react-leaflet";

import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { createDivIcon } from "../../utils/mapUtils";

export default function MapView({
  markers = [],
  center = [33.6844, 73.0479],
  zoom = 10,

  renderMarker,
  renderHover,

  onMarkerClick,
  onMarkerMouseOver,
  onMarkerMouseOut,
}) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        spiderfyOnMaxZoom
        showCoverageOnHover={false}
        maxClusterRadius={80}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lng]}
            icon={createDivIcon(
              renderMarker(marker)
            )}
            eventHandlers={{
              click: () => onMarkerClick?.(marker),
              mouseover: () =>
                onMarkerMouseOver?.(marker),
              mouseout: () =>
                onMarkerMouseOut?.(marker),
            }}
          >
            {renderHover && (
              <Tooltip
                direction="top"
                offset={[0, -20]}
                opacity={1}
              >
                {renderHover(marker)}
              </Tooltip>
            )}
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}