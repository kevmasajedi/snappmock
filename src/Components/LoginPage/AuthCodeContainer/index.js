import OneDigitInputElement from "../../OneDigitInputElement";
import { useState, useEffect } from "react";
import "./index.css";

const AuthCodeContainer = ({onChangeHandler}) => {
  const [focus, setFocus] = useState(1);
  const [code , setCode] = useState([0,0,0,0,0,0])
  const changeFocus = () => {
    if (focus == 6) setFocus(1);
    else setFocus(focus + 1);
  };
  const handleInputChange = (num) => { 
    let newCode = [...code]
    newCode[focus-1] = num
    setCode(newCode)
    changeFocus() ; 
    onChangeHandler(newCode.join("")); 
  }
  useEffect(() => { 
    if (focus) {
      document.getElementById("au" + focus).focus();
    }
  });
  return (
    <div className="auth-container">
      <OneDigitInputElement
        id="au1"
        onChangeHandler={handleInputChange}
        onClickHandler={() => {
          setFocus(1);
        }}
      />
      <OneDigitInputElement
        id="au2"
        onChangeHandler={handleInputChange}
        onClickHandler={() => {
          setFocus(2);
        }}
      />
      <OneDigitInputElement
        id="au3"
        onChangeHandler={handleInputChange}
        onClickHandler={() => {
          setFocus(3);
        }}
      />
      <OneDigitInputElement
        id="au4"
        onChangeHandler={handleInputChange}
        onClickHandler={() => {
          setFocus(4);
        }}
      />
      <OneDigitInputElement
        id="au5"
        onChangeHandler={handleInputChange}
        onClickHandler={() => {
          setFocus(5);
        }}
      />
      <OneDigitInputElement
        id="au6"
        onChangeHandler={handleInputChange}
        onClickHandler={() => {
          setFocus(6);
        }}
      />
    </div>
  );
};

export default AuthCodeContainer;
