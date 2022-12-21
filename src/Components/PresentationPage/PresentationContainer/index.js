import "./index.css";

const PresentationContainer = ({ children, startAnimation }) => {
  return (
    <div
      className={
        "presentation-container" + (startAnimation ? " animate " : "")
      }
    >
      {children}
    </div>
  );
};
export default PresentationContainer;
