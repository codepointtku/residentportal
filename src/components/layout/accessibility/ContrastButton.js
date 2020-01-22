import React from "react";
import contrastButtonBlack from "../images/contrast_button.png";
import contrastButtonWhite from "../images/contrast_button_white.png";

function ContrastButton(props) {
  const bgColor = props.bgcolor;
  if (bgColor === "dark") {
    return <img src={contrastButtonWhite} alt="contrast button" />;
  }
  return <img src={contrastButtonBlack} alt="contrast button" />;
}

export default ContrastButton;
