import React, { useState } from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <div className="Input">
      <input
        placeholder={props.placeholder}
        onChange={props.handleChange}
        style={props.style ? props.style : null}
        defaultValue={props.defaultValue}
        ref={props.reference}
        className={props.className ? props.className : ""}
        onKeyDown={props.keyPress}
      />
    </div>
  );
};

export default Input;
