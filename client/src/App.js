import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "./styles.scss";
import logo from "./logo.png";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <div className="App">
    <Router>
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="bubbles-logo" />
          <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Bubble Page</Link>
          </li>
        </ul>
        </header>

        <br />
        <Switch>
        <PrivateRoute path="/protected" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      
    </Router>

    </div>
  );
}

export default App;
