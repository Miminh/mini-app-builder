import React, { useState } from "react";
import Draggable from "../UI/Draggable/Draggable";

import "./BuilderContainer.css";

const BuilderContainer = () => {
  const [elements, setElements] = useState([]);
  const [previewElement, setPreviewElement] = useState();
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    if (event.target.className === "BuilderContainer")
      setElements([
        ...elements,
        <Draggable x={event.pageX} y={event.pageY}>
          <label
            id={event.pageX + "" + event.pageY}
            className="BuilderContainer_Elements"
          >
            This is a Label
          </label>
        </Draggable>,
      ]);
  };

  return (
    <div
      className="BuilderContainer"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={(event) => {}}
    >
      {previewElement}
      {elements && [...elements]}
    </div>
  );
};

export default BuilderContainer;
