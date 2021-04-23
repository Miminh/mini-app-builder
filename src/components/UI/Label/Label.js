import React from "react";

const Label = (props) => {
  return (
    <div
      className={`Label ${props.className ? props.className : ""}`}
      onClick={(event) => event.target.focus()}
      onKeyDown={props.keyPress}
      tabIndex={1}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Label;
