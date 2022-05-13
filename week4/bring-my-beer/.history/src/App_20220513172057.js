import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import { LocationProvider } from './components/Context';
import SkeletonItem from './components/SkeletonItem';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <LocationProvider>
      <GlobalStyle />
      <Template>
        <Header />
        <List />
        <Search />
      </Template>
    </LocationProvider>
  );
}

export default App;