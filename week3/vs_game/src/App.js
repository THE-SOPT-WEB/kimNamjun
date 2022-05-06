import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Game from './components/Game'
import Home from './components/Main'
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Game}/>
    </>
  );
}

export default App;
