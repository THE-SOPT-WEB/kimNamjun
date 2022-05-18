import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import Header from './components/Header';
import List from './components/List';
import Item from './components/Item';
import Search from './components/Search';
import SkeletonItem from './components/SkeletonItem';
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Header />
        <List />
        <Search />
      </Template>
    </>
  );
}

export default App;