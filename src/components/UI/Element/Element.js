import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";

const setStyle = (fontSize, fontWeight) => {
  return {
    "font-size": `${fontSize ? fontSize : "16"}px`,
    "font-weight": `${fontWeight ? fontWeight : "normal"}`,
  };
};

const Element = ({
  id,
  type,
  data,
  classes,
  openElementForm,
  current,
  deleteElement,
}) => {
  let inputVal = useRef();
  const { text, fontSize, fontWeight } = data;
  let { X, Y } = data;
  X = current ? current.currentX : X;
  Y = current ? current.currentY : Y;
  const handleKeyDown = (event) => {
    if (event.key === "Enter") openElementForm(type, X, Y, id);
    if (event.key === "Delete") deleteElement(id);
  };

  useEffect(() => {
    const localElements = JSON.parse(localStorage.getItem("elements"));
    localElements[id].data.X = current.currentX;
    localElements[id].data.y = current.currentY;
    localStorage.setItem("elements", JSON.stringify(localElements));
  }, [current, id]);

  switch (type) {
    case "button":
      return (
        <Button
          style={setStyle(fontSize, fontWeight)}
          text={text ? text : "Button"}
          className={classes}
          keyPress={handleKeyDown}
          id={id}
        />
      );

    case "input":
      return (
        <Input
          type="text"
          placeholder={text}
          style={setStyle(fontSize, fontWeight)}
          className={classes}
          keyPress={handleKeyDown}
          id={id}
          reference={inputVal}
        />
      );

    case "Label":
      return (
        <Label
          className={classes}
          keyPress={handleKeyDown}
          id={id}
          style={setStyle(fontSize, fontWeight)}
        >
          {text ? text : "This is a Label"}
        </Label>
      );
    default:
      return (
        <Label
          style={setStyle(fontSize, fontWeight)}
          className={classes}
          keyPress={handleKeyDown}
          id={id}
        >
          {text ? text : "Label"}
        </Label>
      );
  }
};

export default Element;
