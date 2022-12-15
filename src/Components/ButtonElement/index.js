import "./index.css";

const ButtonElement = ({
  colorClass,
  onClickHandler,
  isVisible,
  isInline,
  children,
}) =>
  isVisible && (
    <button
      onClick={onClickHandler}
      className={"button " + colorClass + (isInline ? " inline " : "")}
    >
      {children}
    </button>
  );
export default ButtonElement;
