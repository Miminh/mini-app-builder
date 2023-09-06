import React, { CSSProperties } from "react";

import "./Button.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className: string;
  keyPress?: React.KeyboardEventHandler;
  style?: CSSProperties;
  text: string;
  id?: string | number;
};
const Button = (props: ButtonProps) => {
  return (
    <div className={`Button`} style={props.style}>
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
