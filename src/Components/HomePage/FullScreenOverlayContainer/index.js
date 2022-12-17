import "./index.css";

const FullScreenOverlayContainer = ({children}) => {
  return <div className="fs-overlay" onClick={(e) => e.preventDefault()}>
    {children}
  </div>;
};

export default FullScreenOverlayContainer;
