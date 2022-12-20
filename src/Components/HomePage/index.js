import MapElement from "../Elements/MapElement";
import { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { getRevGeoData } from "../../API";
import FullscreenContainer from "../FullscreenContainer";
import TopOverlayContainer from "./TopOverlayContainer";
import BottomOverlayContainer from "./BottomOverlayContainer";
import ButtonElement from "../Elements/ButtonElement";
import IconElement from "../Elements/IconElement";
import ToggleSwitchElement from "../Elements/ToggleSwitchElement";
import AddressContainer from "./AddressContainer";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState([32.615, 51.67]);
  const [markerMode, setMarkerMode] = useState("origin");
  const [confirmTripMode, setConfirmTripMode] = useState(false) ; 
  const [markerOnePosition, setMarkerOnePosition] = useState(position);
  const [markerTwoPosition, setMarkerTwoPosition] = useState(markerOnePosition);

  const onMoveHandler = (center) => {
    if (markerMode === "origin") setMarkerOnePosition(center);
    if (markerMode === "destination" && !confirmTripMode) setMarkerTwoPosition(center);
  };

  const onMoveEndHandler = (center) => { 
    if (!confirmTripMode) dispatchRevGeoData(center);
  };

  const onClickHandler = (markerPosition) => {
    dispatchRevGeoData(markerPosition);

    if (markerMode === "origin") {
      setMarkerMode("destination");
    } else {
      setConfirmTripMode(true); 
    }
  };

  const dispatchRevGeoData = (position) => {
    dispatch(getRevGeoData({ lat: position.lat, long: position.lng }));
  };

  const isDestMode = () => (markerMode === "destination" );

  return (
    <FullscreenContainer colorClass={"bg-transparent"}>
      <TopOverlayContainer>
        <ButtonElement
          isVisible={true}
          isDisabled={true}
          isCircular={true}
          hasShadow={true}
          colorClass="bg-white black"
        >
          <IconElement isVisible={true} iconClass="gg-home" />
        </ButtonElement>
        <ToggleSwitchElement
          optA="برای خودم"
          optB="برای دیگری"
          hasShadow={true}
          backgroundColorClass="bg-white"
          switchColorClass="bg-green"
        />
        <ButtonElement
          isVisible={true}
          isDisabled={true}
          isCircular={true}
          hasShadow={true}
          colorClass="bg-white black"
        >
          <IconElement isVisible={true} iconClass="gg-profile" />
        </ButtonElement>
      </TopOverlayContainer>
      <MapElement
        onClickHandler={onClickHandler}
        onMoveHandler={onMoveHandler}
        onMoveEndHandler={onMoveEndHandler}
        markerMode={markerMode}
        position={position}
        shouldFitBounds={confirmTripMode}
        markerOnePosition={markerOnePosition}
        markerTwoPosition={markerTwoPosition}
      />
      <BottomOverlayContainer>
        <AddressContainer
          isDestMode={isDestMode()}
          addrData={props.revGeoData ? props.revGeoData : ""}
          onRequestChangeOrigin={() => {setMarkerMode("origin"); setConfirmTripMode(false)}}
        />
        {!isDestMode() && !confirmTripMode && (
          <ButtonElement
            onClickHandler={() => {
              onClickHandler(markerOnePosition);
            }}
            colorClass="bg-green white"
            isVisible={true}
          >
            تایید مبدا
          </ButtonElement>
        )}
        {isDestMode() && !confirmTripMode && (
          <ButtonElement
            onClickHandler={() => {
              onClickHandler(markerTwoPosition);
            }}
            colorClass="bg-green white"
            isVisible={true}
          >
            تایید مقصد
          </ButtonElement>
        )}
        {confirmTripMode && (
          <ButtonElement
          onClickHandler={() => { 
          }}
          colorClass="bg-green white"
          isVisible={true}
        >
          درخواست اسنپ‌
        </ButtonElement>
        )}
      </BottomOverlayContainer>
    </FullscreenContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    revGeoData: state.neshan.revGeoData,
  };
};
export default connect(mapStateToProps)(HomePage);
