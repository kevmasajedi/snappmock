import { useState } from "react";
import "./index.css";

const ToggleSwitchElement = ({ optA, optB, hasShadow, backgroundColorClass, switchColorClass }) => {
  const [selectedOption, setSelectedOption] = useState("one");
  return (
    <div className={"toggle-switch" + (hasShadow ? " shadowed " : "") + backgroundColorClass}>
      <div className={"toggle-rail " + switchColorClass + " " + selectedOption}></div>
      <div
        className={
          "toggle-option " + (selectedOption === "one" ? " white " : " light-gray ")
        }
        onClick={() => setSelectedOption("one")}
      >
        {optA}
      </div>
      <div
        className={
          "toggle-option " + (selectedOption === "two" ? " white " : " light-gray ")
        }
        onClick={() => setSelectedOption("two")}
      >
        {optB}
      </div>
    </div>
  );
};

export default ToggleSwitchElement;
