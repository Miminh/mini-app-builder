import React, { useState } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

const Modal = (props) => {
  if (!props.open) {
    return null;
  }

  return createPortal(
    <div className="Modal">
      <div className="Modal_Backdrop" onClick={props.close}></div>
      <div className="Modal_Children">{props.children}</div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
