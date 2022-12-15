import { useState } from "react";
import "./index.css";
const LoginFormContainer = ({
  colorClass,
  isVisible,
  isFullscreen,
  children,
}) => { 
  return (
    isVisible && (
      <div
        className={
          "bottom-container black " +
          colorClass +
          (isFullscreen ? " fullscreen " : "")
        }
      >
        {children}
      </div>
    )
  );
};
export default LoginFormContainer;
