import React from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

type ModalProps = {
  open: boolean;
  close: () => void;
};

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  if (!props.open) {
    return null;
  }

  return createPortal(
    <div className="Modal">
      <div className="Modal_Backdrop" onClick={props.close}></div>
      <div className="Modal_Children">{props.children}</div>
    </div>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
