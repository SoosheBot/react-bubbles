import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import './App.css';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>

        
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        </header>
      </div>
    </Router>
  );
}

export default App;
