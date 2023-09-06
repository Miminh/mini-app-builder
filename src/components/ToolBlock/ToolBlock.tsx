import React, { DragEvent, useState } from "react";

import "./ToolBlock.css";

const ToolBlock = () => {
  const [currName, setCurrName] = useState("");

  const handleDragStart = (name : string) => {
    setCurrName(name);
    console.log("dragStarts");
  };

  const handleDragEnd : React.DragEventHandler<HTMLDivElement> = (event) => {
    setCurrName("");
  };

  const handleDragOver = () => {
    return null;
  };

  const handleDrag : React.EventHandler<DragEvent> = (event) => {
    const element = event.target;
    event.dataTransfer.setDragImage(element as Element, 0, 0);
  };

  return (
    <div className="ToolBlock" onDragOver={handleDragOver}>
      <div className="ToolBlock_Title">
        <h3>Blocks</h3>
      </div>
      <div
        className={`ToolBlock_Block ${currName === "label" ? "dragging" : ""}`}
        draggable={true}
        onDragStart={() => handleDragStart("label")}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        id={"label"}
      >
        <span>::</span> Label
      </div>
      <div
        className={`ToolBlock_Block ${currName === "Input" ? "dragging" : ""}`}
        draggable={true}
        onDragStart={() => handleDragStart("Input")}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        id={"input"}
      >
        <span>::</span> Input
      </div>
      <div
        className={`ToolBlock_Block ${currName === "button" ? "dragging" : ""}`}
        draggable={true}
        onDragStart={() => handleDragStart("button")}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        id={"button"}
      >
        <span>::</span> Button
      </div>
    </div>
  );
};

export default ToolBlock;
