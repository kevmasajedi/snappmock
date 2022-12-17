import { marker } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import MarkerElement from "../MarkerElement";
import "./index.css";

const MapElement = () => {
  const [position, setPosition] = useState([32.60183, 51.66874]);
  const [markerOnePosition, setMarkerOnePosition] = useState(position);
  const [markerTwoPosition, setMarkerTwoPosition] = useState(markerOnePosition);
  const [markerState, setMarkerState] = useState(1);
  const mapProps = {
    style: { height: "100vh", width: "100vw", overflow: "hidden" },
    center: position,
    zoom: 16,
    scrollWheelZoom: true,
  };
  const tileProps = {
    url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
  };

  const onMoveHandler = (center) => {
    if (markerState == 1) setMarkerOnePosition(center);
    if (markerState == 2) setMarkerTwoPosition(center); 
  };
  const onClickHandler = () => {
    if (markerState == 1) setMarkerState(2);
    else setMarkerState(1)
  }; 
  return (
    <MapContainer {...mapProps}>
      <TileLayer {...tileProps} />
      <MarkerElement
        icon={"origin"}
        position={markerOnePosition}
        onMoveHandler={onMoveHandler}
        onClickHandler={onClickHandler} 
        isVisible={true}
      />
      <MarkerElement
        icon={"destination"}
        position={markerTwoPosition}
        onMoveHandler={onMoveHandler}
        onClickHandler={onClickHandler}
        isVisible={markerState == 2}
      />
    </MapContainer>
  );
};

export default MapElement;
