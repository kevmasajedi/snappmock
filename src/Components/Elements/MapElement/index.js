import { marker } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import MarkerElement from "../MarkerElement";
import "./index.css";

const MapElement = ({onClickHandler, onMoveHandler, markerMode, position, markerOnePosition , markerTwoPosition}) => {
  const mapProps = {
    style: { height: "100vh", width: "100vw", overflow: "hidden" },
    center: position,
    zoom: 15,
    scrollWheelZoom: true,
  };
  const tileProps = {
    url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    // url: `https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=y8U8WusMGSrQZR1kvfHhQk5kKMIM3Ns7a6qLqeTDfQrdLeoPLfmdR5UZzBovpYLQ`
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
        isVisible={markerMode == 2}
      />
    </MapContainer>
  );
};

export default MapElement;
