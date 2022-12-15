import "./index.css";
import { useState } from "react";

const OneDigitInputElement = ({ id, onChangeHandler, onClickHandler }) => {
  const acceptedCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let [num, setNum] = useState("");
  return (
    <input
      id={id}
      className="one-digit"
      onChange={(e) => {
        e.preventDefault();
        let enteredNum = e.target.value;
        if (
          acceptedCharacters
          .find((c) => c.toString() === enteredNum) !== undefined
        ) {
          setNum(enteredNum);
          onChangeHandler(enteredNum);
        }
      }}
      onClick={() => {
        setNum("");
        onClickHandler(); 
      }}
      value={num}
    />
  );
};

export default OneDigitInputElement;
