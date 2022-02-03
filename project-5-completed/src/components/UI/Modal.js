import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 20%;
  left: 5%;
  width: 90%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 1.4rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.25);
  z-index: 30;
  /* animation: slide-down .3s ease-out forwards; */
`;

// CSS 뒷 배경
const Backdrop = (props) => {
  return <BackdropStyled></BackdropStyled>;
};

// CSS Cart 목록을 중앙으로 위치시킴
const ModalOverlay = (props) => {
  return (
    <ModalOverlayStyled>
      <div>{props.children}</div>
    </ModalOverlayStyled>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
