import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);

  & > div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40rem;
  }

  & label {
    color: #fff;
    font-size: 1.2rem;
    background-color: rebeccapurple;
    display: block;
    padding: 1rem;
  }

  & p {
    background-color: #fff;
    padding: 1.5rem 1rem;
    font-size: 1rem;

    & button {
      padding: 0.4rem 1rem;
      font-size: 0.1rem;
      display: flex;
      margin-top: 1.5rem;
      margin-left: auto;
      margin-bottom: -0.5rem;
    }
  }
`;

const ErrorModal = ({ modalState }) => {
  return (
    <Wrapper>
      <div>
        <label>Invalid input</label>

        <div>
          <p>
            Please enter a valid name and age (non-empty values).
            <Button onClick={() => modalState(false)}>Okay</Button>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorModal;
