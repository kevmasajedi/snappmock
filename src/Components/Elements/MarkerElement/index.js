import "./index.css";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useMemo } from "react";
import {
  MarkerIconOrigin,
  MarkerIconDestination,
  MarkerIconOriginTooltip,
  MarkerIconDestinationTooltip,
} from "../MarkerIcons";

const MarkerElement = ({
  position,
  onMoveHandler,
  onClickHandler,
  onMoveEndHandler,
  icon,
  shouldDisplayPopup,
  isVisible,
}) => {
  const map = useMapEvents({
    move() {
      onMoveHandler(map.getCenter());
    },
    moveend() {
      onMoveEndHandler(map.getCenter());
    },
  });
  const markerEventHandlers = useMemo(
    () => ({
      click() {
        onClickHandler(position);
      },
    }),
    [position]
  );
  const markerIcon = () => {
    if (icon === "origin") {
      if (shouldDisplayPopup) return MarkerIconOriginTooltip;
      else return MarkerIconOrigin;
    }
    if (icon === "destination") {
      if (shouldDisplayPopup) return MarkerIconDestinationTooltip;
      else return MarkerIconDestination;
    }
  };
  return (
    isVisible && (
      <Marker
        icon={markerIcon()}
        eventHandlers={markerEventHandlers}
        position={position}
      ></Marker>
    )
  );
};
export default MarkerElement;
