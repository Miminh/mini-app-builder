import React, {
  CSSProperties,
  ChangeEventHandler,
  KeyboardEventHandler,
} from "react";

import "./Input.css";

type InputProps = {
  type: string;
  placeholder?: string;
  handleChange?: ChangeEventHandler;
  style?: CSSProperties;
  defaultValue?: string | number;
  reference?: React.RefObject<HTMLInputElement>;
  className?: string;
  id?: string | number;
  keyPress?: KeyboardEventHandler;
};

const Input = (props: InputProps) => {
  return (
    <div className="Input">
      <input
        placeholder={props.placeholder}
        onChange={props.handleChange}
        style={props.style}
        defaultValue={props.defaultValue}
        ref={props.reference}
        className={props.className}
        onKeyDown={props.keyPress}
      />
    </div>
  );
};

export default Input;
