import "./index.css";

const ButtonElement = ({
  colorClass,
  onClickHandler,
  isVisible,
  isDisabled,
  isCircular,
  isInline,
  hasShadow, 
  children,
}) =>
  isVisible && (
    <button
      onClick={onClickHandler}
      className={
        "button " +
        colorClass +
        (isDisabled ? " disabled " : "") +
        (isInline ? " inline " : "") +
        (isCircular ? " circular " : "") +
        (hasShadow ? " shadowed " : "")
      }
    >
      {children}
    </button>
  );
export default ButtonElement;
