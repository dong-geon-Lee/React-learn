import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

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
  top: 30%;
  left: 15%;
  width: 70%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 1.4rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${(props) => props.slide} 0.3s ease-out forwards;
`;

var slide = keyframes`
  0% {
    opacity:0;
    transform: translate(0%, -55%);
  }

  100% {
    opacity: 1;
    transform: translate(0%,-40%);
  }
`;

// CSS 뒷 배경
const Backdrop = (props) => {
  return <BackdropStyled onClick={props.onClose}></BackdropStyled>;
};

// CSS Cart 목록을 중앙으로 위치시킴
const ModalOverlay = (props) => {
  return (
    <ModalOverlayStyled slide={slide}>
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
