import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <div className={`Button`} style={props.style ? props.style : null}>
      <button
        type={props.type ? props.type : "button"}
        className={props.className ? props.className : ""}
        onKeyDown={props.keyPress}
        style={props.style}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
