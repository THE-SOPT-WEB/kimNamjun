import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * , *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
  body {
    font-family: "swaggerTTF", "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    transform: rotate(0.04deg);
  }
`;

export default GlobalStyle