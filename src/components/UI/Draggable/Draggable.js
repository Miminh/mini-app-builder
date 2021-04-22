import React, { useState } from "react";

import "./Draggable.css";

const Draggable = (props) => {
  const [current, setCurrent] = useState({
    currentX: props.x,
    currentY: props.y,
  });
  const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });
  const [move, setMove] = useState(false);

  const handleMouseDown = (event) => {
    setMove(true);
    setOffset({
      offsetX: current.currentX - event.clientX,
      offsetY: current.currentY - event.clientY,
    });
  };

  const handleMouseUp = (event) => {
    setMove(false);
  };

  const handleDrag = (event) => {
    if (!move) return;
    setCurrent({
      currentX: event.clientX + offset.offsetX,
      currentY: event.clientY + offset.offsetY,
    });
  };

  return (
    <div
      className="Draggable"
      draggable
      onDragStart={handleMouseDown}
      onDragEnd={handleMouseUp}
      onDrag={handleDrag}
      style={{ left: current.currentX + "px", top: current.currentY + "px" }}
    >
      {props.children}
    </div>
  );
};

export default Draggable;
