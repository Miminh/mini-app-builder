import React, { CSSProperties, KeyboardEventHandler } from "react";

type LabelProps = {
  className: string;
  keyPress: KeyboardEventHandler;
  style?: CSSProperties;
  id: string | number;
};

const Label = (props: React.PropsWithChildren<LabelProps>) => {
  return (
    <div
      className={`Label ${props.className ? props.className : ""}`}
      onClick={(event) => (event.target as HTMLDivElement).focus()}
      onKeyDown={props.keyPress}
      tabIndex={1}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Label;
