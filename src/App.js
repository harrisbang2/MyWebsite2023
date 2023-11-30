import React from 'react';
import './App.css';
import Header from './header';
import Home from './home.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
    <div className="App">
    <Header />
      <Switch>
      <Route path="/checkout">
        <Checkout />
        </Route>
        <Route path="/">
        <Home /> 
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
