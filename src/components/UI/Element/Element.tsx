import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";

const setStyle = (fontS: string, fontW: string) => {
  return {
    fontSize: `${fontS ? fontS : "16"}px`,
    fontWeight: `${fontW ? fontW : "normal"}`,
  };
};

type ElementProps = {
  id: string | number;
  type: string;
  data: {
    text: string;
    fontSize: string;
    fontWeight: string;
    X: number;
    Y: number;
  };
  classes: string;
  openElementForm: (type: string, X: number, Y: number, id: string | number) => void;
  current: {
    currentX: number;
    currentY: number;
  };
  deleteElement: (id: string | number) => void;
};

const Element = ({
  id,
  type,
  data,
  classes,
  openElementForm,
  current,
  deleteElement,
}: React.PropsWithChildren<ElementProps>) => {
  let inputVal = useRef<HTMLInputElement>(null);
  const { text, fontSize, fontWeight } = data;
  let { X, Y } = data;
  X = current ? current.currentX : X;
  Y = current ? current.currentY : Y;
  const handleKeyDown : React.KeyboardEventHandler = (event) => {
    if (event.key === "Enter") openElementForm(type, X, Y, id);
    if (event.key === "Delete") deleteElement(id);
  };

  useEffect(() => {
    const localElements = JSON.parse(localStorage.getItem("elements") || "");
    localElements[id].data.X = current.currentX;
    localElements[id].data.Y = current.currentY;
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
