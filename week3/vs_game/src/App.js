import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Game from './components/Game'
import Main from './components/Main'
import Result from './components/Result'
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
        <Route exact path="/" component={Main}/>
        <Route exact path="/game" component={Game}/>
        <Route exact path="/result" component={Result}/> 
    </>
  );
}

export default App;
