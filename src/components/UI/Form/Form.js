import React, { useRef } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Form.css";

const Form = (props) => {
  const inputStyle = {
    width: "90%",
  };
  let text = useRef();
  let X = useRef();
  let Y = useRef();
  let fontSize = useRef();
  let fontWeight = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text.current.value);
    const data = {
      text: text.current.value,
      X: X.current.value,
      Y: Y.current.value,
      fontSize: fontSize.current.value,
      fontWeight: fontWeight.current.value,
    };
    props.createElement(props.type, data, props.id);
    props.close();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h3 className="Form_Title">Edit {props.type}</h3>
      <div className="Form_Input_Wrapper">
        <label>Text</label>
        <Input
          style={inputStyle}
          type="text"
          defaultValue={"This is a " + props.type}
          reference={text}
        />
      </div>
      <div className="Form_Input_Wrapper">
        <label>X</label>
        <Input
          style={inputStyle}
          type="text"
          reference={X}
          defaultValue={props.position.X}
        />
      </div>
      <div className="Form_Input_Wrapper">
        <label>Y</label>
        <Input
          style={inputStyle}
          type="text"
          reference={Y}
          defaultValue={props.position.Y}
        />
      </div>
      <div className="Form_Input_Wrapper">
        <label>Font Size</label>
        <Input style={inputStyle} type="text" reference={fontSize} />
      </div>
      <div className="Form_Input_Wrapper">
        <label>Font Weight</label>
        <Input style={inputStyle} type="text" reference={fontWeight} />
      </div>
      <Button type="submit" className="Form_Button" text={"Submit Changes"} />
    </form>
  );
};

export default Form;
