import React, { useEffect, useState } from "react";
import Element from "../UI/Element/Element";
import Draggable from "../UI/Draggable/Draggable";
import Form from "../UI/Form/Form";
import Modal from "../UI/Modal/Modal";

import "./BuilderContainer.css";

const BuilderContainer = () => {
  const [elements, setElements] = useState([]);
  const [position, setPosition] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState("");
  const [currId, setCurrId] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    if (event.target.className !== "BuilderContainer") return;
    setOpenModal(true);
    setPosition({ X: event.clientX, Y: event.clientY });
    setType(document.querySelector(".dragging").id);
  };

  const createElement = (type, data, id) => {
    let localElements = JSON.parse(localStorage.getItem("elements"));

    if (id === null) {
      if (localElements === null) localElements = [{ type, data }];
      else localElements.push({ type, data });
      localStorage.setItem("elements", JSON.stringify(localElements));
      setElements([...elements, { type, data }]);
      return;
    }
    localElements[id] = { type, data };
    localStorage.setItem("elements", JSON.stringify(localElements));
    setElements((ele) => {
      ele[id] = { type, data };
      return ele;
    });
    setCurrId(null);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const openElementForm = (type, x, y, id) => {
    console.log(y);
    setOpenModal(true);
    setPosition({ X: x, Y: y });
    setCurrId(id);
    setType(type);
  };

  const deleteElement = (id) => {
    setElements((ele) => ele.filter((e, idx) => idx !== id));
  };

  useEffect(() => {
    let loadedElements = null;
    const getLocalElements = async () => {
      loadedElements = await JSON.parse(localStorage.getItem("elements"));
      return loadedElements;
    };

    getLocalElements().then((val) => setElements(val));
  }, []);

  return (
    <div
      className="BuilderContainer"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Modal open={openModal} close={closeModal}>
        <Form
          createElement={createElement}
          close={closeModal}
          position={position}
          type={type}
          id={currId}
        />
      </Modal>
      {elements &&
        elements.map((element, idx) => (
          <Draggable x={element.data.X} y={element.data.Y} key={idx}>
            <Element
              id={idx}
              type={element.type}
              data={element.data}
              classes={"element"}
              openElementForm={openElementForm}
              deleteElement={deleteElement}
            />
          </Draggable>
        ))}
    </div>
  );
};

export default BuilderContainer;
