import MapElement from "../Elements/MapElement";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRevGeoData } from "../../API";
const HomePage = () => {
  const originData = useSelector((state) => state.revGeoData);
  const dispatch = useDispatch();

  const [position, setPosition] = useState([32.6153, 51.6699]);
  const [markerMode, setMarkerMode] = useState(1);
  const [markerOnePosition, setMarkerOnePosition] = useState(position);
  const [markerTwoPosition, setMarkerTwoPosition] = useState(markerOnePosition);
  const onMoveHandler = (center) => {
    if (markerMode == 1) setMarkerOnePosition(center);
    if (markerMode == 2) setMarkerTwoPosition(center);
  };
  const onClickHandler = (markerPosition) => {  
    console.log(markerPosition)
    dispatch(
      getRevGeoData({lat: markerPosition.lat, long:markerPosition.lng})
    );
    if (markerMode == 1) {
      setMarkerMode(2)
    } else setMarkerMode(1);
  };
  return (
    <MapElement
      onClickHandler={onClickHandler}
      onMoveHandler={onMoveHandler}
      markerMode={markerMode}
      position={position}
      markerOnePosition={markerOnePosition}
      markerTwoPosition={markerTwoPosition}
    />
  );
};

export default HomePage;
