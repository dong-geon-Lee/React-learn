import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../store/auth-context";

const Wrapper = styled.ul`
  padding: 1rem;
  list-style: none;
  display: flex;
  align-items: center;

  li {
    margin-left: 2rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  button {
    border: none;
    border-radius: 1rem;
    padding: 0.8rem 1.2rem;
    background-color: green;
    color: #fff;
    cursor: pointer;
  }
`;

const Navigation = () => {
  const authContext = useContext(AuthContext);

  return (
    <Wrapper>
      {authContext.isLoggedIn && (
        <>
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <button onClick={authContext.onLogout}>Logout</button>
          </li>
        </>
      )}

      {!authContext.isLoggedIn && (
        <>
          <li>
            <a href="#">Guest</a>
          </li>
          <li>
            <a href="#">Information</a>
          </li>
        </>
      )}
    </Wrapper>
  );
};

export default Navigation;
