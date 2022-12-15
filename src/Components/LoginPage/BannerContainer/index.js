import "./index.css";

const BannerContainer = ({ shouldCollapse, children }) => {
  return (
    <div className={"banner-container " + (shouldCollapse ? " collapsed" : "")}>
      {children}
    </div>
  );
};
export default BannerContainer;
