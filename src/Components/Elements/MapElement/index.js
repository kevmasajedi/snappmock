import { useEffect } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import MarkerElement from "../MarkerElement";
import "./index.css";

const MapElement = ({
  onClickHandler,
  onMoveHandler,
  onMoveEndHandler,
  onCalculatedPrice,
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
    // url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    url: `https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=y8U8WusMGSrQZR1kvfHhQk5kKMIM3Ns7a6qLqeTDfQrdLeoPLfmdR5UZzBovpYLQ`,
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
      <FitMapToBoundsProxy
        bounds={[markerOnePosition, markerTwoPosition]}
        shouldFitBounds={shouldFitBounds}
      />
      <GetBoundsPriceProxy
        bounds={[markerOnePosition, markerTwoPosition]}
        shouldCalculate={shouldFitBounds}
        onCalculatedPrice={onCalculatedPrice}
      />
    </MapContainer>
  );
};

export default MapElement;

const FitMapToBoundsProxy = ({ bounds, shouldFitBounds }) => {
  const map = useMap();
  useEffect(() => {
    if (shouldFitBounds) {
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

const GetBoundsPriceProxy = ({
  bounds,
  onCalculatedPrice,
  shouldCalculate,
}) => {
  const map = useMap();
  useEffect(() => {
    if (shouldCalculate && onCalculatedPrice) {
      onCalculatedPrice(Math.round(map.distance(bounds[0], bounds[1]) / 100) * 500)
    }
  }, [shouldCalculate]);
};
