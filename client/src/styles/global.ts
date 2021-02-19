import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto Slab', serif;
  }
  
  button {
    cursor: pointer;
  }

  input, button  {
    font-family: 'Roboto Slab', serif;
  }
  * , *::before, *::after{
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;

  }
`;