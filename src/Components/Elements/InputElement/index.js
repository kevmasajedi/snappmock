import "./index.css";
const InputElement = ({
  placeHolder,
  isErrored,
  type,
  value,
  onChangeHandler,
  onClickHandler,
}) => {
  return (
    <input
      onClick={onClickHandler}
      onChange={onChangeHandler}
      value={value}
      className={"input " + (isErrored ? " err " : "")}
      placeholder={placeHolder}
      type={type}
    ></input>
  );
};
export default InputElement;
