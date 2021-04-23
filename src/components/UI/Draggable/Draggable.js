import React, { useEffect, useState } from "react";

import "./Draggable.css";

const Draggable = (props) => {
  let { x, y } = props;
  const [current, setCurrent] = useState({
    currentX: x,
    currentY: y,
  });
  const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });

  const handleMouseDown = (event) => {
    // if (event.clientX >= window.innerWidth - 0.3 * window.innerWidth) {
    //   setOffset(original.current);
    // }

    setOffset({
      offsetX: current.currentX - event.clientX,
      offsetY: current.currentY - event.clientY,
    });
  };

  useEffect(() => {
    setCurrent({
      currentX: x,
      currentY: y,
    });
  }, [x, y]);

  // const handleMouseUp = (event) => {
  //   setMove(false);
  // };

  const handleDrag = (event) => {
    setCurrent({
      currentX: event.clientX + offset.offsetX,
      currentY: event.clientY + offset.offsetY,
    });
  };

  const handleDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="Draggable"
      draggable
      onDragStart={handleMouseDown}
      onDrag={handleDrag}
      onDrop={handleDrop}
      style={{ left: current.currentX + "px", top: current.currentY + "px" }}
    >
      {React.cloneElement(props.children, { current, setCurrent })}
    </div>
  );
};

export default Draggable;
