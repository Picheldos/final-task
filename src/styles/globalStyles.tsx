import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  label {
    line-height: 19px;
    font-size: 16px;
    font-style: normal;
    
  }
  
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4{
    display: inline-block;
    padding: 5px;
    margin: auto;
  }
`;