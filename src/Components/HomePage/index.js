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
import QuotaContainer from "./QuotaContainer";
import { useNavigate } from "react-router-dom";

const position = [32.615, 51.67];
const HomePage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [price, setPrice] = useState(0);
  const [markerMode, setMarkerMode] = useState("origin");
  const [confirmTripMode, setConfirmTripMode] = useState(false);
  const [presentationMode , setPresentationMode] = useState(false) ; 
  const [markerOnePosition, setMarkerOnePosition] = useState(position);
  const [markerTwoPosition, setMarkerTwoPosition] = useState(markerOnePosition);

  const onMoveHandler = (center) => {
    if (markerMode === "origin") setMarkerOnePosition(center);
    if (markerMode === "destination" && !confirmTripMode)
      setMarkerTwoPosition(center);
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

  const isDestMode = () => markerMode === "destination";

  const setTripPrice = (price) => {
    console.log(price);
    setPrice(price);
  };
  return (
    <FullscreenContainer colorClass={"bg-transparent"} presentationMode={presentationMode || props.presentationMode}>
      <TopOverlayContainer>
        <ButtonElement
          isVisible={true}
          isDisabled={!confirmTripMode}
          isCircular={true}
          hasShadow={true}
          colorClass="bg-white black"
          onClickHandler={() => {
            setConfirmTripMode(false) ;
            setMarkerMode("origin")
          }}
        >
          <IconElement isVisible={true} iconClass="gg-chevron-right" />
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
          isDisabled={false}
          isCircular={true}
          hasShadow={true}
          colorClass="bg-white black"
          onClickHandler={() => {
            navigate("/login")
          }}
        >
          <IconElement isVisible={true} iconClass="gg-profile" />
        </ButtonElement>
      </TopOverlayContainer>
      <MapElement
        onClickHandler={onClickHandler}
        onMoveHandler={onMoveHandler}
        onMoveEndHandler={onMoveEndHandler}
        onCalculatedPrice={setTripPrice}
        markerMode={markerMode}
        position={position}
        shouldFitBounds={confirmTripMode}
        markerOnePosition={markerOnePosition}
        markerTwoPosition={markerTwoPosition}
      />
      <BottomOverlayContainer>
        <AddressContainer
          isVisible={!confirmTripMode}
          isDestMode={isDestMode()}
          addrData={props.revGeoData ? props.revGeoData : ""}
          onRequestChangeOrigin={() => {
            setMarkerMode("origin");
            setConfirmTripMode(false);
          }}
        />
        <QuotaContainer isVisible={confirmTripMode} price={price} />
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
            onClickHandler={() => {setPresentationMode(true)}}
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
