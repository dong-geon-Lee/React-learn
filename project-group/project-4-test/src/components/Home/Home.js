import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../store/auth-context";

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;

  button {
    margin-top: 1rem;
    padding: 1rem;
    color: #fff;
    padding: 0.8rem 3rem;
    background-color: rebeccapurple;
    border-radius: 1rem;
    cursor: pointer;

    &:hover,
    &:active {
      opacity: 0.95;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const ButtonStyld = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  color: #fff;
  padding: 0.8rem 3rem;
  background-color: rebeccapurple;
  border-radius: 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    opacity: 0.95;
  }

  &:focus {
    outline: none;
  }
`;

const Home = () => {
  const authContext = useContext(AuthContext);
  return (
    <Wrapper>
      <h1>Welcome back!</h1>

      <button onClick={authContext.onLogout}>Logout</button>
    </Wrapper>
  );
};

export default Home;
