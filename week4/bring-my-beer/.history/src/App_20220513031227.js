import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import Skeleton from './components/skeleton';


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