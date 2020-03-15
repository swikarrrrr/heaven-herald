import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Assign from "./components/assign";
import Confess from "./components/confess";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/assign" component={Assign} />
            <Route path="/confess" component={Confess} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
