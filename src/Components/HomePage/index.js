import MapElement from "../Elements/MapElement";
import { useState } from "react";

const HomePage = () => {
  const [position, setPosition] = useState([32.60183, 51.66874]);
  const [markerMode, setMarkerMode] = useState(1);
  const [markerOnePosition, setMarkerOnePosition] = useState(position);
  const [markerTwoPosition, setMarkerTwoPosition] = useState(markerOnePosition);
  const onMoveHandler = (center) => {
    if (markerMode == 1) setMarkerOnePosition(center);
    if (markerMode == 2) setMarkerTwoPosition(center);
  };
  const onClickHandler = () => {
    if (markerMode == 1) setMarkerMode(2);
    else setMarkerMode(1);
  };
  return (
    <MapElement
      onClickHandler={onClickHandler}
      onMoveHandler={onMoveHandler}
      markerMode={markerMode}
      position = {position}
      markerOnePosition = {markerOnePosition}
      markerTwoPosition = {markerTwoPosition}
    />
  );
};

export default HomePage;
