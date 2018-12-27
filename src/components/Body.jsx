import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

class Body extends Component {
  render() {
    return (
      <div className="App-intro">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Body;
