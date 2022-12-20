import { useEffect } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import MarkerElement from "../MarkerElement";
import "./index.css";

const MapElement = ({
  onClickHandler,
  onMoveHandler,
  onMoveEndHandler,
  markerMode,
  position,
  shouldFitBounds,
  markerOnePosition,
  markerTwoPosition,
}) => {
  const mapProps = {
    style: { height: "100vh", width: "100vw", overflow: "hidden" },
    center: position,
    zoom: 15,
    scrollWheelZoom: true,
  };
  const tileProps = {
    url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    // url: `https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=y8U8WusMGSrQZR1kvfHhQk5kKMIM3Ns7a6qLqeTDfQrdLeoPLfmdR5UZzBovpYLQ`,
  };
  return (
    <MapContainer {...mapProps}>
      <TileLayer {...tileProps} />
      <MarkerElement
        icon={"origin"}
        position={markerOnePosition}
        onMoveHandler={onMoveHandler}
        onMoveEndHandler={onMoveEndHandler}
        onClickHandler={onClickHandler}
        shouldDisplayPopup={shouldFitBounds}
        isVisible={true}
      />
      <MarkerElement
        icon={"destination"}
        position={markerTwoPosition}
        onMoveHandler={onMoveHandler}
        onMoveEndHandler={onMoveEndHandler}
        onClickHandler={onClickHandler}
        shouldDisplayPopup={shouldFitBounds}
        isVisible={markerMode === "destination"}
      />
      <SetBoundsElement
        bounds={[markerOnePosition, markerTwoPosition]}
        shouldFitBounds={shouldFitBounds}
      />
    </MapContainer>
  );
};

export default MapElement;

const SetBoundsElement = ({ bounds, shouldFitBounds }) => {
  const map = useMap();
  useEffect(() => {
    if (shouldFitBounds) {
      console.log(Math.round(map.distance(bounds[0],bounds[1])));
      map.fitBounds(bounds);
      setTimeout(() => {
        map.setZoom(map.getBoundsZoom(bounds) - 2);
        setTimeout(() => {
          map.panInsideBounds(bounds);
        }, 200);
      }, 200);
    }
  }, [shouldFitBounds]);
  return <></>;
};
