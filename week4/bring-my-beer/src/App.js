import React, {useState, useRef, useEffect } from 'react';
import { flushSync } from "react-dom";
import { createGlobalStyle } from 'styled-components';
<<<<<<< HEAD
=======
import Template from './components/Template';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import { LocationProvider } from './components/Context';
import SkeletonItem from './components/SkeletonItem';

>>>>>>> 757fd2ac0b764144b026de651cece73307dd393f

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {

  return (
    <LocationProvider>
      <GlobalStyle />
<<<<<<< HEAD

    </>
=======
      <Template>
        <Header />
        <List />
        <Search />
      </Template>
    </LocationProvider>
>>>>>>> 757fd2ac0b764144b026de651cece73307dd393f
  );
}

export default App;