import React, {useState, useRef, useEffect } from 'react';
import { flushSync } from "react-dom";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {

  return (
      <GlobalStyle >


      </GlobalStyle>
  );
}

export default App;