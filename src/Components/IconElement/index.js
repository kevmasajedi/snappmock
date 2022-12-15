import "./index.css";
const IconElement = ({ iconClass, isInteractive, isVisible , onClickHandler }) => {
  return (
    isVisible && (
      <i
        className={"icon " + iconClass + (isInteractive ? " interactive " : "")}
        onClick={onClickHandler}
      ></i>
    )
  );
}
export default IconElement ; 