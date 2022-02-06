import React from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div></div>;
};

const ModalOverLay = (props) => {
  return <div>{props.children}</div>;
};

const portalLocation = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop></BackDrop>, portalLocation)}
      {ReactDOM.createPortal(
        ((<ModalOverLay>{props.children}</ModalOverLay>), portalLocation)
      )}
    </>
  );
};

export default Modal;
