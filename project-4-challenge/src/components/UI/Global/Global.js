import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: sans-serif;
    background: #fff;
  }

  html {
    font-size: 92.5%;
  }

  main {
    margin-top: 6rem;
  } 
`;

export default GlobalStyles;
