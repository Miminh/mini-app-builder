import React, { useState } from "react";

import "./ToolBlock.css";

const ToolBlock = () => {
  const [currName, setCurrName] = useState("");

  const handleDragStart = (name) => {
    setCurrName(name);
    console.log("dragStarts");
  };

  const handleDragEnd = () => {
    setCurrName("");
  };

  const handleDragOver = () => {
    return null;
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
        id={"label"}
      >
        <span>:</span> Label
      </div>
      <div
        className={`ToolBlock_Block ${currName === "Input" ? "dragging" : ""}`}
        draggable={true}
        onDragStart={() => handleDragStart("Input")}
        onDragEnd={handleDragEnd}
        id={"input"}
      >
        <span></span> Input
      </div>
      <div
        className={`ToolBlock_Block ${currName === "button" ? "dragging" : ""}`}
        draggable={true}
        onDragStart={() => handleDragStart("button")}
        onDragEnd={handleDragEnd}
        id={"button"}
      >
        <span></span> Button
      </div>
    </div>
  );
};

export default ToolBlock;
