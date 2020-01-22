import React from "react";

function TextSizeButtons(props) {
  const bgColor = props.bgcolor;
  if (bgColor === "dark") {
    return (
      <div className="grid-accessibility-text">
        <button id="smalltext" className="textsize_button_light ">
          A
        </button>
        <button id="mediumtext" className="textsize_button_light">
          A
        </button>
        <button id="largetext" className="textsize_button_light">
          A
        </button>
      </div>
    );
  }

  return (
    <div className="grid-accessibility-text">
      <button id="smalltext" className="textsize_button ">
        A
      </button>
      <button id="mediumtext" className="textsize_button">
        A
      </button>
      <button id="largetext" className="textsize_button">
        A
      </button>
    </div>
  );
}

// no defaultprops here.

export default TextSizeButtons;
