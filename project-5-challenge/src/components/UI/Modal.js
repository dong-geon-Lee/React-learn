import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const BackWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 20;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
`;

const BackDrop = (props) => {
  return <BackWrapper onClick={props.onClose}></BackWrapper>;
};

const ModalOverLay = (props) => {
  return <ModalWrapper>{props.children}</ModalWrapper>;
};

const portalLocation = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose}></BackDrop>,
        portalLocation
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalLocation
      )}
    </>
  );
};

export default Modal;
