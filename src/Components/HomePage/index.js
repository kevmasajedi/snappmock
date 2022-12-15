import { MapContainer, TileLayer } from "react-leaflet";

const HomePage = () => {
  const mapProps = {
    style: { height: "100vh", width: "100vw", overflow: "hidden" },
    center: [35.69971, 51.33768],
    zoom: 17,
    scrollWheelZoom: true,
  };
  const tileProps = {
    url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
  };
  return (
    <MapContainer {...mapProps}>
      <TileLayer {...tileProps} />
    </MapContainer>
  );
};

export default HomePage;
