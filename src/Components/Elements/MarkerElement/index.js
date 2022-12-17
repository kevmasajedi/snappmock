import "./index.css";
import { Marker, useMapEvents } from "react-leaflet";
import { useMemo } from "react"; 
import { MarkerIconOrigin, MarkerIconDestination } from "../MarkerIcons";

const MarkerElement = ({ position, onMoveHandler, onClickHandler,  icon , isVisible }) => {
  const map = useMapEvents({
    move() {
      onMoveHandler(map.getCenter());
    },
  }); 
  const markerEventHandlers = useMemo(
    () => ({
        click() {
            onClickHandler(); 
        }
    }), []
  )
  const markerIcon = () => {
    if (icon === "origin") return MarkerIconOrigin ; 
    if (icon === "destination") return MarkerIconDestination ; 
  }
  return (
    isVisible && <Marker icon={markerIcon()} eventHandlers={markerEventHandlers} position={position} />
  );
};
export default MarkerElement;
